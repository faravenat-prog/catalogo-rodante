#!/usr/bin/env python3
"""
Integra los archivos de marcas (brands/*.json) con los datos existentes.

1. Extrae todos los IDs existentes de los archivos de país (japan.ts, etc.)
2. Para cada brand file: filtra los IDs que ya existen en los datos viejos
3. Genera los TypeScript de marcas solo con los NUEVOS autos (sin duplicados)
4. Genera un nuevo allCars.ts que importa de todo

Los autos existentes (con datos detallados) se mantienen en los archivos de país.
Los brand files solo aportan los autos ADICIONALES que no estaban.
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / 'src'
SCRIPTS = ROOT / 'scripts'

# ── Paso 1: extraer todos los IDs existentes de archivos de país ──────────────

def extract_ids_from_ts(path: Path) -> set[str]:
    text = path.read_text()
    return set(re.findall(r"car\('([^']+)'", text))

country_files = [
    SRC / 'data' / 'cars' / 'japan.ts',
    SRC / 'data' / 'cars' / 'germany.ts',
    SRC / 'data' / 'cars' / 'usa.ts',
    SRC / 'data' / 'cars' / 'france.ts',
    SRC / 'data' / 'cars' / 'italy.ts',
    SRC / 'data' / 'cars' / 'uk.ts',
    SRC / 'data' / 'cars' / 'korea.ts',
    SRC / 'data' / 'cars' / 'sweden.ts',
]

existing_ids: set[str] = set()
for cf in country_files:
    if cf.exists():
        ids = extract_ids_from_ts(cf)
        existing_ids.update(ids)

print(f"IDs existentes en archivos de país: {len(existing_ids)}")

# ── Paso 2: para cada brand JSON, filtrar duplicados y regenerar TS ───────────

def slugify(text: str) -> str:
    import unicodedata
    text = unicodedata.normalize('NFD', text)
    text = ''.join(c for c in text if unicodedata.category(c) != 'Mn')
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '_', text.strip())
    return text


def escape_ts(s: str) -> str:
    return s.replace('\\', '\\\\').replace("'", "\\'")


PAIS_MAP = {
    'Japón': 'Japón', 'Alemania': 'Alemania', 'EE.UU.': 'EE.UU.',
    'Italia': 'Italia', 'Francia': 'Francia', 'Reino Unido': 'Reino Unido',
    'Corea': 'Corea', 'Suecia': 'Suecia',
}

brands_dir = SCRIPTS / 'brands'
out_dir = SRC / 'data' / 'cars' / 'brands'
out_dir.mkdir(parents=True, exist_ok=True)

brand_exports: list[tuple[str, str]] = []  # (prefix_upper, filename_stem)
total_new = 0
total_skipped = 0

for json_file in sorted(brands_dir.glob('*.json')):
    prefix = json_file.stem
    cars = json.load(json_file.open())

    new_cars = [c for c in cars if c['id'] not in existing_ids]
    skipped = len(cars) - len(new_cars)
    total_new += len(new_cars)
    total_skipped += skipped

    if new_cars:
        print(f"  {prefix:15} {len(new_cars):4} nuevos, {skipped:3} skipped (ya existían)")
    else:
        print(f"  {prefix:15} — todos ya existen, skipped")

    # determinar país del primer auto
    pais = new_cars[0].get('pais', 'Japón') if new_cars else 'Desconocido'

    # generar TypeScript
    const_name = prefix.upper().replace('-', '_')
    lines = [
        "import { car } from '../_helper';",
        "",
        f"export const {const_name} = [",
        "",
    ]

    for c in new_cars:
        car_id   = c['id']
        nombre   = escape_ts(c['nombre'])
        pais_ts  = escape_ts(pais)
        ad       = c['anio_desde']
        ah       = c['anio_hasta']
        segs     = c.get('segmentos', [])
        segs_str = ', '.join(f"'{escape_ts(s)}'" for s in segs if s)

        lines.append(
            f"  car('{car_id}', '{nombre}', ['{pais_ts}'], {ad}, {ah},\n"
            f"    [{segs_str}],\n"
            f"    '',\n"
            f"    {{}}),\n"
        )

    lines.append("];")
    ts_content = '\n'.join(lines)

    out_file = out_dir / f"{prefix}.ts"
    out_file.write_text(ts_content)

    if new_cars:
        brand_exports.append((const_name, prefix))

print(f"\n✅ Total nuevos: {total_new} | Skipped (ya existían): {total_skipped}")

# ── Paso 3: generar brands/index.ts ──────────────────────────────────────────

index_lines = []
for const_name, stem in brand_exports:
    index_lines.append(f"export {{ {const_name} }} from './{stem}';")

index_file = out_dir / 'index.ts'
index_file.write_text('\n'.join(index_lines) + '\n')
print(f"📁 brands/index.ts con {len(brand_exports)} exportaciones")

# ── Paso 4: generar nuevo allCars.ts ─────────────────────────────────────────

all_cars_lines = [
    "// Archivos de país: datos detallados existentes",
    "import { JAPAN } from './cars/japan';",
    "import { GERMANY } from './cars/germany';",
    "import { USA } from './cars/usa';",
    "import { FRANCE } from './cars/france';",
    "import { ITALY } from './cars/italy';",
    "import { UK } from './cars/uk';",
    "import { KOREA } from './cars/korea';",
    "import { SWEDEN } from './cars/sweden';",
    "",
    "// Archivos de marca: autos adicionales scrapeados de Wikipedia",
]

for const_name, stem in brand_exports:
    all_cars_lines.append(f"import {{ {const_name} }} from './cars/brands/{stem}';")

all_cars_lines += [
    "",
    "export const ALL_CARS = [",
    "  // Datos detallados (prioridad)",
    "  ...JAPAN,",
    "  ...GERMANY,",
    "  ...USA,",
    "  ...FRANCE,",
    "  ...ITALY,",
    "  ...UK,",
    "  ...KOREA,",
    "  ...SWEDEN,",
    "  // Autos adicionales por marca (datos mínimos, rellenar con el tiempo)",
]
for const_name, _ in brand_exports:
    all_cars_lines.append(f"  ...{const_name},")

all_cars_lines += [
    "];",
    "",
    "export { JAPAN, GERMANY, USA, FRANCE, ITALY, UK, KOREA, SWEDEN };",
]

all_cars_file = SRC / 'data' / 'allCars.ts'
all_cars_file.write_text('\n'.join(all_cars_lines) + '\n')
print(f"📁 allCars.ts actualizado con {len(brand_exports)} marcas adicionales")
print(f"\n🎉 Total estimado de autos: ~{len(existing_ids) + total_new}")
