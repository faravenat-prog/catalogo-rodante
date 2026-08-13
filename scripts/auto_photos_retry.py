#!/usr/bin/env python3
"""
Retry: usa el ID del auto (ej: toyota_supra_a70 → "Toyota Supra A70")
para autos que quedaron con 0 fotos o incompletos.
Actualiza progress.json y regenera photos_patch.json.
"""
import json, urllib.request, urllib.parse, time, os, re

CARS_FILE     = os.path.join(os.path.dirname(__file__), 'cars_list.json')
PROGRESS_FILE = os.path.join(os.path.dirname(__file__), 'progress.json')
OUTPUT_FILE   = os.path.join(os.path.dirname(__file__), 'photos_patch.json')

SLOTS_EXT = ['exterior_frontal', 'exterior_lateral', 'exterior_trasero']
SLOTS_INT = ['interior_tablero', 'interior_asientos']
HEADERS   = {'User-Agent': 'CatalogoRodante/1.0 (faravenat@gmail.com)'}

def id_to_query(car_id):
    """toyota_supra_a70 → 'Toyota Supra A70'"""
    return ' '.join(w.upper() if len(w) <= 3 else w.capitalize()
                    for w in car_id.split('_'))

def clean_nombre(nombre):
    """Quita contenido en paréntesis y términos decorativos en español"""
    s = re.sub(r'\(.*?\)', '', nombre)          # quita (A70), (1a gen), etc.
    s = re.sub(r'\bMk[IVX]+\b', '', s)         # MkIII, MkIV
    s = re.sub(r'\b\d+a gen\b', '', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def wikimedia_search(query, limit=6):
    params = urllib.parse.urlencode({
        'action': 'query', 'generator': 'search',
        'gsrsearch': query, 'gsrnamespace': '6',
        'prop': 'imageinfo', 'iiprop': 'url|mime',
        'format': 'json', 'gsrlimit': str(limit),
    })
    url = f'https://commons.wikimedia.org/w/api.php?{params}'
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
        pages = data.get('query', {}).get('pages', {})
        out = []
        for p in pages.values():
            ii = p.get('imageinfo', [{}])[0]
            mime = ii.get('mime', '')
            u    = ii.get('url', '')
            if u and mime.startswith('image/') and 'svg' not in mime and 'gif' not in mime:
                out.append(u)
        return out
    except Exception as e:
        print(f'  [WARN] {e}', flush=True)
        return []

def fetch_photos_multi(car):
    """Intenta varias queries y combina resultados."""
    nombre = car['nombre']
    anio   = car.get('anio') or ''
    car_id = car['id']

    q_id    = id_to_query(car_id)
    q_clean = clean_nombre(nombre)

    # Queries para exterior: de más específico a más general
    ext_queries = [
        f"{q_id} {anio}".strip(),
        q_id,
        f"{q_clean} {anio}".strip(),
        q_clean,
    ]
    # Queries para interior
    int_queries = [
        f"{q_id} interior",
        f"{q_id} dashboard",
        f"{q_clean} interior",
        f"{q_clean} dashboard",
    ]

    # Buscar exterior (necesitamos 3)
    ext_urls = []
    for q in ext_queries:
        if len(ext_urls) >= 3:
            break
        results = wikimedia_search(q + ' automobile', limit=6)
        time.sleep(0.2)
        for u in results:
            if u not in ext_urls:
                ext_urls.append(u)
            if len(ext_urls) >= 3:
                break

    # Buscar interior (necesitamos 2)
    int_urls = []
    for q in int_queries:
        if len(int_urls) >= 2:
            break
        results = wikimedia_search(q, limit=5)
        time.sleep(0.2)
        for u in results:
            if u not in int_urls and u not in ext_urls:
                int_urls.append(u)
            if len(int_urls) >= 2:
                break

    photos = {}
    for i, slot in enumerate(SLOTS_EXT):
        if i < len(ext_urls):
            photos[slot] = ext_urls[i]
    for i, slot in enumerate(SLOTS_INT):
        if i < len(int_urls):
            photos[slot] = int_urls[i]
    return photos

def main():
    with open(CARS_FILE) as f:
        cars = json.load(f)
    with open(PROGRESS_FILE) as f:
        progress = json.load(f)

    # Determinar qué autos necesitan retry
    to_retry = []
    for car in cars:
        cid = car['id']
        existing = progress.get(cid, {})
        missing_slots = [s for s in SLOTS_EXT + SLOTS_INT if s not in existing]
        if missing_slots:
            to_retry.append((car, existing, missing_slots))

    print(f'Autos para retry: {len(to_retry)} (de {len(cars)} total)', flush=True)

    for idx, (car, existing_photos, missing) in enumerate(to_retry):
        cid = car['id']
        print(f'[{idx+1}/{len(to_retry)}] {car["nombre"]} — faltan: {", ".join(missing)}', end=' ', flush=True)

        new_photos = fetch_photos_multi(car)

        # Mezclar: no pisar lo que ya existe, solo rellenar vacíos
        merged = dict(existing_photos)
        for slot in missing:
            if slot in new_photos:
                merged[slot] = new_photos[slot]

        count = len(merged)
        gained = count - len(existing_photos)
        print(f'→ {count}/5 (+{gained})', flush=True)

        progress[cid] = merged
        with open(PROGRESS_FILE, 'w') as f:
            json.dump(progress, f)

    # Exportar output final
    output = {k: v for k, v in progress.items() if v}
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    full    = sum(1 for v in output.values() if len(v) == 5)
    partial = sum(1 for v in output.values() if 0 < len(v) < 5)
    empty   = len(cars) - len(output)
    print(f'\n=== Resultado final ===')
    print(f'  Completos (5/5): {full}')
    print(f'  Parciales:       {partial}')
    print(f'  Sin fotos:       {empty}')
    print(f'  Output:          {OUTPUT_FILE}')

if __name__ == '__main__':
    main()
