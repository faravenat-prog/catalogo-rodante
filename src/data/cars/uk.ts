import { car } from './_helper';

export const UK = [

  car('jaguar_e_type', 'Jaguar E-Type Serie 1', ['Reino Unido'], 1961, 1968,
    ['Deportivo', 'Coupé', 'Roadster', '3.8', 'Tracción trasera'],
    'Enzo Ferrari lo llamó "el auto más bello jamás construido". El E-Type combinaba carrocería monocasco de aluminio, suspensión independiente en las cuatro ruedas, frenos de disco y un motor de 6 cilindros de 3.8 litros con 265 CV, todo por un tercio del precio de los deportivos italianos equivalentes. Su precio de lanzamiento en 1961 fue una bomba que revolucionó el mercado.',
    { potencia: '265 CV', peso: '1.118 kg', traccion: 'FR', velocidad_max: '240 km/h' }),

  car('jaguar_xj220', 'Jaguar XJ220', ['Reino Unido'], 1992, 1994,
    ['Superdeportivo', '3.5', 'BiTurbo', 'V6', 'Tracción trasera'],
    'El XJ220 fue durante un año el auto de producción más rápido del mundo: 342 km/h con el V6 biturbo de 550 CV. El proyecto comenzó como labor de amor de los ingenieros de Jaguar en su tiempo libre, con un V12. Cuando llegó a producción, la crisis económica y el cambio a V6 decepcionaron a los compradores con depósitos pagados. Hoy es una leyenda subestimada.',
    { potencia: '550 CV', peso: '1.470 kg', traccion: 'FR', velocidad_max: '342 km/h' }),

  car('jaguar_mark_2', 'Jaguar Mark 2 3.8', ['Reino Unido'], 1959, 1967,
    ['Sedán', '3.8', 'Tracción trasera'],
    'El Jaguar Mark 2 fue el sedán deportivo por excelencia de los años 60s: motor 3.8 litros de 220 CV, 200 km/h y carrocería elegante de cuatro puertas. Favorito de la Policía británica —y de los ladrones de bancos que necesitaban un auto rápido que también cupiera cuatro pasajeros. La combinación de velocidad, elegancia y accesibilidad relativa lo convirtió en un icono de la época.',
    { potencia: '220 CV', peso: '1.532 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('lotus_elan_s2', 'Lotus Elan S2', ['Reino Unido'], 1963, 1973,
    ['Roadster', '1.6', 'DOHC', 'Tracción trasera'],
    'El Lotus Elan de Colin Chapman fue la definición del roadster perfecto para su época: carrocería de fibra de vidrio sobre chasis de acero de viga central, motor Ford de 1.6 litros con culata Lotus de doble árbol de levas, suspension independiente en los cuatro ángulos. Solo 888 kg de peso para un comportamiento en curva que inspiró al Mazda MX-5 25 años después.',
    { potencia: '105 CV', peso: '688 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('lotus_esprit_turbo', 'Lotus Esprit Turbo', ['Reino Unido'], 1980, 1987,
    ['Deportivo', 'Coupé', '2.2', 'Turbo', 'Mid-engine'],
    'El Esprit Turbo fue el coche que apareció saliendo del mar como submarino en "La Espía que me Amó" (1977). Diseño de Giorgetto Giugiaro, motor de 4 cilindros turbo de 2.2 litros y 210 CV ubicado centralmente. Contra todo pronóstico, el pequeño fabricante inglés construyó un superdeportivo capaz de competir con Ferrari en precio y prestaciones.',
    { potencia: '210 CV', peso: '1.060 kg', traccion: 'MR', velocidad_max: '245 km/h' }),

  car('lotus_elise_s1', 'Lotus Elise S1', ['Reino Unido'], 1996, 2000,
    ['Roadster', '1.8', 'Tracción trasera'],
    'El Elise S1 fue la reinvención del concepto de coche deportivo ligero por Lotus: chasis de extrusiones de aluminio unidas con adhesivo en lugar de soldadura, carrocería de plástico y motor Rover de 1.8 litros con 118 CV en apenas 725 kg. La experiencia de manejo es tan pura y comunicativa que muchos lo consideran el mejor coche para aprender técnicas de pilotaje.',
    { potencia: '118 CV', peso: '725 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('aston_martin_db5', 'Aston Martin DB5', ['Reino Unido'], 1963, 1965,
    ['Gran Turismo', '4.0', 'Tracción trasera'],
    'El DB5 es el Aston Martin de James Bond y el Gran Turismo británico por excelencia. Con motor de 6 cilindros en línea de 4.0 litros y 282 CV, carrocería de aluminio de Touring de Milán y una elegancia que ningún otro fabricante podía igualar, estableció para siempre la imagen del gentleman\'s express británico.',
    { potencia: '282 CV', peso: '1.466 kg', traccion: 'FR', velocidad_max: '233 km/h' }),

  car('aston_martin_v8_vantage', 'Aston Martin V8 Vantage 1977', ['Reino Unido'], 1977, 1989,
    ['Gran Turismo', '5.3', 'V8', 'Tracción trasera'],
    'El V8 Vantage de 1977 fue el auto de producción más rápido de Gran Bretaña en su época: motor V8 de 5.3 litros con 375 CV alcanzaba los 270 km/h. Completamente a mano, tardaba un mes en construirse. Su aspecto musculoso con el alargamiento del cofre para el motor V8 le daba una presencia incomparable en cualquier calle europea.',
    { potencia: '375 CV', peso: '1.740 kg', traccion: 'FR', velocidad_max: '270 km/h' }),

  car('mg_mgb_roadster', 'MG MGB Roadster', ['Reino Unido'], 1962, 1980,
    ['Roadster', '1.8', 'Tracción trasera'],
    'El MGB fue el roadster británico más vendido de la historia: 513.000 unidades en 18 años. Con carrocería monocasta de acero —revolucionaria para un pequeño fabricante— motor de 1.8 litros y capota de lona, combinaba accesibilidad con la experiencia de conducción a cielo abierto que los británicos amaban. Símbolo de una era dorada del automovilismo inglés.',
    { potencia: '95 CV', peso: '1.070 kg', traccion: 'FR', velocidad_max: '170 km/h' }),

  car('triumph_tr6', 'Triumph TR6', ['Reino Unido'], 1968, 1976,
    ['Roadster', '2.5', 'Tracción trasera'],
    'El TR6 fue el último de los grandes roadsters Triumph y el que muchos consideran el mejor. Con motor de 6 cilindros en línea de 2.5 litros y 150 CV, suspensión independiente trasera y dirección de cremallera, era el roadster deportivo más maduro que Triumph había construido. La carrocería rediseñada por Karmann le daba líneas más europeas que sus predecesores.',
    { potencia: '150 CV', peso: '1.078 kg', traccion: 'FR', velocidad_max: '193 km/h' }),

  car('mini_cooper_s_mk1', 'Mini Cooper S Mk1', ['Reino Unido'], 1963, 1971,
    ['Hatchback', '1.0', 'Tracción delantera'],
    'El Mini Cooper S fue el primer hot hatch de la historia, diseñado por Alec Issigonis y preparado por John Cooper para carreras. Con el motor de 1.0 litros transversal de tracción delantera y apenas 620 kg, ganó el Rally de Montecarlo en 1964, 1965 y 1967 (el de 1966 fue descalificado por las luces). Un gigante en miniatura que cambió la ingeniería automotriz.',
    { potencia: '76 CV', peso: '620 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('mini_cooper_r53', 'MINI Cooper Works R53', ['Reino Unido'], 2002, 2006,
    ['Hatchback', '1.6', 'Compresor', 'Tracción delantera'],
    'El R53 John Cooper Works fue la reencarnación moderna del espíritu original: compresor Eaton, motor 1.6 litros de 210 CV en un hatchback de 1.140 kg. La dirección eléctrica con feedback excepcional y el sonido característico del compresor al acelerar lo convertían en una experiencia única. Ganó premios de manejo en todas las publicaciones especializadas de su época.',
    { potencia: '210 CV', peso: '1.140 kg', traccion: 'FF', velocidad_max: '232 km/h' }),

  car('land_rover_defender_90', 'Land Rover Defender 90', ['Reino Unido'], 1990, 2016,
    ['4x4', 'Todo Terreno', '2 puertas'],
    'El Defender 90 es el todo terreno más icónico de la historia británica, heredero del Series I de 1948. Con bastidor de escalera y transferencia permanente de cuatro ruedas. Favorito de agricultores, expedicionarios y familias reales. 26 años de producción sin cambios estructurales.',
    { potencia: '122 CV', peso: '1.880 kg', traccion: '4WD', velocidad_max: '140 km/h' }),

  car('mg_metro_6r4', 'MG Metro 6R4', ['Reino Unido'], 1985, 1986,
    ['Hatchback', '3.0', 'V6', '4x4', 'Rally', 'Grupo B'],
    'El Metro 6R4 fue la entrada de Austin Rover en el Grupo B del WRC, con el insólito motor V6 de 3.0 litros diseñado por David Wood —sin ninguna relación con la mecánica del Metro de calle— y tracción integral. Con 410 CV en versiones de competición, era extraordinariamente rápido en tierra. Solo se fabricaron las 200 unidades de homologación, lo que lo hace rareza absoluta.',
    { potencia: '250 CV', peso: '1.000 kg', traccion: '4WD', velocidad_max: '210 km/h' }),
];
