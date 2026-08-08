import { car } from './_helper';

export const GERMANY = [

  // ── BMW ───────────────────────────────────────────────────────────────────

  car('bmw_2002_turbo', 'BMW 2002 Turbo', ['Alemania'], 1973, 1975,
    ['Sedán', '2.0', 'Turbo', 'Tracción trasera'],
    'El 2002 Turbo fue el primer auto europeo de producción en serie con motor turboalimentado, anticipándose a todos sus rivales. Con 170 CV desde el M10 turbo de 2.0 litros, llegaba a 211 km/h en 1973. Su texto "2002 turbo" impreso en espejo en el alerón delantero, para que los conductores que lo siguieran pudieran leerlo por el espejo retrovisor, es uno de los detalles más audaces del automovilismo alemán.',
    { potencia: '170 CV', peso: '1.080 kg', traccion: 'FR', velocidad_max: '211 km/h' }),

  car('bmw_e30_318i', 'BMW E30 318i', ['Alemania'], 1982, 1994,
    ['Sedán', 'Coupé', '1.8', 'Tracción trasera'],
    'El E30 definió el automóvil de conducción deportiva accesible. Con tracción trasera, motor M40 y la dirección más precisa de su segmento, fue el referente de conducción "atlética" en los 80s. La versión M3 con motor S14 de 195 CV es hoy uno de los autos más cotizados por coleccionistas.',
    { potencia: '113 CV', peso: '1.080 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('bmw_e30_m3', 'BMW E30 M3', ['Alemania'], 1986, 1991,
    ['Coupé', '2.3', 'DOHC', 'Tracción trasera', 'DTM'],
    'El E30 M3 fue diseñado para ganar en el DTM y la ETC. Con el motor S14 de 4 cilindros DOHC de 16 válvulas y 195 CV homologado para el Grupo A, ganó el campeonato de Turismo Europeo cuatro veces. La carrocería ensanchada, el alerón trasero funcional y el cockpit deportivo lo hacen el BMW más buscado por coleccionistas del mundo.',
    { potencia: '195 CV', peso: '1.165 kg', traccion: 'FR', velocidad_max: '235 km/h' }),

  car('bmw_e36_m3', 'BMW E36 M3', ['Alemania'], 1992, 1999,
    ['Coupé', 'Sedán', '3.0', 'DOHC', 'Tracción trasera'],
    'El E36 M3 democratizó la M3 al ser más accesible que el E30 sin sacrificar la esencia deportiva. El motor S50B30 de 3.0 litros y 286 CV con 6 cilindros en línea era uno de los más musicales del mundo. Sus versiones de competición ganaron en Nürburgring y las 24h de Spa. El favorito de los que quieren usar un M3 todos los días.',
    { potencia: '286 CV', peso: '1.460 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('bmw_e46_m3', 'BMW E46 M3', ['Alemania'], 2001, 2006,
    ['Coupé', '3.2', 'DOHC', 'Tracción trasera'],
    'El E46 M3 está considerado por muchos como el M3 definitivo: el motor S54 de 3.2 litros con 343 CV era el de 6 cilindros en línea más refinado jamás construido. La carrocería perfectamente proporcional, la dirección hidráulica de precisión quirúrgica y el diferencial activo M en versiones CSL lo hacen referencia absoluta en la categoría.',
    { potencia: '343 CV', peso: '1.570 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('bmw_m1', 'BMW M1', ['Alemania'], 1978, 1981,
    ['Superdeportivo', '3.5', 'Mid-engine', 'Tracción trasera'],
    'El M1 fue el único superdeportivo de serie que BMW ha construido, con motor M88 de 6 cilindros y 277 CV ubicado centralmente. Diseñado por Giorgetto Giugiaro con carrocería de fibra de vidrio, fue la base de la Procar Series donde pilotos de F1 —Niki Lauda, Nelson Piquet— competían antes de las carreras de Gran Premio. Solo 453 unidades producidas.',
    { potencia: '277 CV', peso: '1.300 kg', traccion: 'MR', velocidad_max: '260 km/h' }),

  car('bmw_z3_m', 'BMW Z3 M Roadster', ['Alemania'], 1996, 2002,
    ['Roadster', '3.2', 'DOHC', 'Tracción trasera'],
    'El Z3 M tomó el motor S50 del E36 M3 y lo instaló en el ligero chasis del Z3, creando un roadster de tracción trasera puro y sin concesiones. La combinación de caja corta del M3, diferencial de deslizamiento limitado y el sonido del 6 cilindros en línea lo convierte en uno de los roadsters más completos de los 90s.',
    { potencia: '321 CV', peso: '1.350 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  // ── MERCEDES-BENZ ─────────────────────────────────────────────────────────

  car('mercedes_190e_23_16', 'Mercedes-Benz 190E 2.3-16', ['Alemania'], 1984, 1988,
    ['Sedán', '2.3', 'DOHC', 'Tracción trasera'],
    'El 190E 2.3-16 fue el proyecto Cosworth de Mercedes: culata de 16 válvulas diseñada por Cosworth Engineering en un motor de 2.3 litros que entregaba 185 CV. En la inauguración del circuito de Nürburgring nuevo en 1984, 20 unidades —pilotadas por pilotos de F1 incluido Ayrton Senna— compitieron en la primera DTM. Un sedán ejecutivo disfrazado de corredor.',
    { potencia: '185 CV', peso: '1.270 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('mercedes_190e', 'Mercedes-Benz 190E 2.3', ['Alemania'], 1982, 1993,
    ['Sedán', '2.3', 'Tracción trasera'],
    'El "Baby Benz" fue el primer Mercedes compacto. La suspensión trasera de 5 brazos diseñada por Bruno Sacco estableció nuevo estándar de maniobrabilidad. Fiabilidad legendaria y calidad de construcción alemana al alcance de más compradores.',
    { potencia: '122 CV', peso: '1.200 kg', traccion: 'FR', velocidad_max: '194 km/h' }),

  car('mercedes_w123', 'Mercedes-Benz W123', ['Alemania'], 1975, 1985,
    ['Sedán', 'Familiar', 'Diesel', 'Tracción trasera'],
    'El W123 es el Mercedes más durable jamás fabricado: casos documentados de ejemplares con más de un millón de kilómetros. Las versiones diesel 240D y 300D son tan confiables que se convirtieron en los taxis más usados del mundo, especialmente en Oriente Medio y África. Su construcción es tan sólida que el mercado de segunda mano aún los valora altamente.',
    { potencia: '88 CV', peso: '1.390 kg', traccion: 'FR', velocidad_max: '160 km/h' }),

  car('mercedes_300sl_r107', 'Mercedes-Benz 300SL R107', ['Alemania'], 1971, 1989,
    ['Roadster', '3.0', 'V8', 'Tracción trasera'],
    'El R107 SL fue el descapotable de lujo más duradero de la historia: 18 años de producción casi sin cambios. Con motor V8 de 5.0 litros y el convertible hardtop incluido, era el descapotable de los famosos de los 70s y 80s. La combinación de lujo europeo, confiabilidad alemana y estilo atemporal lo hace uno de los Mercedes clásicos más buscados.',
    { potencia: '185 CV', peso: '1.680 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  car('mercedes_w198_gullwing', 'Mercedes-Benz 300SL W198 Gullwing', ['Alemania'], 1954, 1957,
    ['Deportivo', 'Gullwing', '3.0', 'Tracción trasera'],
    'El 300SL Gullwing es uno de los automóviles más importantes de la historia. Primer auto de producción con motor de inyección directa de gasolina, estructura de espacio tubular y las icónicas puertas de alas de gaviota necesarias por el alto umbral de la estructura. Ganó Le Mans en 1952 antes de la versión de calle. Hoy vale varios millones de euros.',
    { potencia: '215 CV', peso: '1.295 kg', traccion: 'FR', velocidad_max: '260 km/h' }),

  // ── VOLKSWAGEN ────────────────────────────────────────────────────────────

  car('vw_golf_gti_mk1', 'Volkswagen Golf GTI Mk1', ['Alemania'], 1976, 1983,
    ['Hatchback', 'Hot Hatch', '1.6'],
    'El Golf GTI Mk1 inventó el hot hatch: auto familiar compacto con motor potente, divertido y práctico. Motor Bosch K-Jetronic de 1.6 litros y 110 CV en 810 kg. Aceleraba de 0-100 en 9 segundos. Definió una categoría completa.',
    { potencia: '110 CV', peso: '810 kg', traccion: 'FF', velocidad_max: '182 km/h' }),

  car('vw_golf_gti_mk2', 'Volkswagen Golf GTI Mk2', ['Alemania'], 1983, 1992,
    ['Hatchback', 'Hot Hatch', '1.8'],
    'El Mk2 refinó la fórmula con mayor madurez: más espacio, mejor aerodinámica y motor 1.8 de 112 CV (o 16V con 139 CV). La versión 16V con tapa roja del motor es hoy objeto de culto.',
    { potencia: '112 CV', peso: '890 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('vw_golf_gti_mk3', 'Volkswagen Golf GTI Mk3 VR6', ['Alemania'], 1991, 1997,
    ['Hatchback', 'Hot Hatch', '2.8', 'VR6'],
    'El Mk3 introdujo el revolucionario motor VR6 de 2.8 litros —6 cilindros en una única culata en configuración estrecha— con 174 CV. El VR6 aportaba suavidad y torque de berlina alemana al chasis del GTI. Fue el Golf más lujoso hasta entonces y el favorito de quienes querían discreción combinada con rendimiento real.',
    { potencia: '174 CV', peso: '1.280 kg', traccion: 'FF', velocidad_max: '215 km/h' }),

  car('vw_corrado_g60', 'Volkswagen Corrado G60', ['Alemania'], 1988, 1995,
    ['Coupé', '1.8', 'Compresor', 'Tracción delantera'],
    'El Corrado fue el sucesor espiritual del Scirocco y uno de los coupés compactos más elegantes de su era. La versión G60 usaba un compresor volumétrico G-Lader de diseño único que entregaba 160 CV con respuesta instantánea. El alerón trasero que se desplegaba automáticamente a 120 km/h era un detalle tecnológico que anticipaba el futuro.',
    { potencia: '160 CV', peso: '1.185 kg', traccion: 'FF', velocidad_max: '220 km/h' }),

  car('vw_scirocco_mk1', 'Volkswagen Scirocco Mk1', ['Alemania'], 1974, 1981,
    ['Coupé', '1.6', 'Tracción delantera'],
    'El primer Scirocco fue diseñado por Giorgetto Giugiaro y fue durante un tiempo el coupé europeo más vendido. Con la mecánica del Golf original y una carrocería de líneas italianas impecables, combinaba practicidad alemana con estilo mediterráneo. La versión GTI con el mismo motor que el Golf GTI era uno de los coupés más accesibles del mercado.',
    { potencia: '110 CV', peso: '840 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('vw_beetle_1967', 'Volkswagen Escarabajo 1967', ['Alemania'], 1938, 2003,
    ['Berlina', '2 puertas', 'Motor trasero'],
    'El auto más producido de un solo modelo en la historia: más de 21 millones de unidades. Motor bóxer de 4 cilindros enfriado por aire, sin radiador, ubicado atrás. Diseñado por Ferdinand Porsche. El modelo del 67 incorpora los últimos cambios mecánicos significativos de la era clásica.',
    { potencia: '40 CV', peso: '760 kg', traccion: 'RR', velocidad_max: '118 km/h' }),

  // ── AUDI ──────────────────────────────────────────────────────────────────

  car('audi_quattro_ur', 'Audi Quattro Ur-quattro', ['Alemania'], 1980, 1991,
    ['Coupé', '2.2', 'Turbo', '4x4', 'Rally'],
    'El Quattro original fue la revolución más grande en la historia del rally: la tracción integral en un auto de carretera de alto rendimiento. Ganó el Campeonato del Mundo de Rally con Walter Röhrl y Hannu Mikkola. El motor 5 cilindros turbo de 200 CV en el auto de calle —y hasta 450 CV en versiones de competición— transformó para siempre el automóvil deportivo.',
    { potencia: '200 CV', peso: '1.290 kg', traccion: '4WD', velocidad_max: '220 km/h' }),

  car('audi_rs2', 'Audi RS2 Avant', ['Alemania'], 1994, 1995,
    ['Familiar', '2.2', 'Turbo', '4x4'],
    'El RS2 fue desarrollado en colaboración con Porsche —quien fabricó los motores, las pinzas de freno y los retrovisores— y fue el primer familiar de alto rendimiento del mundo. Con motor de 5 cilindros turbo de 315 CV, aceleraba de 0-100 en 4.8 segundos en 1994. Un Avant familiar que humillaba a supercars de la época.',
    { potencia: '315 CV', peso: '1.595 kg', traccion: '4WD', velocidad_max: '262 km/h' }),

  car('audi_tt_8n', 'Audi TT 8N', ['Alemania'], 1998, 2006,
    ['Coupé', 'Roadster', '1.8', 'Turbo'],
    'El primer TT fue un fenómeno de diseño: las líneas circulares de Hartmut Warkuss, interior completamente redondo y una identidad visual única. El motor 1.8T con 225 CV en versión quattro era genuinamente rápido. La versión de 180 CV de tracción delantera tuvo problemas de estabilidad en los primeros años, lo que llevó a un recall famoso.',
    { potencia: '225 CV', peso: '1.345 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('audi_80_b3', 'Audi 80 B3', ['Alemania'], 1986, 1991,
    ['Sedán', '1.8', 'Tracción delantera'],
    'El Audi 80 B3 fue el sedán compacto de referencia en Europa durante los 80s y principios de los 90s. Con carrocería diseñada para minimizar la resistencia aerodinámica —coeficiente Cd de 0.29 en una era donde 0.35 era lo normal— y la calidad de construcción Audi, estableció estándares de refinamiento que sus rivales tardaron años en igualar.',
    { potencia: '112 CV', peso: '1.080 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  // ── PORSCHE ───────────────────────────────────────────────────────────────

  car('porsche_911_964', 'Porsche 911 Carrera 964', ['Alemania'], 1989, 1994,
    ['Coupé', '3.6', 'Tracción trasera'],
    'La primera gran modernización del 911 desde 1963. Motor bóxer de 3.6 litros y 250 CV, primera en ofrecer Carrera 4 de tracción integral y ABS de serie. El comportamiento al límite exige concentración total del piloto por el peso trasero del motor.',
    { potencia: '250 CV', peso: '1.370 kg', traccion: 'RR', velocidad_max: '260 km/h' }),

  car('porsche_911_993', 'Porsche 911 993 Turbo', ['Alemania'], 1995, 1998,
    ['Coupé', '3.6', 'BiTurbo', '4x4'],
    'El 993 fue el último 911 de carrocería enfriada por aire, considerado el más bello de la saga. La versión Turbo con motor biturbo de 408 CV y tracción integral era tan rápida como supercars de precio doble. Es hoy el 911 clásico más valorizado del mercado con precios que siguen subiendo cada año.',
    { potencia: '408 CV', peso: '1.500 kg', traccion: '4WD', velocidad_max: '288 km/h' }),

  car('porsche_944_turbo', 'Porsche 944 Turbo', ['Alemania'], 1985, 1991,
    ['Coupé', '2.5', 'Turbo', 'Tracción trasera'],
    'El 944 Turbo fue el Porsche más accesible de los 80s sin comprometer las prestaciones. Con motor de 4 cilindros 2.5 litros turbo de 250 CV, distribución 50/50 y suspensión independiente en las cuatro ruedas, era genuinamente rápido y comunicativo. Fue el base para el exitoso Porsche 944 Turbo Cup de carreras.',
    { potencia: '250 CV', peso: '1.280 kg', traccion: 'FR', velocidad_max: '245 km/h' }),

  car('porsche_914', 'Porsche 914/6', ['Alemania'], 1969, 1976,
    ['Deportivo', 'Targa', 'Mid-engine', 'Tracción trasera'],
    'El 914 fue desarrollado en colaboración entre Porsche y Volkswagen para crear un deportivo más asequible. La versión /6 con el motor de 6 cilindros del 911 era genuinamente rápida y ganó su clase en Le Mans 1970. El techo Targa removible y el compartimiento de motor central creaban una experiencia de manejo única entre los Porsche de la época.',
    { potencia: '110 CV', peso: '940 kg', traccion: 'MR', velocidad_max: '200 km/h' }),

  car('porsche_boxster_986', 'Porsche Boxster 986', ['Alemania'], 1996, 2004,
    ['Roadster', '2.5', 'Mid-engine', 'Tracción trasera'],
    'El Boxster 986 fue el Porsche que salvó financieramente a la marca en los 90s, y de paso, uno de los roadsters más bien equilibrados jamás construidos. Motor bóxer mid-mounted de 2.5 litros, capota completamente automática y comportamiento en curva de referencia gracias a la ubicación central del motor.',
    { potencia: '204 CV', peso: '1.275 kg', traccion: 'MR', velocidad_max: '240 km/h' }),

  // ── OPEL ──────────────────────────────────────────────────────────────────

  car('opel_manta_a', 'Opel Manta A', ['Alemania'], 1970, 1975,
    ['Coupé', '1.9', 'Tracción trasera'],
    'El Manta A fue el coupé deportivo asequible más bello de Opel, con líneas que evocaban los muscle cars americanos en un formato europeo. Con tracción trasera y opciones de motor hasta 1.9 litros, fue el auto de los jóvenes alemanes de los 70s que querían estilo deportivo sin pagar precios de BMW o Porsche.',
    { potencia: '90 CV', peso: '970 kg', traccion: 'FR', velocidad_max: '175 km/h' }),

  car('opel_kadett_gsi', 'Opel Kadett GSi 16V', ['Alemania'], 1988, 1991,
    ['Hatchback', '2.0', '16V', 'Tracción delantera'],
    'El Kadett GSi con motor Redtop de 16 válvulas fue el hot hatch alemán alternativo al Golf GTI. Con 156 CV en una carrocería hatchback compacta y precio menor al Golf, fue opción seria para quienes querían prestaciones sin pagar la prima de la marca Volkswagen. Hoy es uno de los compactos alemanes de los 80s más difíciles de encontrar en buen estado.',
    { potencia: '156 CV', peso: '1.030 kg', traccion: 'FF', velocidad_max: '210 km/h' }),
];
