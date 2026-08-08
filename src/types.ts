export interface CarPhotos {
  exterior_frontal: string;
  exterior_lateral: string;
  exterior_trasero: string;
  interior_tablero: string;
  interior_asientos: string;
}

export interface CarSpecs {
  potencia?: string;
  peso?: string;
  traccion?: string;
  velocidad_max?: string;
}

export interface Car {
  id: string;
  nombre: string;
  pais: string[];
  anio_desde: number;
  anio_hasta: number;
  segmentos: string[];
  introduccion: string;
  specs: CarSpecs;
  fotos: CarPhotos;
  fuente_fotos: string;
  fecha_agregado: string;
}

export interface Catalog {
  id: string;
  nombre: string;
  pais_principal: string;
  auto_ids: string[];
}

export interface GameSession {
  jugadores: number;
  catalogo_id: string;
  seleccion_por_jugador: Record<string, string[]>;
}
