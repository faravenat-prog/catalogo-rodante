#!/usr/bin/env python3
"""
Busca fotos en Wikimedia Commons para todos los autos sin fotos.
Usa cars_list_all.json como fuente y guarda en progress_all.json.
Puede interrumpirse y retomarse — guarda cada auto al procesarlo.

Uso: python3 auto_photos_all.py [--start N] [--limit N]
"""
import json, urllib.request, urllib.parse, time, sys, os, argparse
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
CARS_FILE     = SCRIPT_DIR / 'cars_list_all.json'
PROGRESS_FILE = SCRIPT_DIR / 'progress_all.json'
MERGED_FILE   = SCRIPT_DIR / 'progress.json'  # resultado final combinado

HEADERS = {'User-Agent': 'CatalogoRodante/1.0 (faravenat@gmail.com)'}
SLOTS_EXT = ['exterior_frontal', 'exterior_lateral', 'exterior_trasero']
SLOTS_INT = ['interior_tablero', 'interior_asientos']


def wikimedia_search(query: str, limit: int = 6) -> list[str]:
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


def fetch_photos(nombre: str, anio: int) -> dict:
    base = f"{nombre} {anio}".strip()

    # búsquedas exteriores
    ext_urls = wikimedia_search(f"{nombre} automobile", limit=6)
    time.sleep(0.3)
    if len(ext_urls) < 3:
        ext_urls += wikimedia_search(f"{base} car", limit=4)
        time.sleep(0.3)

    # búsqueda interiores
    int_urls = wikimedia_search(f"{nombre} interior", limit=4)
    time.sleep(0.3)

    result = {}
    ext_used = list(dict.fromkeys(ext_urls))  # deduplica
    int_used = list(dict.fromkeys(int_urls))

    for i, slot in enumerate(SLOTS_EXT):
        result[slot] = ext_used[i] if i < len(ext_used) else ''
    for i, slot in enumerate(SLOTS_INT):
        result[slot] = int_used[i] if i < len(int_used) else ''

    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--start', type=int, default=0, help='Índice de inicio')
    parser.add_argument('--limit', type=int, default=0, help='Máximo de autos a procesar (0=todos)')
    args = parser.parse_args()

    cars = json.loads(CARS_FILE.read_text())
    print(f'Total a procesar: {len(cars):,} autos', flush=True)

    # cargar progreso existente
    progress: dict = {}
    if PROGRESS_FILE.exists():
        progress = json.loads(PROGRESS_FILE.read_text())
        print(f'Progreso cargado: {len(progress):,} ya procesados', flush=True)

    # filtrar los ya procesados
    pending = [c for c in cars if c['id'] not in progress]
    print(f'Pendientes: {len(pending):,}', flush=True)

    if args.start:
        pending = pending[args.start:]
    if args.limit:
        pending = pending[:args.limit]

    print(f'A procesar en esta sesión: {len(pending):,}\n', flush=True)

    for i, car in enumerate(pending):
        car_id = car['id']
        nombre = car['nombre']
        anio   = car.get('anio') or 2000

        pct = (len(progress) / len(cars)) * 100
        print(f'[{i+1}/{len(pending)}] ({pct:.1f}%) {nombre} ({anio})', flush=True)

        photos = fetch_photos(nombre, anio)
        filled = sum(1 for v in photos.values() if v)
        print(f'  → {filled}/5 fotos', flush=True)

        progress[car_id] = photos

        # guardar cada 10 autos para no perder progreso
        if (i + 1) % 10 == 0:
            PROGRESS_FILE.write_text(json.dumps(progress, ensure_ascii=False, indent=2))
            print(f'  [saved progress: {len(progress)} autos]', flush=True)

    # guardar al final
    PROGRESS_FILE.write_text(json.dumps(progress, ensure_ascii=False, indent=2))

    # merge con progress.json original
    original = {}
    if MERGED_FILE.exists():
        original = json.loads(MERGED_FILE.read_text())

    merged = {**progress, **original}  # original tiene prioridad (ya tienen fotos buenas)
    MERGED_FILE.write_text(json.dumps(merged, ensure_ascii=False, indent=2))

    total_with = sum(1 for v in merged.values() if any(v.values()))
    print(f'\n✅ Done. {len(progress):,} procesados, {total_with:,} con al menos 1 foto')
    print(f'   progress_all.json: {len(progress):,} autos')
    print(f'   progress.json (merged): {len(merged):,} autos')


if __name__ == '__main__':
    main()
