import { Car, CarPhotos, CarSpecs } from '../../types';

const empty: CarPhotos = { exterior_frontal: '', exterior_lateral: '', exterior_trasero: '', interior_tablero: '', interior_asientos: '' };
const DATE = '2026-08-08';

export function car(
  id: string, nombre: string, pais: string[],
  anio_desde: number, anio_hasta: number,
  segmentos: string[], introduccion: string, specs: CarSpecs
): Car {
  return { id, nombre, pais, anio_desde, anio_hasta, segmentos, introduccion, specs, fotos: empty, fuente_fotos: '', fecha_agregado: DATE };
}
