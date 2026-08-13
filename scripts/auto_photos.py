#!/usr/bin/env python3
"""
Busca fotos en Wikimedia Commons para cada auto del catálogo.
Genera photos_patch.json con las URLs encontradas.
Guarda progreso en progress.json para poder reanudar si se interrumpe.
"""
import json
import urllib.request
import urllib.parse
import time
import sys
import os

CARS_FILE  = os.path.join(os.path.dirname(__file__), 'cars_list.json')
PROGRESS_FILE = os.path.join(os.path.dirname(__file__), 'progress.json')
OUTPUT_FILE   = os.path.join(os.path.dirname(__file__), 'photos_patch.json')

SLOTS_EXT = ['exterior_frontal', 'exterior_lateral', 'exterior_trasero']
SLOTS_INT = ['interior_tablero', 'interior_asientos']

HEADERS = {'User-Agent': 'CatalogoRodante/1.0 (faravenat@gmail.com)'}

def wikimedia_search(query, limit=6):
    params = urllib.parse.urlencode({
        'action': 'query',
        'generator': 'search',
        'gsrsearch': query,
        'gsrnamespace': '6',
        'prop': 'imageinfo',
        'iiprop': 'url|mime',
        'format': 'json',
        'gsrlimit': str(limit),
    })
    url = f'https://commons.wikimedia.org/w/api.php?{params}'
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode())
        pages = data.get('query', {}).get('pages', {})
        results = []
        for page in pages.values():
            ii = page.get('imageinfo', [{}])[0]
            mime = ii.get('mime', '')
            img_url = ii.get('url', '')
            if img_url and mime.startswith('image/') and 'svg' not in mime and 'gif' not in mime:
                results.append(img_url)
        return results
    except Exception as e:
        print(f'  [WARN] {e}', flush=True)
        return []

def fetch_car_photos(car):
    nombre = car['nombre']
    anio   = car.get('anio') or ''

    base = f"{nombre} {anio}".strip()

    ext_results = wikimedia_search(f"{base} automobile", limit=6)
    time.sleep(0.25)
    int_results = wikimedia_search(f"{base} interior", limit=5)
    time.sleep(0.25)

    photos = {}
    for i, slot in enumerate(SLOTS_EXT):
        if i < len(ext_results):
            photos[slot] = ext_results[i]
    for i, slot in enumerate(SLOTS_INT):
        if i < len(int_results):
            photos[slot] = int_results[i]
    return photos

def main():
    with open(CARS_FILE) as f:
        cars = json.load(f)

    # Cargar progreso existente
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE) as f:
            progress = json.load(f)
        print(f'Reanudando desde progreso guardado ({len(progress)} autos ya procesados)', flush=True)
    else:
        progress = {}

    total = len(cars)
    done  = 0

    for i, car in enumerate(cars):
        car_id = car['id']
        done += 1

        if car_id in progress:
            print(f'[{i+1}/{total}] SKIP {car_id}', flush=True)
            continue

        nombre = car['nombre']
        print(f'[{i+1}/{total}] {nombre}', end=' ', flush=True)

        photos = fetch_car_photos(car)

        count = len(photos)
        print(f'→ {count}/5 fotos', flush=True)

        progress[car_id] = photos

        # Guardar progreso después de cada auto
        with open(PROGRESS_FILE, 'w') as f:
            json.dump(progress, f)

    # Generar output final (solo autos que tienen al menos 1 foto)
    output = {k: v for k, v in progress.items() if v}
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    filled  = sum(1 for v in output.values() if len(v) == 5)
    partial = sum(1 for v in output.values() if 0 < len(v) < 5)
    empty   = total - len(output)

    print(f'\n=== Listo ===')
    print(f'  Completos (5/5): {filled}')
    print(f'  Parciales:       {partial}')
    print(f'  Sin fotos:       {empty}')
    print(f'  Output:          {OUTPUT_FILE}')

if __name__ == '__main__':
    main()
