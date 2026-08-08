import { car } from './_helper';

export const ITALY = [

  car('ferrari_testarossa', 'Ferrari Testarossa', ['Italia'], 1984, 1991,
    ['Superdeportivo', '4.9', 'Boxer 12', 'Mid-engine'],
    'El Ferrari más reconocible de los 80s: cuerpo de 1.976 mm de ancho, estrías laterales icónicas de Pininfarina, motor bóxer 12 cilindros de 390 CV. Símbolo de la ostentación 80s, protagonista de Miami Vice.',
    { potencia: '390 CV', peso: '1.506 kg', traccion: 'MR', velocidad_max: '290 km/h' }),

  car('ferrari_308_gtb', 'Ferrari 308 GTB', ['Italia'], 1975, 1985,
    ['Superdeportivo', '3.0', 'V8', 'Mid-engine'],
    'El 308 GTB fue el Ferrari que hizo a la marca accesible visualmente a una generación: apareció en la serie Magnum P.I. durante 8 años. Con motor V8 de 3.0 litros ubicado centralmente y carrocería de Pininfarina, era un Ferrari puro y comunicativo. La versión GTS con techo Targa fue la más popular y vendida de la familia 308.',
    { potencia: '255 CV', peso: '1.090 kg', traccion: 'MR', velocidad_max: '250 km/h' }),

  car('ferrari_f355', 'Ferrari F355 Berlinetta', ['Italia'], 1994, 1999,
    ['Superdeportivo', '3.5', 'V8', 'Mid-engine'],
    'El F355 fue el Ferrari que reconcilió a la marca con la fiabilidad sin sacrificar pasión. El motor 3.5 litros de 380 CV con distribución 5 válvulas por cilindro sonaba como un Fórmula 1 y el F1 de Niki Lauda dijo que era el Ferrari de calle más cercano a un monoplaza. Los coleccionistas lo consideran el mejor Ferrari de los 90s para uso diario.',
    { potencia: '380 CV', peso: '1.350 kg', traccion: 'MR', velocidad_max: '295 km/h' }),

  car('ferrari_365_daytona', 'Ferrari 365 GTB/4 Daytona', ['Italia'], 1968, 1973,
    ['Gran Turismo', '4.4', 'V12', 'Tracción trasera'],
    'La Daytona fue el último Ferrari GT de motor delantero y tracción trasera antes de la transición al mid-engine. Con motor V12 de 4.4 litros y 352 CV, alcanzaba los 280 km/h en 1968, siendo el auto de producción más rápido del mundo. Su nombre extraoficial honra la victoria Ferrari en las 24h de Daytona 1967.',
    { potencia: '352 CV', peso: '1.590 kg', traccion: 'FR', velocidad_max: '280 km/h' }),

  car('ferrari_512_bb', 'Ferrari 512 BB', ['Italia'], 1976, 1981,
    ['Superdeportivo', '5.0', 'Boxer 12', 'Mid-engine'],
    'El 512 BB fue el sucesor de la Daytona con el motor bóxer de 12 cilindros en posición central. Con 360 CV y carrocería de Pininfarina, era el Ferrari más radical de su era. La versión BBi con inyección de combustible llegó después y es hoy la más valorada. Competidor directo de la Countach en las páginas de los pósters de los 70s.',
    { potencia: '360 CV', peso: '1.515 kg', traccion: 'MR', velocidad_max: '280 km/h' }),

  car('lamborghini_countach', 'Lamborghini Countach LP500S', ['Italia'], 1982, 1985,
    ['Superdeportivo', '4.8', 'V12', 'Mid-engine'],
    'El Countach definió la palabra "superdeportivo" para toda una generación. Diseñado por Marcello Gandini en Bertone, puertas de tijera y líneas angulares de ciencia ficción. Motor V12 de 375 CV. El póster de una generación y la medida de todos los sueños automovilísticos.',
    { potencia: '375 CV', peso: '1.490 kg', traccion: 'MR', velocidad_max: '295 km/h' }),

  car('lamborghini_miura', 'Lamborghini Miura P400', ['Italia'], 1966, 1973,
    ['Superdeportivo', '4.0', 'V12', 'Mid-engine'],
    'El Miura fue el primer superdeportivo moderno: el primero con motor V12 transversal ubicado centralmente, configuración que todos los superdeportivos adoptarían después. Diseñado por Marcello Gandini en Bertone cuando tenía apenas 25 años, el Miura es considerado por muchos el auto más bello jamás diseñado. Inspiró directamente al Ferrari 365 BB.',
    { potencia: '350 CV', peso: '1.292 kg', traccion: 'MR', velocidad_max: '275 km/h' }),

  car('lamborghini_diablo', 'Lamborghini Diablo VT', ['Italia'], 1990, 2001,
    ['Superdeportivo', '5.7', 'V12', 'Mid-engine', '4x4'],
    'El Diablo fue el sucesor de la Countach y el primer Lamborghini capaz de superar los 320 km/h en versión de producción. La versión VT añadió tracción integral que hacía el auto considerablemente más manejable. Con motor V12 de 5.7 litros y 492 CV, era el superdeportivo más extremo disponible en los 90s.',
    { potencia: '492 CV', peso: '1.576 kg', traccion: '4WD', velocidad_max: '325 km/h' }),

  car('alfa_romeo_giulia_sprint', 'Alfa Romeo Giulia Sprint GTA', ['Italia'], 1965, 1969,
    ['Coupé', '1.6', 'DOHC', 'Tracción trasera'],
    'El Giulia Sprint GTA fue el arma de competición de Alfa Romeo en los 60s: carrocería de aluminio que pesaba solo 700 kg, motor bimotore de 1.6 litros con doble árbol de levas y hasta 170 CV. Ganó el Campeonato Europeo de Turismos durante 4 años consecutivos. La GTA —Gran Turismo Alleggerita (aligerada)— es hoy el Alfa más cotizado en subastas internacionales.',
    { potencia: '115 CV', peso: '700 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('alfa_romeo_gtv6', 'Alfa Romeo GTV6', ['Italia'], 1980, 1986,
    ['Coupé', '2.5', 'V6', 'Tracción trasera'],
    'El GTV6 fue el Alfa Romeo más apreciado de los 80s: motor V6 de Busso de 2.5 litros —considerado uno de los sonidos más bellos del automovilismo— en una carrocería coupé de Giugiaro. Con tracción trasera y 160 CV, ganó el Campeonato del Mundo de Turismos de 1983. El sonido del Busso al acelerar fue declarado patrimonio cultural por aficionados de todo el mundo.',
    { potencia: '160 CV', peso: '1.200 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  car('alfa_romeo_147_gta', 'Alfa Romeo 147 GTA', ['Italia'], 2002, 2005,
    ['Hatchback', '3.2', 'V6', 'Tracción delantera'],
    'El 147 GTA con 250 CV del V6 Busso 3.2 en tracción delantera era el hot hatch más potente y demandante. El sonido del V6 Busso es considerado por muchos el mejor sonido de motor de la historia.',
    { potencia: '250 CV', peso: '1.400 kg', traccion: 'FF', velocidad_max: '250 km/h' }),

  car('alfa_romeo_montreal', 'Alfa Romeo Montreal', ['Italia'], 1970, 1977,
    ['Gran Turismo', '2.6', 'V8', 'Tracción trasera'],
    'El Montreal fue el Alfa Romeo más exótico de los 70s, con motor V8 de 2.6 litros derivado del auto de carreras Tipo 33 de Alfa. Solo 3.917 unidades fabricadas. El diseño de Bertone con los listones en los arcos de las ruedas traseras era absolutamente único. Una gran turismo italiana que competía con Ferrari en exclusividad si no en potencia.',
    { potencia: '200 CV', peso: '1.270 kg', traccion: 'FR', velocidad_max: '220 km/h' }),

  car('lancia_delta_integrale', 'Lancia Delta HF Integrale', ['Italia'], 1987, 1993,
    ['Hatchback', '2.0', 'Turbo', '4x4', 'Rally'],
    'El Delta HF Integrale ganó 6 campeonatos de Constructores consecutivos (1987-1992). Con motor 2.0 turbo 16V de 215 CV y tracción integral. La experiencia de calle era brutalmente directa e incomparable.',
    { potencia: '215 CV', peso: '1.270 kg', traccion: '4WD', velocidad_max: '220 km/h' }),

  car('lancia_stratos', 'Lancia Stratos HF', ['Italia'], 1973, 1978,
    ['Deportivo', 'Coupé', '2.4', 'V6', 'Mid-engine', 'Rally'],
    'El Stratos fue diseñado exclusivamente para ganar el rally, sin concesiones a la practicidad. Carrocería de Bertone de solo 3.7 metros de largo, motor Ferrari Dino V6 de 2.4 litros ubicado centralmente y 190 CV. Ganó el Campeonato del Mundo de Rally en 1974, 75 y 76. El auto de rally más hermoso jamás construido.',
    { potencia: '190 CV', peso: '980 kg', traccion: 'MR', velocidad_max: '230 km/h' }),

  car('fiat_124_spider', 'Fiat 124 Spider', ['Italia'], 1966, 1985,
    ['Roadster', '1.8', 'Tracción trasera'],
    'Diseñado por Pininfarina, producido 19 años sin cambios estructurales. Motor DOHC de 4 cilindros, capota de tela. El descapotable italiano asequible más vendido en Norteamérica durante gran parte de los 70s.',
    { potencia: '102 CV', peso: '960 kg', traccion: 'FR', velocidad_max: '180 km/h' }),

  car('fiat_500_nuova', 'Fiat 500 Nuova', ['Italia'], 1957, 1975,
    ['Berlina', '0.5', '2 puertas'],
    'El Fiat 500 Nuova fue el coche que motorizó a la Italia de posguerra, así como el Mini hizo lo mismo en Gran Bretaña. Con motor de 2 cilindros de 479cc ubicado en la parte trasera y solo 3.1 metros de largo, era extraordinariamente ágil en las calles estrechas italianas. Hoy es símbolo cultural de la dolce vita italiana en todo el mundo.',
    { potencia: '13 CV', peso: '470 kg', traccion: 'RR', velocidad_max: '85 km/h' }),

  car('fiat_131_abarth', 'Fiat 131 Abarth', ['Italia'], 1976, 1981,
    ['Sedán', '2.0', 'DOHC', 'Tracción trasera', 'Rally'],
    'El 131 Abarth fue el arma de Fiat en el WRC durante los 70s, ganando el campeonato de constructores en 1977, 1978 y 1980. Con motor 2.0 litros de doble árbol de levas y 230 CV en versión de competición, fue pilotado por Markku Alén y Walter Röhrl. La versión de calle con 140 CV era el sedán italiano más deportivo de su época.',
    { potencia: '140 CV', peso: '1.020 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('maserati_merak', 'Maserati Merak SS', ['Italia'], 1972, 1982,
    ['Gran Turismo', '3.0', 'V6', 'Mid-engine'],
    'El Merak fue la versión Maserati del Bora, con motor V6 Citroën-Maserati de 3.0 litros en lugar del V8. Más accesible que el Bora, combinaba la elegancia italiana con la tecnología hidráulica Citroën —el mismo sistema del DS— para dirección y frenos. La colaboración Citroën-Maserati de los 70s produjo algunos de los autos más sofisticados técnicamente de su era.',
    { potencia: '220 CV', peso: '1.395 kg', traccion: 'MR', velocidad_max: '250 km/h' }),
];
