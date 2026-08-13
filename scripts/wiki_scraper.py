#!/usr/bin/env python3
"""
Scraper de Wikipedia para "List of X vehicles".
Genera entradas TypeScript mínimas compatibles con el helper car().

Uso:
  python3 wiki_scraper.py toyota
  python3 wiki_scraper.py "volkswagen" --pais Alemania
  python3 wiki_scraper.py --list   # muestra marcas disponibles

Salida: scripts/brands/<marca>.ts
"""

import sys
import re
import json
import time
import argparse
import unicodedata
from pathlib import Path
import requests
from bs4 import BeautifulSoup

# ── Configuración de marcas ────────────────────────────────────────────────────
BRANDS = {
    # Japonesas
    'toyota':      {'wiki': 'List_of_Toyota_vehicles',      'pais': 'Japón',        'prefix': 'toyota'},
    'honda':       {'wiki': 'List_of_Honda_vehicles',       'pais': 'Japón',        'prefix': 'honda'},
    'nissan':      {'wiki': 'List_of_Nissan_vehicles',      'pais': 'Japón',        'prefix': 'nissan'},
    'mazda':       {'wiki': 'List_of_Mazda_vehicles',       'pais': 'Japón',        'prefix': 'mazda'},
    'subaru':      {'wiki': 'List_of_Subaru_vehicles',      'pais': 'Japón',        'prefix': 'subaru'},
    'mitsubishi':  {'wiki': 'List_of_Mitsubishi_vehicles',  'pais': 'Japón',        'prefix': 'mitsubishi'},
    'suzuki':      {'wiki': 'List_of_Suzuki_automobiles',   'pais': 'Japón',        'prefix': 'suzuki'},
    'daihatsu':    {'wiki': 'List_of_Daihatsu_vehicles',    'pais': 'Japón',        'prefix': 'daihatsu'},
    'lexus':       {'wiki': 'List_of_Lexus_vehicles',       'pais': 'Japón',        'prefix': 'lexus'},
    'isuzu':       {'wiki': 'List_of_Isuzu_vehicles',       'pais': 'Japón',        'prefix': 'isuzu'},
    'acura':       {'wiki': 'List_of_Acura_vehicles',       'pais': 'Japón',        'prefix': 'acura'},
    'infiniti':    {'wiki': 'List_of_Infiniti_vehicles',    'pais': 'Japón',        'prefix': 'infiniti'},
    'datsun':      {'wiki': 'Datsun',                       'pais': 'Japón',        'prefix': 'datsun'},
    # Alemanas
    'volkswagen':  {'wiki': 'List_of_Volkswagen_vehicles',   'pais': 'Alemania',     'prefix': 'vw'},
    'bmw':         {'wiki': 'List_of_BMW_vehicles',         'pais': 'Alemania',     'prefix': 'bmw'},
    'mercedes':    {'wiki': 'Mercedes-Benz',                'pais': 'Alemania',     'prefix': 'mercedes'},
    'audi':        {'wiki': 'Audi',                         'pais': 'Alemania',     'prefix': 'audi'},
    'porsche':     {'wiki': 'Porsche',                      'pais': 'Alemania',     'prefix': 'porsche'},
    'opel':        {'wiki': 'List_of_Opel_vehicles',        'pais': 'Alemania',     'prefix': 'opel'},
    # Americanas
    'ford':        {'wiki': 'List_of_Ford_vehicles',        'pais': 'EE.UU.',       'prefix': 'ford'},
    'chevrolet':   {'wiki': 'List_of_Chevrolet_vehicles',   'pais': 'EE.UU.',       'prefix': 'chevrolet'},
    'dodge':       {'wiki': 'List_of_Dodge_vehicles',       'pais': 'EE.UU.',       'prefix': 'dodge'},
    'jeep':        {'wiki': 'Jeep',                         'pais': 'EE.UU.',       'prefix': 'jeep'},
    'cadillac':    {'wiki': 'List_of_Cadillac_vehicles',    'pais': 'EE.UU.',       'prefix': 'cadillac'},
    'buick':       {'wiki': 'List_of_Buick_vehicles',       'pais': 'EE.UU.',       'prefix': 'buick'},
    'lincoln':     {'wiki': 'List_of_Lincoln_vehicles',     'pais': 'EE.UU.',       'prefix': 'lincoln'},
    'pontiac':     {'wiki': 'List_of_Pontiac_vehicles',     'pais': 'EE.UU.',       'prefix': 'pontiac'},
    # Italianas
    'fiat':        {'wiki': 'List_of_Fiat_vehicles',         'pais': 'Italia',       'prefix': 'fiat'},
    'ferrari':     {'wiki': 'List_of_Ferrari_road_cars',    'pais': 'Italia',       'prefix': 'ferrari'},
    'lamborghini': {'wiki': 'List_of_Lamborghini_automobiles','pais': 'Italia',     'prefix': 'lamborghini'},
    'alfa':        {'wiki': 'Alfa_Romeo_Models',             'pais': 'Italia',       'prefix': 'alfa'},
    'maserati':    {'wiki': 'List_of_Maserati_vehicles',    'pais': 'Italia',       'prefix': 'maserati'},
    'lancia':      {'wiki': 'List_of_Lancia_automobiles',   'pais': 'Italia',       'prefix': 'lancia'},
    # Francesas
    'peugeot':     {'wiki': 'List_of_Peugeot_vehicles',     'pais': 'Francia',      'prefix': 'peugeot'},
    'renault':     {'wiki': 'List_of_Renault_vehicles',     'pais': 'Francia',      'prefix': 'renault'},
    'citroen':     {'wiki': 'List_of_Citroën_vehicles',     'pais': 'Francia',      'prefix': 'citroen'},
    # Británicas
    'landrover':   {'wiki': 'Land_Rover',                   'pais': 'Reino Unido',  'prefix': 'landrover'},
    'jaguar':      {'wiki': 'Jaguar_Cars',                  'pais': 'Reino Unido',  'prefix': 'jaguar'},
    'bentley':     {'wiki': 'List_of_Bentley_vehicles',     'pais': 'Reino Unido',  'prefix': 'bentley'},
    'rolls':       {'wiki': 'Rolls-Royce_Limited',          'pais': 'Reino Unido',  'prefix': 'rolls'},
    'aston':       {'wiki': 'List_of_Aston_Martin_vehicles','pais': 'Reino Unido',  'prefix': 'aston'},
    'mini':        {'wiki': 'Mini_(marque)',                 'pais': 'Reino Unido',  'prefix': 'mini'},
    # Coreanas
    'hyundai':     {'wiki': 'List_of_Hyundai_vehicles',     'pais': 'Corea',        'prefix': 'hyundai'},
    'kia':         {'wiki': 'List_of_Kia_vehicles',         'pais': 'Corea',        'prefix': 'kia'},
    # Suecas
    'volvo':       {'wiki': 'Volvo_Cars',                   'pais': 'Suecia',       'prefix': 'volvo'},
    'saab':        {'wiki': 'Saab_Automobile',              'pais': 'Suecia',       'prefix': 'saab'},
}

