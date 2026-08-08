import { car } from './_helper';

export const FRANCE = [

  car('alpine_a110_1973', 'Alpine A110 1600S', ['Francia'], 1961, 1977,
    ['Deportivo', 'Coupé', '1.6', 'Tracción trasera'],
    'El Alpine A110 fue el arma de Francia en el rally mundial: motor trasero de 1.6 litros, carrocería de fibra de vidrio de apenas 620 kg y maniobrabilidad extraordinaria. Ganó el primer Campeonato del Mundo de Rally en 1973 con Nicolas y Andersson. Su concepción —máxima ligereza, mínima potencia— influyó a generaciones de ingenieros franceses.',
    { potencia: '138 CV', peso: '620 kg', traccion: 'RR', velocidad_max: '210 km/h' }),

  car('renault_5_gt_turbo', 'Renault 5 GT Turbo', ['Francia'], 1985, 1991,
    ['Hatchback', 'Hot Hatch', 'Turbo'],
    'Motor 1.4 litros turbo de 115 CV en 820 kg. El turbo lag era pronunciado y el comportamiento nervioso al límite, pero eso lo hacía irresistiblemente emocionante. Base del R5 Maxi Turbo del Grupo B.',
    { potencia: '115 CV', peso: '820 kg', traccion: 'FF', velocidad_max: '193 km/h' }),

  car('renault_clio_williams', 'Renault Clio Williams', ['Francia'], 1993, 1995,
    ['Hatchback', 'Hot Hatch', '2.0', '16V'],
    'El Clio Williams fue el hot hatch de homologación para el Campeonato Francés de Turismos. Con motor F7R de 2.0 litros 16V y 150 CV en apenas 925 kg, era el hot hatch más puro de los 90s. El azul Williams y las llantas Speedline doradas son el look más icónico. Solo 12.100 unidades en tres series diferenciadas por ruedas.',
    { potencia: '150 CV', peso: '925 kg', traccion: 'FF', velocidad_max: '215 km/h' }),

  car('renault_megane_rs', 'Renault Mégane RS 225', ['Francia'], 2004, 2009,
    ['Hatchback', 'Hot Hatch', '2.0', 'Turbo'],
    'El Mégane RS 225 con motor F4Rt de 225 CV estableció el estándar del hot hatch moderno. Su diferencial de deslizamiento limitado, suspensión de doble eje trasero y el torque brutal desde bajas revoluciones lo hacían excepcionalmente fácil de llevar rápido. Batió el récord Nürburgring de tracción delantera en 2008 con 8:17.',
    { potencia: '225 CV', peso: '1.370 kg', traccion: 'FF', velocidad_max: '235 km/h' }),

  car('renault_r8_gordini', 'Renault R8 Gordini', ['Francia'], 1966, 1973,
    ['Sedán', '1.3', 'Tracción trasera'],
    'El R8 Gordini fue preparado por el tuner oficial de Renault, Amédée Gordini, conocido como "el mago". Con motor de 1.3 litros de doble carburador y 103 CV en apenas 750 kg, era devastador en los rallys europeos. El color azul con rayas blancas y el número de carreras son su identidad visual icónica.',
    { potencia: '103 CV', peso: '750 kg', traccion: 'RR', velocidad_max: '185 km/h' }),

  car('peugeot_205_gti', 'Peugeot 205 GTI 1.9', ['Francia'], 1984, 1994,
    ['Hatchback', 'Hot Hatch', '1.9'],
    'Considerado por muchos el mejor hot hatch jamás construido. Motor 1.9 de 130 CV en 895 kg, dirección directa y diferencial trasero de deslizamiento limitado. Una experiencia electrizante que aún avergüenza a muchos modernos.',
    { potencia: '130 CV', peso: '895 kg', traccion: 'FF', velocidad_max: '193 km/h' }),

  car('peugeot_106_rallye', 'Peugeot 106 Rallye S2', ['Francia'], 1994, 1999,
    ['Hatchback', '1.6', '8V', 'Tracción delantera'],
    'El 106 Rallye S2 fue el hot hatch minimalista por excelencia: sin equipo de audio, sin elevalunas eléctrico, sin AC. Solo 698 kg y el motor TU5J2 de 103 CV. La relación peso/potencia era superior a muchos autos mucho más caros. En circuito, su maniobrabilidad era sorprendente y en rallys de regularidad sigue siendo arma competitiva.',
    { potencia: '103 CV', peso: '698 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('peugeot_405_mi16', 'Peugeot 405 Mi16', ['Francia'], 1987, 1997,
    ['Sedán', '1.9', '16V', 'Tracción delantera'],
    'El 405 Mi16 ganó el Rally de París-Dakar en 1988 y 1990, estableciendo credenciales de resistencia únicas para un sedán de familia. Con motor XU9J4 de 1.9 litros 16 válvulas y 160 CV, era el sedán más rápido de su segmento. El diseño de Pininfarina le daba elegancia italiana a la practicidad francesa.',
    { potencia: '160 CV', peso: '1.100 kg', traccion: 'FF', velocidad_max: '218 km/h' }),

  car('peugeot_504_cabriolet', 'Peugeot 504 Cabriolet', ['Francia'], 1969, 1983,
    ['Cabriolé', '1.8', 'Tracción trasera'],
    'El 504 Cabriolet fue obra de Pininfarina y uno de los descapotables más elegantes de los 70s. Con tracción trasera, suspensión independiente en las cuatro ruedas y motor de 4 cilindros, era el descapotable para los que no podían permitirse un Mercedes SL pero exigían calidad europea real. Fue el Peugeot más caro de su época.',
    { potencia: '104 CV', peso: '1.120 kg', traccion: 'FR', velocidad_max: '180 km/h' }),

  car('citroen_ds_21', 'Citroën DS 21', ['Francia'], 1955, 1975,
    ['Sedán', '2.1', 'Tracción delantera'],
    'El Citroën DS fue elegido el "Coche del Siglo XX" por sus innovaciones tecnológicas: suspensión hidro-pneumática auto-nivelante, dirección asistida, frenos de disco delanteros, transmisión semi-automática. En 1955 parecía llegado del futuro. El DS salvó la vida del General De Gaulle al absorber disparos mientras el sistema hidráulico mantenía el control del vehículo.',
    { potencia: '109 CV', peso: '1.250 kg', traccion: 'FF', velocidad_max: '183 km/h' }),

  car('citroen_2cv', 'Citroën 2CV', ['Francia'], 1948, 1990,
    ['Berlina', '0.6', '2 puertas'],
    'El 2CV —"Deux Chevaux"— fue diseñado para motorizar a la Francia rural de posguerra: debía poder circular por campos arados llevando una cesta de huevos sin romper ninguno. Su motor de 2 cilindros de 375cc, suspensión interconectada y peso de 560 kg lo hacían extraordinariamente económico. Fue producido 42 años y se convirtió en símbolo cultural francés.',
    { potencia: '29 CV', peso: '560 kg', traccion: 'FF', velocidad_max: '115 km/h' }),

  car('citroen_sm', 'Citroën SM', ['Francia'], 1970, 1975,
    ['Gran Turismo', '2.7', 'V6', 'Tracción delantera'],
    'El SM fue la colaboración entre Citroën y Maserati después de que la marca francesa comprara a la italiana en 1968. Motor V6 Maserati de 2.7 litros con 170 CV, suspensión hidro-pneumática, dirección autopoyante y frenos de disco en las cuatro ruedas. Una combinación francesa-italiana que era 20 años adelantada a su tiempo en tecnología.',
    { potencia: '170 CV', peso: '1.440 kg', traccion: 'FF', velocidad_max: '220 km/h' }),

  car('citroen_bx_4tc', 'Citroën BX 4TC', ['Francia'], 1986, 1986,
    ['Sedán', '2.1', 'Turbo', '4x4', 'Rally'],
    'El BX 4TC fue el arma de Citroën en el Grupo B, el campeonato de rally más extremo de la historia. Con motor 2.1 litros turbo de 380 CV y tracción integral, solo se fabricaron las 200 unidades mínimas de homologación. El programa fue abandonado tras los accidentes del Grupo B en 1986. Hoy es una rareza de museo que vale fortunas.',
    { potencia: '200 CV', peso: '1.260 kg', traccion: '4WD', velocidad_max: '215 km/h' }),

  car('alpine_a310_v6', 'Alpine A310 V6', ['Francia'], 1976, 1985,
    ['Coupé', '2.7', 'V6', 'Tracción trasera'],
    'El A310 V6 fue el sucesor del A110, con motor V6 de Renault de 2.7 litros ubicado centralmente en una carrocería de fibra de vidrio más grande y aerodinámica. Más gran turismo que el puro A110, el A310 combinaba velocidad real —250 km/h— con mayor confort. Solo 11.616 unidades fabricadas lo convierten en rareza altamente buscada.',
    { potencia: '150 CV', peso: '1.030 kg', traccion: 'MR', velocidad_max: '250 km/h' }),
];
