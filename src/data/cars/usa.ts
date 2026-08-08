import { car } from './_helper';

export const USA = [

  // ── FORD ──────────────────────────────────────────────────────────────────

  car('ford_mustang_1965', 'Ford Mustang 1965', ['EE.UU.'], 1964, 1966,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El Mustang del 65 creó la categoría "pony car" y se convirtió en el auto más vendido en su primer año. Lee Iacocca lo concibió como deportivo accesible para la juventud del baby boom. Con opciones hasta el V8 289ci de 225 CV, definió el sueño americano sobre ruedas.',
    { potencia: '225 CV', peso: '1.240 kg', traccion: 'FR', velocidad_max: '195 km/h' }),

  car('ford_mustang_boss_302', 'Ford Mustang Boss 302 1969', ['EE.UU.'], 1969, 1970,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'Creado para las Trans-Am Series, con motor 302ci y culatas de Cleveland que giraba hasta 7.000 rpm. Larry Shinoda —diseñador del Corvette Stingray— le dio la imagen agresiva con el capó matte black, calcomanías y alerón trasero.',
    { potencia: '290 CV', peso: '1.380 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  car('ford_mustang_mach1_1969', 'Ford Mustang Mach 1 1969', ['EE.UU.'], 1969, 1973,
    ['Muscle Car', 'Fastback', 'Coupé'],
    'El Mach 1 fue el Mustang fastback de alto rendimiento, con acento deportivo visual y opciones de motor hasta el 428 Cobra Jet. Sus entradas de aire en el capó, las rayas de carrocería y las marcas distintivas lo hacían el Mustang más llamativo de la era clásica. La versión 428 de 335 CV era genuinamente rápida por los estándares de la época.',
    { potencia: '335 CV', peso: '1.510 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  car('ford_mustang_svt_cobra', 'Ford Mustang SVT Cobra 2003', ['EE.UU.'], 2003, 2004,
    ['Muscle Car', 'Pony Car', 'Supercharger'],
    'El Cobra SVT "Terminator" 2003 fue la bomba que nadie esperaba de Ford: 390 CV de un V8 4.6L con compresor Eaton en la carrocería de serie. Era más rápido que autos que costaban el doble. SVT utilizó el bloque Cobra de fundición especial para soportar la potencia adicional. Humilló a Corvettes y Vipers en dragstrips de todo el país.',
    { potencia: '390 CV', peso: '1.628 kg', traccion: 'FR', velocidad_max: '260 km/h' }),

  car('ford_gt40_mk2', 'Ford GT40 MkII', ['EE.UU.'], 1966, 1966,
    ['Superdeportivo', 'Le Mans', '7.0', 'Mid-engine'],
    'El GT40 fue construido para una sola razón: vengarse de Ferrari en Le Mans después de que el trato de compra entre Henry Ford II y Enzo Ferrari fracasó en 1963. El MkII con motor 7.0 litros de 485 CV ganó Le Mans en 1966 con un 1-2-3 histórico. Es uno de los autos de carreras más importantes de la historia del automóvil.',
    { potencia: '485 CV', peso: '1.040 kg', traccion: 'MR', velocidad_max: '330 km/h' }),

  car('ford_thunderbird_1955', 'Ford Thunderbird 1955', ['EE.UU.'], 1955, 1957,
    ['Roadster', '4.8', 'V8', 'Tracción trasera'],
    'El primer T-Bird fue la respuesta de Ford al Chevrolet Corvette: un personal luxury car de dos plazas con V8 y capota removible. Con motor Y-block de 4.8 litros y opciones de supercargador, era el auto de los sueños de la América de la posguerra. Solo se fabricó en configuración de dos plazas durante los primeros tres años antes de pasar a 4 plazas.',
    { potencia: '193 CV', peso: '1.365 kg', traccion: 'FR', velocidad_max: '190 km/h' }),

  // ── CHEVROLET ─────────────────────────────────────────────────────────────

  car('chevrolet_corvette_c1', 'Chevrolet Corvette C1', ['EE.UU.'], 1953, 1962,
    ['Roadster', '3.8', 'V8', 'Tracción trasera'],
    'El primer Corvette fue el intento de GM de crear el sports car americano definitivo. Las primeras versiones de 1953 con motor 6 cilindros fueron criticadas por falta de potencia, pero la llegada del V8 en 1955 transformó al Corvette en lo que siempre debió ser. La carrocería de fibra de vidrio —pionera en producción masiva— y el diseño atemporal siguen siendo los rasgos más reconocibles.',
    { potencia: '195 CV', peso: '1.200 kg', traccion: 'FR', velocidad_max: '195 km/h' }),

  car('chevrolet_corvette_c2', 'Chevrolet Corvette C2 Stingray', ['EE.UU.'], 1963, 1967,
    ['Coupé', 'Roadster', '5.4', 'V8', 'Tracción trasera'],
    'El Corvette C2 Stingray es considerado el más bello de toda la saga, diseñado por Larry Shinoda inspirado en el prototipo Stingray de Bill Mitchell. La versión coupé con la ventanilla trasera partida —presente solo en 1963— es la más buscada. Con motor 427ci de hasta 435 CV, era el superdeportivo americano que podía competir con los europeos.',
    { potencia: '350 CV', peso: '1.360 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('chevrolet_corvette_c3', 'Chevrolet Corvette C3', ['EE.UU.'], 1968, 1982,
    ['Coupé', 'Roadster', '5.7', 'V8', 'Tracción trasera'],
    'El C3 fue el Corvette de la era del rock, los 70s y el primer embargo petrolero. Las versiones iniciales con 427ci podían superar los 400 CV, pero las regulaciones de emisiones redujeron la potencia significativamente hacia los 70s. La carrocería de líneas curvas y los faros retráctiles lo hacían visualmente dramático, aunque mecánicamente era del pasado.',
    { potencia: '370 CV', peso: '1.550 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('chevrolet_camaro_z28_1969', 'Chevrolet Camaro Z/28 1969', ['EE.UU.'], 1969, 1969,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El Z/28 del 69 es el año pico de la primera generación. Motor DZ 302ci de 290 CV homologado para Trans-Am. El diseño más musculoso con cofre abombado y spoiler. Solo 20.302 unidades producidas ese año.',
    { potencia: '290 CV', peso: '1.440 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  car('chevrolet_camaro_ss_1970', 'Chevrolet Camaro SS 1970', ['EE.UU.'], 1970, 1973,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'La segunda generación del Camaro llegó con rediseño completo y opciones de motor hasta el LS6 de 450 CV. El SS de 1970 con motor 396ci o 454ci era el Camaro más poderoso de su era. La carrocería más cuadrada y las proporciones más musculosas lo hacen el favorito estético de muchos coleccionistas sobre el primer gen.',
    { potencia: '360 CV', peso: '1.570 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  car('chevrolet_bel_air_1957', 'Chevrolet Bel Air 1957', ['EE.UU.'], 1957, 1957,
    ['Sedán', 'Berlina', 'V8'],
    'El Bel Air 1957 es el automóvil americano más fotografiado e imitado de la historia. Las aletas traseras pronunciadas, los cromados extravagantes y el estilo bicolor definen la visión popular del automóvil americano de los 50s. Con motor V8 "Turbo-Fire" de 4.6 litros, era potente para su época y hoy sigue siendo el símbolo del optimismo americano de posguerra.',
    { potencia: '162 CV', peso: '1.540 kg', traccion: 'FR', velocidad_max: '165 km/h' }),

  car('chevrolet_nova_ss', 'Chevrolet Nova SS', ['EE.UU.'], 1969, 1972,
    ['Muscle Car', 'Coupé', 'V8'],
    'El Nova SS fue el muscle car oculto de GM: basado en la plataforma compacta X-body, podía especificarse con el mismo motor LS6 de 454ci del Chevelle SS. Sin las marcas llamativas del Camaro, pasaba desapercibido en las calles pero era devastador en los dragstrips. El muscle car ideal para quienes preferían ganar en silencio.',
    { potencia: '360 CV', peso: '1.440 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  // ── DODGE ─────────────────────────────────────────────────────────────────

  car('dodge_charger_rt_1969', 'Dodge Charger R/T 1969', ['EE.UU.'], 1969, 1969,
    ['Muscle Car', 'Fastback'],
    'El Charger R/T del 69 es quizás el muscle car más icónico, inmortalizado en Bullitt y The Dukes of Hazzard. Diseño fastback único con luces ocultas. El motor Hemi 426ci de 425 CV lo convirtió en el auto de calle más potente de su época.',
    { potencia: '425 CV', peso: '1.680 kg', traccion: 'FR', velocidad_max: '225 km/h' }),

  car('dodge_viper_rt10', 'Dodge Viper RT/10', ['EE.UU.'], 1992, 1996,
    ['Roadster', '8.0', 'V10', 'Tracción trasera'],
    'El Viper fue el regreso de los locos a Chrysler: V10 de 8.0 litros y 400 CV, sin ABS, sin tracción delantera, sin bolsas de aire, sin ventanas. Puro y brutal. Carroll Shelby estuvo involucrado en el diseño. La serpiente plástica de fibra de vidrio era más rápida que el Corvette y más aterradora que cualquier auto de su época.',
    { potencia: '400 CV', peso: '1.540 kg', traccion: 'FR', velocidad_max: '265 km/h' }),

  car('dodge_challenger_1970', 'Dodge Challenger R/T 1970', ['EE.UU.'], 1970, 1974,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El Challenger R/T de 1970 fue el primer y más puro Challenger, diseñado para competir directamente con el Mustang y el Camaro. Con opciones de motor hasta el Hemi 426ci de 425 CV, era el muscle car de Chrysler en estado puro. Las versiones SE con vinilo en el techo y el frontal más largo lo hacían el más grande de los pony cars.',
    { potencia: '375 CV', peso: '1.614 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  car('dodge_dart_gt', 'Dodge Dart GT 1968', ['EE.UU.'], 1968, 1969,
    ['Muscle Car', 'Compacto', 'Coupé'],
    'El Dart GT fue el muscle car compacto de Chrysler: una plataforma B-body pequeña capaz de recibir el enorme motor 440ci. Con un peso significativamente menor que el Charger, la relación potencia/peso era sorprendente. Era el muscle car de barrio que humillaba a los autos más caros en los semáforos sin llamar la atención.',
    { potencia: '290 CV', peso: '1.340 kg', traccion: 'FR', velocidad_max: '205 km/h' }),

  // ── PONTIAC ───────────────────────────────────────────────────────────────

  car('pontiac_gto_1964', 'Pontiac GTO 1964', ['EE.UU.'], 1964, 1964,
    ['Muscle Car', 'Coupé'],
    'El GTO de 1964 es reconocido como el primer muscle car. John DeLorean instaló el V8 389ci en el compacto Tempest. 325 CV en un auto ligero, estableciendo la fórmula que definiría una era.',
    { potencia: '325 CV', peso: '1.540 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  car('pontiac_firebird_1969', 'Pontiac Firebird 1969', ['EE.UU.'], 1967, 1969,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El Firebird de primera generación compartía plataforma con el Camaro pero tenía identidad propia, con estilo más europeo y opciones de motor que incluían el 400ci de alto rendimiento. Fue el inicio de una saga que daría el Trans Am, el auto más simbólico de los 70s americanos.',
    { potencia: '325 CV', peso: '1.430 kg', traccion: 'FR', velocidad_max: '205 km/h' }),

  car('pontiac_trans_am_1977', 'Pontiac Trans Am 1977', ['EE.UU.'], 1977, 1981,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El Trans Am de 1977 con el enorme pájaro de fuego en el capó es el símbolo del muscle car de los 70s, inmortalizado en la película "Smokey and the Bandit" con Burt Reynolds. Con motor 400ci o 6.6 litros, era uno de los pocos autos americanos que aún ofrecía potencia real en la era post-embargo petrolero.',
    { potencia: '200 CV', peso: '1.650 kg', traccion: 'FR', velocidad_max: '195 km/h' }),

  // ── SHELBY ────────────────────────────────────────────────────────────────

  car('shelby_cobra_427', 'Shelby Cobra 427', ['EE.UU.'], 1965, 1967,
    ['Roadster', '7.0', 'V8', 'Tracción trasera'],
    'La Cobra 427 es posiblemente el auto más rápido de su época en circuito. Carroll Shelby tomó el ligero chasis AC Ace británico e instaló el motor Ford de 7.0 litros 427ci de 485 CV. El resultado fue una experiencia de conducción salvaje e implacable que solo los más expertos podían domesticar. Original en buen estado vale más de un millón de dólares.',
    { potencia: '485 CV', peso: '1.100 kg', traccion: 'FR', velocidad_max: '265 km/h' }),

  car('shelby_gt500_1967', 'Shelby GT500 Mustang 1967', ['EE.UU.'], 1967, 1968,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El GT500 de Carroll Shelby fue el Mustang más poderoso disponible al público. Con motor 428 Police Interceptor de 355 CV y modificaciones de suspensión, frenos y carrocería de Shelby American, era significativamente más capaz que cualquier Mustang de producción. Las rayas de carrocería y las ruedas de aluminio Shelby son sus marcas inconfundibles.',
    { potencia: '355 CV', peso: '1.490 kg', traccion: 'FR', velocidad_max: '225 km/h' }),

  // ── AMC ───────────────────────────────────────────────────────────────────

  car('amc_javelin_sst', 'AMC Javelin SST 1968', ['EE.UU.'], 1968, 1970,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    'El Javelin fue la entrada de American Motors en la batalla de los pony cars, y aunque la compañía era la más pequeña de los "Big Four", entregó un auto sorprendentemente competitivo. Con motor de hasta 390ci y un diseño agresivo, ganó credibilidad en las Trans-Am Series contra Ford y Pontiac. Hoy es uno de los pony cars clásicos más subestimados.',
    { potencia: '315 CV', peso: '1.450 kg', traccion: 'FR', velocidad_max: '205 km/h' }),

  car('amc_amx_1969', 'AMC AMX 1969', ['EE.UU.'], 1968, 1970,
    ['Muscle Car', 'Coupé', '2 plazas'],
    'El AMX fue el único pony car americano de dos plazas además del Corvette, diseñado específicamente para la pista. Con motor opcional de 390ci y carrocería corta, era el más ágil de su categoría. Craig Breedlove estableció 106 records de velocidad en el Bonneville Salt Flats con versiones modificadas del AMX en 1968.',
    { potencia: '315 CV', peso: '1.380 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  // ── CHRYSLER ──────────────────────────────────────────────────────────────

  car('chrysler_300c_hemi', 'Chrysler 300C Hemi 2005', ['EE.UU.'], 2005, 2010,
    ['Sedán', '5.7', 'V8 Hemi', 'Tracción trasera'],
    'El 300C de 2005 fue el renacimiento del muscle car americano en formato sedán ejecutivo. Con motor Hemi 5.7 de 340 CV y tracción trasera, combinaba el carisma americano con el refinamiento moderno. Su diseño de Ralph Gilles —inspirado en los Chrysler clásicos de los 50s— fue un éxito instantáneo que salvó la imagen de Chrysler.',
    { potencia: '340 CV', peso: '1.885 kg', traccion: 'FR', velocidad_max: '240 km/h' }),

  car('plymouth_barracuda_1970', "Plymouth 'Cuda 440 1970", ['EE.UU.'], 1970, 1971,
    ['Muscle Car', 'Pony Car', 'Coupé'],
    "El 'Cuda 1970 con Hemi 426ci o 440 Six Pack representa el muscle car en su punto máximo. Las versiones HEMI son hoy los autos americanos de colección más valiosos. Diseño E-body con proporciones musculosas de John Herlitz.",
    { potencia: '390 CV', peso: '1.580 kg', traccion: 'FR', velocidad_max: '220 km/h' }),
];