PAIS_TO_COUNTRY = {
    'Japón': 'Japón', 'Alemania': 'Alemania', 'EE.UU.': 'EE.UU.',
    'Italia': 'Italia', 'Francia': 'Francia', 'Reino Unido': 'Reino Unido',
    'Corea': 'Corea', 'Suecia': 'Suecia',
}

HEADERS = {'User-Agent': 'CatalogoRodanteBot/1.0 (faravenat@gmail.com)'}


# ── Utilidades ─────────────────────────────────────────────────────────────────

def slugify(text: str) -> str:
    text = unicodedata.normalize('NFD', text)
    text = ''.join(c for c in text if unicodedata.category(c) != 'Mn')
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '_', text.strip())
    return text


def make_id(prefix: str, model_name: str) -> str:
    clean = model_name
    # quitar el nombre de la marca si ya está al inicio
    brand_words = prefix.split('_')
    for bw in brand_words:
        clean = re.sub(rf'^\s*{re.escape(bw)}\s*', '', clean, flags=re.IGNORECASE)
    slug = slugify(clean)
    slug = re.sub(r'_+', '_', slug).strip('_')
    return f"{prefix}_{slug}" if slug else prefix


def parse_years(text: str):
    """Extrae (anio_desde, anio_hasta) de texto como '1983–2001', '1983–present', etc."""
    text = text.replace('–', '-').replace('—', '-').replace('present', '2025').replace('Present','2025')
    m = re.search(r'(\d{4})\s*[-–—]\s*(\d{4})', text)
    if m:
        return int(m.group(1)), int(m.group(2))
    m = re.search(r'(\d{4})', text)
    if m:
        y = int(m.group(1))
        return y, y
    return None, None


