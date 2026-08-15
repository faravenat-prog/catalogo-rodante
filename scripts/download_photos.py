#!/usr/bin/env python3
"""
Descarga todas las fotos del Catálogo Rodante a una carpeta local.
Ejecutar desde la raíz del proyecto en Termux:

    python3 scripts/download_photos.py

Las fotos quedan con el mismo nombre hash que usa la app.
Cambia DEST_DIR según donde quieras guardar.
"""

import os
import json
import ctypes
import urllib.request
import urllib.error
import time

# ← CAMBIA ESTA RUTA
DEST_DIR = os.path.expanduser('~/cr_photos')

DATA_FILE = os.path.join(os.path.dirname(__file__), 'progress_all.json')
DELAY = 0.25   # segundos entre peticiones (no saturar Wikimedia)
TIMEOUT = 20   # segundos timeout por imagen


# -----------------------------------------------------------------
# Hash idéntico al usado en CarCardScreen.tsx  →  urlToFilename()
# -----------------------------------------------------------------
def _imul32(a: int, b: int) -> int:
    return ctypes.c_int32(a * b).value


def url_to_filename(url: str) -> str:
    h = 5381
    for c in url:
        h = ctypes.c_int32(_imul32(h, 31) + ord(c)).value
    n = h & 0xFFFFFFFF
    if n == 0:
        return '0.jpg'
    digits = '0123456789abcdefghijklmnopqrstuvwxyz'
    result = ''
    while n:
        result = digits[n % 36] + result
        n //= 36
    return result + '.jpg'


# -----------------------------------------------------------------

def _download(url: str, dest: str) -> bool:
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'CatalogoRodante/1.0 (photo-cache)'},
    )
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            if r.status != 200:
                return False
            data = r.read()
        if len(data) < 500:
            return False
        with open(dest, 'wb') as f:
            f.write(data)
        return True
    except Exception:
        return False


def main():
    print(f'Carpeta destino : {DEST_DIR}')
    os.makedirs(DEST_DIR, exist_ok=True)

    print(f'Leyendo datos   : {DATA_FILE}')
    with open(DATA_FILE, encoding='utf-8') as f:
        data = json.load(f)

    # Recolectar todas las URLs únicas
    urls: dict[str, str] = {}  # url → filename
    for car in data.values():
        if not isinstance(car, dict):
            continue
        for url in car.values():
            if url and url.startswith('https://') and url not in urls:
                urls[url] = url_to_filename(url)

    total = len(urls)
    print(f'Fotos a revisar : {total}\n')

    ok = skip = fail = 0

    for i, (url, fname) in enumerate(urls.items(), 1):
        dest = os.path.join(DEST_DIR, fname)

        # Ya existe y tiene contenido → saltar
        if os.path.exists(dest) and os.path.getsize(dest) > 500:
            skip += 1
            if i % 200 == 0 or i == total:
                print(f'  [{i:>5}/{total}] {skip} guardadas  {ok} nuevas  {fail} errores')
            continue

        short = url[url.rfind('/') + 1:url.rfind('/') + 40]
        print(f'  [{i:>5}/{total}] {short:<40}', end='', flush=True)

        if _download(url, dest):
            ok += 1
            print(' ✓')
        else:
            fail += 1
            print(' ✗')

        time.sleep(DELAY)

    print(f'\n=== Listo ===')
    print(f'  Descargadas : {ok}')
    print(f'  Ya existían : {skip}')
    print(f'  Fallidas    : {fail}')
    print(f'  Total fotos : {ok + skip}')
    print(f'  Carpeta     : {DEST_DIR}')


if __name__ == '__main__':
    main()
