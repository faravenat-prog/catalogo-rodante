#!/usr/bin/env python3
"""
Aplica URLs de fotos de progress.json a los archivos TypeScript de país.
Convierte car() → carP() donde hay fotos disponibles.
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / 'src'
SCRIPTS = Path(__file__).parent

SLOTS = ['exterior_frontal', 'exterior_lateral', 'exterior_trasero', 'interior_tablero', 'interior_asientos']

photos = json.load((SCRIPTS / 'progress.json').open())
print(f"Fotos en progress.json: {len(photos)} autos\n")


def escape_ts(s: str) -> str:
    return (s or '').replace('\\', '\\\\').replace("'", "\\'")


def fotos_ts(pd: dict) -> str:
    ef = escape_ts(pd.get('exterior_frontal', ''))
    el = escape_ts(pd.get('exterior_lateral', ''))
    et = escape_ts(pd.get('exterior_trasero', ''))
    it = escape_ts(pd.get('interior_tablero', ''))
    ia = escape_ts(pd.get('interior_asientos', ''))
    return (
        f"    {{ exterior_frontal: '{ef}',\n"
        f"      exterior_lateral: '{el}',\n"
        f"      exterior_trasero: '{et}',\n"
        f"      interior_tablero: '{it}',\n"
        f"      interior_asientos: '{ia}' }}"
    )


# Asegurarse de que _helper.ts tiene carP
helper_path = SRC / 'data' / 'cars' / '_helper.ts'
helper_content = helper_path.read_text()

if 'export function carP' not in helper_content:
    extra = """
export function carP(
  id: string, nombre: string, pais: string[],
  anio_desde: number, anio_hasta: number,
  segmentos: string[], introduccion: string, specs: CarSpecs,
  fotos: CarPhotos
): Car {
  return { id, nombre, pais, anio_desde, anio_hasta, segmentos, introduccion, specs, fotos, fuente_fotos: 'Wikimedia Commons', fecha_agregado: DATE };
}
"""
    helper_path.write_text(helper_content.rstrip() + '\n' + extra)
    print("✅ _helper.ts actualizado con carP()\n")

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

total_updated = 0

for ts_file in country_files:
    if not ts_file.exists():
        continue

    content = ts_file.read_text()
    original = content
    count = 0

    # agregar import carP si no está
    if "carP" not in content:
        content = content.replace(
            "import { car } from './_helper';",
            "import { car, carP } from './_helper';"
        )

    # encontrar IDs del archivo
    car_ids = re.findall(r"car\('([^']+)'", content)

    for car_id in car_ids:
        if car_id not in photos:
            continue
        pd = photos[car_id]
        if not any(pd.get(s) for s in SLOTS):
            continue

        # patrón: car('car_id'...{}),  donde {} puede ser {specs} o {}
        pattern = rf"car\('{re.escape(car_id)}'(.*?)\}}(\s*\)\s*,)"
        match = re.search(pattern, content, re.DOTALL)
        if not match:
            continue

        old_block = match.group(0)
        inner = match.group(1)
        closing = match.group(2)

        # construir nuevo bloque con carP
        # old_block = car('id'...{specs}),
        # new_block = carP('id'...{specs},\n    {fotos}),
        fotos_block = fotos_ts(pd)
        new_block = (
            f"carP('{car_id}'{inner}}},\n"  # specs + coma (sin cerrar la función)
            + fotos_block
            + "),"  # cierra carP() + coma de array
        )

        content = content.replace(old_block, new_block, 1)
        count += 1

    if count > 0:
        ts_file.write_text(content)
        total_updated += count
        print(f"  ✅ {ts_file.name}: {count} autos actualizados con fotos")
    else:
        print(f"  ─  {ts_file.name}: sin cambios")

print(f"\n✅ Total: {total_updated} autos con fotos aplicadas")