def fetch_wiki(page: str) -> BeautifulSoup:
    url = f"https://en.wikipedia.org/wiki/{page}"
    print(f"  Fetching: {url}")
    r = requests.get(url, headers=HEADERS, timeout=30)
    r.raise_for_status()
    return BeautifulSoup(r.text, 'html.parser')


# ── Parsers ────────────────────────────────────────────────────────────────────

JUNK_NAMES = {'name(s)', 'model', 'name', 'vehicle', 'image', 'notes', 'comment', 'type', 'see also'}

def clean_name(text: str) -> str:
    text = re.sub(r'\[.*?\]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def is_junk(name: str) -> bool:
    low = name.lower()
    if low in JUNK_NAMES:
        return True
    if len(name) < 2:
        return True
    if not any(c.isalpha() for c in name):
        return True
    # encabezados de tabla que se cuelan
    if re.match(r'^(body style|introduced|discontinued|production|years?|period)$', low):
        return True
    return False


def detect_headers(rows) -> tuple[int, int, int, int]:
    """
    Detecta columnas name, intro, disc, seg buscando en las primeras 2 filas.
    Devuelve (name_col, intro_col, disc_col, seg_col).
    """
    def find_col(headers, *keywords):
        for i, h in enumerate(headers):
            if any(k in h for k in keywords):
                return i
        return None

    for i in range(min(2, len(rows))):
        cells = rows[i].find_all(['th', 'td'])
        headers = [clean_name(c.get_text(separator=' ')).lower() for c in cells]
        name_col  = find_col(headers, 'name', 'model', 'vehicle')
        intro_col = find_col(headers, 'introduced', 'introduction', 'cal.year', 'year produced', 'from', 'year')
        disc_col  = find_col(headers, 'discontinued', 'until', 'to', 'last')
        seg_col   = find_col(headers, 'body style', 'body type', 'type', 'class', 'segment')
        if name_col is not None:
            return name_col, intro_col, disc_col, seg_col

    return 0, None, None, None


def is_section_row(cells) -> str | None:
    """Devuelve el texto de sección si la fila es un separador de sección (1-2 celdas sin años)."""
    if not cells:
        return None
    text_cells = [c for c in cells if c.get_text(strip=True)]
    if len(text_cells) == 1:
        t = clean_name(text_cells[0].get_text(separator=' '))
        if t and not re.search(r'\d{4}', t) and len(t) < 60:
            return t
    return None


def parse_table(table, prefix: str, brand_name: str, seen_ids: set) -> list[dict]:
    """Parsea una wikitable y devuelve lista de dicts de autos."""
    cars = []
    rows = table.find_all('tr')
    if not rows:
        return cars

    name_col, intro_col, disc_col, seg_col = detect_headers(rows)

    # saltar filas de encabezado (th-only)
    data_start = 0
    for i, row in enumerate(rows):
        cells = row.find_all(['th', 'td'])
        if cells and all(c.name == 'th' for c in cells):
            data_start = i + 1
        else:
            break

    body_style_carry = ''

    for row in rows[data_start:]:
        cells = row.find_all(['td', 'th'])
        if not cells:
            continue

        # detectar fila separadora de sección
        sec = is_section_row(cells)
        if sec and not is_junk(sec):
            body_style_carry = sec
            continue

        # segmento
        seg_text = body_style_carry
        if seg_col is not None and seg_col < len(cells):
            seg_raw = clean_name(cells[seg_col].get_text(separator=' '))
            if seg_raw and not is_junk(seg_raw):
                seg_text = seg_raw
                body_style_carry = seg_raw

        if name_col >= len(cells):
            continue

        raw_name = clean_name(cells[name_col].get_text(separator=' '))
        if not raw_name or is_junk(raw_name):
            continue

        # si la "name" cell está vacía pero hay contenido desplazado (doble header),
        # buscar en las siguientes celdas un texto plausible
        if not raw_name or raw_name in ('', '—', '-'):
            for cell in cells[name_col+1:name_col+4]:
                candidate = clean_name(cell.get_text(separator=' '))
                if candidate and not is_junk(candidate) and not re.match(r'^\d{4}', candidate):
                    raw_name = candidate
                    break

        if not raw_name or is_junk(raw_name):
            continue

        # nombre completo
        if not raw_name.lower().startswith(brand_name.lower()):
            full_name = f"{brand_name.title()} {raw_name}"
        else:
            full_name = raw_name

        # años
        anio_desde, anio_hasta = None, None

        if intro_col is not None and intro_col < len(cells):
            y, _ = parse_years(cells[intro_col].get_text(strip=True))
            if y:
                anio_desde = y

        if disc_col is not None and disc_col < len(cells):
            disc_text = cells[disc_col].get_text(strip=True).lower()
            if disc_text in ('', 'present', '—', '-', 'n/a', 'current', 'production', 'ongoing'):
                anio_hasta = 2025
            else:
                _, y = parse_years(cells[disc_col].get_text(strip=True))
                if y:
                    anio_hasta = y

        # fallback años: buscar en cualquier celda numérica
        if anio_desde is None:
            for cell in cells:
                ct = cell.get_text(strip=True)
                if re.match(r'^\d{4}', ct):
                    a, b = parse_years(ct)
                    if a and 1885 <= a <= 2030:
                        anio_desde = a
                        if b and b != a:
                            anio_hasta = b
                        break

        if anio_desde and not anio_hasta:
            anio_hasta = 2025

        # evitar años absurdos
        if anio_desde and (anio_desde < 1885 or anio_desde > 2030):
            anio_desde = None

        base_id = make_id(prefix, raw_name)
        car_id = base_id
        n = 2
        while car_id in seen_ids:
            car_id = f"{base_id}_{n}"
            n += 1
        seen_ids.add(car_id)

        cars.append({
            'id': car_id,
            'nombre': full_name,
            'anio_desde': anio_desde or 1970,
            'anio_hasta': anio_hasta or 2025,
            'segmentos': [seg_text] if seg_text else [],
        })

    return cars


def parse_generic_list(soup: BeautifulSoup, prefix: str, brand_name: str) -> list[dict]:
    cars = []
    seen_ids: set = set()

    tables = soup.find_all('table', class_=re.compile(r'wikitable'))
    for table in tables:
        table_cars = parse_table(table, prefix, brand_name, seen_ids)
        cars.extend(table_cars)

    # fallback: listas <li> si no hay tablas
    if not cars:
        for li in soup.find_all('li'):
            text = clean_name(li.get_text(separator=' '))
            if not text or len(text) > 120:
                continue
            years_match = re.search(r'\((\d{4}[^)]{0,20})\)', text)
            model_part = re.sub(r'\(.*?\)', '', text).strip()
            if not model_part or is_junk(model_part):
                continue

            if not model_part.lower().startswith(brand_name.lower()):
                full_name = f"{brand_name.title()} {model_part}"
            else:
                full_name = model_part

            year_text = years_match.group(1) if years_match else ''
            anio_desde, anio_hasta = parse_years(year_text)

            car_id = make_id(prefix, model_part)
            if car_id in seen_ids:
                continue
            seen_ids.add(car_id)

            cars.append({
                'id': car_id,
                'nombre': full_name,
                'anio_desde': anio_desde or 1970,
                'anio_hasta': anio_hasta or 2025,
                'segmentos': [],
            })

    return cars


# ── Generador TypeScript ───────────────────────────────────────────────────────

def escape_ts(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")


def gen_typescript(cars: list[dict], prefix: str, pais: str, brand_name: str, existing_photos: dict) -> str:
    lines = [
        "import { car } from '../_helper';",
        "",
        f"export const {prefix.upper().replace('-','_')} = [",
        "",
    ]

    for c in cars:
        car_id = c['id']
        nombre = escape_ts(c['nombre'])
        anio_desde = c['anio_desde']
        anio_hasta = c['anio_hasta']
        segs = c['segmentos']
        segs_str = ', '.join(f"'{escape_ts(s)}'" for s in segs) if segs else ''

        lines.append(
            f"  car('{car_id}', '{nombre}', ['{pais}'], {anio_desde}, {anio_hasta},\n"
            f"    [{segs_str}],\n"
            f"    '',\n"
            f"    {{}}),\n"
        )

    lines.append("];")
    return '\n'.join(lines)


# ── Main ───────────────────────────────────────────────────────────────────────

def load_existing_photos() -> dict:
    p = Path(__file__).parent / 'progress.json'
    if p.exists():
        return json.loads(p.read_text())
    return {}


def scrape_brand(brand_key: str):
    if brand_key not in BRANDS:
        print(f"Marca desconocida: {brand_key}")
        print("Disponibles:", ', '.join(sorted(BRANDS.keys())))
        return

    cfg = BRANDS[brand_key]
    wiki_page = cfg['wiki']
    pais = cfg['pais']
    prefix = cfg['prefix']
    brand_name = brand_key.replace('_', ' ').title()

    print(f"\n{'='*60}")
    print(f"  Scraping: {brand_name} ({pais})")
    print(f"{'='*60}")

    soup = fetch_wiki(wiki_page)
    cars = parse_generic_list(soup, prefix, brand_name)

    if not cars:
        print(f"  ⚠️  No se encontraron autos. Revisar página manualmente.")
        return

    print(f"  ✅ {len(cars)} modelos encontrados")

    existing_photos = load_existing_photos()

    out_dir = Path(__file__).parent.parent / 'src' / 'data' / 'cars' / 'brands'
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / f"{prefix}.ts"

    ts_content = gen_typescript(cars, prefix, pais, brand_name, existing_photos)
    out_file.write_text(ts_content)
    print(f"  📁 Generado: {out_file}")

    # también guardar JSON de referencia
    json_file = Path(__file__).parent / 'brands' / f"{prefix}.json"
    json_file.parent.mkdir(parents=True, exist_ok=True)
    json_file.write_text(json.dumps(cars, ensure_ascii=False, indent=2))
    print(f"  📋 JSON ref: {json_file}")

    return cars


def scrape_all():
    for brand_key in BRANDS:
        try:
            scrape_brand(brand_key)
            time.sleep(1)  # respetar el rate limit de Wikipedia
        except Exception as e:
            print(f"  ❌ Error en {brand_key}: {e}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Scraper de autos desde Wikipedia')
    parser.add_argument('brand', nargs='?', help='Clave de marca (ej: toyota, volkswagen)')
    parser.add_argument('--all', action='store_true', help='Scrapear todas las marcas')
    parser.add_argument('--list', action='store_true', help='Listar marcas disponibles')
    args = parser.parse_args()

    if args.list:
        print("\nMarcas disponibles:")
        for k, v in sorted(BRANDS.items()):
            print(f"  {k:15} → {v['wiki']}")
    elif args.all:
        scrape_all()
    elif args.brand:
        scrape_brand(args.brand.lower())
    else:
        parser.print_help()
