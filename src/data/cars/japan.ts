import { car } from './_helper';

export const JAPAN = [

  // ── TOYOTA ────────────────────────────────────────────────────────────────

  car('toyota_ae86_trueno', 'Toyota Corolla AE86 Trueno', ['Japón'], 1983, 1987,
    ['Coupé', '1.6', 'DOHC', 'Tracción trasera'],
    'El AE86 es quizás el auto japonés más influyente en la cultura del drift y el automovilismo popular. Su motor 4A-GE de 1.6 litros DOHC con 128 CV en apenas 940 kg de peso lo convertían en un auto increíblemente divertido y accesible. Inmortalizado en el manga "Initial D", sigue siendo uno de los autos clásicos más buscados y valorados del mundo.',
    { potencia: '128 CV', peso: '940 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('toyota_supra_a70', 'Toyota Supra MkIII (A70)', ['Japón'], 1986, 1992,
    ['Coupé', '3.0', 'Turbo'],
    'El Supra A70 fue el primer Supra completamente independiente del Celica, con su propio chasis y plataforma. La versión Turbo con motor 7M-GTE de 3.0 litros entregaba 232 CV con una sonoridad grave y característica. Fue uno de los deportivos japoneses más rápidos de los 80s y un precursor del legendario A80.',
    { potencia: '232 CV', peso: '1.450 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('toyota_supra_a80', 'Toyota Supra MkIV (A80)', ['Japón'], 1993, 2002,
    ['Coupé', '3.0', 'Turbo', 'JDM'],
    'El Supra MkIV con motor 2JZ-GTE biturbo se convirtió en leyenda gracias a su capacidad de aguantar más de 1.000 CV con modificaciones relativamente sencillas. El bloque de hierro fundido del 2JZ es casi indestructible. Inmortalizado en Fast & Furious, el A80 es hoy el JDM más buscado y valorizado del mercado.',
    { potencia: '320 CV', peso: '1.570 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_corolla_ae90', 'Toyota Corolla E90', ['Japón'], 1987, 1992,
    ['Sedán', '1.6', 'Tracción delantera'],
    'La sexta generación del Corolla marcó el paso definitivo de Toyota a la tracción delantera en este segmento. Con el motor 4A-FE de 1.587cc y diseño cuadrado característico de los 80s, fue un vendedor masivo a nivel mundial. En Chile se importó ampliamente y aún se mantiene en circulación gracias a su legendaria durabilidad.',
    { potencia: '95 CV', peso: '960 kg', traccion: 'FF', velocidad_max: '172 km/h' }),

  car('toyota_corolla_e100', 'Toyota Corolla E100', ['Japón'], 1992, 1997,
    ['Sedán', '1.6', 'Tracción delantera'],
    'El E100 refinó la fórmula del E90 con líneas más aerodinámicas y el 4A-FE mejorado con 102 CV. Fue el Corolla de mayor éxito comercial de los 90s a nivel global. Su fiabilidad casi mítica lo convirtió en favorito de flotas de taxi y transporte privado en toda Latinoamérica.',
    { potencia: '102 CV', peso: '990 kg', traccion: 'FF', velocidad_max: '173 km/h' }),

  car('toyota_corolla_e110', 'Toyota Corolla E110', ['Japón'], 1997, 2001,
    ['Sedán', '1.6', 'Tracción delantera'],
    'El E110 llevó la evolución del Corolla a un nivel más sofisticado con suspensión independiente en las cuatro ruedas y motores de mayor potencia. La versión 1.6 con motor 4A-FE alcanzaba los 110 CV. Mantuvo la reputación de fiabilidad que había forjado el E100 y siguió dominando las ventas en los mercados emergentes.',
    { potencia: '110 CV', peso: '1.020 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_mr2_sw10', 'Toyota MR2 SW10', ['Japón'], 1984, 1989,
    ['Deportivo', 'Mid-engine', '1.6', 'Tracción trasera'],
    'El primer MR2 fue una revolución: Toyota construyó un deportivo mid-engine asequible de nivel mundial. El motor 4A-GE de 128 CV ubicado centralmente detrás del conductor creaba un equilibrio y agilidad excepcionales. Diseñado en colaboración con Lotus, el SW10 ganó el título de "Coche del Año" en Japón en 1984 y marcó el inicio de una gran saga.',
    { potencia: '128 CV', peso: '940 kg', traccion: 'MR', velocidad_max: '195 km/h' }),

  car('toyota_mr2_sw20', 'Toyota MR2 SW20 Turbo', ['Japón'], 1989, 1999,
    ['Deportivo', 'Mid-engine', '2.0', 'Turbo'],
    'El SW20 elevó el MR2 a la categoría de superdeportivo accesible. Con motor 3S-GTE turbo de 245 CV en un chasis ligero de 1.200 kg, su relación potencia/peso era comparable a autos mucho más caros. Su comportamiento al límite era exigente —se ganó la fama de "widow maker"— pero en manos expertas era devastadoramente rápido.',
    { potencia: '245 CV', peso: '1.200 kg', traccion: 'MR', velocidad_max: '235 km/h' }),

  car('toyota_celica_st185', 'Toyota Celica GT-Four ST185', ['Japón'], 1989, 1993,
    ['Coupé', '2.0', 'Turbo', '4x4', 'Rally'],
    'El Celica GT-Four ST185 fue el arma de Toyota en el Campeonato Mundial de Rally, ganando el título de constructores en 1993 y 1994. Con motor 3S-GTE turbo de 235 CV y tracción integral, era la respuesta directa al Lancia Delta Integrale. Carlos Sainz ganó el WRC de pilotos en 1992 al volante de este auto, cerrando el ciclo glorioso del Celica en el rally.',
    { potencia: '235 CV', peso: '1.350 kg', traccion: '4WD', velocidad_max: '230 km/h' }),

  car('toyota_land_cruiser_fj40', 'Toyota Land Cruiser FJ40', ['Japón'], 1960, 1984,
    ['4x4', 'Todo Terreno', '2 puertas'],
    'El FJ40 es el 4x4 japonés más legendario, el que abrió los mercados de Oriente Medio, África y Latinoamérica a Toyota. Producido durante 24 años, su simplicidad mecánica y durabilidad en condiciones extremas lo convirtieron en el preferido de ejércitos y organizaciones de ayuda humanitaria. El motor 2F de 6 cilindros es prácticamente indestructible.',
    { potencia: '135 CV', peso: '1.600 kg', traccion: '4WD', velocidad_max: '130 km/h' }),

  car('toyota_land_cruiser_fj80', 'Toyota Land Cruiser FJ80', ['Japón'], 1990, 1997,
    ['4x4', 'Todo Terreno', 'SUV'],
    'El FJ80 fue el primer Land Cruiser de lujo real: carrocería monocasco, suspensión independiente delantera y una cabina que competía con los sedanes de lujo europeos, manteniendo capacidad todoterreno extrema. Con motor 4.5 litros de 6 cilindros en línea y 205 CV, era igualmente cómodo en autopista y en ruta de tierra. El favorito de jeques y presidentes.',
    { potencia: '205 CV', peso: '2.100 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_starlet_ep82', 'Toyota Starlet GT Turbo EP82', ['Japón'], 1989, 1995,
    ['Hatchback', '1.3', 'Turbo', 'Tracción delantera'],
    'El Starlet GT Turbo fue la pequeña bomba de Toyota: 133 CV desde un motor 4E-FTE de 1.3 litros en apenas 790 kg de peso. Esa relación potencia/peso lo hacía más rápido en aceleración que muchos autos mucho más grandes y caros. En Japón se usó extensamente en circuitos de gymkhana y es objeto de culto en el mundillo del tuning compacto.',
    { potencia: '133 CV', peso: '790 kg', traccion: 'FF', velocidad_max: '200 km/h' }),

  car('toyota_hilux_n50', 'Toyota Hilux N50', ['Japón'], 1978, 1983,
    ['Pick-up', '4x4', 'Todo Terreno'],
    'La generación N50 del Hilux estableció la reputación de indestructibilidad que persigue al nombre hasta hoy. El programa de pruebas de la BBC Top Gear donde intentaron destruir un Hilux sin lograrlo resume perfectamente esta generación. Con motor diesel o gasolina, era igualmente capaz en trabajo pesado y como vehículo familiar en los campos más remotos.',
    { potencia: '85 CV', peso: '1.200 kg', traccion: '4WD', velocidad_max: '130 km/h' }),

  car('toyota_rav4_gen1', 'Toyota RAV4 Gen1', ['Japón'], 1994, 2000,
    ['SUV', '2.0', '4x4'],
    'El RAV4 de primera generación inventó el segmento del SUV compacto urbano. Toyota tomó la mecánica de un sedán, la combinó con mayor altura y opciones de 4WD, y creó un nuevo tipo de vehículo que sería imitado por todos los fabricantes del mundo. Ligero, ágil y consumidor moderado, fue una revolución de mercado que definió los siguientes 30 años del sector SUV.',
    { potencia: '129 CV', peso: '1.290 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_crown_s100', 'Toyota Crown S100', ['Japón'], 1991, 1995,
    ['Sedán', '2.5', 'V6', 'Tracción trasera'],
    'La décima generación del Crown mantuvo la tradición de ser el sedán ejecutivo japonés por excelencia, con tracción trasera cuando el mercado migraba masivamente a la delantera. El motor 1JZ-GE de 2.5 litros V6 entregaba 170 CV con suavidad y refinamiento dignos de su posición. Es el Toyota preferido para modificaciones VIP style en Japón.',
    { potencia: '170 CV', peso: '1.580 kg', traccion: 'FR', velocidad_max: '190 km/h' }),

  car('toyota_tercel_el50', 'Toyota Tercel EL50', ['Japón'], 1994, 1999,
    ['Sedán', '1.5', 'Tracción delantera'],
    'El Tercel EL50 fue el sedán subcompacto más económico de Toyota durante los 90s. Con motor 5E-FE de 1.5 litros, era apreciado por su bajo consumo y sencillez mecánica. En Chile fue muy popular entre compradores de primer auto y en el mercado de taxis por su costo de mantención reducido.',
    { potencia: '82 CV', peso: '895 kg', traccion: 'FF', velocidad_max: '158 km/h' }),

  // ── TOYOTA (deportivos históricos) ────────────────────────────────────────

  car('toyota_2000gt', 'Toyota 2000GT', ['Japón'], 1967, 1970,
    ['Deportivo', 'Coupé', '2.0', 'DOHC'],
    'El 2000GT es el primer superdeportivo japonés y uno de los autos más hermosos jamás construidos en Asia. Desarrollado en colaboración con Yamaha, su motor DOHC de 2.0 litros y 150 CV descansaba en un chasis tubular con carrocería de acero. Apareció en la película de James Bond "Solo se vive dos veces" en versión Roadster. Hoy es el auto japonés más valorizado en subastas, con ejemplares alcanzando los 5 millones de dólares.',
    { potencia: '150 CV', peso: '1.120 kg', traccion: 'FR', velocidad_max: '220 km/h' }),

  car('toyota_celica_ta22', 'Toyota Celica TA22 (1a gen)', ['Japón'], 1970, 1977,
    ['Coupé', '1.6', 'Fastback'],
    'La primera generación del Celica llevó el diseño americano del muscle car a la escala japonesa. Su silueta fastback inspirada en los pony cars de Detroit fue una sensación en Tokio. El motor 2T-C de 1.6 litros entregaba 86 CV en un auto de apenas 900 kg. Fue el primer coupé deportivo japonés exitoso en mercados de exportación, sentando las bases de la cultura del auto deportivo japonés.',
    { potencia: '86 CV', peso: '900 kg', traccion: 'FR', velocidad_max: '170 km/h' }),

  car('toyota_supra_a60', 'Toyota Supra A60 (MkII)', ['Japón'], 1982, 1986,
    ['Coupé', '2.8', 'I6', 'Tracción trasera'],
    'El Supra A60 —conocido como Celica Supra fuera de Japón— fue el primer Supra con motor de seis cilindros en línea 5M-GE de 2.8 litros y 170 CV. Con pop-up headlights y diseño de cuña afilado, era el gran turismo japonés más refinado de su época. La batalla larga y el motor más grande lo diferenciaban claramente del Celica ordinario. Sentó todas las bases técnicas del A70 que vendría.',
    { potencia: '170 CV', peso: '1.300 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  car('toyota_supra_a90', 'Toyota GR Supra (A90)', ['Japón'], 2019, 9999,
    ['Coupé', '3.0', 'Turbo', 'Tracción trasera'],
    'El regreso del Supra después de 17 años llegó co-desarrollado con BMW (Z4 G29), compartiendo el motor B58 de 3.0 litros turbo con 340 CV. La colaboración fue polémica, pero el resultado es un deportivo con carrocería de aluminio, distribución de peso 50:50, diferencial activo trasero y un manejo extraordinariamente equilibrado. En 2021 llegó también la versión 2.0 con motor BMW B48 de 258 CV.',
    { potencia: '340 CV', peso: '1.570 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_celica_st162', 'Toyota Celica ST162 (4a gen)', ['Japón'], 1985, 1989,
    ['Coupé', '2.0', 'Tracción delantera'],
    'La cuarta generación del Celica marcó el giro controversial a la tracción delantera. El diseño cuña con pop-up headlights era moderno y el motor 3S-GTE turbo de 190 CV en la versión All-Trac era serio. La versión GT-Four con 4WD fue la antesala del campeón de rally que vendría en la ST185. En Japón se vendió como Celica GT-R con diferencial viscoso en el eje delantero.',
    { potencia: '190 CV', peso: '1.180 kg', traccion: 'FF', velocidad_max: '215 km/h' }),

  car('toyota_celica_st202', 'Toyota Celica ST202 (6a gen)', ['Japón'], 1993, 1999,
    ['Coupé', '2.0', 'Tracción delantera'],
    'La sexta generación del Celica adoptó líneas redondeadas y fluidas. El motor 3S-GE BEAMS de 2.0 litros entregaba 180 CV con respuesta suave y lineal. La versión SS-III con diferencial Torsen y frenos Brembo era la opción de los entusiastas. Su diseño fue tan influyente que muchos imitadores copiaron sus proporciones durante los 2000s.',
    { potencia: '180 CV', peso: '1.200 kg', traccion: 'FF', velocidad_max: '220 km/h' }),

  car('toyota_celica_zzt231', 'Toyota Celica ZZT231 (7a gen)', ['Japón'], 1999, 2006,
    ['Coupé', '1.8', 'Tracción delantera'],
    'La séptima y última generación del Celica fue la más radical en diseño, con faros con forma de lágrima y líneas de origami. El motor 2ZZ-GE de 1.8 litros con VVTL-i (control de alzada variable) entregaba 192 CV y hacía un sonido mecánico agudo y distintivo por encima de las 6.000 RPM. Toyota discontinuó el modelo en 2006, cerrando 36 años de historia del Celica.',
    { potencia: '192 CV', peso: '1.070 kg', traccion: 'FF', velocidad_max: '220 km/h' }),

  car('toyota_sprinter_trueno_ae111', 'Toyota Sprinter Trueno AE111', ['Japón'], 1995, 2000,
    ['Coupé', '1.6', 'DOHC', 'Tracción delantera'],
    'El AE111 Trueno fue el último de la línea Trueno y el último con motor 4A-GE, en su variante "Black Top" de 165 CV con 20 válvulas y cuerpos de mariposa individuales (ITB). Aunque adoptó tracción delantera rompiendo la tradición FR del AE86, su motor es considerado el último gran motor natural de Toyota: puro y revvante hasta las 8.500 RPM. El sonido de sus ITBs es inigualable.',
    { potencia: '165 CV', peso: '1.020 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('toyota_mr2_w30', 'Toyota MR2 Roadster (W30)', ['Japón'], 1999, 2007,
    ['Roadster', 'Mid-engine', '1.8', 'Tracción trasera'],
    'El MR2 W30 redujo al mínimo el concepto del roadster mid-engine: motor 1ZZ-FE de 1.8 litros y 138 CV, sin techo, sin asistentes electrónicos, sin peso innecesario. En apenas 975 kg era ágil, divertido y comunicativo. Los críticos lo compararon con el Miata como el auto deportivo más puro de su época. Hoy es el MR2 más asequible para coleccionismo y el favorito para iniciarse en el automovilismo deportivo.',
    { potencia: '138 CV', peso: '975 kg', traccion: 'MR', velocidad_max: '200 km/h' }),

  car('toyota_soarer_z30', 'Toyota Soarer Z30 (Lexus SC400)', ['Japón'], 1991, 2000,
    ['Coupé', '4.0', 'V8', 'Tracción trasera'],
    'El Soarer Z30 fue el gran turismo de Toyota: motor 1UZ-FE de 4.0 litros V8 y 260 CV, chasis rigidísimo y un interior con lujo absoluto. Fuera de Japón se comercializó como Lexus SC400. La variante 2JZ-GTE biturbo de 280 CV fue la más deseada por los entusiastas. Su suspensión trasera de triple eslabón fue prestada al Supra A80, confirmando su seriedad dinámica.',
    { potencia: '260 CV', peso: '1.750 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_altezza_rs200', 'Toyota Altezza RS200 (IS200/IS300)', ['Japón'], 1998, 2005,
    ['Sedán', '2.0', 'DOHC', 'Tracción trasera'],
    'El Altezza fue la respuesta de Toyota al BMW Serie 3: sedán compacto con tracción trasera y motor deportivo. El 3S-GE BEAMS de 2.0 litros y 210 CV en la versión RS200 era uno de los motores naturalmente aspirados más emocionantes de su época. Su diseño interior con relojes circulares independientes inició una moda global conocida como "Altezza lights" que copió toda la industria.',
    { potencia: '210 CV', peso: '1.280 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('toyota_gr86', 'Toyota GR86 (ZN8)', ['Japón'], 2021, 9999,
    ['Coupé', '2.4', 'DOHC', 'Tracción trasera'],
    'El GR86 de segunda generación recibió el motor que todos pedían: el FA24 Boxer de 2.4 litros con 235 CV y 250 Nm, un 43% más de torque que el FA20 del modelo anterior. Desarrollado con Subaru (BRZ ZD8), mantiene el espíritu deportivo accesible con tracción trasera, distribución de peso 53:47 y dirección extremadamente comunicativa. Es el sucesor espiritual directo del AE86.',
    { potencia: '235 CV', peso: '1.270 kg', traccion: 'FR', velocidad_max: '226 km/h' }),

  car('toyota_gr_yaris', 'Toyota GR Yaris (GXPA16)', ['Japón'], 2020, 9999,
    ['Hatchback', '1.6', 'Turbo', '4x4', 'Rally'],
    'El GR Yaris es el auto de homologación para el WRC, construido a mano en la línea Motomachi de Toyota. El motor G16E-GTS turbo de 1.6 litros y tres cilindros entrega 261 CV en apenas 1.280 kg. El sistema GR-FOUR de tracción integral permite distribución 60:40 ajustable. Es el único auto de producción con techo de fibra de carbono y spoiler de aluminio de serie desde fábrica.',
    { potencia: '261 CV', peso: '1.280 kg', traccion: '4WD', velocidad_max: '230 km/h' }),

  // ── TOYOTA (sedanes y ejecutivos JDM) ─────────────────────────────────────

  car('toyota_mark2_jzx100', 'Toyota Mark II JZX100', ['Japón'], 1996, 2001,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Mark II JZX100 es el sedán ejecutivo que se convirtió en ícono del drift y el tuning japonés. Con motor 1JZ-GTE biturbo de 2.5 litros y 280 CV en un chasis trasero liviano, su potencial para derrapar era enorme. La escena de drift japonesa lo adoptó como el "taxi del drift" por ser relativamente accesible y tener enorme potencial de modificación con el bloque 1JZ.',
    { potencia: '280 CV', peso: '1.500 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_chaser_jzx100', 'Toyota Chaser JZX100', ['Japón'], 1996, 2001,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Chaser JZX100 es el hermano del Mark II pero con línea de techo fastback más deportiva. Comparte el motor 1JZ-GTE biturbo de 280 CV. En Japón era el favorito entre los tres hermanos (Mark II, Chaser, Cresta) por su aspecto más coupé. La versión Tourer V con caja manual de 5 velocidades es hoy la más cotizada por coleccionistas de JDM.',
    { potencia: '280 CV', peso: '1.510 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_aristo_s160', 'Toyota Aristo S160 (Lexus GS)', ['Japón'], 1997, 2004,
    ['Sedán', '3.0', 'Turbo', 'Tracción trasera'],
    'El Aristo S160 es el sedán ejecutivo secreto del mundo JDM: externamente discreto, mecánicamente devastador. La versión V300 Vertex Edition con motor 2JZ-GTE biturbo de 320 CV fue una de las berlinas de tracción trasera más rápidas de los 90s. Fuera de Japón se comercializó como Lexus GS300/GS400. Su motor 2JZ lo convierte en plataforma favorita para builds de más de 1.000 CV.',
    { potencia: '320 CV', peso: '1.720 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_cressida_x60', 'Toyota Cressida (MX62)', ['Japón'], 1980, 1988,
    ['Sedán', '2.0', 'I6', 'Tracción trasera'],
    'El Cressida fue el sedán ejecutivo de Toyota en los mercados occidentales durante los 80s, ofreciendo equipamiento y acabado sin precedentes para un japonés de ese precio. Con motor 1G-EU de 2.0 litros y transmisión automática suave, era rival del Peugeot 505 y el BMW 520i. Fue un importante embajador de la imagen de calidad Toyota en Europa y América durante esa década.',
    { potencia: '110 CV', peso: '1.310 kg', traccion: 'FR', velocidad_max: '175 km/h' }),

  car('toyota_crown_s200', 'Toyota Crown S200', ['Japón'], 2008, 2012,
    ['Sedán', '2.5', 'V6', 'Tracción trasera'],
    'El Crown S200 mantuvo la tradición de ser el sedán ejecutivo con tracción trasera preferido en Japón. La versión Athlete con motor 2GR-FSE de 3.5 litros V6 y 318 CV era sorprendentemente rápida. El sistema GS de suspensión con amortiguadores adaptativos electrónicos ofrecía comodidad soberana. Es el Toyota favorito para modificaciones VIP style en Japón y la escena lowrider asiática.',
    { potencia: '215 CV', peso: '1.680 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('toyota_century_vg45', 'Toyota Century (VG45)', ['Japón'], 1997, 2017,
    ['Limousina', '5.0', 'V12', 'Tracción trasera'],
    'El Century fue el único auto de producción en serie con motor V12 fabricado en Japón. El 1GZ-FE de 5.0 litros y 280 CV era ensamblado a mano por un solo técnico durante días. El Emperador del Japón lo usa en ceremonias oficiales. La tapicería interior de lana Sensui requería 200 horas de tejido artesanal. Simboliza la perfección artesanal japonesa aplicada al automóvil de estado.',
    { potencia: '280 CV', peso: '2.160 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  // ── TOYOTA (Corolla y familia) ─────────────────────────────────────────────

  car('toyota_corolla_ke10', 'Toyota Corolla KE10 (1a gen)', ['Japón'], 1966, 1970,
    ['Sedán', '1.1', 'Tracción trasera'],
    'El primer Corolla cambió la historia del automóvil. Con motor 1K de 1.1 litros y tracción trasera, fue el primer auto japonés verdaderamente global. El eslogan "Es tan grande por dentro!" reflejaba cómo Toyota optimizó cada centímetro para el pasajero. Se vendió en 153 países y sentó las bases del auto compacto moderno. Hoy el Corolla es el auto más vendido de toda la historia.',
    { potencia: '60 CV', peso: '720 kg', traccion: 'FR', velocidad_max: '140 km/h' }),

  car('toyota_corolla_e70', 'Toyota Corolla E70', ['Japón'], 1979, 1983,
    ['Sedán', '1.3', 'Tracción trasera'],
    'La cuarta generación del Corolla fue la última con tracción trasera en los mercados principales. El motor 3K-C de 1.3 litros era sencillo y resistente. En muchos países latinoamericanos fue el primer Corolla importado masivamente. Su durabilidad extrema y sencillez mecánica instalaron el concepto de que "un Corolla no se muere", reputación que persiste hasta hoy.',
    { potencia: '75 CV', peso: '840 kg', traccion: 'FR', velocidad_max: '155 km/h' }),

  car('toyota_corolla_e120', 'Toyota Corolla E120', ['Japón'], 2001, 2006,
    ['Sedán', '1.8', 'Tracción delantera'],
    'El Corolla E120 fue una renovación importante con diseño moderno y motor 1ZZ-FE de 1.8 litros VVT-i. Primer Corolla en ofrecer airbags laterales de serie en todos los mercados. En Japón se comercializó como Allex y Fielder (wagon), mientras que en Chile y Latinoamérica llegó como la versión más equipada hasta entonces, incluyendo ABS y control de estabilidad.',
    { potencia: '132 CV', peso: '1.115 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('toyota_corolla_e210', 'Toyota Corolla E210 (12a gen)', ['Japón'], 2018, 9999,
    ['Sedán', 'Hatchback', '1.8', 'Híbrido', 'TNGA'],
    'El Corolla de 12a generación es el primero sobre plataforma TNGA (Toyota New Global Architecture), que redujo el centro de gravedad 25mm y mejoró la rigidez de la carrocería en 60%. El motor híbrido 1.8 VVT-i con 122 CV sistema total tiene consumo real de 4.5L/100km. También disponible con 2.0 Hybrid de 196 CV. En Chile fue el Corolla más vendido en la era post-pandemia.',
    { potencia: '122 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  // ── TOYOTA (Camry) ─────────────────────────────────────────────────────────

  car('toyota_camry_v10', 'Toyota Camry V10 (1a gen)', ['Japón'], 1982, 1986,
    ['Sedán', '1.8', 'Tracción delantera'],
    'El primer Camry revolucionó el segmento medio al ofrecer tracción delantera, motor transversal y nivel de equipamiento premium a precio accesible. El motor 2S-E de 1.8 litros con inyección electrónica era avanzado para la época. El interior espacioso y silencioso desafió directamente al Honda Accord. Este Camry estableció los valores que el modelo mantiene hasta hoy: comodidad, fiabilidad y espacio.',
    { potencia: '95 CV', peso: '1.050 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('toyota_camry_xv30', 'Toyota Camry XV30', ['Japón'], 2001, 2006,
    ['Sedán', '2.4', 'Tracción delantera'],
    'El Camry XV30 consolidó al modelo como el sedán familiar más vendido de Estados Unidos. Con motor 2AZ-FE de 2.4 litros y 158 CV, ofrecía una combinación de espacio interior, confort y fiabilidad que la competencia americana no podía igualar en precio. La versión V6 con 3MZ-FE de 3.0 litros y 210 CV era sorprendentemente rápida para un familiar de este tamaño.',
    { potencia: '158 CV', peso: '1.430 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('toyota_camry_xv70', 'Toyota Camry XV70 Híbrido', ['Japón'], 2017, 9999,
    ['Sedán', '2.5', 'Híbrido', 'TNGA'],
    'El Camry de octava generación sobre plataforma TNGA recuperó la emoción de conducir en un sedán familiar. El motor híbrido 2.5 litros con 218 CV sistema total tiene consumo de 4.2L/100km. El chasis TNGA bajó el centro de gravedad 25mm y el Cd es de 0.28. En Chile fue el primer Camry Híbrido disponible oficialmente y abrió el mercado de sedanes premium híbridos.',
    { potencia: '218 CV', peso: '1.625 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  // ── TOYOTA (híbridos y eléctricos) ────────────────────────────────────────

  car('toyota_prius_nhw10', 'Toyota Prius NHW10 (1a gen)', ['Japón'], 1997, 2003,
    ['Sedán', '1.5', 'Híbrido'],
    'El Prius de primera generación fue el primer auto híbrido de producción en serie del mundo, lanzado en Japón en diciembre de 1997. El motor 1NZ-FXE de 1.5 litros con motor eléctrico entregaba 70 CV totales con consumo de 5.5L/100km. Fue más una demostración de viabilidad tecnológica que un éxito comercial inmediato, pero abrió el camino a la revolución eléctrica automotriz.',
    { potencia: '70 CV', peso: '1.240 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('toyota_prius_nhw20', 'Toyota Prius NHW20 (2a gen)', ['Japón'], 2003, 2009,
    ['Hatchback', '1.5', 'Híbrido'],
    'El Prius de segunda generación fue el que estableció al híbrido como opción mainstream. Con carrocería hatchback de 5 puertas y mayor espacio interior, vendió 1.2 millones de unidades globalmente. El motor 1NZ-FXE mejorado con 76 CV sistema total y consumo de 4.5L/100km lo hacía el auto más eficiente del mercado. Fue adoptado masivamente como taxi ecológico en ciudades europeas.',
    { potencia: '76 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('toyota_prius_zvw30', 'Toyota Prius ZVW30 (3a gen)', ['Japón'], 2009, 2015,
    ['Hatchback', '1.8', 'Híbrido'],
    'El Prius de tercera generación con motor 2ZR-FXE de 1.8 litros y 136 CV sistema total estableció el récord de consumo de 3.9L/100km en ciclo mixto. El coeficiente aerodinámico de 0.25Cd era el más bajo de cualquier vehículo de producción en su momento. Vendió sobre 3 millones de unidades y fue la base de todo el ecosistema híbrido de Toyota: Prius V, Prius C y Lexus CT200h.',
    { potencia: '136 CV', peso: '1.380 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_yaris_p10', 'Toyota Yaris / Vitz P10 (1a gen)', ['Japón'], 1999, 2005,
    ['Hatchback', '1.0', '1.3', 'Tracción delantera'],
    'El Yaris P10 ganó el premio Coche del Año en Europa 2000, el primero para Toyota. Con motor 1SZ-FE de 1.0 litros y 65 CV en la base, su suspensión trasera de torsión y precisa dirección rack-and-pinion daban un manejo sorprendentemente dinámico. El enorme espacio interior para su tamaño gracias a la caja de cambios compacta fue un diferencial frente a los rivales europeos.',
    { potencia: '65 CV', peso: '830 kg', traccion: 'FF', velocidad_max: '155 km/h' }),

  // ── TOYOTA (Land Cruiser y 4x4) ────────────────────────────────────────────

  car('toyota_land_cruiser_70', 'Toyota Land Cruiser Serie 70', ['Japón'], 1984, 9999,
    ['4x4', 'Pick-up', 'Diesel', 'Todo Terreno'],
    'La Serie 70 es el Land Cruiser de trabajo que nunca debió dejar de fabricarse. Con motor diesel 1HZ de 4.2 litros de 6 cilindros en línea o el moderno 1VD-FTV V8, chasis en escalera reforzado y suspensión de ballesta trasera en pick-up, fue el vehículo preferido de la ONU, ejércitos y ONGs en todo el mundo. Aún en producción limitada, es el 4x4 más confiable jamás construido.',
    { potencia: '130 CV', peso: '1.850 kg', traccion: '4WD', velocidad_max: '140 km/h' }),

  car('toyota_land_cruiser_100', 'Toyota Land Cruiser 100 (UZJ100)', ['Japón'], 1998, 2007,
    ['SUV', '4.7', 'V8', '4x4'],
    'El Land Cruiser 100 fue el primer LC con motor V8, el 2UZ-FE de 4.7 litros y 235 CV. Su chasis en escalera soportaba hasta 3.5 toneladas de remolque, mientras el interior rivalizaba con el Mercedes-Benz Clase S en equipamiento. El sistema de control de descenso (DAC) y el diferencial central Torsen lo hacían igualmente capaz en desierto, nieve y cruce de ríos.',
    { potencia: '235 CV', peso: '2.430 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_land_cruiser_200', 'Toyota Land Cruiser 200 (URJ200)', ['Japón'], 2007, 2021,
    ['SUV', '4.6', 'V8', '4x4'],
    'El Land Cruiser 200 fue el pináculo del SUV todoterreno con lujo: motor V8 4.6 litros de 309 CV, diferencial central Torsen y sistema KDSS (Kinetic Dynamic Suspension) que desconecta la barra estabilizadora en off-road. Producido durante 14 años prácticamente sin cambios, es testimonio de la perfección alcanzada desde el primer día. Su valor de reventa supera al de muchos autos nuevos.',
    { potencia: '309 CV', peso: '2.720 kg', traccion: '4WD', velocidad_max: '210 km/h' }),

  car('toyota_land_cruiser_300', 'Toyota Land Cruiser 300 (VJA300)', ['Japón'], 2021, 9999,
    ['SUV', '3.5', 'V6', 'Twin-Turbo', '4x4'],
    'El Land Cruiser 300 reemplazó el V8 por un V6 biturbo F33A-FTV de 3.5 litros con 415 CV y 650 Nm, perdiendo 200 kg gracias a la plataforma TNGA-F. El sistema Multi-Terrain Monitor con 5 ángulos de cámara y los modos E-KDSS electrónicos lo hacen el todoterreno tecnológicamente más avanzado de la historia. En Chile tiene lista de espera de dos años desde su lanzamiento.',
    { potencia: '415 CV', peso: '2.520 kg', traccion: '4WD', velocidad_max: '210 km/h' }),

  car('toyota_prado_j90', 'Toyota Land Cruiser Prado J90', ['Japón'], 1996, 2002,
    ['SUV', '2.7', '3.4', 'V6', '4x4'],
    'El Prado J90 es el Land Cruiser Prado con la forma más icónica, con diseño cuadrado y robusto de los 90s. Con motor V6 5VZ-FE de 3.4 litros y 178 CV o el 2.7 naftero 3RZ-FE, era igualmente cómodo en ciudad y en sendero extremo. En Chile fue importado ampliamente en los 90s y su escasez de piezas lo hace hoy objeto de culto entre los off-roaders latinoamericanos.',
    { potencia: '178 CV', peso: '1.780 kg', traccion: '4WD', velocidad_max: '170 km/h' }),

  car('toyota_prado_j150', 'Toyota Land Cruiser Prado J150', ['Japón'], 2009, 2023,
    ['SUV', '2.8', 'Diesel', '4x4'],
    'El Prado J150 fue el más longevo de la familia Prado, con 14 años de producción incluyendo varios facelifts. El motor 1GD-FTV diesel de 2.8 litros con 204 CV y 500 Nm ofrecía el mejor equilibrio entre economía y capacidad de remolque. El sistema A-TRC y la suspensión KDSS lo convertían en todoterreno serio dentro de un envoltorio familiar y lujoso.',
    { potencia: '204 CV', peso: '2.200 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('toyota_fj_cruiser', 'Toyota FJ Cruiser (GSJ15)', ['Japón'], 2006, 2014,
    ['SUV', '4.0', 'V6', '4x4'],
    'El FJ Cruiser recuperó el diseño retro del FJ40 en un vehículo moderno. Con motor 1GR-FE V6 de 4.0 litros y 270 CV, chasis en escalera y diferencial trasero con bloqueo electrónico, tenía capacidades todoterreno serias. Las puertas traseras con apertura contrarrotante y el techo bicolor blanco lo hacían inmediatamente reconocible. Su discontinuación en 2014 fue lamentada por miles de fanáticos.',
    { potencia: '270 CV', peso: '1.990 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  // ── TOYOTA (Hilux y comerciales) ──────────────────────────────────────────

  car('toyota_hilux_n70', 'Toyota Hilux N70 (7a gen)', ['Japón'], 2004, 2015,
    ['Pick-up', '2.5', '3.0', 'Diesel', '4x4'],
    'El Hilux N70 llevó la pick-up a un nivel de refinamiento que competía con los SUVs. Con motor 2KD-FTV diesel de 2.5 litros/144 CV o 1KD-FTV de 3.0 litros/171 CV, suspensión doble horquilla delantera y eje rígido trasero con ballesta. En Latinoamérica fue la pick-up dominante por una década, imbatible en durabilidad y valor de reventa. El motor 3.0 diesel es prácticamente indestructible.',
    { potencia: '171 CV', peso: '1.830 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_hilux_n80', 'Toyota Hilux N80 (8a gen)', ['Japón'], 2015, 9999,
    ['Pick-up', '2.8', 'Diesel', '4x4'],
    'El Hilux N80 sobre plataforma IMV-2 es el más refinado de la historia, con motor 1GD-FTV de 2.8 litros y 204 CV. La cabina doble ofrece conectividad Android Auto/Apple CarPlay y sistema de frenado ABS con EBD de serie. Su valor de reventa en Chile supera al de muchos autos nuevos. La versión GR Sport con suspensión Bilstein reforzada elevó el listón del segmento.',
    { potencia: '204 CV', peso: '1.960 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_rav4_gen2', 'Toyota RAV4 Gen2 (XA20)', ['Japón'], 2000, 2005,
    ['SUV', '2.0', '4x4'],
    'El RAV4 de segunda generación creció para acomodar 5 pasajeros cómodamente, abandonando la versión de 3 puertas. Con motor 1AZ-FE de 2.0 litros y 148 CV y VVT-i, fue el primer RAV4 con opciones de 4WD full-time y ABS en todas las versiones. Consolidó al modelo como referencia del SUV compacto familiar y generó una horda de imitadores de todos los fabricantes del mundo.',
    { potencia: '148 CV', peso: '1.460 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  car('toyota_rav4_gen5', 'Toyota RAV4 Gen5 Híbrido (XA50)', ['Japón'], 2018, 9999,
    ['SUV', '2.5', 'Híbrido', '4x4', 'TNGA'],
    'El RAV4 de quinta generación sobre plataforma TNGA es el SUV más vendido del mundo. El motor híbrido 2.5 litros entrega 222 CV con consumo de 5.0L/100km y el sistema E-Four Hybrid usa motores eléctricos independientes en cada eje para 4WD sin eje de transmisión mecánica. Diseño exterior Adventure más agresivo, interior premium con pantalla de 8" en todos los niveles.',
    { potencia: '222 CV', peso: '1.830 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  car('toyota_fortuner_an150', 'Toyota Fortuner AN150 (1a gen)', ['Japón'], 2004, 2015,
    ['SUV', '3.0', 'Diesel', '4x4'],
    'El Fortuner nació en Tailandia sobre la plataforma IMV compartida con el Hilux N70. Con motor 1KD-FTV diesel de 3.0 litros y 171 CV, su chasis en escalera permite remolque de hasta 3.0 toneladas. En Latinoamérica y Asia Pacífico fue el SUV 4x4 más vendido de su categoría durante una década. Su bajo costo de mantención y disponibilidad de repuestos lo hacen popular en zonas remotas.',
    { potencia: '171 CV', peso: '1.920 kg', traccion: '4WD', velocidad_max: '170 km/h' }),

  car('toyota_hiace_h200', 'Toyota HiAce H200 (5a gen)', ['Japón'], 2004, 9999,
    ['Furgoneta', '2.8', 'Diesel', 'Comercial'],
    'El HiAce H200 es el estándar mundial de las furgonetas comerciales: producido desde 2004 prácticamente sin cambios estructurales. Su diseño cab-over permite el máximo aprovechamiento del espacio de carga. Con motor 1GD-FTV de 2.8 litros diesel, es el vehículo comercial más confiable en Latinoamérica, Oceanía y Asia. En Chile domina el mercado de transporte escolar y la industria del turismo.',
    { potencia: '144 CV', peso: '1.995 kg', traccion: 'FR', velocidad_max: '155 km/h' }),

  car('toyota_previa_tcr10', 'Toyota Previa / Estima (TCR10)', ['Japón'], 1990, 2000,
    ['MPV', '2.4', 'Mid-engine', 'Tracción trasera'],
    'La Previa/Estima es la minivan más inusual jamás producida: motor 2TZ-FE de 2.4 litros montado horizontalmente bajo el piso, entre los ejes, en configuración mid-engine, con tracción trasera. Este diseño único permitió una carrocería oval aerodinámica (Cd 0.29) con piso completamente plano. Con opción de supercharger y 4WD, fue la referencia técnica de las minivans de los 90s.',
    { potencia: '138 CV', peso: '1.840 kg', traccion: 'FR', velocidad_max: '175 km/h' }),

  // ── TOYOTA (Celica generaciones completas) ────────────────────────────────

  car('toyota_celica_supra_a40_mki', 'Toyota Celica Supra A40 (MkI)', ['Japón'], 1978, 1981,
    ['Coupé', '2.6', 'I6', 'Tracción trasera'],
    'El Celica Supra A40 fue el primer Toyota con la denominación "Supra", nacido como variante del Celica A20 con motor de 6 cilindros 4M de 2.6 litros. Más grande, más lujoso y más potente que el Celica base, fue el primer Toyota en alcanzar los 195 km/h en pruebas de fábrica. Sentó las bases del gran turismo japonés que el A60 y el A70 llevarían a su máxima expresión.',
    { potencia: '130 CV', peso: '1.290 kg', traccion: 'FR', velocidad_max: '195 km/h' }),

  car('toyota_celica_a20', 'Toyota Celica RA28 (2a gen)', ['Japón'], 1977, 1981,
    ['Coupé', '2.0', 'Liftback', 'Tracción trasera'],
    'La segunda generación del Celica adoptó líneas más americanas con frontal de doble farol rectangular. El motor 18R-GE de 2.0 litros con doble árbol de levas entregaba 128 CV. La versión liftback de tres puertas fue la más vendida y la primera en exportarse masivamente a Estados Unidos. Esta generación fue la base del primer Celica Supra con motor de 6 cilindros.',
    { potencia: '128 CV', peso: '1.000 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('toyota_celica_a40', 'Toyota Celica TA40 (3a gen)', ['Japón'], 1981, 1985,
    ['Coupé', '2.0', 'Liftback', 'Tracción trasera'],
    'La tercera generación del Celica fue la más estadounidense en diseño, con líneas cuadradas influenciadas por el Mustang de la época. El motor 2T-GE twin-cam de 128 CV en la versión GT y el GT-S con inyección electrónica. Fue la última generación del Celica con tracción trasera y la que estableció definitivamente su identidad como el coupé deportivo personal de Toyota.',
    { potencia: '128 CV', peso: '1.040 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('toyota_celica_st205', 'Toyota Celica GT-Four ST205 (WRC)', ['Japón'], 1994, 1999,
    ['Coupé', '2.0', 'Turbo', '4x4', 'Rally'],
    'El Celica GT-Four ST205 fue el arma de Toyota en el WRC de mediados de los 90s. Con motor 3S-GTE de 2.0 litros biturbo secuencial y 255 CV, ganó el campeonato de constructores en 1994. Didier Auriol fue campeón de pilotos ese año al volante de este auto. La versión de calle con 250 CV y sistema Super-AYC era la respuesta directa al Mitsubishi Lancer Evo y al Subaru Impreza WRX.',
    { potencia: '255 CV', peso: '1.410 kg', traccion: '4WD', velocidad_max: '235 km/h' }),

  // ── TOYOTA (Corolla generaciones completas) ────────────────────────────────

  car('toyota_corolla_levin_ae86', 'Toyota Corolla Levin AE86', ['Japón'], 1983, 1987,
    ['Coupé', '1.6', 'DOHC', 'Tracción trasera'],
    'El Corolla Levin AE86 es el hermano gemelo del Trueno: mismo chasis FR, mismo motor 4A-GE de 128 CV, pero con faros fijos tipo "shark nose" en lugar de los pop-up del Trueno. La diferencia es puramente estética aunque los puristas debaten cuál se ve mejor. Comparte la misma leyenda del AE86 y aparece junto al Trueno en Initial D como auto secundario de los rivales.',
    { potencia: '128 CV', peso: '940 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('toyota_corolla_e30', 'Toyota Corolla E30 (2a gen)', ['Japón'], 1970, 1974,
    ['Sedán', '1.2', 'Tracción trasera'],
    'La segunda generación del Corolla llegó con motor 3K de 1.2 litros más potente y carrocería renovada con más espacio interior. Fue el primer Corolla en ofrecer versión wagon (Corolla Van) y la primera generación exportada masivamente a Europa. Su fiabilidad y bajo costo de mantención lo convirtieron en el favorito de conductores novatos en todo el mundo.',
    { potencia: '68 CV', peso: '750 kg', traccion: 'FR', velocidad_max: '145 km/h' }),

  car('toyota_corolla_e50', 'Toyota Corolla E50 (3a gen)', ['Japón'], 1974, 1979,
    ['Sedán', '1.2', '1.6', 'Tracción trasera'],
    'La tercera generación del Corolla fue la que consolidó al modelo como el más vendido del mundo por primera vez. El motor 2K de 1.2 litros o el 2T-C de 1.6 litros daban opciones para todos los mercados. En Latinoamérica esta generación fue importada desde Brasil y vendida en versión sedán y coupé, sentando la base de la cultura del Corolla en la región.',
    { potencia: '87 CV', peso: '820 kg', traccion: 'FR', velocidad_max: '155 km/h' }),

  car('toyota_corolla_e80', 'Toyota Corolla E80 (5a gen)', ['Japón'], 1983, 1987,
    ['Sedán', '1.3', '1.6', 'Tracción delantera'],
    'El Corolla E80 marcó la transición masiva a la tracción delantera. El motor 3A-U de 1.3 litros era la versión base, mientras que el 4A-GE de 1.6 litros DOHC con 128 CV en la versión AE82 GT-S era el más deportivo de su clase. Es el antepasado directo del AE86 Trueno, compartiendo el mismo motor 4A-GE aunque en un chasis de tracción delantera.',
    { potencia: '128 CV', peso: '900 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('toyota_corolla_e130', 'Toyota Corolla E130 / Altis', ['Japón'], 2006, 2013,
    ['Sedán', '1.6', '1.8', 'Tracción delantera'],
    'El Corolla E130 —llamado Altis en Asia— fue el más vendido en su periodo con motor 1ZR-FE de 1.6 litros VVT-i. Fue el primer Corolla con ESP de serie en todas las versiones y el primero producido simultáneamente en más de 10 países. En Chile dominó el mercado de sedanes medianos durante años, especialmente en flotas corporativas por su bajo costo por kilómetro.',
    { potencia: '124 CV', peso: '1.195 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('toyota_corolla_cross', 'Toyota Corolla Cross (XG10)', ['Japón'], 2020, 9999,
    ['SUV', '1.8', 'Híbrido', 'TNGA'],
    'El Corolla Cross es el SUV compacto híbrido más vendido de Toyota en Latinoamérica. Combina la plataforma TNGA del Corolla E210 con carrocería SUV elevada. El motor híbrido 1.8 litros con 122 CV sistema total y consumo de 5.3L/100km lo posiciona como alternativa eficiente al RAV4. En Chile fue récord de ventas en su segmento desde el primer mes de lanzamiento.',
    { potencia: '122 CV', peso: '1.430 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('toyota_gr_corolla', 'Toyota GR Corolla (GZEA10)', ['Japón'], 2022, 9999,
    ['Hatchback', '1.6', 'Turbo', '4x4'],
    'El GR Corolla usa el mismo motor G16E-GTS de 1.6 litros turbo del GR Yaris, pero llevado a 304 CV. El sistema GR-FOUR con distribución 60:40 ajustable y diferencial de torsen trasero lo convierten en el hot hatch más potente de Toyota. La versión MORIZO Edition, sin asientos traseros y con Brembo de fábrica, pesa 20 kg menos y es la más buscada por coleccionistas.',
    { potencia: '304 CV', peso: '1.470 kg', traccion: '4WD', velocidad_max: '240 km/h' }),

  // ── TOYOTA (Camry generaciones) ────────────────────────────────────────────

  car('toyota_camry_xv20', 'Toyota Camry XV20', ['Japón'], 1996, 2001,
    ['Sedán', '2.2', 'Tracción delantera'],
    'El Camry XV20 fue el primero con líneas redondeadas y fluidas que alejaron al modelo del look cuadrado de los 80s. El motor 5S-FE de 2.2 litros y 133 CV o el V6 1MZ-FE de 3.0 litros y 192 CV daban opciones para todos los bolsillos. En Estados Unidos fue elegido sedán del año tres años consecutivos, consolidando la reputación de confort y fiabilidad que el Camry mantiene hasta hoy.',
    { potencia: '133 CV', peso: '1.360 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('toyota_camry_xv50', 'Toyota Camry XV50', ['Japón'], 2011, 2017,
    ['Sedán', '2.5', 'Tracción delantera'],
    'El Camry XV50 fue el más dinámico en diseño hasta esa fecha, con líneas más angulosas y deportivas. El motor 2AR-FE de 2.5 litros y 178 CV con CVT daba buena respuesta. La versión híbrida XLE con motor 2.5 híbrido y 200 CV sistema total era la opción más eficiente del segmento. Fue el primer Camry con control de crucero adaptativo de serie en todos los mercados.',
    { potencia: '178 CV', peso: '1.460 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  // ── TOYOTA (Crown historia completa) ──────────────────────────────────────

  car('toyota_crown_s10', 'Toyota Crown S10 (1a gen)', ['Japón'], 1955, 1962,
    ['Sedán', '1.5', 'Tracción trasera'],
    'El Crown S10 fue el primer automóvil diseñado desde cero por Toyota y el primero concebido para exportación. Con motor R de 1.5 litros, era el sedán ejecutivo japonés por excelencia mientras el país reconstruía su industria. Toyota lo envió a Estados Unidos en 1957, siendo uno de los primeros autos japoneses en llegar. Los problemas de calidad en ese primer intento exportador fueron lecciones que forjaron la obsesión de Toyota por la fiabilidad.',
    { potencia: '48 CV', peso: '1.140 kg', traccion: 'FR', velocidad_max: '130 km/h' }),

  car('toyota_crown_s130', 'Toyota Crown S130 (8a gen)', ['Japón'], 1987, 1991,
    ['Sedán', '2.0', '2.5', 'Tracción trasera'],
    'El Crown S130 introdujo el motor 1G-GZE sobrealimentado de 2.0 litros y 170 CV, siendo el primer Toyota de producción con compresor volumétrico. También fue el primer Crown con ABS de serie y suspensión activa electrónica opcional. En Japón fue ampliamente usado como taxi de lujo. La versión Twin Cam 24V con motor 1JZ fue considerada excesivamente potente para un taxi.',
    { potencia: '170 CV', peso: '1.530 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('toyota_crown_s170', 'Toyota Crown S170 (10a gen)', ['Japón'], 1999, 2003,
    ['Sedán', '2.5', '3.0', 'Tracción trasera'],
    'El Crown S170 es uno de los más queridos de la historia del modelo, con diseño que equilibraba elegancia clásica y modernidad. La versión 3.0 con motor 2JZ-GE de 220 CV era suave y silenciosa. El sistema de suspensión hidráulica activa EMVHS mantenía el auto perfectamente nivelado en cualquier condición de carga. Es el Crown más popular entre los aficionados al estilo VIP japonés.',
    { potencia: '220 CV', peso: '1.620 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('toyota_crown_crossover', 'Toyota Crown Crossover (S235)', ['Japón'], 2022, 9999,
    ['Crossover', '2.5', 'Híbrido', 'TNGA'],
    'El Crown de 16a generación rompió con 67 años de tradición al adoptar carrocería fastback tipo crossover sobre plataforma TNGA. El motor híbrido 2.5 litros con E-Four entrega 236 CV sistema total. El diseño de luces boomerang y la plataforma elevada lo diferencian radicalmente de sus predecesores. Marcó el fin del Crown sedán tradicional e inició una nueva era para el modelo más longevo de Toyota.',
    { potencia: '236 CV', peso: '1.850 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  // ── TOYOTA (JDM sedanes adicionales) ──────────────────────────────────────

  car('toyota_mark2_jzx81', 'Toyota Mark II JZX81', ['Japón'], 1988, 1992,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Mark II JZX81 fue la generación que introdujo el legendario motor 1JZ-GTE biturbo de 2.5 litros y 280 CV. Con chasis más rígido y líneas cuadradas características de los 80s tardíos, fue el primer Mark II que los entusiastas del drift tomaron en serio. Su transmisión manual W58 es muy buscada para conversiones de competición y el motor 1JZ define toda una era del JDM.',
    { potencia: '280 CV', peso: '1.460 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_mark2_jzx90', 'Toyota Mark II JZX90', ['Japón'], 1992, 1996,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Mark II JZX90 refinó la fórmula con líneas más redondeadas pero mantuvo el 1JZ-GTE de 280 CV. Fue el primer Mark II con ABS y airbags de serie. En la escena drift japonesa comparte base con el JZX100 pero tiene un carácter más crudo y directo. El modelo Tourer S con frenos Brembo y diferencial Torsen es el más buscado por coleccionistas de la familia JZX.',
    { potencia: '280 CV', peso: '1.480 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_chaser_jzx90', 'Toyota Chaser JZX90', ['Japón'], 1992, 1996,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Chaser JZX90 es el hermano del Mark II JZX90 con carrocería más deportiva y spoiler de fábrica. Con el mismo motor 1JZ-GTE de 280 CV, su diseño más agresivo lo convirtió en favorito de la escena street racing japonesa de los 90s. La versión Avante Slash con suspensión rebajada y llantas de fábrica era la opción más deportiva disponible sin modificar.',
    { potencia: '280 CV', peso: '1.490 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_cresta_jzx100', 'Toyota Cresta JZX100', ['Japón'], 1996, 2001,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Cresta JZX100 completa la trinidad JZX100 junto al Mark II y el Chaser. Era el más lujoso y conservador de los tres, con diseño formal orientado al cliente ejecutivo. Con el mismo 1JZ-GTE de 280 CV pero interior más orientado al confort, fue el menos popular en drift pero el más valorado como coleccionismo. Es el más escaso hoy en buen estado.',
    { potencia: '280 CV', peso: '1.520 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('toyota_mark_x_grx120', 'Toyota Mark X GRX120', ['Japón'], 2004, 2009,
    ['Sedán', '2.5', '3.0', 'V6', 'Tracción trasera'],
    'El Mark X reemplazó al Mark II con motores V6: el 4GR-FSE de 2.5 litros y 215 CV, y el 3GR-FSE de 3.0 litros y 256 CV con inyección directa. Fue el último sedán de tracción trasera de Toyota para el mercado doméstico japonés. Su chasis fue la base del Lexus GS350, confirmando su posicionamiento premium y el cierre de una era de los sedanes JDM traseros.',
    { potencia: '215 CV', peso: '1.550 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  car('toyota_soarer_z20', 'Toyota Soarer Z20 (2a gen)', ['Japón'], 1986, 1991,
    ['Coupé', '2.0', '3.0', 'Turbo', 'Tracción trasera'],
    'El Soarer Z20 fue el primer Toyota con motor turbo en la gama ejecutiva. La versión 3.0GT con 7M-GTE de 230 CV era el auto más rápido de Japón a finales de los 80s. Su tablero digital completo con pantalla LCD fue una sensación en el Salón de Tokio de 1986. El diseño afilado y futurista con spoiler trasero integrado influenció toda la industria japonesa de los 80s.',
    { potencia: '230 CV', peso: '1.590 kg', traccion: 'FR', velocidad_max: '240 km/h' }),

  car('toyota_carina_at190', 'Toyota Carina E (AT190)', ['Japón'], 1992, 1997,
    ['Sedán', '1.6', '2.0', 'Tracción delantera'],
    'La Carina E fue el sedán familiar de Toyota para Europa, construida en Derby (Reino Unido) desde 1992. Con motor 4A-FE de 1.6 litros o el 3S-FE de 2.0 litros, ofrecía espacio familiar y manejo confiable. Fue uno de los primeros Toyota fabricados en Europa y ganó el premio "Más fiable del año" de What Car? durante tres años consecutivos.',
    { potencia: '114 CV', peso: '1.140 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('toyota_corona_rt80', 'Toyota Corona RT80 (4a gen)', ['Japón'], 1969, 1973,
    ['Sedán', '1.9', 'Tracción trasera'],
    'La Corona RT80 fue el Toyota más exportado de los años 60s y 70s, compitiendo con el VW Beetle en el mercado americano. Con motor 8R de 1.9 litros y mecánica sencilla, era extraordinariamente fiable para la época. En varios países latinoamericanos fue el primer auto japonés que muchas familias compraron, inaugurando la confianza en la marca Toyota en la región.',
    { potencia: '110 CV', peso: '1.020 kg', traccion: 'FR', velocidad_max: '165 km/h' }),

  car('toyota_avalon_mcx10', 'Toyota Avalon MCX10 (1a gen)', ['Japón'], 1994, 1999,
    ['Sedán', '3.0', 'V6', 'Tracción delantera'],
    'El Avalon fue la respuesta de Toyota al sedán americano grande: tracción delantera con motor V6 1MZ-FE de 3.0 litros y 200 CV, interior amplísimo y equipamiento de lujo. Diseñado para competir con el Buick LeSabre y el Ford Taurus, fue el Toyota más grande disponible hasta la llegada del Sequoia. Su suavidad de marcha en carretera era el principal argumento de venta.',
    { potencia: '200 CV', peso: '1.540 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  // ── TOYOTA (Starlet generaciones) ─────────────────────────────────────────

  car('toyota_starlet_kp61', 'Toyota Starlet KP61', ['Japón'], 1978, 1984,
    ['Hatchback', '1.3', 'Tracción trasera'],
    'El Starlet KP61 es el pequeño deportivo olvidado de Toyota: hatchback de 3 puertas con tracción trasera, motor 3K-H de 1.3 litros y apenas 730 kg. En versión SE-L con carburador doble era sorprendentemente ágil. La comunidad del tuning japonés lo convirtió en plataforma de gymkhana, montándole el motor 4A-GE del AE86. Una pequeña leyenda underground de la escena JDM.',
    { potencia: '68 CV', peso: '730 kg', traccion: 'FR', velocidad_max: '155 km/h' }),

  car('toyota_starlet_ep71', 'Toyota Starlet EP71 Turbo S', ['Japón'], 1984, 1989,
    ['Hatchback', '1.3', 'Turbo', 'Tracción delantera'],
    'El Starlet EP71 Turbo S fue la transición del KP61: adoptó tracción delantera pero mantuvo el espíritu de bomba compacta con motor 2E-TELU turbo de 1.3 litros y 110 CV en apenas 760 kg. Precursor directo del EP82 GT Turbo de 1989, su caja de 5 velocidades corta y la suspensión MacPherson le daban un manejo muy preciso para su precio.',
    { potencia: '110 CV', peso: '760 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  // ── TOYOTA (Prius e híbridos adicionales) ─────────────────────────────────

  car('toyota_prius_zvw50', 'Toyota Prius ZVW50 (4a gen)', ['Japón'], 2015, 2022,
    ['Hatchback', '1.8', 'Híbrido', 'TNGA'],
    'El Prius de cuarta generación sobre plataforma TNGA fue el más eficiente de su era con 3.4L/100km. El diseño angular y provocador fue controvertido pero aseguró reconocimiento inmediato. El coeficiente aerodinámico de 0.24Cd era el más bajo en producción masiva del mundo. La versión Prime enchufable añadió 68 km de autonomía eléctrica pura.',
    { potencia: '122 CV', peso: '1.365 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_prius_fxea50', 'Toyota Prius (5a gen)', ['Japón'], 2022, 9999,
    ['Hatchback', '2.0', 'Híbrido', 'TNGA'],
    'El Prius de quinta generación es el más hermoso de la historia del modelo, reconociendo que el diseño del ZVW50 fue demasiado radical. El motor híbrido 2.0 litros con 223 CV sistema total lo hace el Prius más rápido jamás fabricado. La versión PHEV con batería de 13.6 kWh ofrece 68 km eléctricos puros. Fue elegido Auto del Año 2023 en Japón.',
    { potencia: '223 CV', peso: '1.420 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_aqua_nhp10', 'Toyota Aqua / Prius C (NHP10)', ['Japón'], 2011, 2021,
    ['Hatchback', '1.5', 'Híbrido'],
    'El Aqua (Prius C fuera de Japón) fue el híbrido más compacto y económico de Toyota. Con motor 1NZ-FXE de 1.5 litros y 74 CV sistema total, su consumo de 3.0L/100km (ciclo JC08) fue el más bajo de cualquier auto de producción en su lanzamiento. En Japón fue el auto más vendido durante tres años consecutivos entre 2012 y 2014, un hito sin precedentes.',
    { potencia: '74 CV', peso: '1.075 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('toyota_mirai', 'Toyota Mirai (Fuel Cell)', ['Japón'], 2014, 9999,
    ['Sedán', 'Hidrógeno', 'Fuel Cell'],
    'El Mirai es el primer sedán de hidrógeno de producción en serie del mundo. La celda de combustible convierte hidrógeno en electricidad para impulsar un motor de 182 CV. Recarga en 5 minutos con autonomía de 650 km. La segunda generación (2020) adoptó plataforma GA-L con tracción trasera y diseño premium de Lexus. Toyota lo construyó como demostración de que el hidrógeno puede ser el futuro del transporte limpio.',
    { potencia: '182 CV', peso: '1.900 kg', traccion: 'FR', velocidad_max: '175 km/h' }),

  car('toyota_bz4x', 'Toyota bZ4X (ZYM20)', ['Japón'], 2022, 9999,
    ['SUV', 'Eléctrico', '4x4'],
    'El bZ4X es el primer BEV puro de Toyota en producción masiva, co-desarrollado con Subaru (Solterra). La versión AWD con dos motores entrega 218 CV y 500 km de autonomía WLTP. Carga rápida DC de 150 kW. El volante cuadrado y la pantalla de 12.3" son distintivos. Toyota eligió celdas de hierro-fosfato de litio (LFP) por su mayor durabilidad y seguridad térmica.',
    { potencia: '218 CV', peso: '2.000 kg', traccion: '4WD', velocidad_max: '160 km/h' }),

  // ── TOYOTA (Yaris generaciones) ────────────────────────────────────────────

  car('toyota_yaris_xp130', 'Toyota Yaris XP130 (3a gen)', ['Japón'], 2011, 2019,
    ['Hatchback', '1.0', '1.33', 'Tracción delantera'],
    'El Yaris XP130 fue el primero fabricado en Francia (Valenciennes) para el mercado europeo. Con motor 1KR-FE de 1.0 litros y 69 CV o el Dual-VVT-i de 1.33 litros y 100 CV, ofrecía mayor variedad que su predecesor. La versión híbrida con motor 1.5 litros y 100 CV sistema total llegó en 2012, siendo el pequeño híbrido más accesible de Europa y ganando tres veces el premio a la fiabilidad en el segmento.',
    { potencia: '100 CV', peso: '1.050 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_yaris_xp210', 'Toyota Yaris XP210 (4a gen)', ['Japón'], 2020, 9999,
    ['Hatchback', '1.5', 'Híbrido', 'TNGA'],
    'El Yaris XP210 sobre plataforma TNGA-B ganó el Coche del Año en Europa 2021, el segundo premio del año para Toyota. El motor híbrido 1.5 litros de tercera generación con 116 CV sistema total consume 3.8L/100km. Fue el primer Yaris disponible en versión GR Sport con suspensión rebajada. La plataforma TNGA-B comparte base con el GR Yaris de homologación WRC.',
    { potencia: '116 CV', peso: '1.130 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  // ── TOYOTA (SUVs adicionales) ──────────────────────────────────────────────

  car('toyota_chr_ngx10', 'Toyota C-HR (NGX10)', ['Japón'], 2016, 9999,
    ['SUV', '1.8', 'Híbrido', 'TNGA'],
    'El C-HR fue el primer SUV de Toyota sobre plataforma TNGA y el más atrevido en diseño de la historia de la marca. Las puertas traseras sin manija visible y el techo flotante con pilar C oculto lo hacen inmediatamente reconocible. El motor híbrido 1.8 litros con 122 CV consume 4.3L/100km. En Europa fue el SUV compacto híbrido más vendido durante dos años consecutivos.',
    { potencia: '122 CV', peso: '1.465 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('toyota_highlander_xu50', 'Toyota Highlander / Kluger XU50', ['Japón'], 2013, 2019,
    ['SUV', '3.5', 'V6', '4x4'],
    'El Highlander XU50 fue el SUV de tres filas de Toyota para el mercado norteamericano y Australia (Kluger). Motor V6 2GR-FE de 3.5 litros y 270 CV con sistema AWD dinámico. Era el vehículo familiar de alta capacidad más equilibrado de Toyota. Vendió sobre 200.000 unidades anuales en Estados Unidos, siendo el tercer SUV más vendido de la marca después del RAV4 y el 4Runner.',
    { potencia: '270 CV', peso: '2.045 kg', traccion: '4WD', velocidad_max: '190 km/h' }),

  car('toyota_4runner_n180', 'Toyota 4Runner N180 (3a gen)', ['Japón'], 1995, 2002,
    ['SUV', '3.4', 'V6', '4x4'],
    'El 4Runner N180 transformó la pick-up Hilux Surf en un SUV de carrocería propia. Motor V6 5VZ-FE de 3.4 litros y 183 CV, con el panel trasero deslizante eléctrico como característica única. Tenía capacidades todoterreno serias con un nivel de confort que sorprendía. En Chile se importó en pequeñas cantidades como alternativa al Land Cruiser Prado de precio más alto.',
    { potencia: '183 CV', peso: '1.780 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_4runner_n280', 'Toyota 4Runner N280 (5a gen)', ['Japón'], 2009, 9999,
    ['SUV', '4.0', 'V6', '4x4'],
    'El 4Runner N280 es uno de los últimos SUVs de chasis en escalera que no comprometió sus capacidades todoterreno por el refinamiento urbano. Motor 1GR-FE V6 de 4.0 litros y 270 CV, reducción de marcha de baja, bloqueo de diferencial trasero de serie. En 40 años sin cambiar su filosofía, el 4Runner sigue siendo el referente del off-road accesible para entusiastas.',
    { potencia: '270 CV', peso: '2.015 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_prado_j120', 'Toyota Land Cruiser Prado J120', ['Japón'], 2002, 2009,
    ['SUV', '2.7', '4.0', 'V6', '4x4'],
    'El Prado J120 adoptó diseño más moderno y redondeado, alejándose del look cuadrado del J90. Motor V6 1GR-FE de 4.0 litros y 249 CV con opción diesel 1KD-FTV de 3.0 litros. Fue el primer Prado con control de descenso (DAC) y bloqueo central del diferencial electrónico de serie. En ventas globales fue el todoterreno más vendido de la categoría durante su ciclo de vida.',
    { potencia: '249 CV', peso: '2.100 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_land_cruiser_fj55', 'Toyota Land Cruiser FJ55 (Station Wagon)', ['Japón'], 1967, 1980,
    ['4x4', 'Station Wagon', 'Todo Terreno'],
    'El FJ55 fue la primera versión familiar del Land Cruiser: una station wagon de carrocería completa sobre el chasis FJ40 con capacidad para 8 pasajeros. Con motor 2F de 6 cilindros en línea, fue el primer Land Cruiser destinado a familias y uso urbano. Muy popular en Australia, Oriente Medio y Latinoamérica como vehículo familiar pesado con capacidades todoterreno reales.',
    { potencia: '125 CV', peso: '1.780 kg', traccion: '4WD', velocidad_max: '130 km/h' }),

  car('toyota_land_cruiser_fj60', 'Toyota Land Cruiser FJ60', ['Japón'], 1980, 1987,
    ['4x4', 'Station Wagon', 'Todo Terreno'],
    'El FJ60 modernizó la station wagon Land Cruiser con líneas cuadradas y un interior significativamente más cómodo. El motor 2F de 4.2 litros o el diesel 3B de 3.4 litros daban opciones para todos los mercados. Fue el primer Land Cruiser con dirección asistida de serie y el que estableció definitivamente al modelo como SUV familiar capaz en cualquier terreno.',
    { potencia: '135 CV', peso: '1.880 kg', traccion: '4WD', velocidad_max: '135 km/h' }),

  car('toyota_venza_agv15', 'Toyota Venza (AGV15)', ['Japón'], 2020, 9999,
    ['SUV', '2.5', 'Híbrido', '4x4', 'TNGA'],
    'El Venza regresó en 2020 como SUV híbrido exclusivo sobre plataforma TNGA, sin versión de combustión. El sistema híbrido 2.5 litros con E-Four entrega 222 CV y consume 5.3L/100km. El parasol panorámico electrocromático que oscurece instantáneamente sin persianas fue una tecnología inédita en el segmento. Comparte plataforma y mecánica con el RAV4 Hybrid.',
    { potencia: '222 CV', peso: '1.840 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  car('toyota_rav4_gen3', 'Toyota RAV4 Gen3 (XA30)', ['Japón'], 2005, 2012,
    ['SUV', '2.0', '2.5', '4x4'],
    'El RAV4 de tercera generación creció notablemente para competir en el segmento compacto-mediano. Motor 2AZ-FE de 2.5 litros y 179 CV. Adoptó suspensión trasera independiente por primera vez en la historia del RAV4, mejorando radicalmente el confort en carretera. La versión Sport con llantas de 18" y carrocería ampliada fue especialmente popular en mercados jóvenes.',
    { potencia: '179 CV', peso: '1.580 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('toyota_rav4_gen4', 'Toyota RAV4 Gen4 (XA40)', ['Japón'], 2012, 2018,
    ['SUV', '2.0', '2.5', '4x4'],
    'El RAV4 de cuarta generación volvió a líneas más angulosas y agresivas. Motor 2AR-FE de 2.5 litros y 178 CV con CVT. Por primera vez el RAV4 ofreció versión híbrida en algunos mercados. Su sistema AWD dinámico podía enviar hasta el 50% del torque al eje trasero en condiciones de baja tracción, mejorando significativamente la capacidad fuera de asfalto.',
    { potencia: '178 CV', peso: '1.580 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('toyota_sequoia_xk60', 'Toyota Sequoia XK60 (3a gen)', ['Japón'], 2022, 9999,
    ['SUV', '3.5', 'V6', 'Híbrido', '4x4'],
    'El Sequoia de tercera generación eliminó el V8, reemplazándolo por el V6 biturbo híbrido i-FORCE MAX de 3.5 litros con 437 CV. Es el único SUV de gran tamaño con sistema híbrido de serie en todos los niveles de equipamiento. El chasis escalera con suspensión trasera de muelles helicoidales (sustituyendo la ballesta del modelo anterior) mejoró radicalmente el confort en carretera.',
    { potencia: '437 CV', peso: '2.640 kg', traccion: '4WD', velocidad_max: '190 km/h' }),

  // ── TOYOTA (pick-ups adicionales) ─────────────────────────────────────────

  car('toyota_hilux_n60', 'Toyota Hilux N60 (4a gen)', ['Japón'], 1983, 1988,
    ['Pick-up', '2.4', 'Diesel', '4x4'],
    'El Hilux N60 fue la generación que cementó la leyenda de indestructibilidad. Con motor diesel 2L de 2.4 litros y 83 CV, fue protagonista de la prueba épica de Top Gear donde intentaron destruirlo sin lograrlo. En África subsahariana y Oriente Medio fue el vehículo de trabajo por excelencia durante décadas. Sus piezas de repuesto aún se fabrican y distribuyen globalmente.',
    { potencia: '83 CV', peso: '1.150 kg', traccion: '4WD', velocidad_max: '130 km/h' }),

  car('toyota_hilux_surf_n130', 'Toyota Hilux Surf / 4Runner N130', ['Japón'], 1989, 1995,
    ['SUV', '2.4', '3.0', 'Diesel', '4x4'],
    'El Hilux Surf N130 fue la versión SUV cerrada del Hilux con suspensión trasera independiente por primera vez. Motor diesel 2L-TE de 2.4 litros turbo o el gasolina 3VZ-E de 3.0 litros. Fue el primer todoterreno japonés con ABS disponible. Abrió definitivamente el camino de los SUVs basados en plataforma de pick-up con comodidades propias de un automóvil.',
    { potencia: '130 CV', peso: '1.720 kg', traccion: '4WD', velocidad_max: '160 km/h' }),

  car('toyota_tacoma_n100', 'Toyota Tacoma N100 (1a gen)', ['Japón'], 1995, 2004,
    ['Pick-up', '2.4', '3.4', 'V6', '4x4'],
    'El Tacoma reemplazó al Hilux en el mercado norteamericano con identidad propia. Motor 4-cil 2RZ-FE de 2.4 litros o el V6 5VZ-FE de 3.4 litros y 190 CV. Fue pionero en la categoría mid-size truck americana y ganó la lealtad de compradores jóvenes gracias a su imagen aventurera. Sigue siendo la pick-up mediana más vendida de Estados Unidos, con lista de espera en algunas versiones.',
    { potencia: '190 CV', peso: '1.590 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('toyota_tundra_xk50', 'Toyota Tundra XK50 (2a gen)', ['Japón'], 2007, 2021,
    ['Pick-up', '5.7', 'V8', '4x4'],
    'El Tundra XK50 fue el intento serio de Toyota de conquistar las pick-ups full-size americanas. Motor V8 3UR-FE de 5.7 litros y 383 CV, capacidad de remolque de 4.5 toneladas y la primera transmisión de 6 velocidades en el segmento. Fabricado en San Antonio, Texas, su fiabilidad superó a cualquier rival doméstico según encuestas JD Power durante sus 14 años de producción.',
    { potencia: '383 CV', peso: '2.270 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  car('toyota_fortuner_an160', 'Toyota Fortuner AN160 (2a gen)', ['Japón'], 2015, 9999,
    ['SUV', '2.8', 'Diesel', '4x4'],
    'El Fortuner de segunda generación sobre plataforma IMV-2 mejoró radicalmente el confort con nueva suspensión delantera de doble horquilla y motor 1GD-FTV de 2.8 litros diesel con 204 CV. La versión TRD Sportivo con suspensión reforzada elevó el nivel visual. Sigue siendo el SUV 4x4 más vendido en Asia Pacífico, Oriente Medio y Latinoamérica.',
    { potencia: '204 CV', peso: '1.985 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  // ── TOYOTA (vans y MPV adicionales) ───────────────────────────────────────

  car('toyota_alphard_h30', 'Toyota Alphard H30 (3a gen)', ['Japón'], 2015, 2023,
    ['MPV', '3.5', 'V6', '4x4'],
    'El Alphard H30 es la limusina VIP japonesa por excelencia: motor V6 2GR-FKS de 3.5 litros y 301 CV, suspensión activa que neutraliza el balanceo en curvas, y asientos Executive de segunda fila con reposapiés eléctrico. Es el vehículo oficial de muchos primeros ministros y ejecutivos en Asia. La versión Executive Lounge tiene solo 2 asientos en segunda fila, reclinables a 48°.',
    { potencia: '301 CV', peso: '2.100 kg', traccion: '4WD', velocidad_max: '200 km/h' }),

  car('toyota_vellfire_h20', 'Toyota Vellfire H20 (2a gen)', ['Japón'], 2008, 2014,
    ['MPV', '2.4', '3.5', 'V6'],
    'El Vellfire es el hermano del Alphard pero con diseño más agresivo y exterior llamativo. Comparte plataforma y mecánica pero apunta a un público más joven y extrovertido. La versión híbrida con motor 2.4 litros y 277 CV sistema total en 2011 fue la primera minivan híbrida de Toyota. En China es el status symbol preferido de empresarios y artistas.',
    { potencia: '277 CV', peso: '2.050 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('toyota_sienna_xl30', 'Toyota Sienna XL30 (3a gen)', ['Japón'], 2010, 2020,
    ['MPV', '3.5', 'V6', '4x4'],
    'La Sienna XL30 fue la única minivan con AWD disponible en el mercado americano durante su generación. Motor V6 2GR-FE de 3.5 litros y 266 CV con tracción a las cuatro ruedas. Puertas deslizantes eléctricas de ambos lados y techo panorámico de 120cm. En Estados Unidos compite directamente con la Chrysler Pacifica y la Honda Odyssey por el título de mejor minivan familiar.',
    { potencia: '266 CV', peso: '2.030 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('toyota_wish_ze10', 'Toyota Wish ZE10', ['Japón'], 2003, 2009,
    ['MPV', '1.8', '2.0', 'Tracción delantera'],
    'El Wish fue el MPV compacto de Toyota para el mercado asiático, con diseño tipo coupé y puertas laterales deslizantes. Motor 1ZZ-FE de 1.8 litros o 1AZ-FSE de 2.0 litros para 7 pasajeros en un paquete sorprendentemente compacto. En Japón, Taiwán, Singapur y el Sudeste Asiático fue el MPV familiar más popular de su precio durante años.',
    { potencia: '125 CV', peso: '1.500 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_ipsum_sxm10', 'Toyota Ipsum / Picnic (SXM10)', ['Japón'], 1995, 2001,
    ['MPV', '2.0', 'Tracción delantera'],
    'El Ipsum fue el primer MPV compacto de Toyota, anticipando la tendencia de las minivans en formato reducido. Motor 3S-FE de 2.0 litros y 135 CV con capacidad para 7 pasajeros en un cuerpo que cabía en estacionamientos normales. En Europa se llamó Picnic y fue uno de los primeros MPVs compactos disponibles. Su plataforma fue compartida con el RAV4 de primera generación.',
    { potencia: '135 CV', peso: '1.560 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('toyota_hiace_h100', 'Toyota HiAce H100 (3a gen)', ['Japón'], 1977, 1982,
    ['Furgoneta', '2.0', 'Comercial'],
    'El HiAce H100 fue la generación que estableció al modelo como estándar global de la furgoneta comercial. Motor 18R de 2.0 litros y carrocería de carga máxima. En Chile fue importado como furgoneta de reparto, ambulancia y base para microbuses rurales. Su sencillez mecánica permitía mantenimiento en cualquier taller del país, un factor decisivo para su adopción masiva.',
    { potencia: '100 CV', peso: '1.420 kg', traccion: 'FR', velocidad_max: '140 km/h' }),

  // ── TOYOTA (especiales y únicos) ──────────────────────────────────────────

  car('toyota_sera', 'Toyota Sera (EXY10)', ['Japón'], 1990, 1995,
    ['Coupé', '1.5', 'Puertas mariposa'],
    'El Sera es el Toyota más inusual jamás producido en serie: un coupé compacto con puertas de mariposa de cristal completo que suben girando hacia afuera, abriendo toda la cabina. Motor 5E-FHE de 1.5 litros y 110 CV. No era extraordinariamente rápido, pero la experiencia de entrar y salir por esas puertas era única en el mundo. Se vendió solo en Japón y hoy es objeto de culto entre coleccionistas.',
    { potencia: '110 CV', peso: '990 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('toyota_paseo_el54', 'Toyota Paseo / Cynos (EL54)', ['Japón'], 1991, 1999,
    ['Coupé', '1.5', 'Tracción delantera'],
    'El Paseo (Cynos en Japón) fue el intento de Toyota de ofrecer un coupé deportivo compacto y asequible. Motor 5E-FHE de 1.5 litros y 100 CV en un cuerpo de 940 kg ligero y divertido. El diseño aerodinámico con líneas deportivas lo diferenciaba completamente del Corolla que compartía mecánica. La versión Roadster de 1996 con targa removible fue la más especial y escasa.',
    { potencia: '100 CV', peso: '940 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  // ── NISSAN ────────────────────────────────────────────────────────────────

  car('nissan_skyline_r32', 'Nissan Skyline GT-R R32', ['Japón'], 1989, 1994,
    ['Sedán', '2.6', 'Turbo', '4x4', 'JDM'],
    'El R32 GT-R resucitó el nombre GT-R después de 16 años y lo hizo de forma devastadora: 29 victorias consecutivas en la Touring Car australiana sin una sola derrota, hasta que prohibieron el auto por ser demasiado rápido. El motor RB26DETT biturbo de 2.6 litros y el sistema ATTESA-ETS de tracción integral activa lo hacían tecnológicamente superior a todo su campo.',
    { potencia: '280 CV', peso: '1.430 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('nissan_skyline_r33', 'Nissan Skyline GT-R R33', ['Japón'], 1995, 1998,
    ['Sedán', '2.6', 'Turbo', '4x4', 'JDM'],
    'El R33 fue el más subestimado de los GT-R clásicos, criticado por ser más pesado que el R32. Sin embargo, fue el primero en completar Nürburgring en menos de 8 minutos para un auto de producción. La versión LM Edition de homologación para Le Mans con 400 CV es hoy una de las más buscadas por coleccionistas.',
    { potencia: '280 CV', peso: '1.540 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('nissan_skyline_r34', 'Nissan Skyline GT-R R34', ['Japón'], 1999, 2002,
    ['Sedán', '2.6', 'Turbo', '4x4', 'JDM'],
    'El R34 GT-R es el último y más refinado de los Skyline GT-R clásicos. El motor RB26DETT biturbo —declarado en 280 CV pero cercano a los 330 CV reales— alimentaba el sistema ATTESA E-TS Pro con diferencial activo trasero. La pantalla multifunción del dashboard y el diseño más agresivo lo convirtieron en el GT-R definitivo.',
    { potencia: '330 CV', peso: '1.560 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('nissan_silvia_s13', 'Nissan Silvia S13', ['Japón'], 1988, 1994,
    ['Coupé', '1.8', 'Turbo', 'Tracción trasera'],
    'El Silvia S13 fue el coupé deportivo de tracción trasera que democratizó el drift en Japón. Ligero, asequible y con el motor SR20DET turbo en su versión más potente, era la base perfecta para construir un auto de competición. En el mundo del anime y los videojuegos como Gran Turismo, el S13 es una referencia cultural icónica.',
    { potencia: '205 CV', peso: '1.150 kg', traccion: 'FR', velocidad_max: '220 km/h' }),

  car('nissan_silvia_s14', 'Nissan Silvia S14', ['Japón'], 1993, 1998,
    ['Coupé', '2.0', 'Turbo', 'Tracción trasera'],
    'El S14, conocido como "Kouki" en su versión facelift de 1996, fue el Silvia más refinado. Con motor SR20DET de 220 CV y carrocería más amplia que el S13, ofrecía mayor estabilidad a alta velocidad. El diseño de sus faros fue criticado inicialmente por ser "de rana", pero hoy es símbolo de una generación del drift japonés.',
    { potencia: '220 CV', peso: '1.230 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('nissan_silvia_s15', 'Nissan Silvia S15 Spec R', ['Japón'], 1999, 2002,
    ['Coupé', '2.0', 'Turbo', 'Tracción trasera'],
    'El S15 fue el Silvia definitivo: más pequeño y rígido que el S14, con el SR20DET evolucionado a 250 CV. La versión Spec R incluía diferencial de deslizamiento limitado, Brembo y la caja de seis velocidades más precisa de la familia. Prohibido en algunos mercados por restricciones de edad del vehículo, su importación paralela lo convierte en el JDM más perseguido.',
    { potencia: '250 CV', peso: '1.240 kg', traccion: 'FR', velocidad_max: '240 km/h' }),

  car('nissan_sentra_b13', 'Nissan Sentra B13 "V16"', ['Japón'], 1990, 1994,
    ['Sedán', '1.6', 'Tracción delantera'],
    'El Sentra B13, conocido popularmente como "V16" en Chile y Latinoamérica por su motor GA16, fue uno de los autos japoneses más vendidos de la región en los 90s. Su mecánica confiable y amplia disponibilidad de repuestos lo convirtieron en un clásico que aún circula masivamente en Sudamérica.',
    { potencia: '90 CV', peso: '985 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('nissan_sentra_b14', 'Nissan Sentra B14', ['Japón'], 1994, 1999,
    ['Sedán', '1.6', 'Tracción delantera'],
    'Sucesor directo del B13, el Sentra B14 mantuvo el motor GA16DE pero con inyección multipunto que elevó la potencia a 105 CV. Líneas más redondeadas y habitáculo más amplio fueron sus principales mejoras. Igualmente exitoso en mercados latinoamericanos.',
    { potencia: '105 CV', peso: '1.020 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('nissan_180sx', 'Nissan 180SX / 240SX', ['Japón'], 1988, 1998,
    ['Coupé', 'Fastback', '1.8', 'Turbo', 'Tracción trasera'],
    'El 180SX fue el hermano fastback del Silvia S13, compartiendo mecánica pero con carrocería de dos puertas con techo inclinado y faros retráctiles. En EE.UU. se vendió como 240SX con el motor NA. Su configuración de tracción trasera, su techo de cristal trasero y sus faros retráctiles le dieron un carácter único dentro de la familia.',
    { potencia: '205 CV', peso: '1.200 kg', traccion: 'FR', velocidad_max: '215 km/h' }),

  car('nissan_pulsar_gtir', 'Nissan Pulsar GTi-R N14', ['Japón'], 1990, 1994,
    ['Hatchback', '2.0', 'Turbo', '4x4', 'Rally'],
    'El Pulsar GTi-R fue el arma de Nissan en el Campeonato Mundial de Rally de la era del Grupo A. Con motor SR20DET de 230 CV y tracción integral ATTESA, era un hatchback compacto con prestaciones de superdeportivo. Su escasa producción —apenas 15.000 unidades— lo hace uno de los JDM más difíciles de encontrar en buen estado hoy.',
    { potencia: '230 CV', peso: '1.200 kg', traccion: '4WD', velocidad_max: '235 km/h' }),

  car('nissan_primera_p11', 'Nissan Primera P11', ['Japón'], 1995, 2001,
    ['Sedán', '2.0', 'Tracción delantera'],
    'El Primera P11 fue el sedán europeo de Nissan, diseñado y fabricado específicamente para el mercado europeo. Con motor SR20DE de 150 CV y suspensión multilink trasera, ofrecía el manejo más dinámico de su segmento. La versión GT con 175 CV fue opción en algunos mercados y es buscada por entusiastas.',
    { potencia: '150 CV', peso: '1.150 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('nissan_patrol_y60', 'Nissan Patrol Y60', ['Japón'], 1987, 1997,
    ['4x4', 'Todo Terreno', 'SUV'],
    'El Patrol Y60 fue el competidor directo del Land Cruiser FJ80 en el segmento de 4x4 de trabajo duro. Con carrocería sobre bastidor de escalera, opciones de diesel o gasolina y sistema 4WD part-time, era tan durable y capaz como su rival japonés. Muy popular en Medio Oriente, África y Latinoamérica por su resistencia en condiciones extremas.',
    { potencia: '105 CV', peso: '1.950 kg', traccion: '4WD', velocidad_max: '145 km/h' }),

  // ── NISSAN (Skyline historia completa) ────────────────────────────────────

  car('nissan_skyline_kpgc10', 'Nissan Skyline GT-R KPGC10 "Hakosuka"', ['Japón'], 1969, 1972,
    ['Sedán', '2.0', 'DOHC', 'Tracción trasera', 'JDM'],
    'El Hakosuka ("caja-cuervo" por su forma angular) fue el primer Skyline GT-R de la historia y uno de los autos de carreras más exitosos de Japón. Con motor S20 DOHC de 2.0 litros y 160 CV, ganó 52 carreras consecutivas en la serie Japan Grand Prix entre 1969 y 1972. Solo 1.945 unidades producidas. Hoy alcanza precios de subasta superiores a un millón de dólares.',
    { potencia: '160 CV', peso: '1.020 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('nissan_skyline_kpgc110', 'Nissan Skyline GT-R KPGC110 "Kenmeri"', ['Japón'], 1973, 1973,
    ['Coupé', '2.0', 'DOHC', 'Tracción trasera', 'JDM'],
    'El Kenmeri GT-R fue el más raro y exclusivo de la historia del Skyline: solo 197 unidades producidas antes de que la crisis del petróleo de 1973 obligara a Nissan a cancelar el modelo. El nombre viene de la campaña publicitaria "Ken y Mary". Con el mismo motor S20 del Hakosuka, es el GT-R más escaso y cotizado del mundo, con ejemplares superando los 2 millones de dólares.',
    { potencia: '160 CV', peso: '1.100 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('nissan_skyline_r30', 'Nissan Skyline DR30 RS-Turbo', ['Japón'], 1981, 1985,
    ['Sedán', '2.0', 'Turbo', 'DOHC', 'Tracción trasera'],
    'El Skyline DR30 con motor FJ20ET turbo de 2.0 litros y 205 CV fue apodado "Iron Mask" por su parrilla frontal de apariencia metálica. Fue el primer Skyline con turbo y uno de los sedanes más rápidos de Japón en su momento. La versión RS-X Turbo con intercooler entregaba 220 CV y fue la base del resurgimiento del GT-R en el R31 que vendría después.',
    { potencia: '205 CV', peso: '1.175 kg', traccion: 'FR', velocidad_max: '220 km/h' }),

  car('nissan_skyline_r31', 'Nissan Skyline GTS-R R31', ['Japón'], 1985, 1989,
    ['Sedán', '2.0', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Skyline R31 fue la generación de transición entre los GT-R clásicos y el legendario R32. La versión GTS-R con motor RB20DET turbo de 210 CV fue la base de homologación para el Campeonato Australiano de Turismo. Aunque superado por el R32, el R31 estableció la plataforma RB y el diferencial HICAS de dirección trasera que definirían los Skyline de los 90s.',
    { potencia: '210 CV', peso: '1.320 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('nissan_skyline_v35', 'Nissan Skyline V35 (Infiniti G35)', ['Japón'], 2001, 2006,
    ['Sedán', 'Coupé', '3.5', 'V6', 'Tracción trasera'],
    'El Skyline V35 fue el más controvertido de la historia: abandonó el mítico RB inline-6 turbo por un V6 VQ35DE naturalmente aspirado de 280 CV. Muchos puristas lo rechazaron por no tener GT-R en la gama, pero su manejo estaba a la altura de los mejores sedanes europeos. Fuera de Japón se llamó Infiniti G35 y fue la base del resurgimiento de Infiniti como marca premium en EE.UU.',
    { potencia: '280 CV', peso: '1.580 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_gtr_r35', 'Nissan GT-R R35', ['Japón'], 2007, 9999,
    ['Coupé', '3.8', 'V6', 'Twin-Turbo', '4x4'],
    'El GT-R R35 llegó con el objetivo de destruir todo lo que existía en su precio. Motor VR38DETT biturbo de 3.8 litros con 480 CV, sistema AWD ATTESA E-TS con diferencial electrónico trasero y caja de doble embrague de 6 velocidades montada en el eje trasero para equilibrar el peso. En 2008 completó Nürburgring en 7:29, destrozando el récord de autos de producción. El apodo "Godzilla" se ganó solo.',
    { potencia: '480 CV', peso: '1.740 kg', traccion: '4WD', velocidad_max: '315 km/h' }),

  // ── NISSAN (Silvia adicional) ──────────────────────────────────────────────

  car('nissan_silvia_s12', 'Nissan Silvia S12 (Gazelle)', ['Japón'], 1983, 1988,
    ['Coupé', '1.8', '2.0', 'Turbo', 'Tracción trasera'],
    'El Silvia S12 fue la generación más grande y pesada de la familia, con líneas más suaves y opciones de motor CA18ET turbo de 1.8 litros o el CA20E de 2.0 litros. Fue el primer Silvia con opción de turbo de serie y el primero con ABS opcional. En EE.UU. se llamó 200SX y fue muy popular como coupé personal accesible. La versión Turbo con 175 CV era genuinamente rápida para su época.',
    { potencia: '175 CV', peso: '1.200 kg', traccion: 'FR', velocidad_max: '210 km/h' }),

  // ── NISSAN (Fairlady Z historia completa) ─────────────────────────────────

  car('nissan_fairlady_z_z31', 'Nissan Fairlady Z Z31 (300ZX)', ['Japón'], 1983, 1989,
    ['Coupé', '3.0', 'V6', 'Turbo', 'Tracción trasera'],
    'El Z31 300ZX fue el primer Fairlady Z con motor V6, adoptando el VG30ET turbo de 3.0 litros y 230 CV. Fue también el primer Z con suspensión trasera independiente de cinco eslabones y el primero con opción de dirección 4WS (cuatro ruedas directrices). Su diseño angular de los 80s con pop-up headlights fue divisivo, pero el rendimiento era innegablemente serio.',
    { potencia: '230 CV', peso: '1.350 kg', traccion: 'FR', velocidad_max: '235 km/h' }),

  car('nissan_fairlady_z_z32', 'Nissan Fairlady Z Z32 (300ZX Twin Turbo)', ['Japón'], 1989, 2000,
    ['Coupé', '3.0', 'V6', 'Twin-Turbo', 'Tracción trasera'],
    'El Z32 300ZX Twin Turbo es considerado el Fairlady Z más completo técnicamente. Motor VG30DETT biturbo de 3.0 litros y 300 CV, suspensión multiejes en las cuatro ruedas y dirección HICAS de cuatro ruedas. Car and Driver lo eligió en su lista de los diez mejores autos durante cinco años consecutivos. Fue el primer auto japonés en igualar prestaciones de Ferrari en pruebas estandarizadas.',
    { potencia: '300 CV', peso: '1.500 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_fairlady_z_z33', 'Nissan Fairlady Z Z33 (350Z)', ['Japón'], 2002, 2009,
    ['Coupé', '3.5', 'V6', 'Tracción trasera'],
    'El Z33 350Z representó el retorno del Fairlady Z puro y ligero después del exceso técnico del Z32. Motor VQ35DE de 3.5 litros y 287 CV en un cuerpo de 1.400 kg con distribución 53:47. Diseñado bajo Carlos Ghosn como señal del renacimiento de Nissan, su éxito de ventas fue inmediato y masivo. En Gran Turismo y Need for Speed se convirtió en ícono de la generación PlayStation.',
    { potencia: '287 CV', peso: '1.400 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_fairlady_z_z34', 'Nissan Fairlady Z Z34 (370Z)', ['Japón'], 2008, 2020,
    ['Coupé', '3.7', 'V6', 'Tracción trasera'],
    'El Z34 370Z evolucionó el Z33 con el VQ37VHR de 3.7 litros y 331 CV y un SyncroRev Match que automáticamente realiza el heel-and-toe en cambios descendentes. La caja de 7 velocidades con doble embrague fue una opción única en la clase. Su larga producción de 12 años demostró que la fórmula era tan correcta que no requería revolución.',
    { potencia: '331 CV', peso: '1.470 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_z_rz34', 'Nissan Z (RZ34)', ['Japón'], 2022, 9999,
    ['Coupé', '3.0', 'V6', 'Twin-Turbo', 'Tracción trasera'],
    'El Nissan Z RZ34 volvió al turbo después de 22 años: motor VR30DDTT biturbo de 3.0 litros y 405 CV heredado del Infiniti Q60 Red Sport. La caja manual de 6 velocidades con SynchroRev Match mejorado fue la opción favorita de los entusiastas. El diseño retro que homenajea al S30 original con el arco de la ventana trasera y las luces redondas fue universalmente alabado.',
    { potencia: '405 CV', peso: '1.595 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  // ── NISSAN (sedanes y ejecutivos) ─────────────────────────────────────────

  car('nissan_cefiro_a31', 'Nissan Cefiro A31', ['Japón'], 1988, 1994,
    ['Sedán', '2.0', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Cefiro A31 es el sedán JDM más subestimado: motor RB20DET turbo de 2.0 litros y 205 CV en un chasis de tracción trasera, prácticamente idéntico mecánicamente al R32 GT-R en sus partes estructurales. En New Zealand fue importado masivamente y se convirtió en el auto de drift más popular por su bajo precio y enorme potencial. Fuera de Japón se conoció como Infiniti M30.',
    { potencia: '205 CV', peso: '1.350 kg', traccion: 'FR', velocidad_max: '225 km/h' }),

  car('nissan_laurel_c34', 'Nissan Laurel C34', ['Japón'], 1993, 1997,
    ['Sedán', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Laurel C34 es el gemelo olvidado del Skyline R33: mismo chasis, misma plataforma, pero con diseño de sedán ejecutivo. La versión Medalist Club S con motor RB25DET turbo de 2.5 litros y 250 CV era enormemente rápida para un auto de apariencia conservadora. Es muy querido en la escena drift por compartir muchas piezas con el R33 a precio de sedán familiar.',
    { potencia: '250 CV', peso: '1.480 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_stagea_wc34', 'Nissan Stagea WC34', ['Japón'], 1996, 2001,
    ['Wagon', '2.5', 'Turbo', 'Tracción trasera', 'JDM'],
    'El Stagea WC34 es la station wagon de los drift kings: motor RB25DET turbo de 2.5 litros y 260 CV en la versión Autech que usaba el frontal completo del Skyline R33 GT-R. Compartía el chasis, el motor y las suspensiones del R33 en carrocería familiar. El absurdo de un station wagon capaz de ir a 250 km/h lo convirtió en leyenda del JDM.',
    { potencia: '260 CV', peso: '1.590 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_stagea_m35', 'Nissan Stagea M35', ['Japón'], 2001, 2007,
    ['Wagon', '2.5', '3.5', 'V6', '4x4'],
    'El Stagea M35 abandonó el RB turbo por el V6 VQ25DET de 2.5 litros con 280 CV o el VQ35DE de 3.5 litros. Perdió algo del carácter crudo del WC34 pero ganó en refinamiento y fue el primero con AWD de serie en su versión más equipada. Su carrocería wagon con gran espacio de carga y las prestaciones de un deportivo lo hacen el wagon familiar definitivo del JDM.',
    { potencia: '280 CV', peso: '1.640 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('nissan_cedric_y31', 'Nissan Cedric Y31', ['Japón'], 1987, 1991,
    ['Sedán', '2.0', '3.0', 'V6', 'Tracción trasera'],
    'El Cedric Y31 fue el taxi oficial de Japón durante una generación entera. Con motor VG30E V6 de 3.0 litros y 160 CV, era el sedán ejecutivo grande más confiable del mercado. Producido con tanto éxito que la versión de taxi siguió fabricándose hasta 2017. En la escena VIP japonesa es el punto de entrada clásico: largo, trasero, y con infinitas posibilidades de lowride.',
    { potencia: '160 CV', peso: '1.520 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('nissan_maxima_a32', 'Nissan Maxima A32', ['Japón'], 1994, 2000,
    ['Sedán', '3.0', 'V6', 'Tracción delantera'],
    'El Maxima A32 fue apodado "4-door sports car" por Nissan por su motor VQ30DE de 3.0 litros y 190 CV en tracción delantera. La suspensión multiejes delantera y trasera daba un manejo preciso y firme. En EE.UU. fue un bestseller en el segmento de sedanes medianos premium y fue uno de los primeros en ofrecer control de tracción de serie en su clase.',
    { potencia: '190 CV', peso: '1.450 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('nissan_teana_j31', 'Nissan Teana J31', ['Japón'], 2003, 2008,
    ['Sedán', '2.3', '3.5', 'V6', 'Tracción delantera'],
    'El Teana J31 fue el sedán ejecutivo de Toyota para Asia y Oriente Medio, compitiendo con el Camry XV30. Con motor VQ23DE de 2.3 litros o el VQ35DE de 3.5 litros y 231 CV, su interior enfocado en el lujo y el espacio trasero generoso lo hacían ideal como vehículo oficial. En China se fabricó como Nissan Tiida y fue uno de los mejores vendedores de la marca en Asia.',
    { potencia: '231 CV', peso: '1.540 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('nissan_bluebird_u13', 'Nissan Bluebird U13', ['Japón'], 1991, 1995,
    ['Sedán', '1.8', '2.0', '4x4'],
    'El Bluebird U13 fue la última generación del nombre Bluebird y la primera en ofrecer tracción integral ATTESA de serie en la versión SSS. Con motor SR20DE de 2.0 litros y 150 CV, heredó genes del Pulsar GTI-R. La versión ARX con 4WD y suspensión sport era la berlina familiar más capaz de Japón en su momento. En Europa se vendió como Nissan Bluebird y tuvo buena acogida.',
    { potencia: '150 CV', peso: '1.290 kg', traccion: '4WD', velocidad_max: '205 km/h' }),

  car('nissan_sentra_b15', 'Nissan Sentra B15', ['Japón'], 2000, 2006,
    ['Sedán', '1.8', 'Tracción delantera'],
    'El Sentra B15 fue el sedán subcompacto más vendido de Nissan en Latinoamérica durante los 2000s. Con motor QG18DE de 1.8 litros y 126 CV, ofrecía más potencia y refinamiento que el B14 que reemplazó. En México fue el auto más vendido durante dos años consecutivos. La versión SE-R Spec V con motor SR20VE de 175 CV fue la joya deportiva del catálogo.',
    { potencia: '126 CV', peso: '1.110 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('nissan_tiida_c11', 'Nissan Tiida C11', ['Japón'], 2004, 2012,
    ['Sedán', 'Hatchback', '1.6', '1.8', 'Tracción delantera'],
    'El Tiida C11 fue diseñado específicamente para mercados emergentes con énfasis en espacio interior y precio accesible. Con motor HR16DE de 1.6 litros o MR18DE de 1.8 litros, su cabina era excepcionalmente espaciosa para el tamaño exterior gracias a la batalla extra larga. En Chile fue muy popular en flotas de taxis y como auto familiar de primera compra.',
    { potencia: '110 CV', peso: '1.150 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('nissan_altima_l32', 'Nissan Altima L32', ['Japón'], 2006, 2012,
    ['Sedán', '2.5', '3.5', 'V6', 'Tracción delantera'],
    'El Altima L32 fue el sedán mediano de Nissan para EE.UU., con motor QR25DE de 2.5 litros y 175 CV o el VQ35DE V6 de 3.5 litros y 270 CV. La versión 3.5 SE con caja de 6 velocidades manual era inusualmente deportiva para un sedán familiar. Fue el primer Altima con CVT Xtronic, que luego se convertiría en estándar en todos los Nissan.',
    { potencia: '175 CV', peso: '1.450 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  // ── NISSAN (compactos y economy) ──────────────────────────────────────────

  car('nissan_march_k11', 'Nissan March / Micra K11', ['Japón'], 1992, 2002,
    ['Hatchback', '1.0', '1.3', 'Tracción delantera'],
    'El March K11 ganó el premio Coche del Año en Japón 1992 y fue la base del resurgimiento de Nissan en el segmento subcompacto. Con motor CG10DE de 1.0 litros y carrocería de huevo redondeada, era alegre y económico. La versión SR Turbo con motor turbo de 120 CV fue una pequeña bomba que sorprendía a deportivos mucho más caros. El K11 se fabricó en Japón, México y Tailandia.',
    { potencia: '55 CV', peso: '720 kg', traccion: 'FF', velocidad_max: '150 km/h' }),

  car('nissan_micra_k13', 'Nissan Micra K13', ['Japón'], 2010, 2016,
    ['Hatchback', '1.2', 'Tracción delantera'],
    'El Micra K13 fue diseñado en colaboración con Renault sobre la plataforma V del Alliance y fabricado en Chennai, India. Con motor HR12DE de 1.2 litros y 79 CV, era extremadamente eficiente (4.7L/100km ciclo europeo). La versión DIG-S con compresor volumétrico entregaba 98 CV con consumo récord de 3.9L/100km. En Europa fue el utilitario de referencia en precio y espacio.',
    { potencia: '79 CV', peso: '970 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('nissan_note_e11', 'Nissan Note E11', ['Japón'], 2004, 2012,
    ['Hatchback', '1.4', '1.6', 'Tracción delantera'],
    'El Note E11 fue el monovolumen subcompacto de Nissan con el máximo espacio interior de su segmento. Con motor HR14DE de 1.4 litros y asientos modulares que permitían configurar el interior en múltiples disposiciones, fue el coche familiar urbano definitivo de Nissan. En Japón fue uno de los autos más vendidos de su categoría durante su producción.',
    { potencia: '88 CV', peso: '1.050 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('nissan_note_epower', 'Nissan Note e-Power E12', ['Japón'], 2016, 9999,
    ['Hatchback', '1.2', 'e-Power', 'Híbrido'],
    'El Note e-Power fue la respuesta única de Nissan al dilema híbrido: un motor de gasolina 1.2 litros que actúa exclusivamente como generador para la batería, mientras un motor eléctrico de 109 CV impulsa las ruedas. En Japón fue el auto más vendido de 2020 gracias a la sensación 100% eléctrica de conducción sin el peso de una batería grande. Una solución original al problema de la electrificación.',
    { potencia: '109 CV', peso: '1.220 kg', traccion: 'FF', velocidad_max: '150 km/h' }),

  car('nissan_cube_z12', 'Nissan Cube Z12', ['Japón'], 2008, 2019,
    ['Monovolumen', '1.6', 'Tracción delantera'],
    'El Cube Z12 es el auto más cuadrado y asimétrico jamás producido en serie: la ventana trasera es asimétrica, sin pilar derecho en un lado. Con motor HR16DE de 1.6 litros y carrocería de caja maximizada, su filosofía de "sala de estar móvil" lo convirtió en fenómeno de moda en Japón y brevemente en EE.UU. El interior con tapicería de lavadora era deliberadamente excéntrico.',
    { potencia: '110 CV', peso: '1.215 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('nissan_juke_f15', 'Nissan Juke F15', ['Japón'], 2010, 2019,
    ['SUV', '1.6', 'Turbo', 'Tracción delantera'],
    'El Juke F15 inventó el segmento del crossover subcompacto con motor turbo, con diseño de ciencia ficción y motor MR16DDT turbo de 1.6 litros y 190 CV en la versión Nismo. Su aspecto de moto acuática terrestre fue polarizador pero efectivo: a pesar de las críticas al diseño, se convirtió en uno de los crossovers más vendidos de Europa entre 2012 y 2017.',
    { potencia: '190 CV', peso: '1.370 kg', traccion: 'FF', velocidad_max: '215 km/h' }),

  // ── NISSAN (SUVs y 4x4) ───────────────────────────────────────────────────

  car('nissan_patrol_y61', 'Nissan Patrol Y61 (GU)', ['Japón'], 1997, 2013,
    ['4x4', 'SUV', '3.0', '4.8', 'Diesel', 'Todo Terreno'],
    'El Patrol Y61 fue el rey del todoterreno japonés en los mercados de Oriente Medio, Australia y África: chasis escalera, eje rígido en ambos extremos, motor diesel TD42 de 4.2 litros o el ZD30DDTi de 3.0 litros turbo, y una capacidad de vadeo de 700mm. En Australia es objeto de culto como el 4x4 definitivo para el Outback. Más capaz en extremo que el Land Cruiser pero menos lujoso.',
    { potencia: '160 CV', peso: '2.200 kg', traccion: '4WD', velocidad_max: '170 km/h' }),

  car('nissan_patrol_y62', 'Nissan Patrol Y62 (Armada)', ['Japón'], 2010, 9999,
    ['SUV', '5.6', 'V8', '4x4'],
    'El Patrol Y62 adoptó el motor V8 VK56VD de 5.6 litros y 405 CV con caja de 7 velocidades, abandonando el diesel para los mercados de lujo. Con sistema de suspensión de aire adaptativa, pantalla de 13" y sistema de cámara de 360°, compitió directamente con el Range Rover y el Mercedes GLS. En Oriente Medio es el vehículo de status por excelencia, equipado con todo disponible.',
    { potencia: '405 CV', peso: '2.720 kg', traccion: '4WD', velocidad_max: '210 km/h' }),

  car('nissan_terrano_r20', 'Nissan Terrano R20 (Pathfinder)', ['Japón'], 1993, 2002,
    ['SUV', '2.4', '3.3', 'V6', '4x4'],
    'El Terrano R20 fue el SUV familiar de Nissan para el mercado global, llamado Pathfinder en América. Con motor VG33E V6 de 3.3 litros y 170 CV en versión de cinco puertas, tenía espacio para 7 pasajeros. Su chasis en escalera daba capacidades todoterreno reales mientras el interior cómodo lo hacía aceptable para uso diario. Fue muy popular en Chile en los 90s como alternativa al Land Cruiser.',
    { potencia: '170 CV', peso: '1.720 kg', traccion: '4WD', velocidad_max: '170 km/h' }),

  car('nissan_xtrail_t30', 'Nissan X-Trail T30', ['Japón'], 2000, 2007,
    ['SUV', '2.0', '2.5', '4x4'],
    'El X-Trail T30 fue el SUV compacto más versátil de Nissan: carrocería monocasco, motor QR25DE de 2.5 litros y 165 CV, y un sistema 4x4 con modo 2WD/Auto/4WD fácil de usar. Las alfombrillas de goma lavables y el portón trasero con respaldo reclinable hacían del maletero un espacio de picnic o campamento. Fue un bestseller en Europa, Asia y Latinoamérica.',
    { potencia: '165 CV', peso: '1.530 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('nissan_xtrail_t32', 'Nissan X-Trail T32', ['Japón'], 2013, 9999,
    ['SUV', '2.0', '2.5', '4x4'],
    'El X-Trail T32 creció en tamaño para ofrecer una tercera fila de asientos opcional, siendo el único SUV compacto con 7 plazas en su segmento. Motor MR20DD de 2.0 litros con inyección directa o el QR25DE de 2.5 litros con ProPilot (conducción autónoma Nivel 2) en versiones tardías. En Japón incorporó el sistema e-Power en 2021, siendo un hito en la electrificación de SUVs.',
    { potencia: '144 CV', peso: '1.620 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('nissan_murano_z50', 'Nissan Murano Z50', ['Japón'], 2002, 2007,
    ['SUV', '3.5', 'V6', '4x4'],
    'El Murano Z50 fue el crossover de lujo de Nissan, con un diseño cupé atrevido que anticipó la moda de los SUV-coupé en años. Motor VQ35DE de 3.5 litros y 245 CV con la primera CVT Xtronic de Nissan en un SUV. El techo de cristal panorámico y el interior de cuero de calidad premium lo posicionaban entre el RAV4 y el Range Rover Sport. Fue la primera "joya de diseño" de Carlos Ghosn en Nissan.',
    { potencia: '245 CV', peso: '1.900 kg', traccion: '4WD', velocidad_max: '200 km/h' }),

  car('nissan_pathfinder_r50', 'Nissan Pathfinder R50', ['Japón'], 1995, 2004,
    ['SUV', '3.3', 'V6', '4x4'],
    'El Pathfinder R50 fue el SUV grande de Nissan para el mercado americano y australiano, con capacidad para 7 pasajeros y motor VG33E de 3.3 litros. Compartía plataforma con la pick-up Frontier de segunda generación pero con carrocería de 5 puertas cerrada. Fue el primer Pathfinder con transmisión automática de 4 velocidades y el primero en ofrecer asientos de tercera fila de serie.',
    { potencia: '170 CV', peso: '1.940 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  // ── NISSAN (pick-ups) ─────────────────────────────────────────────────────

  car('nissan_navara_d21', 'Nissan Navara D21 Hardbody', ['Japón'], 1985, 1997,
    ['Pick-up', '2.4', '3.0', 'V6', '4x4'],
    'El Navara D21 "Hardbody" fue la pick-up de Nissan que compitió directamente con el Toyota Hilux en los mercados latinoamericanos durante los 80s y 90s. El apodo "Hardbody" venía de su estructura de carrocería de acero de alta resistencia. Con motor KA24E de 2.4 litros o el V6 VG30E de 3.0 litros, fue el favorito en faenas agrícolas y mineras por su durabilidad.',
    { potencia: '140 CV', peso: '1.350 kg', traccion: '4WD', velocidad_max: '160 km/h' }),

  car('nissan_navara_d40', 'Nissan Navara D40', ['Japón'], 2004, 2015,
    ['Pick-up', '2.5', '4.0', 'V6', 'Diesel', '4x4'],
    'El Navara D40 elevó el estándar de las pick-ups con su suspensión trasera independiente de cinco eslabones, única en la categoría. El motor diesel YD25DDTi de 2.5 litros y 174 CV con intercooler o el V6 VQ40DE de 4.0 litros y 261 CV le daban opciones para todo uso. Ganó el premio "Mejor pick-up" de múltiples publicaciones europeas. En Chile fue muy apreciada por su confort superior.',
    { potencia: '174 CV', peso: '1.900 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('nissan_navara_d23', 'Nissan Navara D23 NP300', ['Japón'], 2014, 9999,
    ['Pick-up', '2.3', 'Diesel', '4x4'],
    'El Navara D23 NP300 recibió el motor diesel YS23DDT de 2.3 litros biturbo con 190 CV y una resistente suspensión trasera de ballesta multilámina (abandonando la independiente del D40 por ser más robusta para carga pesada). El chasis de acero de ultra alta resistencia era 20% más rígido que el D40. Fue elegido Pickup del Año por múltiples medios europeos en 2015 y 2016.',
    { potencia: '190 CV', peso: '1.900 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  // ── NISSAN (eléctricos) ────────────────────────────────────────────────────

  car('nissan_leaf_ze0', 'Nissan Leaf ZE0 (1a gen)', ['Japón'], 2010, 2017,
    ['Hatchback', 'Eléctrico', 'Tracción delantera'],
    'El Leaf ZE0 fue el primer auto eléctrico de producción masiva del mundo, lanzado simultáneamente en Japón y EE.UU. en diciembre de 2010. Motor eléctrico de 80 kW (109 CV) con batería de 24 kWh y autonomía de 175 km NEDC. Sin tubo de escape, sin motor de combustión. Vendió 100.000 unidades en 2 años, demostrando que el mercado masivo de EVs era posible.',
    { potencia: '109 CV', peso: '1.521 kg', traccion: 'FF', velocidad_max: '145 km/h' }),

  car('nissan_leaf_ze1', 'Nissan Leaf ZE1 (2a gen)', ['Japón'], 2017, 9999,
    ['Hatchback', 'Eléctrico', 'Tracción delantera'],
    'El Leaf ZE1 llegó con batería de 40 kWh (autonomía 270 km WLTP) o la versión Plus con 62 kWh y 385 km. El sistema e-Pedal permite conducción con un solo pedal que acelera y frena. ProPilot con conducción autónoma Nivel 2 fue una primicia en el segmento. La versión Nismo con 218 CV fue la primera Leaf deportiva. Superó el millón de unidades vendidas en 2020.',
    { potencia: '150 CV', peso: '1.560 kg', traccion: 'FF', velocidad_max: '150 km/h' }),

  car('nissan_ariya', 'Nissan Ariya (FJ37)', ['Japón'], 2021, 9999,
    ['SUV', 'Eléctrico', '4x4'],
    'El Ariya es el SUV eléctrico de Nissan sobre la nueva plataforma CMF-EV compartida con Renault Mégane E-Tech. Motor dual para 4WD e-4ORCE con 306 CV y hasta 610 km de autonomía WLTP en la versión 87 kWh. El interior completamente plano sin consola central elevada y el panel LED continuo de pantallas son los elementos más destacados de su diseño interior revolucionario.',
    { potencia: '306 CV', peso: '2.062 kg', traccion: '4WD', velocidad_max: '200 km/h' }),

  // ── NISSAN (MPV y vans) ────────────────────────────────────────────────────

  car('nissan_elgrand_e50', 'Nissan Elgrand E50', ['Japón'], 1997, 2002,
    ['MPV', '3.3', 'V6', '4x4'],
    'El Elgrand E50 fue el competidor directo del Toyota Alphard antes de que el Alphard existiera. Con motor VG33E V6 de 3.3 litros y carrocería de furgoneta de lujo, los asientos executive traseros con mesa y mini pantalla LCD eran pioneros. El sistema 4WD ALL MODE disponible lo hacía útil en nieve. En Japón fue el MPV de lujo preferido por ejecutivos antes de que el Alphard lo destronara.',
    { potencia: '170 CV', peso: '1.960 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('nissan_serena_c25', 'Nissan Serena C25', ['Japón'], 2005, 2010,
    ['MPV', '2.0', '4x4'],
    'El Serena C25 fue la minivan familiar de precio accesible de Nissan, con puertas deslizantes eléctricas en ambos lados y 8 plazas. Motor MR20DE de 2.0 litros y 136 CV con tracción delantera o 4WD. El sistema "S-Hybrid" de recuperación de energía en frenado llegó en versiones tardías, siendo el primer híbrido ligero de Nissan. En Japón fue la minivan familiar más vendida durante su ciclo.',
    { potencia: '136 CV', peso: '1.760 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  // ── NISSAN (Skyline sedanes clásicos) ─────────────────────────────────────

  car('nissan_skyline_c10', 'Nissan Skyline C10 (base)', ['Japón'], 1968, 1972,
    ['Sedán', '1.8', 'Tracción trasera'],
    'El Skyline C10 base fue el sedán familiar que llevó el nombre Skyline a las masas. Con motor L18 de 1.8 litros y carrocería de cuatro puertas, era el auto de familia rápido y fiable de Nissan. La versión GT-R que se derivó de él hizo la fama, pero el C10 sedán fue el que vendió en masa y sentó las bases del Skyline como la berlina aspiracional japonesa por excelencia.',
    { potencia: '105 CV', peso: '1.010 kg', traccion: 'FR', velocidad_max: '165 km/h' }),

  car('nissan_skyline_c110', 'Nissan Skyline C110 "Kenmeri" (base)', ['Japón'], 1972, 1977,
    ['Sedán', '2.0', 'Tracción trasera'],
    'El Skyline C110 "Kenmeri" (por la campaña "Ken and Mary") fue el primer Skyline construido como auto moderno completo, con mayor espacio interior, mejor acabado y opciones de motor más amplias. El L20 de 2.0 litros era la base, con la versión 2000GT-X con DOHC de 145 CV en la cúspide. Solo 197 unidades del GT-R se construyeron, lo que convirtió al C110 base en el Skyline más fabricado de la historia.',
    { potencia: '115 CV', peso: '1.060 kg', traccion: 'FR', velocidad_max: '170 km/h' }),

  car('nissan_skyline_c210', 'Nissan Skyline C210 "Japan"', ['Japón'], 1977, 1981,
    ['Sedán', '2.0', 'Tracción trasera'],
    'El Skyline C210 apodado "Japan" fue el más austero de la era Skyline clásica, llegando durante la crisis del petróleo cuando Nissan debía equilibrar economía y rendimiento. Con motor L20B de 2.0 litros y 125 CV, mantuvo la tracción trasera que definía al Skyline. La versión GT-EX con motor FJ20 DOHC fue la más deportiva de la gama y precursora del R30 Turbo.',
    { potencia: '125 CV', peso: '1.100 kg', traccion: 'FR', velocidad_max: '170 km/h' }),

  // ── NISSAN (sedanes clásicos JDM) ─────────────────────────────────────────

  car('nissan_silvia_s110', 'Nissan Silvia S110 (3a gen)', ['Japón'], 1979, 1983,
    ['Coupé', '1.8', '2.0', 'Tracción trasera'],
    'El Silvia S110 fue el primero en usar el nombre "Silvia" después del S10 original, con diseño cuadrado propio de la época y opciones de motor CA18ET turbo de 135 CV. En EE.UU. se vendió como 200SX y fue el primer Silvia exitoso en mercados de exportación. Su carrocería hatchback o notchback y la tracción trasera sentaron las bases del S12 y los legendarios S13-S15.',
    { potencia: '135 CV', peso: '1.050 kg', traccion: 'FR', velocidad_max: '190 km/h' }),

  car('nissan_gloria_y32', 'Nissan Gloria Y32', ['Japón'], 1991, 1995,
    ['Sedán', '2.0', '3.0', 'V6', 'Tracción trasera'],
    'El Gloria Y32 fue el sedán ejecutivo de lujo de Nissan, rival directo del Toyota Crown. Con motor VG30E V6 de 3.0 litros y 180 CV, o el VG30DET turbo de 255 CV en la versión Gran Turismo, era uno de los sedanes de tracción trasera más rápidos de Japón. La versión Autech Stage con kit de carrocería y suspensión sport fue especialmente popular en la escena VIP.',
    { potencia: '255 CV', peso: '1.680 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_cima_f50', 'Nissan Cima F50 (Infiniti Q45)', ['Japón'], 2001, 2010,
    ['Sedán', '4.5', 'V8', 'Tracción trasera'],
    'El Cima F50 fue la berlina de lujo máxima de Nissan, con motor VK45DE V8 de 4.5 litros y 340 CV. Compitiendo con el Lexus LS430 y el BMW Serie 7, ofrecía suspensión hidráulica activa, asientos con masaje y pantalla de navegación de 8". Fuera de Japón se llamó Infiniti Q45. Sus dimensiones y nivel de equipamiento lo posicionaban cerca del segmento Maybach.',
    { potencia: '340 CV', peso: '1.840 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_fuga_y51', 'Nissan Fuga Y51 (Infiniti M)', ['Japón'], 2009, 9999,
    ['Sedán', '2.5', '3.7', 'V6', 'Híbrido', 'Tracción trasera'],
    'El Fuga Y51 fue el sedán ejecutivo mediano de Nissan con motor VQ37VHR V6 de 3.7 litros y 333 CV o la versión híbrida con 364 CV sistema total. Su chasis trasero con diferencial electrónico y dirección activa trasera daban un manejo extraordinariamente dinámico. Fuera de Japón se llamó Infiniti M37/M56 y compitió directamente con el BMW Serie 5 y el Mercedes Clase E.',
    { potencia: '333 CV', peso: '1.720 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('nissan_primera_p10', 'Nissan Primera P10 (1a gen)', ['Japón'], 1990, 1995,
    ['Sedán', 'Hatchback', '1.6', '2.0', 'Tracción delantera'],
    'El Primera P10 fue la respuesta de Nissan al Golf y al Cavalier con un enfoque en el manejo deportivo por encima del confort. Su suspensión multilink trasera era inusual en el segmento y daba un manejo más preciso que cualquier rival. Con motor SR20DE de 2.0 litros y 150 CV en la versión 2.0e, ganó el premio al Mejor Auto del Año del Reino Unido en 1991.',
    { potencia: '150 CV', peso: '1.170 kg', traccion: 'FF', velocidad_max: '205 km/h' }),

  car('nissan_almera_n15', 'Nissan Almera N15', ['Japón'], 1995, 2000,
    ['Sedán', 'Hatchback', '1.4', '1.6', 'Tracción delantera'],
    'El Almera N15 reemplazó al Sunny como el compacto europeo de Nissan. Con motor GA16DE de 1.6 litros y 99 CV, ofrecía equipamiento generoso a precio accesible. Fue fabricado en España (Barcelona) para el mercado europeo y fue el primer Nissan en ofrecer airbag doble de serie. La versión GTi con SR20DE de 150 CV fue una hot hatch discreta pero genuinamente rápida.',
    { potencia: '99 CV', peso: '1.080 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('nissan_almera_n16', 'Nissan Almera N16', ['Japón'], 2000, 2006,
    ['Sedán', 'Hatchback', '1.5', '1.8', 'Tracción delantera'],
    'El Almera N16 fue el segundo y último Almera, con líneas más redondeadas y motor QG15DE de 1.5 litros como base. Fue el Nissan compacto más vendido en Europa en su época, con el Premio al Mejor Auto en varios países. La versión Tino (MPV) ofrecía espacio de minivan en dimensiones de compacto. Fue reemplazado por el Tiida y el Note en distintos mercados.',
    { potencia: '98 CV', peso: '1.130 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('nissan_almera_tino', 'Nissan Almera Tino V10', ['Japón'], 2000, 2006,
    ['MPV', '1.8', '2.2', 'Diesel', 'Tracción delantera'],
    'El Almera Tino fue el MPV compacto de Nissan basado en la plataforma del Almera N16 pero con carrocería alta tipo monovolumen. Con motor QR20DE de 2.0 litros o el diesel YD22DDTi de 2.2 litros, ofrecía espacio para 5 pasajeros con el perfil de un compacto. La fila trasera deslizante y la configuración 2+3 de asientos eran característica única del modelo.',
    { potencia: '136 CV', peso: '1.420 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('nissan_sunny_b12', 'Nissan Sunny B12', ['Japón'], 1986, 1991,
    ['Sedán', '1.3', '1.5', 'Tracción delantera'],
    'El Sunny B12 fue la versión japonesa del compacto familiar de Nissan, conocido como Pulsar en otros mercados. Con motor GA13S de 1.3 litros o E15ET turbo de 1.5 litros, era el sedán familiar más asequible de Nissan. En Latinoamérica fue importado en pequeñas cantidades y dejó huella por su sencillez mecánica y durabilidad. Padre del Sentra B13 que vendría después.',
    { potencia: '82 CV', peso: '870 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('nissan_sylphy_b17', 'Nissan Sylphy B17', ['Japón'], 2012, 9999,
    ['Sedán', '1.6', '1.8', 'Tracción delantera'],
    'El Sylphy B17 es el sedán familiar mediano de Nissan para Asia y Oriente Medio, con dimensiones generosas y enfoque en el confort del pasajero trasero. Motor HR16DE de 1.6 litros o el MRA8DE de 1.8 litros. En China es uno de los sedanes más vendidos de Nissan con más de 300.000 unidades anuales. La versión e-Power (2021) con motor eléctrico de 136 CV fue un hito en el mercado chino.',
    { potencia: '122 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('nissan_versa_n17', 'Nissan Versa N17 (Note)', ['Japón'], 2011, 9999,
    ['Sedán', 'Hatchback', '1.6', 'Tracción delantera'],
    'El Versa N17 fue el subcompacto más económico de Nissan para el mercado americano, con motor HR16DE de 1.6 litros y 109 CV. Su punto fuerte era el precio base más bajo del segmento en EE.UU. y el mayor espacio interior de su clase. En México fue uno de los autos más vendidos durante años consecutivos. La versión Hatchback se llamó Versa Note y la berlina simplemente Versa.',
    { potencia: '109 CV', peso: '1.110 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('nissan_sentra_b17', 'Nissan Sentra B17 (7a gen)', ['Japón'], 2012, 9999,
    ['Sedán', '1.8', 'Tracción delantera'],
    'El Sentra B17 fue el sedán compacto más refinado de Nissan hasta esa fecha, con líneas de coupé, motor MRA8DE de 1.8 litros y 132 CV con CVT Xtronic de serie. Su coeficiente aerodinámico de 0.29Cd era el más bajo de la categoría. En Chile, México y Colombia fue el sedán compacto japonés más vendido en varios años. La versión SR con techo de vidrio y llantas de 17" fue la más popular.',
    { potencia: '132 CV', peso: '1.270 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  // ── NISSAN (SUVs y crossovers adicionales) ────────────────────────────────

  car('nissan_qashqai_j10', 'Nissan Qashqai J10 (1a gen)', ['Japón'], 2007, 2013,
    ['SUV', '1.6', '2.0', 'Tracción delantera'],
    'El Qashqai J10 inventó el segmento del crossover compacto urbano tal como lo conocemos hoy. Con motor MR20DE de 2.0 litros y 141 CV, carrocería alta pero sin capacidades todoterreno reales, fue el primer SUV pensado exclusivamente para la ciudad. En Europa fue el crossover más vendido en 2008 y 2009. Diseñado en el centro de diseño europeo de Nissan en Londres.',
    { potencia: '141 CV', peso: '1.395 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('nissan_qashqai_j11', 'Nissan Qashqai J11 (2a gen)', ['Japón'], 2013, 9999,
    ['SUV', '1.2', '1.6', 'Turbo', 'Tracción delantera'],
    'El Qashqai J11 creció en refinamiento con motores turbo más eficientes: DIG-T 1.2 litros de 115 CV o el 1.6 de 163 CV. La versión e-Power (2021) con motor eléctrico de 190 CV fue el primer Qashqai sin caja de cambios convencional. El sistema ProPilot de conducción autónoma Nivel 2 llegó en 2017 como pionero en el segmento. Es el crossover más vendido de Europa en múltiples años.',
    { potencia: '163 CV', peso: '1.415 kg', traccion: 'FF', velocidad_max: '200 km/h' }),

  car('nissan_kicks_p15', 'Nissan Kicks P15', ['Japón'], 2016, 9999,
    ['SUV', '1.6', 'Tracción delantera'],
    'El Kicks P15 fue el crossover subcompacto de Nissan para mercados emergentes, diseñado en Brasil para el mundo. Con motor HR16DE de 1.6 litros y 114 CV, su precio accesible y diseño dinámico lo hicieron éxito inmediato en Latinoamérica. En Chile fue el SUV subcompacto más vendido durante su primer año. La versión e-Power con motor eléctrico de 136 CV transformó su propuesta en los mercados asiáticos.',
    { potencia: '114 CV', peso: '1.202 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('nissan_dualis_j10', 'Nissan Dualis / Qashqai+2 (J10)', ['Japón'], 2007, 2013,
    ['SUV', '2.0', '4x4'],
    'El Dualis fue la versión AWD y de mayor tamaño del Qashqai J10, vendido como Dualis en Japón y Australia, y como Qashqai+2 en Europa (con tercera fila de asientos). Motor MR20DE de 2.0 litros y sistema AWD automático. La variante de 7 plazas con tercera fila fue única en el segmento y muy popular en familias australianas. Fue la base del futuro Rogue para el mercado americano.',
    { potencia: '141 CV', peso: '1.500 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('nissan_rogue_t32', 'Nissan Rogue / X-Trail T32', ['Japón'], 2013, 9999,
    ['SUV', '2.0', '2.5', '4x4'],
    'El Rogue T32 (X-Trail en el resto del mundo) fue el SUV mediano de Nissan sobre plataforma CMF-CD. Con motor QR25DE de 2.5 litros y 170 CV y sistema AWD inteligente de embrague electrónico, fue el SUV más vendido de Nissan en EE.UU. La versión de 7 plazas con tercera fila fue inédita en el segmento. El sistema ProPilot de conducción autónoma se añadió en 2018.',
    { potencia: '170 CV', peso: '1.640 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('nissan_magnite_b0', 'Nissan Magnite (B0)', ['Japón'], 2020, 9999,
    ['SUV', '1.0', 'Turbo', 'Tracción delantera'],
    'El Magnite fue el SUV subcompacto de Nissan diseñado específicamente para mercados emergentes como India, Indonesia y Latinoamérica. Con motor HRA0DDT turbo de 1.0 litros y 100 CV, en India fue el más económico del segmento con precio inferior a los 7.000 dólares. Su diseño atrevido con parrilla flotante y llantas de 16" lo hacen visualmente más grande de lo que es.',
    { potencia: '100 CV', peso: '980 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('nissan_xterra_n50', 'Nissan Xterra N50 (2a gen)', ['Japón'], 2005, 2015,
    ['SUV', '4.0', 'V6', '4x4'],
    'El Xterra N50 fue el último SUV de chasis escalera de Nissan para el mercado americano, con motor VQ40DE V6 de 4.0 litros y 261 CV. Su barra de techo de serie, protectores de carrocería y bloqueo de diferencial trasero lo hacían el SUV off-road más capaz de Nissan. La versión Pro-4X con suspensión BILSTEIN de serie fue la más apreciada por los enthusiasts del todoterreno.',
    { potencia: '261 CV', peso: '1.984 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('nissan_armada_a60', 'Nissan Armada / Patrol A60 (2a gen)', ['Japón'], 2016, 9999,
    ['SUV', '5.6', 'V8', '4x4'],
    'El Armada A60 fue el SUV full-size de Nissan para el mercado americano, compartiendo plataforma con el Patrol Y62. Motor VK56VD V8 de 5.6 litros y 390 CV con caja de 7 velocidades. Con capacidad para 8 pasajeros y remolque de hasta 3.9 toneladas, compite con el Chevrolet Tahoe y el Ford Expedition. Su sistema de suspensión hidráulica activa es transferido directamente del Patrol Y62.',
    { potencia: '390 CV', peso: '2.760 kg', traccion: '4WD', velocidad_max: '195 km/h' }),

  car('nissan_terra_p61b', 'Nissan Terra P61B', ['Japón'], 2018, 9999,
    ['SUV', '2.5', 'Diesel', '4x4'],
    'El Terra fue el SUV de 7 plazas de Nissan para Asia Pacífico basado en la plataforma del Navara D23. Con motor YS25DDTi diesel de 2.5 litros y 190 CV y chasis escalera, es el SUV más capaz de la gama Nissan para uso mixto urbano-todoterreno. Muy popular en Filipinas, Tailandia y Chile como alternativa al Toyota Fortuner con mayor espacio interior de tercera fila.',
    { potencia: '190 CV', peso: '2.050 kg', traccion: '4WD', velocidad_max: '170 km/h' }),

  car('nissan_pathfinder_r51', 'Nissan Pathfinder R51 (3a gen)', ['Japón'], 2004, 2012,
    ['SUV', '2.5', '4.0', 'V6', 'Diesel', '4x4'],
    'El Pathfinder R51 fue la generación de transición entre SUV de trabajo y crossover familiar. Motor VQ40DE V6 de 4.0 litros y 266 CV o el diesel YD25DDTi de 2.5 litros turbo con 174 CV. Con siete plazas y techo solar panorámico, fue el Pathfinder más vendido de la historia. En Chile fue un bestseller en el segmento de SUV medianos durante toda su producción.',
    { potencia: '266 CV', peso: '2.050 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  car('nissan_murano_z51', 'Nissan Murano Z51 (2a gen)', ['Japón'], 2008, 2014,
    ['SUV', '3.5', 'V6', '4x4'],
    'El Murano Z51 mantuvo el diseño cupé atrevido de su predecesor pero con mayor refinamiento. Motor VQ35DE de 3.5 litros y 265 CV con CVT Xtronic. El techo panorámico de apertura completa y el interior de cuero Graphite Black eran los elementos de lujo más destacados. La versión CrossCabriolet de 2011 con capota de tela plegable fue el único SUV convertible de producción en serie del mundo.',
    { potencia: '265 CV', peso: '1.990 kg', traccion: '4WD', velocidad_max: '200 km/h' }),

  car('nissan_skyline_crossover', 'Nissan Skyline Crossover (J50)', ['Japón'], 2007, 2014,
    ['SUV', '3.7', 'V6', '4x4'],
    'El Skyline Crossover fue la versión SUV del Skyline V36, vendido fuera de Japón como Infiniti EX35/EX37. Con motor VQ37VHR de 3.7 litros y 333 CV y sistema AWD inteligente, era el crossover de lujo más dinámico del mercado japonés. Su plataforma y suspensión trasera multilink eran directamente heredadas del Skyline sedán, garantizando un manejo excepcional para la categoría.',
    { potencia: '333 CV', peso: '1.810 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  // ── NISSAN (pick-ups y comerciales adicionales) ───────────────────────────

  car('nissan_titan_a60', 'Nissan Titan A60 (1a gen)', ['Japón'], 2003, 2015,
    ['Pick-up', '5.6', 'V8', '4x4'],
    'El Titan A60 fue el primer intento de Nissan de entrar al mercado de pick-ups full-size americano. Motor VK56DE V8 de 5.6 litros y 317 CV, fabricado en Canton, Mississippi. Su garantía de 5 años/100.000 millas fue la más generosa del segmento en su lanzamiento. A pesar de un buen producto, nunca logró superar el 5% de participación en el mercado dominado por Ford, GM y Ram.',
    { potencia: '317 CV', peso: '2.270 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('nissan_nv200_m20', 'Nissan NV200 / e-NV200', ['Japón'], 2009, 9999,
    ['Furgoneta', '1.6', 'Comercial'],
    'El NV200 fue la furgoneta compacta de Nissan, adoptada como taxi oficial de Nueva York (en versión eléctrica e-NV200 con motor de 109 CV y 200 km de autonomía) y de múltiples ciudades europeas. Con motor HR16DE de 1.6 litros y carga máxima de 765 kg, combinaba agilidad urbana con practicidad comercial. La versión eléctrica fue pionera en la electrificación de flotas de taxis.',
    { potencia: '110 CV', peso: '1.700 kg', traccion: 'FF', velocidad_max: '145 km/h' }),

  car('nissan_urvan_e26', 'Nissan Urvan / NV350 E26', ['Japón'], 2012, 9999,
    ['Furgoneta', '2.5', 'Diesel', 'Comercial'],
    'El Urvan E26 (NV350 en Japón) es la furgoneta grande de Nissan, rival del Toyota HiAce H200. Con motor YD25DDTi diesel de 2.5 litros turbo y 129 CV, carrocería de techo alto opcional y carga de hasta 1.000 kg, domina el mercado de transporte de pasajeros en Asia. En Chile es ampliamente usada como ambulancia, transporte escolar y furgoneta de carga.',
    { potencia: '129 CV', peso: '2.010 kg', traccion: 'FR', velocidad_max: '150 km/h' }),

  // ── NISSAN (eléctricos y especiales adicionales) ──────────────────────────

  car('nissan_sakura', 'Nissan Sakura (B6AW)', ['Japón'], 2022, 9999,
    ['Kei', 'Eléctrico', 'Tracción delantera'],
    'El Sakura es el kei car eléctrico co-desarrollado con Mitsubishi (eK Cross EV). Batería de 20 kWh con 180 km de autonomía WLTCm, motor de 47 CV. En Japón fue el vehículo eléctrico más vendido de 2022 y 2023, superando al Nissan Leaf. Su tamaño kei lo hace perfecto para ciudades japonesas. Fue el detonante del boom de los mini EVs en Japón.',
    { potencia: '47 CV', peso: '1.080 kg', traccion: 'FF', velocidad_max: '130 km/h' }),

  car('nissan_livina_c11', 'Nissan Livina C11', ['Japón'], 2006, 9999,
    ['MPV', '1.6', '1.8', 'Tracción delantera'],
    'El Livina fue el MPV compacto de 7 plazas de Nissan para Asia Pacífico y Latinoamérica, con motor HR16DE de 1.6 litros y configuración de asientos 2-3-2. Su precio accesible y practicidad lo hicieron favorito para familias grandes con presupuesto limitado. En Brasil fue ensamblado localmente y fue uno de los 10 autos más vendidos del país durante varios años.',
    { potencia: '109 CV', peso: '1.345 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('nissan_prairie_m11', 'Nissan Prairie M11', ['Japón'], 1988, 1998,
    ['MPV', '2.0', '4x4'],
    'El Prairie M11 fue la segunda generación de la Prairie, el primer MPV de Nissan y uno de los primeros del mundo en ofrecer puertas deslizantes traseras en ambos lados. Con motor SR20DE de 2.0 litros y 150 CV y opción de 4WD, era el único MPV con capacidades de conducción deportiva. Fue un precursor del X-Trail en concepto de MPV-crossover todoterreno.',
    { potencia: '150 CV', peso: '1.420 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  // ── NISSAN (especiales y únicos) ──────────────────────────────────────────

  car('nissan_figaro', 'Nissan Figaro', ['Japón'], 1991, 1991,
    ['Cabriolet', '1.0', 'Turbo', 'Retro'],
    'El Figaro fue producido en un solo año, 1991, en solo 20.000 unidades sortadas por lotería entre 500.000 solicitantes. Motor CG10DET turbo de 1.0 litros y 76 CV en un cuerpo retro inspirado en los años 60s con capota de tela plegable manual. Cuatro colores pastel exclusivos, interior de cuero color marfil. Hoy está en el top de los autos japoneses más deseados por coleccionistas europeos.',
    { potencia: '76 CV', peso: '760 kg', traccion: 'FF', velocidad_max: '155 km/h' }),

  car('nissan_pao', 'Nissan Pao', ['Japón'], 1989, 1991,
    ['Hatchback', '1.0', 'Retro'],
    'El Pao fue parte de la serie "Pike Cars" de Nissan junto al Be-1, Figaro y S-Cargo. Diseñado por Naoki Saito como un auto de aspecto vintage 50s-60s con detalles de tela y materiales naturales en el interior. Motor MA10S de 1.0 litros y 52 CV. Solo 51.657 unidades producidas, todas vendidas con anticipación antes de la producción. Hoy es importado masivamente por coleccionistas europeos.',
    { potencia: '52 CV', peso: '720 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  car('nissan_scargo', 'Nissan S-Cargo', ['Japón'], 1989, 1992,
    ['Furgoneta', '1.5', 'Retro'],
    'El S-Cargo (el nombre es un juego de palabras entre "S-car go" y "escargot", caracol en francés) fue la furgoneta de reparto más adorable jamás producida. Diseñada por Shiro Nakamura con forma de caracol, ventana trasera redonda y portón de acceso lateral, fue usada en Japón por flotas de repartidores de periódicos y pastelerías. Motor Z16 de 1.5 litros. Solo 12.000 unidades en 3 años de producción.',
    { potencia: '76 CV', peso: '930 kg', traccion: 'FF', velocidad_max: '130 km/h' }),

  car('nissan_rasheen', 'Nissan Rasheen', ['Japón'], 1994, 2000,
    ['Crossover', '1.5', '2.0', 'Tracción delantera'],
    'El Rasheen fue el crossover avant-garde de Nissan: carrocería cuadrada con líneas de diseño industrial, inspirada en un Jeep minimalista pero con mecánica de urban hatchback. Con motor SR20DE de 2.0 litros y 135 CV o el GA15DE de 1.5 litros, no tenía las capacidades todoterreno que su aspecto prometía, pero era enormemente original y divertido. Hoy es muy buscado por diseñadores y creativos.',
    { potencia: '135 CV', peso: '1.270 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  // ── DATSUN ────────────────────────────────────────────────────────────────

  car('datsun_fairlady_sp311', 'Datsun Fairlady SP311', ['Japón'], 1965, 1970,
    ['Roadster', '1.6', 'Tracción trasera'],
    'El Fairlady SP311 fue el deportivo roadster de Datsun antes del legendario 240Z. Con motor R16 de 1.6 litros y 96 CV en un cuerpo abierto de apenas 800 kg, era un roadster puro al estilo inglés. Participó en la carrera Pikes Peak y fue el auto que convenció a Nissan de que podían construir un deportivo serio. Padre directo del S30 que cambiaría el mundo.',
    { potencia: '96 CV', peso: '800 kg', traccion: 'FR', velocidad_max: '175 km/h' }),

  car('datsun_sunny_b10', 'Datsun Sunny B10 (1a gen)', ['Japón'], 1966, 1970,
    ['Sedán', '1.0', 'Tracción trasera'],
    'El Sunny B10 fue el primer auto de Datsun diseñado como competidor directo del VW Beetle en el mercado global. Con motor A10 de 1.0 litros y 56 CV en apenas 610 kg, era extraordinariamente eficiente y fiable. Fue la base del exitosísimo Sunny B110 y el inicio de la línea que eventualmente derivaría en el Sentra. En Japón fue el primer auto asequible de clase media.',
    { potencia: '56 CV', peso: '610 kg', traccion: 'FR', velocidad_max: '130 km/h' }),

  car('datsun_1200_b110', 'Datsun 1200 (B110)', ['Japón'], 1970, 1973,
    ['Sedán', 'Coupé', '1.2', 'Tracción delantera'],
    'El Datsun 1200 B110 fue revolucionario: primer auto japonés de tracción delantera en producción masiva. Con motor A12 de 1.2 litros transversal y 69 CV, la versión Coupé de 2 puertas era sorprendentemente deportiva. Ganó su clase en la carrera Baja 1000 de 1973. El motor A12 es considerado uno de los más modificables de la historia de Nissan y sigue en uso en competición amateur.',
    { potencia: '69 CV', peso: '700 kg', traccion: 'FF', velocidad_max: '145 km/h' }),

  car('datsun_120y_b210', 'Datsun 120Y / Honey Bee (B210)', ['Japón'], 1973, 1978,
    ['Sedán', 'Hatchback', '1.2', '1.4', 'Tracción delantera'],
    'El 120Y (B210) fue el Datsun más vendido de los años 70s en Europa y Latinoamérica. Con motor A12 de 1.2 litros y la famosa economía de combustible de 4.5L/100km que Datsun publicitaba, fue elegido por miles de familias como primer auto japonés. La versión Honey Bee Coupé con diseño de 2 puertas y ventana trasera inclinada fue la más querida por jóvenes.',
    { potencia: '65 CV', peso: '760 kg', traccion: 'FF', velocidad_max: '148 km/h' }),

  car('datsun_fairlady_z_s30', 'Datsun 240Z / Fairlady Z S30', ['Japón'], 1969, 1978,
    ['Deportivo', 'Coupé', '2.4', 'Tracción trasera'],
    'El 240Z fue el primer deportivo japonés que convenció al mundo de que Japón podía construir autos de lujo. Con motor L24 de 6 cilindros en línea y 2.4 litros, diseño que evocaba el E-Type Jaguar y un precio 40% menor que los europeos comparables, fue un fenómeno de ventas especialmente en EE.UU. Vendió 156.000 unidades solo en su primer año. Padre de toda la saga Fairlady Z que continúa hasta hoy.',
    { potencia: '151 CV', peso: '1.045 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('datsun_260z', 'Datsun 260Z / 280Z (S30 tardío)', ['Japón'], 1974, 1978,
    ['Deportivo', 'Coupé', '2.6', 'Tracción trasera'],
    'El 260Z y 280Z fueron las evoluciones del 240Z original con motores más grandes para cumplir normas de emisiones americanas que reducían la potencia. El 280Z con motor L28E de 2.8 litros e inyección electrónica recuperó la performance perdida con 170 CV. La versión 2+2 con batalla alargada para cuatro plazas anticipó la evolución del Z hacia un GT más completo.',
    { potencia: '170 CV', peso: '1.120 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('datsun_bluebird_510', 'Datsun Bluebird 510', ['Japón'], 1967, 1973,
    ['Sedán', '1.6', 'Tracción trasera'],
    'El Bluebird 510 fue el auto que convenció al mercado norteamericano de que los autos japoneses podían ser ingeniería seria. Con suspensión independiente en las cuatro ruedas —inusual en su clase y precio— y un motor confiable, ganó múltiples premios de automovilismo amateur en EE.UU. Peter Brock lo llevó a la victoria en carreras Trans-Am. Directamente comparable a los BMW de la época en deportividad.',
    { potencia: '96 CV', peso: '870 kg', traccion: 'FR', velocidad_max: '165 km/h' }),

  car('datsun_go_f15', 'Datsun GO (F15)', ['Japón'], 2012, 9999,
    ['Hatchback', '1.2', 'Tracción delantera'],
    'El Datsun GO marcó el regreso de la marca Datsun después de 30 años, resucitada por Nissan para mercados emergentes como India, Indonesia y Sudáfrica. Con motor HR12DE de 1.2 litros y 67 CV, carece de airbags en versiones base para mantener el precio mínimo. En India fue controversial por su puntuación de 0 estrellas en NCAP, generando debate global sobre seguridad en mercados en desarrollo.',
    { potencia: '67 CV', peso: '730 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  // ── HONDA ─────────────────────────────────────────────────────────────────

  car('honda_civic_ef', 'Honda Civic SiR EF (3a gen)', ['Japón'], 1987, 1991,
    ['Hatchback', '1.6', 'VTEC', 'Tracción delantera'],
    'La tercera generación del Civic introdujo el revolucionario motor B16A con VTEC en la versión japonesa SiR. 150 CV a 7.600 rpm desde 1.6 litros sin turbo eran impensables en 1989. Este motor estableció la reputación de Honda como el fabricante de los motores de alta revolución más refinados del mundo.',
    { potencia: '150 CV', peso: '980 kg', traccion: 'FF', velocidad_max: '205 km/h' }),

  car('honda_civic_eg', 'Honda Civic EG SiR', ['Japón'], 1991, 1995,
    ['Hatchback', '1.6', 'VTEC', 'Tracción delantera'],
    'La quinta generación del Civic con VTEC redefinió el hot hatch japonés. El motor B16A de 160 CV en un chasis que pesaba apenas 1.040 kg creaba una experiencia eléctrica. La versión SiR con diferencial de deslizamiento limitado se convirtió en el FWD de referencia en circuitos de toda Asia.',
    { potencia: '160 CV', peso: '1.040 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('honda_civic_ek', 'Honda Civic EK', ['Japón'], 1995, 2000,
    ['Hatchback', 'Sedán', '1.6', 'VTEC', 'Tracción delantera'],
    'El EK mantuvo las opciones VTEC y añadió versiones más equipadas. El EK9 Type R con el B16B de 185 CV fue el hatchback FWD más rápido en Nürburgring de su época. La versión sedán fue popular en el mercado de exportación por su equilibrio entre precio y confiabilidad.',
    { potencia: '116 CV', peso: '1.000 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('honda_integra_dc2', 'Honda Integra Type R DC2', ['Japón'], 1995, 2001,
    ['Coupé', '1.8', 'VTEC', 'Tracción delantera'],
    'Considerado por muchos el mejor auto de tracción delantera jamás construido. El motor B18C de 190 CV a 8.000 rpm con VTEC, diferencial de deslizamiento limitado y el chasis más rígido de su clase creaban una experiencia de conducción sin igual. Tiene el récord Nürburgring de FWD de producción que mantuvo por años.',
    { potencia: '190 CV', peso: '1.100 kg', traccion: 'FF', velocidad_max: '225 km/h' }),

  car('honda_nsx_na1', 'Honda NSX NA1', ['Japón'], 1990, 2005,
    ['Deportivo', '3.0', 'V6', 'VTEC', 'Mid-engine'],
    'El NSX fue el primer superdeportivo japonés: diseñado con ayuda de Ayrton Senna, carrocería de aluminio, motor V6 VTEC mid-mounted y aerodinámica de Fórmula 1. Sin las peculiaridades de temperamento europeo, el NSX ofrecía deportividad pura con fiabilidad Honda. Durante años fue el referente contra el que se medía el Ferrari 348.',
    { potencia: '274 CV', peso: '1.370 kg', traccion: 'MR', velocidad_max: '270 km/h' }),

  car('honda_s2000_ap1', 'Honda S2000 AP1', ['Japón'], 1999, 2003,
    ['Roadster', '2.0', 'VTEC', 'Tracción trasera'],
    'El S2000 tenía el motor de producción más potente por litro de su época: 240 CV de 2.0 litros sin turbo, 9.000 rpm de límite. Carrocería de aluminio, distribución de pesos 50/50 y dirección de precisión quirúrgica. Una experiencia puramente analógica que requería habilidad real para dominar pero recompensaba con una satisfacción incomparable.',
    { potencia: '240 CV', peso: '1.250 kg', traccion: 'FR', velocidad_max: '240 km/h' }),

  car('honda_beat', 'Honda Beat PP1', ['Japón'], 1991, 1996,
    ['Kei Car', 'Roadster', 'Mid-engine'],
    'El último auto aprobado por Soichiro Honda. Único roadster mid-engine kei de producción. Motor E07A de 660cc con MTREC —sistema VTEC individual por cilindro— giraba hasta 8.100 rpm con 64 CV. Una joya de ingeniería miniaturizada que convirtía cada viaje en una experiencia.',
    { potencia: '64 CV', peso: '760 kg', traccion: 'MR', velocidad_max: '140 km/h' }),

  car('honda_crx_ef', 'Honda CRX EF', ['Japón'], 1987, 1991,
    ['Hatchback', '1.6', 'VTEC', 'Tracción delantera'],
    'El CRX fue el auto más ágil de Honda en los 80s: un hatchback de dos plazas de apenas 900 kg con opciones de motor hasta el Si de 130 CV. La versión SiR japonesa con B16A de 150 CV era una herramienta de precisión en circuito. Su reducido tamaño y peso lo hacían más dinámico que el Civic del que derivaba.',
    { potencia: '130 CV', peso: '900 kg', traccion: 'FF', velocidad_max: '200 km/h' }),

  car('honda_prelude_ba4', 'Honda Prelude BA4', ['Japón'], 1987, 1991,
    ['Coupé', '2.0', 'Tracción delantera'],
    'La tercera generación del Prelude introdujo la dirección en las cuatro ruedas —4WS— una tecnología revolucionaria para la época. Con motor B20A de 145 CV y carrocería coupé de líneas europeas, era el Honda más sofisticado del mercado. La 4WS mejoraba notablemente la maniobrabilidad en ciudad y la estabilidad en curvas rápidas.',
    { potencia: '145 CV', peso: '1.160 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('honda_n360', 'Honda N360', ['Japón'], 1967, 1972,
    ['Kei Car', '2 puertas'],
    'El primer gran éxito comercial de Honda y el kei car más vendido de su época. Con motor de moto Honda de 354cc adaptado para el auto, fue revolucionario por su enfriamiento por aire y rendimiento. Estableció a Honda como fabricante serio y no solo de motocicletas.',
    { potencia: '31 CV', peso: '460 kg', traccion: 'FF', velocidad_max: '115 km/h' }),

  // ── HONDA (deportivos históricos) ─────────────────────────────────────────

  car('honda_s600', 'Honda S600', ['Japón'], 1963, 1965,
    ['Roadster', '0.6', 'DOHC', 'Tracción trasera'],
    'El S600 fue el segundo auto que Honda lanzó al mercado y el primero en tener motor DOHC de cadena en un coche de producción en serie de tan pequeño tamaño. Con solo 606cc y 57 CV, alcanzaba los 145 km/h gracias a la transmisión directa a las ruedas traseras por cadena (sin diferencial convencional). Demostró desde el primer día que Honda era una empresa de ingeniería seria.',
    { potencia: '57 CV', peso: '620 kg', traccion: 'FR', velocidad_max: '145 km/h' }),

  car('honda_s800', 'Honda S800', ['Japón'], 1966, 1970,
    ['Roadster', 'Coupé', '0.8', 'DOHC', 'Tracción trasera'],
    'El S800 fue el sucesor del S600 con motor ampliado a 791cc y 70 CV, capaz de llegar a los 160 km/h desde 615 kg. La versión Coupé con techo fijo fue la más vendida. Compitió exitosamente en carreras de resistencia y fue el auto que dio a Honda su reputación de motores de altas revoluciones. Ganó su clase en las 24 Horas de Spa. Su espíritu vive en el S2000 y el S660.',
    { potencia: '70 CV', peso: '620 kg', traccion: 'FR', velocidad_max: '160 km/h' }),

  car('honda_nsx_nc1', 'Honda NSX NC1 (2a gen)', ['Japón'], 2016, 2022,
    ['Superdeportivo', '3.5', 'V6', 'Twin-Turbo', 'Híbrido', '4x4'],
    'El NSX NC1 de segunda generación fue tecnológicamente el Honda más complejo jamás construido: motor V6 biturbo de 3.5 litros con 507 CV más tres motores eléctricos (uno en el eje trasero, dos en el delantero), sistema Sport Hybrid SH-AWD con torque vectoring eléctrico independiente en cada rueda. Fabricado a mano en Marysville, Ohio. Un logro de ingeniería sin igual en la historia de Honda.',
    { potencia: '507 CV', peso: '1.725 kg', traccion: '4WD', velocidad_max: '307 km/h' }),

  car('honda_s660', 'Honda S660 (JW5)', ['Japón'], 2015, 2022,
    ['Roadster', '0.66', 'Turbo', 'Mid-engine', 'Kei'],
    'El S660 fue el kei roadster mid-engine de Honda, sucesor espiritual del Beat. Motor S07A turbo de 660cc y 64 CV montado centralmente detrás del conductor, tracción trasera, capota de tela manual y carrocería de fibra de carbono en la versión Modulo X. Con 830 kg, su relación potencia/peso lo hacía más ágil que muchos deportivos caros. Discontinuado en 2022 por falta de escala para electrificación.',
    { potencia: '64 CV', peso: '830 kg', traccion: 'MR', velocidad_max: '140 km/h' }),

  // ── HONDA (Civic historia completa) ───────────────────────────────────────

  car('honda_civic_1gen', 'Honda Civic (1a gen)', ['Japón'], 1972, 1979,
    ['Hatchback', '1.2', 'CVCC', 'Tracción delantera'],
    'El primer Civic revolucionó la industria automotriz: en 1975 fue el primero en cumplir las estrictas normas de emisiones americanas MUSKIE sin catalizador, gracias al motor CVCC (Compound Vortex Controlled Combustion) desarrollado por Honda. Este motor también era más económico que cualquier rival. El Civic demostró que la eficiencia y el rendimiento podían ir de la mano, cambiando la ingeniería automotriz global.',
    { potencia: '50 CV', peso: '680 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  car('honda_civic_ee', 'Honda Civic EE/EC (3a gen)', ['Japón'], 1983, 1987,
    ['Hatchback', '1.3', '1.5', 'Tracción delantera'],
    'La tercera generación del Civic introdujo el motor ZC DOHC de 1.6 litros en versiones de alto rendimiento y fue el primer Civic con suspensión trasera independiente. El diseño tipo cuña aerodinámico era moderno para la época. La versión Si con 130 CV fue el precursor directo del mítico EF Si que vendría después, estableciendo la identidad deportiva del Civic que dura hasta hoy.',
    { potencia: '130 CV', peso: '890 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('honda_civic_ep3', 'Honda Civic Type R EP3', ['Japón'], 2001, 2005,
    ['Hatchback', '2.0', 'VTEC', 'Tracción delantera'],
    'El Civic Type R EP3 fue el primero con motor K20A de 2.0 litros VTEC-i de 200 CV —el motor de cuatro cilindros más potente de Honda en producción. La suspensión McPherson delantera con triangulo inferior de aluminio y la dirección de precisión casi quirúrgica lo hacían devastador en circuito. El interior en rojo y negro con asientos Recaro era tan irresistible como el motor.',
    { potencia: '200 CV', peso: '1.204 kg', traccion: 'FF', velocidad_max: '235 km/h' }),

  car('honda_civic_fd2', 'Honda Civic Type R FD2 (JDM)', ['Japón'], 2007, 2010,
    ['Sedán', '2.0', 'VTEC', 'Tracción delantera'],
    'El Civic Type R FD2 fue exclusivo del mercado japonés: sedán de cuatro puertas con motor K20A de 225 CV y 8.000 RPM de límite, suspensión ajustable de doble horquilla delantera única en un Honda de calle. La diferencia con el FK2 europeo era enorme en filosofía: más peso pero más sofisticación mecánica. Hoy es el Type R más buscado por coleccionistas JDM puristas.',
    { potencia: '225 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '240 km/h' }),

  car('honda_civic_fk8', 'Honda Civic Type R FK8', ['Japón'], 2017, 2021,
    ['Hatchback', '2.0', 'Turbo', 'Tracción delantera'],
    'El Civic Type R FK8 fue el hot hatch más rápido en Nürburgring en su lanzamiento (7:43.8). Motor K20C1 turbo de 2.0 litros y 320 CV con tres modos de conducción. El aeropaquete con alerón trasero funcional, difusor trasero y splitter delantero generaba 100 kg de downforce a 250 km/h. La caja manual de 6 velocidades con limitador de empuje evitaba el torque steer en salidas fuertes.',
    { potencia: '320 CV', peso: '1.380 kg', traccion: 'FF', velocidad_max: '272 km/h' }),

  car('honda_civic_fl5', 'Honda Civic Type R FL5', ['Japón'], 2022, 9999,
    ['Hatchback', '2.0', 'Turbo', 'Tracción delantera'],
    'El Civic Type R FL5 estableció el récord del Nürburgring para tracción delantera en 7:44.881. Motor K20C1 actualizado con 329 CV, nueva suspensión trasera de doble horquilla (primera vez en un Civic Type R) y diferencial de deslizamiento limitado mecánico. El asistente de giro en curva usa el freno interior trasero para eliminar el subviraje. El interior es una declaración de principios minimalista.',
    { potencia: '329 CV', peso: '1.430 kg', traccion: 'FF', velocidad_max: '275 km/h' }),

  // ── HONDA (Accord historia) ────────────────────────────────────────────────

  car('honda_accord_1gen', 'Honda Accord (1a gen)', ['Japón'], 1976, 1981,
    ['Hatchback', '1.6', 'CVCC', 'Tracción delantera'],
    'El primer Accord fue Honda moviéndose hacia arriba: más grande y lujoso que el Civic, con motor CVCC de 1.6 litros y el primer aire acondicionado de serie en un auto japonés de este tamaño. Su hatchback de 3 puertas con maletero integrado fue un concepto nuevo. En EE.UU. fue el primer Honda fabricado localmente (1982 en Marysville), iniciando la producción americana de un fabricante japonés.',
    { potencia: '68 CV', peso: '870 kg', traccion: 'FF', velocidad_max: '150 km/h' }),

  car('honda_accord_cb7', 'Honda Accord CB7 (4a gen)', ['Japón'], 1989, 1993,
    ['Sedán', 'Coupé', '2.2', 'Tracción delantera'],
    'El Accord CB7 fue el que estableció al modelo como el sedán más vendido de EE.UU. por primera vez en 1989. Con motor F22A de 2.2 litros y 145 CV, fue el primero en ofrecer sistema de navegación GPS de serie (en Japón) y el primero con doble airbag. La versión Coupé de 2 puertas fue especialmente popular. Inició el ciclo virtuoso de renovación cada 4 años que el Accord mantiene hasta hoy.',
    { potencia: '145 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '205 km/h' }),

  car('honda_accord_cl7', 'Honda Accord Euro R (CL7)', ['Japón'], 2002, 2007,
    ['Sedán', '2.4', 'VTEC', 'Tracción delantera'],
    'El Accord Euro R CL7 fue el sedán deportivo definitivo de Honda: motor K24A con VTEC de 220 CV, chasis endurecido, frenos Brembo y diferencial de deslizamiento limitado. Solo vendido en Japón, fue el Accord más puro mecánicamente. La plataforma del Accord de 7a generación con suspensión delantera de doble horquilla era la misma que usaba el Acura TSX y el RSX Type S.',
    { potencia: '220 CV', peso: '1.380 kg', traccion: 'FF', velocidad_max: '240 km/h' }),

  car('honda_accord_cv', 'Honda Accord CV (10a gen)', ['Japón'], 2017, 9999,
    ['Sedán', '1.5', '2.0', 'Turbo', 'Híbrido', 'Tracción delantera'],
    'El Accord CV de 10a generación fue elegido auto del año norteamericano 2018, el cuarto Accord en ganar ese premio. Motor turbo de 1.5 litros/192 CV o 2.0 litros/252 CV o la versión híbrida de 212 CV sistema total. La plataforma NSP dio más rigidez con menor peso. La caja automática de 10 velocidades fue otra primera vez en el segmento.',
    { potencia: '192 CV', peso: '1.420 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  // ── HONDA (Integra historia) ───────────────────────────────────────────────

  car('honda_integra_db', 'Honda Integra DB (1a gen)', ['Japón'], 1985, 1989,
    ['Hatchback', 'Coupé', '1.6', 'DOHC', 'Tracción delantera'],
    'El Integra DB fue el primer Honda en llevar el nombre Integra y el primero en usar el motor ZC DOHC de 1.6 litros con 130 CV —un motor de altas revoluciones que anticipó el VTEC. Con carrocería coupé o hatchback de 3 puertas y diseño elegante, ocupó el espacio entre el Civic y el Accord. Fue muy popular en Japón y en EE.UU. como alternativa japonesa accesible al coupé europeo.',
    { potencia: '130 CV', peso: '960 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('honda_integra_da', 'Honda Integra DA (2a gen)', ['Japón'], 1989, 1993,
    ['Coupé', '1.8', 'DOHC', 'VTEC', 'Tracción delantera'],
    'El Integra DA fue el primero en estrenar el motor DOHC VTEC de 1.8 litros con 160 CV —la segunda generación del revolucionario sistema de válvulas variable de Honda. La versión XSi con VTEC marcó un antes y un después: por primera vez un motor de calle de 1.8 litros superaba los 100 CV por litro de cilindrada sin turbo. La diferencia de sonido al pasar los 5.800 RPM donde activaba el VTEC era eléctrica.',
    { potencia: '160 CV', peso: '1.040 kg', traccion: 'FF', velocidad_max: '215 km/h' }),

  car('honda_integra_dc5', 'Honda Integra Type R DC5', ['Japón'], 2001, 2006,
    ['Coupé', '2.0', 'VTEC', 'Tracción delantera'],
    'El Integra Type R DC5 fue el segundo Type R con motor K20A de 2.0 litros y 220 CV, compartido con el Civic Type R EP3. Su diferencial LSD de serie, la suspensión de doble horquilla delantera y los frenos Brembo lo convertían en la herramienta de circuito más afilada de Honda. La palanca de cambios de recorrido ultra corto y el peso de 1.270 kg lo hacían devastadoramente preciso.',
    { potencia: '220 CV', peso: '1.270 kg', traccion: 'FF', velocidad_max: '240 km/h' }),

  car('honda_integra_2022', 'Honda Integra (2022)', ['Japón'], 2022, 9999,
    ['Sedán', '1.5', 'Turbo', 'Tracción delantera'],
    'El regreso del Integra después de 16 años llegó como un Civic sedán mejorado con motor L15B7 turbo de 1.5 litros y 200 CV. La versión Type S con motor K20C4 de 320 CV y diferencial LSD fue el arma deportiva de Honda para el segmento premium. En China fue el más exitoso; en EE.UU. y Japón dividió opiniones al no ser tan radical como el DC2 original.',
    { potencia: '200 CV', peso: '1.345 kg', traccion: 'FF', velocidad_max: '225 km/h' }),

  // ── HONDA (Prelude historia) ───────────────────────────────────────────────

  car('honda_prelude_bb6', 'Honda Prelude BB6 (5a gen)', ['Japón'], 1996, 2001,
    ['Coupé', '2.2', 'VTEC', 'ATTS', 'Tracción delantera'],
    'El Prelude BB6 fue el más avanzado técnicamente: el sistema ATTS (Active Torque Transfer System) distribuía el torque entre las ruedas delanteras para corregir el subviraje, anticipando el torque vectoring moderno. Motor H22A VTEC de 2.2 litros y 185 CV. Fue el último Prelude hasta el revival de 2025 como modelo híbrido. Su sistema ATTS fue reconocido como uno de los avances más importantes en tracción delantera.',
    { potencia: '185 CV', peso: '1.300 kg', traccion: 'FF', velocidad_max: '225 km/h' }),

  car('honda_prelude_2025', 'Honda Prelude (2025 revival)', ['Japón'], 2025, 9999,
    ['Coupé', '2.0', 'Híbrido', 'Tracción delantera'],
    'El Prelude regresó en 2025 como coupé híbrido e:HEV de 2.0 litros con 184 CV sistema total, 24 años después del BB6. Construido sobre la plataforma del Accord con carrocería fastback de 2+2 plazas, su sistema híbrido sin embrague convencional (el motor de combustión solo genera electricidad por debajo de cierta carga) da una experiencia de conducción única. Apunta al nicho del coupé eficiente y elegante.',
    { potencia: '184 CV', peso: '1.490 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('honda_crx_del_sol', 'Honda CR-X del Sol (EG2)', ['Japón'], 1992, 1997,
    ['Targa', '1.6', 'VTEC', 'Tracción delantera'],
    'El CR-X del Sol fue el sucesor del CRX pero con un enfoque diferente: panel de techo rígido removible tipo targa que se guardaba en el maletero. Motor B16A VTEC de 1.6 litros y 160 CV en la versión SiR. El mecanismo de techo era una joya de ingeniería pero añadía peso. En Japón se llamó Civic del Sol y fue popular entre quienes querían deportividad con experiencia al aire libre.',
    { potencia: '160 CV', peso: '1.080 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  // ── HONDA (Insight e híbridos) ─────────────────────────────────────────────

  car('honda_insight_ze1', 'Honda Insight ZE1 (1a gen)', ['Japón'], 1999, 2006,
    ['Coupé', '1.0', 'Híbrido', 'IMA'],
    'El Insight ZE1 fue el primer híbrido gasolina-eléctrico vendido en EE.UU., llegando antes que el Prius a ese mercado. Carrocería aerodinámica de aluminio y plástico con Cd 0.25, motor de 1.0 litros asistido por motor eléctrico IMA (Integrated Motor Assist) de 10 CV para un total de 73 CV. Consumo récord de 3.4L/100km. Solo 2 plazas y sin maletero trasero, pero el más eficiente de su época.',
    { potencia: '73 CV', peso: '838 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('honda_insight_ze2', 'Honda Insight ZE2 (2a gen)', ['Japón'], 2009, 2014,
    ['Hatchback', '1.3', 'Híbrido', 'IMA'],
    'El Insight ZE2 fue la respuesta de Honda al Prius dominante, con precio de entrada significativamente menor. Motor 1.3 litros con sistema IMA y 98 CV sistema total, consumo de 4.4L/100km. El Eco Assist con indicador de follaje verde que crecía o se marchitaba según el estilo de conducción fue pionero en gamificación del ahorro de combustible. A pesar de las críticas por ser "menos" que el Prius, vendió bien en Europa y Japón.',
    { potencia: '98 CV', peso: '1.213 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('honda_e', 'Honda e (ZAA-ZC7)', ['Japón'], 2019, 2024,
    ['Hatchback', 'Eléctrico', 'Tracción trasera'],
    'El Honda e fue el EV más hermoso de su generación y técnicamente el más inusual: tracción trasera —única entre los EVs urbanos—, cámaras en lugar de espejos retrovisores, pantalla interior de 6 pantallas continuas. Batería de 35.5 kWh y 154 km de autonomía real —excepcionalmente corta— fue su talón de Aquiles. Honda lo discontinuó en 2024, pero es considerado un objeto de diseño único.',
    { potencia: '154 CV', peso: '1.514 kg', traccion: 'FR', velocidad_max: '145 km/h' }),

  // ── HONDA (Fit/Jazz historia) ──────────────────────────────────────────────

  car('honda_fit_gd', 'Honda Fit / Jazz GD (1a gen)', ['Japón'], 2001, 2008,
    ['Hatchback', '1.3', '1.5', 'i-DSI', 'Tracción delantera'],
    'El Fit GD ganó el premio Auto del Año en Japón 2002, el primero para un hatchback subcompacto. El motor de posición centrocentral permitió el revolucionario sistema Magic Seat: los asientos traseros se pliegan hacia adelante con el asiento plano contra el respaldo delantero, creando un espacio de carga completamente plano desde el suelo. En 1 metro cuadrado caben 4 llantas de 17 pulgadas o una moto pequeña.',
    { potencia: '83 CV', peso: '1.010 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('honda_fit_gk', 'Honda Fit / Jazz GK (3a gen)', ['Japón'], 2013, 2020,
    ['Hatchback', '1.3', '1.5', 'Híbrido', 'Tracción delantera'],
    'El Fit GK fue el primero de la familia en ofrecer motor híbrido i-DCD (Intelligent Dual Clutch Drive) con 136 CV sistema total y el menor consumo de su clase con 3.5L/100km. Mejoró el Magic Seat con tapizado de alta resistencia para asientos mojados. La versión RS con motor 1.5 litros y 132 CV fue la más deportiva. En Japón fue el auto más vendido durante tres años consecutivos.',
    { potencia: '132 CV', peso: '1.100 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('honda_fit_gr', 'Honda Fit / Jazz GR e:HEV (4a gen)', ['Japón'], 2020, 9999,
    ['Hatchback', '1.5', 'Híbrido', 'e:HEV', 'Tracción delantera'],
    'El Fit GR fue el primero de la familia con el nuevo sistema híbrido e:HEV de tercera generación: motor de gasolina 1.5 litros que actúa principalmente como generador, con motor eléctrico de 109 CV impulsando las ruedas. Consumo de 4.2L/100km en ciclo mixto. Cuatro variantes de equipamiento incluyendo la versión Crosstar elevada tipo mini-SUV. Ganó el premio Car of the Year Japan 2020.',
    { potencia: '109 CV', peso: '1.190 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  // ── HONDA (HR-V historia) ──────────────────────────────────────────────────

  car('honda_hrv_gh', 'Honda HR-V (GH) (1a gen)', ['Japón'], 1998, 2006,
    ['SUV', '1.6', 'Kei-based', '4x4'],
    'El HR-V original fue el primer mini-SUV de Honda, basado en la plataforma del Logo y Logo pero elevado. Con motor D16A de 1.6 litros y 125 CV, y un sistema 4WD real con diferencial trasero, era genuinamente capaz para su tamaño. La versión 3 puertas de diseño cupé era la más atractiva visualmente. Fue pionero del segmento que hoy domina el HR-V moderno.',
    { potencia: '125 CV', peso: '1.090 kg', traccion: '4WD', velocidad_max: '170 km/h' }),

  car('honda_hrv_ru', 'Honda HR-V / Vezel RU (2a gen)', ['Japón'], 2013, 2021,
    ['SUV', '1.5', 'Híbrido', 'Tracción delantera'],
    'El HR-V RU (Vezel en Japón) ganó el premio Auto del Año en Japón 2014. Con motor L15B de 1.5 litros o el híbrido i-DCD de 136 CV sistema total, y diseño tipo coupé con línea de cintura alta, fue el crossover compacto más bello de su generación. El Magic Seat del Fit aplicado al espacio del SUV lo hacía increíblemente versátil para mudanzas y transporte.',
    { potencia: '131 CV', peso: '1.250 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('honda_hrv_rs', 'Honda HR-V / Vezel RS (3a gen)', ['Japón'], 2021, 9999,
    ['SUV', '1.5', 'Híbrido', 'e:HEV', 'Tracción delantera'],
    'El HR-V RS de tercera generación adoptó el sistema e:HEV de 130 CV como opción principal. El diseño exterior ganó el premio de diseño Red Dot 2021 con sus faros partidos y la línea de cintura alta flotante. La versión RS con motor turbo 1.5 y 182 CV fue la más deportiva. En Chile fue el crossover Honda más vendido desde su lanzamiento, superando al CR-V.',
    { potencia: '130 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  // ── HONDA (CR-V historia) ──────────────────────────────────────────────────

  car('honda_crv_rd1', 'Honda CR-V RD1 (1a gen)', ['Japón'], 1995, 2001,
    ['SUV', '2.0', 'B20B', '4x4'],
    'El CR-V RD1 inventó el SUV compacto familiar moderno: carrocería monocasco, motor B20B de 2.0 litros y 147 CV, 4WD automático Real Time AWD. El piso de madera en el maletero desplegable como mesa de picnic fue una ocurrencia de diseño que se hizo icónica. Sin capacidades todoterreno extremas pero con la practicidad de un SUV en el cuerpo de un automóvil. Padre de todo el segmento.',
    { potencia: '147 CV', peso: '1.350 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('honda_crv_rd4', 'Honda CR-V RD4 (2a gen)', ['Japón'], 2001, 2006,
    ['SUV', '2.0', '2.4', '4x4'],
    'El CR-V RD4 creció en dimensiones pero mantuvo la filosofía monocasco. Motor K24A de 2.4 litros y 160 CV en versiones tardías. Fue el primero con sistema de navegación GPS integrado y el primero en ofrecer bluetooth de fábrica en el segmento. En Chile fue el SUV más vendido de su categoría durante cuatro años consecutivos, estableciendo definitivamente al CR-V como referencia del segmento.',
    { potencia: '160 CV', peso: '1.510 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('honda_crv_re', 'Honda CR-V RE (3a gen)', ['Japón'], 2006, 2012,
    ['SUV', '2.0', '2.4', '4x4'],
    'El CR-V RE fue el primer CR-V con motor R20A de 2.0 litros de inyección directa. La suspensión trasera multi-link independiente fue una novedad en el segmento. El diseño más angular y europeo fue bien recibido. En EE.UU. fue el SUV compacto más vendido en 2007 y 2008, superando incluso al Toyota RAV4. El techo panorámico y el sistema de entretenimiento para pasajeros traseros eran las opciones más solicitadas.',
    { potencia: '155 CV', peso: '1.534 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('honda_crv_rw', 'Honda CR-V RW (5a gen)', ['Japón'], 2016, 9999,
    ['SUV', '1.5', 'Turbo', 'Híbrido', '4x4'],
    'El CR-V RW fue el primero de la familia con motor turbo de 1.5 litros y 193 CV o la versión híbrida e:HEV de 212 CV sistema total. La versión de 7 plazas en ciertos mercados fue el primero con tercera fila en la historia del CR-V. El sistema Honda Sensing de asistencia a la conducción (frenado autónomo, control de crucero adaptativo) llegó de serie en versiones altas.',
    { potencia: '193 CV', peso: '1.579 kg', traccion: '4WD', velocidad_max: '190 km/h' }),

  // ── HONDA (Legend y grandes) ───────────────────────────────────────────────

  car('honda_legend_ka7', 'Honda Legend KA7 (2a gen)', ['Japón'], 1990, 1995,
    ['Sedán', 'Coupé', '3.2', 'V6', 'Tracción delantera'],
    'El Legend KA7 fue el sedan de lujo más avanzado de Honda, con motor C32A V6 de 3.2 litros y 230 CV. Fuera de Japón se vendió como Acura Legend y fue el primer Honda en ganar el premio Motor Trend Car of the Year (1991 Coupé). Su construcción era comparable a los alemanes en rigidez y silencio. La versión Coupé de dos puertas fue especialmente elegante.',
    { potencia: '230 CV', peso: '1.580 kg', traccion: 'FF', velocidad_max: '230 km/h' }),

  car('honda_legend_kb1', 'Honda Legend KB1 (4a gen)', ['Japón'], 2004, 2012,
    ['Sedán', '3.5', 'V6', 'SH-AWD'],
    'El Legend KB1 introdujo el revolucionario sistema SH-AWD (Super Handling All-Wheel Drive) con capacidad de enviar hasta el 70% del torque al eje trasero y hasta el 100% de ese al exterior en curvas, creando torque vectoring activo. Motor J35A V6 de 3.5 litros y 300 CV. El SH-AWD fue una de las innovaciones de manejo más importantes de los 2000s, adoptada después en el MDX y el NSX.',
    { potencia: '300 CV', peso: '1.820 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  // ── HONDA (Odyssey y MPV) ──────────────────────────────────────────────────

  car('honda_odyssey_ra1', 'Honda Odyssey RA1 (JDM 1a gen)', ['Japón'], 1994, 1999,
    ['MPV', '2.2', '2.3', 'Tracción delantera'],
    'La Odyssey RA1 japonesa fue la primera minivan de Honda, completamente diferente a la Odyssey americana: más pequeña, con carrocería monocasco de sedán elevada y 5 puertas incluyendo una deslizante. Con motor F22B de 2.2 litros y 145 CV, era más ágil que cualquier rival. Fue un éxito masivo en Japón y el primer MPV japonés con aspecto de automóvil normal.',
    { potencia: '145 CV', peso: '1.440 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('honda_odyssey_rl', 'Honda Odyssey RL (EE.UU., 3a gen)', ['Japón'], 2004, 2010,
    ['Minivan', '3.5', 'V6', 'Tracción delantera'],
    'La Odyssey RL americana fue elegida la mejor minivan de EE.UU. durante cinco años seguidos por Consumer Reports. Motor V6 J35A de 3.5 litros y 255 CV, sistema Variable Cylinder Management que desactiva 3 cilindros en crucero para ahorrar combustible. La pantalla de entretenimiento trasera de 9" y el sistema Honda Satellite-Linked Navigation eran los más avanzados del segmento.',
    { potencia: '255 CV', peso: '1.959 kg', traccion: 'FF', velocidad_max: '190 km/h' }),

  car('honda_stepwgn_rp', 'Honda Stepwgn RP (5a gen)', ['Japón'], 2015, 9999,
    ['MPV', '1.5', 'Turbo', 'Tracción delantera'],
    'El Stepwgn RP fue el primer MPV de Honda con motor turbo de 1.5 litros y 150 CV. La característica más memorable es la puerta trasera "Waku Waku Gate" que abre en dos modos: convencional como portón o como puerta lateral giratoria para acceso cómodo a la tercera fila sin bajar al suelo. En Japón es la minivan familiar preferida por familias con niños en edad escolar.',
    { potencia: '150 CV', peso: '1.780 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_freed_gb', 'Honda Freed GB (1a gen)', ['Japón'], 2008, 2016,
    ['MPV', '1.5', 'Híbrido', 'Tracción delantera'],
    'El Freed fue el MPV compacto de Honda para Japón y Asia, con espacio para 6-7 plazas en un cuerpo del tamaño de un hatchback mediano. Motor L15A de 1.5 litros o versión híbrida IMA de 113 CV sistema total. La altura interior de 1.275mm permitía entrar sin agacharse. La versión Spike con techo bajo fue la opción más urbana. En Japón compitió directamente con el Toyota Wish.',
    { potencia: '118 CV', peso: '1.380 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('honda_stream_rn', 'Honda Stream RN (1a gen)', ['Japón'], 2000, 2006,
    ['MPV', '1.7', '2.0', 'Tracción delantera'],
    'El Stream fue el MPV deportivo de Honda: carrocería baja tipo wagon deportivo con capacidad para 7 plazas, motor D17A de 1.7 litros o el K20A de 2.0 litros con 156 CV. El diseño con línea de techo inclinada y llantas de 16" le daba un aspecto mucho más deportivo que cualquier rival del segmento. Fue muy popular en Japón, Hong Kong y Singapur como alternativa elegante al MPV convencional.',
    { potencia: '156 CV', peso: '1.380 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  // ── HONDA (SUVs adicionales) ───────────────────────────────────────────────

  car('honda_pilot_yf2', 'Honda Pilot YF2 (2a gen)', ['Japón'], 2008, 2015,
    ['SUV', '3.5', 'V6', '4x4'],
    'El Pilot YF2 fue el SUV de tres filas de Honda para el mercado americano. Motor V6 J35Z4 de 3.5 litros y 250 CV con sistema VCM de desactivación de cilindros en crucero. Con capacidad para 8 pasajeros y remolque de 2.2 toneladas, era el SUV familiar de Honda más capaz. El sistema i-MID con pantalla central de 8" fue pionero en el segmento en su lanzamiento.',
    { potencia: '250 CV', peso: '2.010 kg', traccion: '4WD', velocidad_max: '190 km/h' }),

  car('honda_ridgeline_rt', 'Honda Ridgeline RT (1a gen)', ['Japón'], 2005, 2014,
    ['Pick-up', '3.5', 'V6', '4x4'],
    'La Ridgeline fue la única pick-up de carrocería monocasco del mercado americano: sin marco en escalera, con suspensión independiente en las cuatro ruedas. Motor V6 J35A de 3.5 litros y 247 CV. El maletero debajo del piso de la caja de carga con tapa impermeable fue una innovación única. Ideal para quien necesitaba pick-up sin los compromisos de las trucks convencionales.',
    { potencia: '247 CV', peso: '2.020 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('honda_element_yh2', 'Honda Element YH2', ['Japón'], 2002, 2011,
    ['SUV', '2.4', '4x4'],
    'El Element YH2 fue diseñado por y para la generación surf/skate de los 2000s. Con puertas traseras que abrían contrarrotadas hacia afuera (sin pilar B), interior completamente lavable con materiales de kayak, y suelo plano que con los asientos plegados convertía el interior en una cama, era el SUV de estilo de vida más original de Honda. Fue un cultobject entre surfistas y viajeros outdoor.',
    { potencia: '166 CV', peso: '1.600 kg', traccion: '4WD', velocidad_max: '175 km/h' }),

  car('honda_zrv', 'Honda ZR-V (2022)', ['Japón'], 2022, 9999,
    ['SUV', '1.5', 'Turbo', 'Híbrido', 'e:HEV', 'Tracción delantera'],
    'El ZR-V llenó el vacío entre el HR-V y el CR-V con un crossover más deportivo. Motor turbo 1.5 litros de 180 CV o el híbrido e:HEV de 184 CV sistema total. El diseño tipo coupé con techo inclinado y el chasis más rígido que el HR-V lo hacían el crossover Honda más dinámico. En Japón se llamó Vezel de segunda generación.',
    { potencia: '180 CV', peso: '1.430 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  // ── HONDA (kei cars adicionales) ──────────────────────────────────────────

  car('honda_z360', 'Honda Z360 (ZA)', ['Japón'], 1970, 1974,
    ['Kei Car', 'Coupé', '0.36', 'Tracción trasera'],
    'El Honda Z fue el kei coupé más atrevido de su época: carrocería tipo muscle car en miniatura con motor de 354cc enfriado por aire y hasta 40 CV. El diseño con volumen trasero elevado y las ventanas laterales deslizantes lo hacían único. Fue el kei car más deportivo de los 70s en Japón y uno de los primeros autos de Honda en tener una identidad visual claramente europea.',
    { potencia: '40 CV', peso: '520 kg', traccion: 'FR', velocidad_max: '130 km/h' }),

  car('honda_life_jb', 'Honda Life JB (3a gen)', ['Japón'], 1998, 2008,
    ['Kei Car', 'Hatchback', '0.66', 'Tracción delantera'],
    'El Life JB fue el kei car más vendido de Honda durante una década. Con motor E07Z de 660cc y hasta 64 CV en la versión turbo, carrocería de caja maximizada para el espacio interior y precios de entrada bajísimos. La versión Dunk con faros redondos y palanca de cambios corta fue especialmente popular entre mujeres jóvenes en Japón. Su plataforma fue la base del Honda Fit original.',
    { potencia: '58 CV', peso: '750 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  car('honda_today_ja4', 'Honda Today JA4', ['Japón'], 1993, 1998,
    ['Kei Car', 'Hatchback', '0.66', 'Tracción delantera'],
    'El Today JA4 fue el kei car más delgado de su época con solo 1.395mm de ancho, haciéndolo ideal para las calles más estrechas de Japón. Motor EH2 de 660cc y 38 CV en la versión base. La carrocería muy vertical con techo alto maximizaba el espacio interior dentro del límite kei. Fue el kei car de Honda que precedió al Life moderno y al futuro N-Box.',
    { potencia: '38 CV', peso: '630 kg', traccion: 'FF', velocidad_max: '130 km/h' }),

  car('honda_nbox_jf1', 'Honda N-Box JF1', ['Japón'], 2011, 9999,
    ['Kei Car', 'Minivan', '0.66', 'Turbo', 'Tracción delantera'],
    'El N-Box JF1 es el kei car más vendido de Japón desde 2013, año tras año. Con motor S07A turbo de 660cc y 64 CV, carrocería de caja alta con techo a 1.400mm y puerta trasera deslizante eléctrica en versiones Custom, ofrece el espacio de una minivan en el formato kei. La versión N-Box Custom con diseño agresivo y llantas de 15" es la preferida por jóvenes. Vende más de 250.000 unidades anuales.',
    { potencia: '64 CV', peso: '870 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  car('honda_none_jg1', 'Honda N-One JG1', ['Japón'], 2012, 9999,
    ['Kei Car', 'Hatchback', '0.66', 'Turbo', 'Tracción delantera'],
    'El N-One fue el kei car retro de Honda, con líneas que rendían homenaje al N360 original de 1967. Motor S07A turbo de 660cc y 64 CV con interior premium de dos tonos. La versión Premium Tour con asientos de cuero marrón y tapicería de madera fue la más querida. En 2020 llegó la versión RS con 6 velocidades manual —extremadamente raro en keis modernos— para entusiastas.',
    { potencia: '64 CV', peso: '820 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  // ── HONDA (clásicos) ──────────────────────────────────────────────────────

  car('honda_1300_coupe', 'Honda 1300 Coupé 9S', ['Japón'], 1969, 1973,
    ['Coupé', '1.3', 'DOHC', 'Aire', 'Tracción delantera'],
    'El Honda 1300 fue el proyecto más ambicioso y controvertido de Soichiro Honda: motor DOHC de 1.3 litros enfriado por aire con sistema DDAC (Duo Dyna Air Cooling) que usaba un laberinto de canales de aire en lugar de ventilador. El resultado era 100 CV por litro —excepcional para 1969— pero el motor era extremadamente caro de fabricar. Soichiro Honda fue obligado por su propio directorio a abandonarlo.',
    { potencia: '100 CV', peso: '830 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('honda_city_ma', 'Honda City MA (1a gen)', ['Japón'], 1981, 1986,
    ['Hatchback', '1.2', 'Tracción delantera'],
    'El City MA fue diseñado bajo el concepto "Tall Boy": máxima altura, mínima longitud, para maximizar el espacio interior. Con motor EM de 1.2 litros y 67 CV, su carrocería de cajón era radical para 1981. Incluía como accesorio el "Motocompo" —un scooter plegable que cabía en el maletero— el objeto más carismático del mundo del automóvil de los 80s. La versión Turbo con 100 CV fue la primera turbo de Honda.',
    { potencia: '67 CV', peso: '620 kg', traccion: 'FF', velocidad_max: '150 km/h' }),

  // ── HONDA (orígenes: primeros autos Honda) ────────────────────────────────

  car('honda_t360', 'Honda T360', ['Japón'], 1963, 1967,
    ['Kei Truck', '0.36', 'DOHC', 'Tracción trasera'],
    'El T360 fue el primer automóvil de producción Honda, presentado en el Tokyo Motor Show de octubre de 1962. Motor de 354cc 4 cilindros DOHC con 4 válvulas por cilindro —sofisticación de moto de carreras en un camión kei—, que rendía 30 CV a 8.500 RPM. Soichiro Honda insistió en usar tecnología de motos en el primer coche de la empresa. El T360 ganó varias carreras kei en Japón y convenció al mundo de que Honda era un fabricante serio.',
    { potencia: '30 CV', peso: '480 kg', traccion: 'FR', velocidad_max: '100 km/h' }),

  car('honda_s500', 'Honda S500', ['Japón'], 1963, 1964,
    ['Roadster', '0.49', 'DOHC', 'Tracción trasera'],
    'El S500 fue el primer automóvil de pasajeros de Honda, presentado junto al T360. Motor de 492cc DOHC con 44 CV a 9.500 RPM —las RPM más altas de cualquier auto de producción de la época— transmitía a las ruedas traseras mediante cadenas individuales en lugar de diferencial convencional, herencia directa de las motos. Demostró desde el día uno que Honda podía construir deportivos al nivel de los mejores europeos.',
    { potencia: '44 CV', peso: '590 kg', traccion: 'FR', velocidad_max: '130 km/h' }),

  car('honda_n600', 'Honda N600', ['Japón'], 1969, 1972,
    ['Hatchback', '0.6', '2 cilindros', 'Tracción delantera'],
    'El N600 fue el primer Honda vendido en EE.UU. y el pionero de la conquista americana de la marca. Motor de 600cc 2 cilindros y 45 CV enfriado por aire, caja de 4 velocidades. Pesaba solo 490 kg y alcanzaba 120 km/h. Los compradores americanos quedaron asombrados por la ausencia total de averías. Abrió el camino al Civic y a la dominación japonesa del mercado de autos compactos americano en los años 80.',
    { potencia: '45 CV', peso: '490 kg', traccion: 'FF', velocidad_max: '120 km/h' }),

  // ── HONDA (Civic gens faltantes) ──────────────────────────────────────────

  car('honda_civic_2gen', 'Honda Civic (2a gen, SB/SC)', ['Japón'], 1979, 1983,
    ['Hatchback', 'Sedán', '1.3', '1.5', 'CVCC', 'Tracción delantera'],
    'El Civic de segunda generación creció en tamaño y refinamiento con carrocería de 3 o 5 puertas y por primera vez una versión sedán de 4 puertas. Motor CVCC de 1.3 o 1.5 litros. Fue el primer Civic en llegar a más de 50 países simultáneamente y el primero en ganar el primer puesto en ventas fuera de Japón (Australia, 1980). La versión sedán de 4 puertas estableció la fórmula que el Civic Sedán mantiene hasta hoy.',
    { potencia: '72 CV', peso: '790 kg', traccion: 'FF', velocidad_max: '155 km/h' }),

  car('honda_civic_9gen', 'Honda Civic (9a gen, FB/FG)', ['Japón'], 2011, 2015,
    ['Sedán', 'Hatchback', '1.5', '2.4', 'Tracción delantera'],
    'El Civic FB de 9a generación fue la más autocriticada de la historia del modelo: Consumer Reports lo retiró de su lista de recomendados por primera vez en décadas. Honda tomó la decisión sin precedentes de lanzar una actualización a medio ciclo en 2013 para corregir la suspensión trasera rígida y el tablero de diseño excesivamente complejo. La versión Si con motor K24Z7 de 2.4 litros y 201 CV salvó el honor deportivo de la generación.',
    { potencia: '141 CV', peso: '1.285 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  // ── HONDA (NSX-R y CR-Z) ──────────────────────────────────────────────────

  car('honda_nsx_r', 'Honda NSX-R (NA2)', ['Japón'], 2002, 2005,
    ['Superdeportivo', '3.2', 'V6', 'VTEC', 'Tracción trasera'],
    'El NSX-R fue la versión de circuito del NSX: capó de carbono, panel trasero de carbono, cristales más delgados, asientos Recaro de carbono fijo sin ajuste eléctrico, sin aire acondicionado, sin audio, sin alfombras. El resultado: 80 kg menos que el NSX estándar, con 290 CV del motor C32B ampliado. Grabó 7:56 en Nürburgring en 2002, el más rápido de su clase. Sigue siendo el Honda tracción trasera más afilado en circuito jamás vendido al público.',
    { potencia: '290 CV', peso: '1.270 kg', traccion: 'MR', velocidad_max: '270 km/h' }),

  car('honda_crz', 'Honda CR-Z ZF1', ['Japón'], 2010, 2016,
    ['Coupé', '1.5', 'Híbrido', 'IMA', 'Tracción delantera'],
    'El CR-Z ZF1 fue el único coupé deportivo híbrido de producción del mundo: motor K16Z3 de 1.5 litros asistido por IMA eléctrico para un total de 122 CV. Con caja de 6 velocidades manual como única opción al lanzamiento, el CR-Z demostró que un híbrido podía ser divertido de conducir. Tres modos Sport/Normal/Econ cambiaban radicalmente el carácter del motor. Considerado el sucesor espiritual del CRX y predecesor del S660.',
    { potencia: '122 CV', peso: '1.192 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  // ── HONDA (Accord historia completa) ──────────────────────────────────────

  car('honda_accord_2gen', 'Honda Accord (2a gen, AC/AD)', ['Japón'], 1981, 1985,
    ['Hatchback', 'Sedán', '1.6', '1.8', 'Tracción delantera'],
    'El Accord de segunda generación fue el primero con inyección electrónica PGM-FI —uno de los primeros en el segmento—. Motor de 1.6 o 1.8 litros. Ganó el premio Motor Trend Car of the Year 1982. La fabricación en Ohio comenzó con este modelo en 1982, primera vez que un fabricante japonés producía autos en suelo americano, inaugurando una nueva era industrial.',
    { potencia: '95 CV', peso: '970 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('honda_accord_3gen', 'Honda Accord (3a gen, CA)', ['Japón'], 1985, 1989,
    ['Sedán', 'Hatchback', '2.0', 'Tracción delantera'],
    'El Accord CA fue el primero con suspensión delantera de doble horquilla y el primero en ofrecer ABS como opción en Japón. Motor A20A de 2.0 litros. En EE.UU. fue el auto japonés más vendido en 1987, superando al Camry por primera vez. La versión sedán de 4 puertas se consolidó como la configuración dominante, acelerando el abandono del hatchback en favor del sedán formal.',
    { potencia: '100 CV', peso: '1.090 kg', traccion: 'FF', velocidad_max: '180 km/h' }),

  car('honda_accord_5gen', 'Honda Accord (5a gen, CD)', ['Japón'], 1993, 1997,
    ['Sedán', 'Wagon', 'Coupé', '2.2', 'VTEC', 'Tracción delantera'],
    'El Accord CD incorporó VTEC por primera vez en la familia: motor F22B VTEC de 2.2 litros y 150 CV. Primera vez con versión Wagon (CE1), muy popular en Europa y Japón. Motor Trend Car of the Year 1994. La calidad de construcción fue calificada como la mejor de cualquier auto americano o japonés del segmento por Consumer Reports.',
    { potencia: '150 CV', peso: '1.280 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('honda_accord_6gen', 'Honda Accord (6a gen, CF/CH)', ['Japón'], 1997, 2002,
    ['Sedán', 'Wagon', '2.0', '2.3', 'VTEC', 'Tracción delantera'],
    'El Accord CF fue el primero en incluir navegación GPS de serie en JDM. La versión Euro R (CF4) con motor H22A VTEC de 220 CV, diferencial LSD y frenos Brembo fue el Accord deportivo definitivo. La versión Wagon SiR fue una rareza brillante: familiar de carga con motor VTEC y suspensión endurecida. En EE.UU. como CH fue el sedán más vendido del segmento en 1998 y 1999.',
    { potencia: '150 CV', peso: '1.310 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('honda_accord_8gen', 'Honda Accord (8a gen, CP)', ['Japón'], 2007, 2012,
    ['Sedán', 'Coupé', '2.4', 'K24', 'Tracción delantera'],
    'El Accord CP fue el más grande de la historia hasta ese momento: 4.88m en el sedán americano. Motor K24Z3 de 2.4 litros y 190 CV. Fue el sedán más vendido de Honda en EE.UU. durante 4 años consecutivos. El primero con sistema LaneWatch —cámara en el espejo lateral derecho activada al girar—, una característica que Honda patentó antes de que las cámaras de ángulo muerto fueran estándar.',
    { potencia: '190 CV', peso: '1.450 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  // ── HONDA (Prelude historia completa) ─────────────────────────────────────

  car('honda_prelude_1gen', 'Honda Prelude (1a gen, SN)', ['Japón'], 1978, 1982,
    ['Coupé', '1.6', 'CVCC', 'Tracción delantera'],
    'El Prelude original fue el primer coupé 2+2 de Honda: carrocería elegante con faros traseros en barra continua y motor CVCC de 1.6 litros. Primer Honda en ofrecer transmisión automática Hondamatic de dos etapas. En Japón fue bien recibido como alternativa al Celica de Toyota, más económico y fiable. Estableció la identidad de coupé premium que el Prelude mantendría durante cuatro décadas.',
    { potencia: '80 CV', peso: '890 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('honda_prelude_2gen', 'Honda Prelude (2a gen, AB)', ['Japón'], 1982, 1987,
    ['Coupé', '1.8', '2.0', 'DOHC', 'Tracción delantera'],
    'El Prelude AB fue el primero del mundo en ofrecer dirección en las cuatro ruedas (4WS) como opción en 1987. El sistema mecánico giraba las ruedas traseras en la misma dirección que las delanteras a alta velocidad para mayor estabilidad, y en sentido contrario a baja velocidad para menor radio de giro. Motor DOHC de 2.0 litros y 150 CV. El diseño de perfil cuña fue muy moderno para los 80s.',
    { potencia: '150 CV', peso: '1.100 kg', traccion: 'FF', velocidad_max: '200 km/h' }),

  car('honda_prelude_4gen', 'Honda Prelude (4a gen, BB1)', ['Japón'], 1991, 1996,
    ['Coupé', '2.2', 'VTEC', 'Tracción delantera'],
    'El Prelude BB fue el más popular entre entusiastas tuner: motor H22A VTEC de 2.2 litros y 200 CV —el mismo que llevaría el Accord Euro R posterior—. Diseño redondeado muy exitoso. En EE.UU. fue ícono de la cultura tuner de los 90 junto al Integra GS-R. La versión BB4 con ATTS (Active Torque Transfer System) fue una prelación del BB6 con el torque vectoring que vendría después.',
    { potencia: '200 CV', peso: '1.230 kg', traccion: 'FF', velocidad_max: '225 km/h' }),

  // ── HONDA (Legend historia completa) ──────────────────────────────────────

  car('honda_legend_1gen', 'Honda Legend (1a gen, KA3)', ['Japón'], 1985, 1990,
    ['Sedán', 'Coupé', '2.0', '2.7', 'V6', 'Tracción delantera'],
    'El Legend KA3 fue el primer Honda con motor V6 en la historia de la marca: C27A de 2.7 litros y 165 CV. Desarrollado conjuntamente con Rover (se vendió en UK como Rover 800). En EE.UU. inauguró la marca Acura en 1986 como Acura Legend, primer luxury brand japonés en ese mercado. La calidad de fabricación desafió directamente a Mercedes y BMW en rigidez y silencio de rodadura.',
    { potencia: '165 CV', peso: '1.400 kg', traccion: 'FF', velocidad_max: '210 km/h' }),

  car('honda_legend_3gen', 'Honda Legend (3a gen, KA9)', ['Japón'], 1996, 2004,
    ['Sedán', '3.5', 'V6', 'VTEC', 'Tracción delantera'],
    'El Legend KA9 fue el mejor conductor de la familia: motor C35A V6 VTEC de 3.5 litros y 280 CV —el máximo legal en Japón—, suspensión de doble horquilla en los cuatro ejes. En EE.UU. se vendió como Acura RL. El refinamiento mecánico fue comparado favorablemente con el BMW 740i. En 1999 recibió el primer sistema de frenado de emergencia con radar de Honda, pionero de toda la industria japonesa.',
    { potencia: '280 CV', peso: '1.710 kg', traccion: 'FF', velocidad_max: '250 km/h' }),

  // ── HONDA (City sedan Asia) ────────────────────────────────────────────────

  car('honda_city_gd', 'Honda City GD (3a gen)', ['Japón'], 2002, 2008,
    ['Sedán', '1.4', '1.5', 'Tracción delantera'],
    'El City GD fue el sedán compacto de Honda para mercados en desarrollo y Asia. Con diseño "one-motion" de techo fluido y motor L14A/L15A de 1.4–1.5 litros, fue el sedán compacto más vendido simultáneamente en India, Tailandia, Malaysia y México. En algunos mercados se llamó Honda Jazz Sedan. Su accesibilidad y fiabilidad lo convirtieron en referencia del segmento en toda Asia durante una década.',
    { potencia: '100 CV', peso: '1.020 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_city_gn', 'Honda City GN e:HEV (6a gen)', ['Japón'], 2020, 9999,
    ['Sedán', '1.5', 'Híbrido', 'e:HEV', 'Tracción delantera'],
    'El City GN fue el primero de la familia con sistema híbrido e:HEV de Honda: motor 1.5 litros que actúa principalmente como generador, con motor eléctrico de 98 CV como impulsor principal y consumo de 4.7L/100km. En Tailandia fue el auto más vendido del año 2021 y 2022, superando a todos los rivales. Es el sedán compacto híbrido más accesible de Honda y el más popular de la marca en el sudeste asiático.',
    { potencia: '98 CV', peso: '1.155 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  // ── HONDA (CR-V 4a gen) ────────────────────────────────────────────────────

  car('honda_crv_rm', 'Honda CR-V RM (4a gen)', ['Japón'], 2011, 2016,
    ['SUV', '1.6', '2.0', '2.4', '4x4'],
    'El CR-V RM fue el primero con motor diésel (1.6 i-DTEC de 120 CV para Europa) y el más eficiente hasta su fecha. El sistema 4WD Real Time AWD fue actualizado para responder en 20 milisegundos a pérdida de tracción. Primero con Wide View Camera trasera de ángulo ultra-amplio. En Chile fue el SUV más vendido de la categoría en 2014 y 2015.',
    { potencia: '155 CV', peso: '1.579 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  // ── HONDA (SUVs adicionales) ───────────────────────────────────────────────

  car('honda_pilot_3gen', 'Honda Pilot YF5 (3a gen)', ['Japón'], 2015, 2022,
    ['SUV', '3.5', 'V6', '4x4'],
    'El Pilot YF5 fue el primero con caja de 9 velocidades y Apple CarPlay/Android Auto de serie. Motor V6 3.5 litros de 280 CV con sistema VCM de desactivación de cilindros. La versión Elite con 8 plazas y pantallas de entretenimiento traseras individuales fue la opción familiar definitiva de Honda. El SUV de 3 filas más vendido en EE.UU. en 2019.',
    { potencia: '280 CV', peso: '2.010 kg', traccion: '4WD', velocidad_max: '195 km/h' }),

  car('honda_passport_2018', 'Honda Passport (2a gen, 2018)', ['Japón'], 2018, 9999,
    ['SUV', '3.5', 'V6', '4x4'],
    'El Passport de segunda generación llenó el vacío entre el CR-V y el Pilot: sin tercera fila pero mayor espacio de carga y más capacidad todoterreno. Motor V6 3.5 litros de 280 CV con AWD inteligente. El sistema i-VTM4 (en versión Sport) distribuía hasta el 70% del torque al eje trasero. Ideal para actividades outdoor sin la longitud de un SUV de 7 plazas.',
    { potencia: '280 CV', peso: '1.870 kg', traccion: '4WD', velocidad_max: '190 km/h' }),

  // ── HONDA (kei adicionales) ────────────────────────────────────────────────

  car('honda_acty', 'Honda Acty (HA/HH)', ['Japón'], 1977, 2021,
    ['Kei Truck', 'Kei Van', '0.66', 'Tracción trasera'],
    'El Acty fue el kei truck de trabajo de Honda durante 44 años: indestructible, motor trasero de 660cc, tracción trasera o 4WD, disponible como camioneta de plataforma o furgoneta. En Japón está en cada explotación agrícola y en cada calle estrecha de montaña. También fue exportado a EE.UU. como vehículo agrícola. La producción terminó en 2021 por regulaciones de emisiones.',
    { potencia: '38 CV', peso: '650 kg', traccion: 'FR', velocidad_max: '120 km/h' }),

  car('honda_vamos', 'Honda Vamos HM1', ['Japón'], 1999, 2018,
    ['Kei Van', '0.66', 'Tracción trasera'],
    'El Vamos fue el kei van retro-surf de Honda: carrocería cuadrada de inspiración 4x4 de los 70s, motor trasero de 660cc. La versión Hobio añadía puerta deslizante y techo más alto. Fue uno de los autos más carismáticos del mercado kei japonés, apreciado por surfistas y nómadas urbanos. Fue el antepasado estético del N-Van moderno.',
    { potencia: '48 CV', peso: '790 kg', traccion: 'FR', velocidad_max: '130 km/h' }),

  car('honda_zest', 'Honda Zest (JE1)', ['Japón'], 2006, 2012,
    ['Kei Car', 'Tall Wagon', '0.66', 'Tracción delantera'],
    'El Zest fue el kei tall wagon de Honda con 1.620mm de altura interior. Motor E07Z de 660cc y hasta 64 CV en versión Spark Turbo. El diseño con grandes faros redondos fue muy bien recibido entre compradoras jóvenes en Japón. Tercer kei más vendido de Honda en su época.',
    { potencia: '58 CV', peso: '800 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  car('honda_nwgn', 'Honda N-WGN (JH1)', ['Japón'], 2013, 9999,
    ['Kei Car', 'Wagon', '0.66', 'Tracción delantera'],
    'El N-WGN fue el kei wagon de altura media de Honda. Con motor S07A de 660cc obtuvo 5 estrellas en el JNCAP 2013. La versión Custom con faros oscuros y llantas de 15" fue la más personalizada. Es el kei más tranquilo y ahorrativo de Honda para uso cotidiano en ciudad.',
    { potencia: '58 CV', peso: '810 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  car('honda_nvan', 'Honda N-Van (JJ1)', ['Japón'], 2018, 9999,
    ['Kei Van', '0.66', 'Tracción delantera'],
    'El N-Van fue la furgoneta kei de Honda para trabajo ligero: sin pilar B en el lado del pasajero, permite cargar objetos de hasta 2.75 metros de largo. Primer kei van con Honda Sensing (frenado autónomo) de serie. La versión e: eléctrica llegó en 2023 con 210 km de autonomía —la primera furgoneta kei eléctrica de producción en la historia.',
    { potencia: '58 CV', peso: '870 kg', traccion: 'FF', velocidad_max: '130 km/h' }),

  // ── HONDA (JDM clásicos adicionales) ──────────────────────────────────────

  car('honda_quint', 'Honda Quint / Rover Quintet', ['Japón'], 1980, 1985,
    ['Hatchback', '1.6', 'Tracción delantera'],
    'El Quint fue el eslabón entre el Civic y el Accord: hatchback 5 puertas deportivo con motor de 1.6 litros. En Europa se vendió como Rover Quintet gracias al acuerdo BL-Honda. Fue el predecesor directo del Integra en 1985, que adoptó su plataforma y filosofía deportiva.',
    { potencia: '80 CV', peso: '870 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('honda_ballade', 'Honda Ballade (1a gen)', ['Japón'], 1980, 1986,
    ['Sedán', '1.3', '1.5', 'CVCC', 'Tracción delantera'],
    'El Ballade fue el primer sedán de 4 puertas formal de Honda, basado en la plataforma Civic 3a gen. En Sudáfrica fue tan exitoso que se produjo localmente hasta 1995 y el nombre fue revivido en 2011 para el mercado africano. Fue el punto de partida de la línea Civic Sedán que hoy es el modelo más vendido de la gama Honda.',
    { potencia: '75 CV', peso: '880 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('honda_logo', 'Honda Logo (GA3)', ['Japón'], 1996, 2001,
    ['Hatchback', '1.3', 'Tracción delantera'],
    'El Logo fue el subcompacto de Honda para llenar el hueco entre los kei y el Civic: motor D13B de 1.3 litros y 65 CV en carrocería de 3 o 5 puertas. Fue la base sobre la que Honda desarrolló la primera generación del Fit/Jazz.',
    { potencia: '65 CV', peso: '790 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('honda_concerto', 'Honda Concerto / Rover 200 (MA)', ['Japón'], 1988, 1994,
    ['Sedán', 'Hatchback', '1.5', '1.6', 'Tracción delantera'],
    'El Concerto fue el resultado de la alianza Honda-Rover: desarrollado conjuntamente y vendido en Europa como Rover 213/216. Con motor D15B/D16A, su diseño europeo fue el más sofisticado de Honda de la época. La plataforma compartida con el Rover 200 le daba una calidad de acabados superior al Civic del mismo período. En Japón breve pero popular en UK.',
    { potencia: '122 CV', peso: '1.030 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('honda_domani', 'Honda Domani (MA4/MB3)', ['Japón'], 1992, 2000,
    ['Sedán', '1.5', '1.6', 'Tracción delantera'],
    'El Domani fue el sedán compacto de Honda entre el Civic y el Accord, con motor D15B/D16A y diseño europeo conservador. Muy exitoso en Japón como alternativa práctica al Civic deportivo. La segunda generación MB3 de 1997 adoptó el motor B16A VTEC en versión SiR con 165 CV.',
    { potencia: '120 CV', peso: '1.060 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('honda_avancier_ta', 'Honda Avancier TA1 (JDM)', ['Japón'], 1999, 2003,
    ['SUV Wagon', '2.3', '3.0', 'V6', '4x4'],
    'El Avancier japonés fue el SUV-wagon de lujo exclusivo de Honda para Japón: motor F23A de 2.3 litros o J30A V6 de 3.0 litros y 210 CV, 4WD, suspensión independiente en las cuatro ruedas y navegación GPS. Rival del Toyota Harrier y Nissan Bassara. Raro y muy buscado hoy en el mercado JDM.',
    { potencia: '210 CV', peso: '1.680 kg', traccion: '4WD', velocidad_max: '190 km/h' }),

  car('honda_crossroad_jdm', 'Honda Crossroad JDM (1a gen)', ['Japón'], 1993, 1998,
    ['SUV', '3.9', 'V8', '4x4'],
    'El Honda Crossroad de primera generación fue técnicamente un Land Rover Discovery con insignias Honda, vendido exclusivamente en Japón gracias al acuerdo de colaboración Honda-Rover. Motor V8 de 3.9 litros y 180 CV, transmisión Land Rover de 4 velocidades con baja. La única rareza histórica: el único Honda con motor V8 de producción.',
    { potencia: '180 CV', peso: '2.120 kg', traccion: '4WD', velocidad_max: '165 km/h' }),

  car('honda_smx', 'Honda S-MX (RH1)', ['Japón'], 1996, 2002,
    ['Mini MPV', '2.0', 'Tracción delantera'],
    'El S-MX fue el mini MPV estilo RV de Honda: carrocería baja de 1.58m con piso completamente plano gracias a la ausencia de túnel de transmisión. Los asientos se bajaban como cama plana completa, atrayendo a una generación de jóvenes japoneses para acampar los fines de semana. Motor F20B de 2.0 litros y 150 CV.',
    { potencia: '150 CV', peso: '1.400 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('honda_lagreat', 'Honda LaGreat (RL1)', ['Japón'], 1999, 2004,
    ['Minivan', '3.5', 'V6', '4x4'],
    'El LaGreat fue la minivan de lujo de Honda para Japón: plataforma Odyssey con motor V6 J35A de 3.5 litros y 240 CV, AWD de serie, cuero, DVD trasero y trizona. Alternativa al Nissan Elgrand y Toyota Estima de lujo. Vendido solo en Japón en números muy limitados.',
    { potencia: '240 CV', peso: '2.040 kg', traccion: '4WD', velocidad_max: '185 km/h' }),

  car('honda_elysion', 'Honda Elysion RR1', ['Japón'], 2004, 9999,
    ['Minivan', '2.4', '3.0', 'V6', 'Tracción delantera'],
    'El Elysion fue el MPV premium de Honda para Japón y China: carrocería "low-floor" con tres filas cómodas, motor K24A de 2.4 litros o J30A V6 de 3.0 litros y 210 CV. En China se convirtió en el MPV premium Honda más vendido, compitiendo directamente con el Toyota Alphard en ese segmento.',
    { potencia: '210 CV', peso: '1.880 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('honda_frv', 'Honda FR-V / Edix (BE1)', ['Japón'], 2004, 2009,
    ['MPV', '1.7', '2.0', 'Tracción delantera'],
    'El FR-V / Edix fue el MPV más inusual de Honda: seis plazas en carrocería del tamaño de un Civic gracias a la disposición 3+3 —tres asientos delanteros y tres traseros, todos con acceso individual y cinturones—. Ningún otro fabricante ofreció algo igual. Motor D17A de 1.7 litros o K20A de 2.0 litros.',
    { potencia: '140 CV', peso: '1.280 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('honda_orthia', 'Honda Orthia (EL2)', ['Japón'], 1996, 2002,
    ['Wagon', '1.8', 'Tracción delantera'],
    'El Orthia fue el station wagon de Honda basado en la plataforma del Domani: carrocería wagon familiar con motor B18B de 1.8 litros y 130 CV. La versión S con VTEC ofrecía 145 CV. Descontinuado cuando Honda apostó completamente por los crossovers SUV.',
    { potencia: '130 CV', peso: '1.220 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('honda_airwave', 'Honda Airwave (GJ1)', ['Japón'], 2005, 2010,
    ['Wagon', '1.5', 'Tracción delantera'],
    'El Airwave fue el wagon basado en el Fit: carrocería alargada con gran techo panorámico "sky roof" sobre toda la extensión del techo. Motor L15A de 1.5 litros y 110 CV. La versión 4WD fue muy popular en zonas con nieve. Sucedido por el Honda Shuttle en 2011.',
    { potencia: '110 CV', peso: '1.160 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_shuttle', 'Honda Shuttle GP7', ['Japón'], 2015, 2022,
    ['Wagon', '1.5', 'Híbrido', 'e:HEV', 'Tracción delantera'],
    'El Shuttle fue el station wagon híbrido Honda basado en el Fit: 340 litros más de maletero en la misma huella exterior. Sistema híbrido i-DCD de 136 CV y consumo de 3.6L/100km —el wagon más eficiente de Japón. Versión 4WD eléctrica con motor eléctrico trasero independiente, única en el segmento wagon.',
    { potencia: '136 CV', peso: '1.350 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_jade', 'Honda Jade FR5', ['Japón'], 2015, 2020,
    ['MPV', '1.5', 'Turbo', 'Híbrido', 'Tracción delantera'],
    'El Jade FR5 fue el compact MPV de 6 plazas con la carrocería más baja del segmento (1.530mm). Motor L15B turbo de 1.5 litros o híbrido i-DCD de 170 CV. Diseño tipo coupé-wagon con línea de techo inclinada lo diferenciaba radicalmente del Stepwgn. La tercera fila se plegaba al suelo para maletero completamente plano.',
    { potencia: '170 CV', peso: '1.480 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('honda_grace', 'Honda Grace GM4', ['Japón'], 2014, 2020,
    ['Sedán', '1.5', 'Híbrido', 'Tracción delantera'],
    'El Grace fue el sedán compacto híbrido de Honda para Japón, basado en el Fit con carrocería de 3 volúmenes. Motor L15B con sistema IMA de 110 CV y consumo de 4.6L/100km. La versión AWD con motor eléctrico trasero independiente fue la primera en ese segmento de precio.',
    { potencia: '110 CV', peso: '1.140 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_crosstour', 'Honda Accord Crosstour', ['Japón'], 2009, 2015,
    ['SUV Wagon', '2.4', '3.5', 'V6', '4x4'],
    'El Crosstour fue el intento de Honda de crear un crossover basado en el Accord: carrocería fastback elevada con gran puerta trasera motorizada. Motor K24Z3 de 2.4 litros o J35Z2 V6 de 3.5 litros y 271 CV. En China fue muy exitoso pero en EE.UU. fue rechazado por su diseño polarizador. Descontinuado en 2015 sin sucesor.',
    { potencia: '192 CV', peso: '1.660 kg', traccion: '4WD', velocidad_max: '200 km/h' }),

  // ── HONDA (mercados globales) ──────────────────────────────────────────────

  car('honda_brio', 'Honda Brio (DD1)', ['Japón'], 2011, 9999,
    ['Hatchback', '1.2', 'Tracción delantera'],
    'El Brio fue el entry-level de Honda para mercados en desarrollo: Indonesia, India, Filipinas y Tailandia. Motor L12B de 1.2 litros y 88 CV en carrocería de 3 o 5 puertas. Diseñado para calles estrechas y tráfico caótico de ciudades asiáticas. En Indonesia fue el Honda más vendido durante años y la base del MPV Mobilio.',
    { potencia: '88 CV', peso: '850 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('honda_mobilio', 'Honda Mobilio (GB3)', ['Japón'], 2001, 9999,
    ['MPV', '1.5', '7 plazas', 'Tracción delantera'],
    'El Mobilio fue el MPV de 7 plazas de Honda para el sudeste asiático, basado en el Fit con carrocería de 3 filas alargada. Motor L15A de 1.5 litros. En Indonesia fue el MPV más popular durante años por precio bajo y fiabilidad Honda. La segunda generación de 2014 basada en el Brio vendió más de 500.000 unidades en Indonesia, Tailandia y Filipinas.',
    { potencia: '100 CV', peso: '1.110 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('honda_brv', 'Honda BR-V (GP5)', ['Japón'], 2015, 9999,
    ['SUV', '1.5', '7 plazas', 'Tracción delantera'],
    'El BR-V fue el crossover SUV de 7 plazas de Honda para el sudeste asiático: elevación del Mobilio con estilo SUV y motor L15Z de 1.5 litros y 120 CV. En Indonesia, Filipinas y Malaysia fue el crossover 7 plazas más vendido de Honda por precio accesible y fiabilidad.',
    { potencia: '120 CV', peso: '1.220 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_wrv', 'Honda WR-V (GX)', ['Japón'], 2023, 9999,
    ['SUV', '1.5', 'Tracción delantera'],
    'El WR-V de 2023 fue completamente rediseñado para Japón y mercados globales: subcompacto B-SUV con motor L15Z de 1.5 litros y 118 CV, Honda Sensing de serie y pantalla de 9". En Singapur y Japón reemplazó al HR-V GH como SUV de entrada de la marca.',
    { potencia: '118 CV', peso: '1.150 kg', traccion: 'FF', velocidad_max: '170 km/h' }),

  car('honda_clarity', 'Honda Clarity FCEV/PHEV', ['Japón'], 2016, 2021,
    ['Sedán', 'FCEV', 'PHEV', 'Eléctrico'],
    'El Clarity fue el proyecto de tecnología alternativa más ambicioso de Honda: disponible en tres versiones —pila de combustible hidrógeno con 366 km de autonomía, enchufable PHEV con 77 km eléctricos, o puramente eléctrico con 211 km—. La versión FCEV se arrendaba solo en California. Demostró que la tecnología alternativa no requería diseños extravagantes.',
    { potencia: '174 CV', peso: '1.875 kg', traccion: 'FF', velocidad_max: '160 km/h' }),

  car('honda_prologue', 'Honda Prologue EV', ['Japón'], 2024, 9999,
    ['SUV', 'Eléctrico', 'Plataforma GM Ultium'],
    'El Prologue fue el primer EV de Honda en EE.UU. y surgió de la alianza con General Motors: construido sobre la plataforma Ultium de GM con motor eléctrico de 288 CV, batería de 85 kWh y 475 km de autonomía. Representa el puente de Honda hacia sus propios EVs (plataforma 0) previstos desde 2026.',
    { potencia: '288 CV', peso: '2.049 kg', traccion: '4WD', velocidad_max: '180 km/h' }),

  // ── MAZDA ─────────────────────────────────────────────────────────────────

  car('mazda_rx7_sa', 'Mazda RX-7 SA22C', ['Japón'], 1978, 1985,
    ['Coupé', 'Rotativo', 'Tracción trasera'],
    'El primer RX-7 sorprendió al mundo con su motor rotativo Wankel de 12A con 100 CV en apenas 920 kg de peso. Diseño original con faros retráctiles y capó muy bajo —posible gracias al pequeño motor rotativo— lo hacían visualmente único. Fue el deportivo japonés más asequible de la era y estableció a Mazda como el guardián del motor Wankel.',
    { potencia: '100 CV', peso: '920 kg', traccion: 'FR', velocidad_max: '190 km/h' }),

  car('mazda_rx7_fc', 'Mazda RX-7 FC', ['Japón'], 1985, 1992,
    ['Coupé', 'Rotativo', 'Turbo', 'Tracción trasera'],
    'La segunda generación confirmó que el motor Wankel podía ofrecer rendimiento excepcional. El 13B-T turboalimentado de 185 CV en 1.200 kg era un deportivo de alto nivel asequible. Su balance 50/50 y dirección precisa lo hacían una de las mejores experiencias de conducción de los 80s.',
    { potencia: '185 CV', peso: '1.200 kg', traccion: 'FR', velocidad_max: '230 km/h' }),

  car('mazda_rx7_fd', 'Mazda RX-7 FD', ['Japón'], 1992, 2002,
    ['Coupé', 'Rotativo', 'BiTurbo', 'Tracción trasera'],
    'El FD es considerado una obra maestra del diseño automotriz japonés. El 13B-REW biturbo secuencial de 255 CV y 1.260 kg, sin alerones y con aerodinámica pura. La fiabilidad del motor es su único punto débil, pero quienes lo dominan lo describen como incomparable.',
    { potencia: '255 CV', peso: '1.260 kg', traccion: 'FR', velocidad_max: '250 km/h' }),

  car('mazda_mx5_na', 'Mazda MX-5 NA (Miata)', ['Japón'], 1989, 1997,
    ['Roadster', '1.6', 'Tracción trasera'],
    'El MX-5 revivió el concepto del roadster asequible que había desaparecido con el cierre de las fábricas británicas. Ligero, fiable y genuinamente divertido con apenas 115 CV, el NA demostró que la alegría de conducir no depende de la potencia. Es el roadster más vendido de la historia con más de un millón de unidades.',
    { potencia: '115 CV', peso: '940 kg', traccion: 'FR', velocidad_max: '185 km/h' }),

  car('mazda_mx5_nb', 'Mazda MX-5 NB', ['Japón'], 1998, 2005,
    ['Roadster', '1.8', 'Tracción trasera'],
    'El NB mejoró la fórmula del NA con mayor rigidez torsional, motor 1.8 de 140 CV y mayor refinamiento. Los faros retráctiles desaparecieron en favor de faros fijos más modernos. La versión SE con Torsen y Bilstein mantenía la pureza de manejo que había hecho famoso al MX-5.',
    { potencia: '140 CV', peso: '1.040 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('mazda_cosmo_ap', 'Mazda Cosmo AP', ['Japón'], 1975, 1981,
    ['Coupé', 'Rotativo', 'Tracción trasera'],
    'El Cosmo AP fue el gran GT rotativo de Mazda, más lujoso y potente que el RX-7 original. Con motor 13B de dos discos y carrocería coupé de lujo, competía con los GT europeos en confort y prestaciones. Su diseño atemporal y mecánica rotativa lo hacen uno de los JDM clásicos menos conocidos pero más fascinantes.',
    { potencia: '135 CV', peso: '1.210 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('mazda_323_bg', 'Mazda 323 BG', ['Japón'], 1989, 1994,
    ['Hatchback', '1.6', 'Tracción delantera'],
    'El 323 BG fue la generación más deportiva del 323. La versión GTX con turbo y 4WD participó en el WRC. La variante 1.6 de aspiración natural era muy ágil gracias a su bajo peso y suspensión deportiva.',
    { potencia: '88 CV', peso: '880 kg', traccion: 'FF', velocidad_max: '165 km/h' }),

  car('mazda_carol_360', 'Mazda Carol 360', ['Japón'], 1962, 1970,
    ['Kei Car', 'Sedán', '4 puertas'],
    'Inusual para un kei car: 4 puertas verdaderas en un auto de 360cc. Motor trasero de 4 tiempos y carrocería tipo sedán compacta lo hacían más práctico que sus rivales. Mazda apostó por el refinamiento, creando un miniautomóvil con dignidad de berlina.',
    { potencia: '18 CV', peso: '420 kg', traccion: 'RR', velocidad_max: '95 km/h' }),

  // ── SUBARU ────────────────────────────────────────────────────────────────

  car('subaru_impreza_wrx_gc8', 'Subaru Impreza WRX GC8', ['Japón'], 1992, 2000,
    ['Sedán', '2.0', 'Turbo', '4x4', 'Rally'],
    'El Impreza WRX llevó a Subaru a la victoria en el WRC con Colin McRae y Richard Burns. El motor EJ20 boxer turbo de 211 CV y tracción integral simétrica hacían de este sedán una bestia. El sonido boxer "bup-bup-bup" al levantar el acelerador es parte del folclore del WRX.',
    { potencia: '211 CV', peso: '1.220 kg', traccion: '4WD', velocidad_max: '235 km/h' }),

  car('subaru_impreza_sti_gd', 'Subaru Impreza WRX STi GD', ['Japón'], 2000, 2007,
    ['Sedán', '2.0', 'Turbo', '4x4', 'Rally'],
    'La segunda generación del WRX STi elevó las prestaciones con el motor EJ207 de 300 CV y el diferencial central DCCD controlable electrónicamente. La carrocería más aerodinámica, el alerón trasero y las tomas de aire lo diferenciaban visualmente del WRX normal. Ganó el WRC de Constructores en 2001 y 2003.',
    { potencia: '300 CV', peso: '1.450 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('subaru_brz_zc6', 'Subaru BRZ ZC6', ['Japón'], 2012, 2020,
    ['Coupé', '2.0', 'Tracción trasera'],
    'El BRZ fue desarrollado en conjunto con Toyota (que lo vendió como GT86) y representó el regreso de Subaru al deportivo de tracción trasera accesible. Con motor 2.0 FA20 de 200 CV y un centro de gravedad excepcionalmente bajo, su comportamiento en curva es puro y preciso. Sin turbo por diseño —para mantener el balance perfecto.',
    { potencia: '200 CV', peso: '1.230 kg', traccion: 'FR', velocidad_max: '226 km/h' }),

  car('subaru_forester_sf', 'Subaru Forester SF', ['Japón'], 1997, 2002,
    ['SUV', '2.0', 'Turbo', '4x4'],
    'El primer Forester creó un segmento nuevo entre el sedán y el SUV: mayor altura y capacidad todoterreno moderada, pero con las proporciones de un auto de calle. La versión STi turbo de 177 CV era genuinamente rápida. Subaru lo promocionó en EE.UU. como el SUV que los conductores reales querrían manejar.',
    { potencia: '177 CV', peso: '1.390 kg', traccion: '4WD', velocidad_max: '210 km/h' }),

  car('subaru_360', 'Subaru 360', ['Japón'], 1958, 1971,
    ['Kei Car', '2 puertas'],
    'El primer automóvil de Subaru, apodado "el escarabajo japonés". Carrocería de resina de poliéster sobre estructura de acero, motor de 2 tiempos trasero de 356cc. Pesaba 385 kg. Producido 13 años sin cambios estructurales; un logro de ingeniería frugal que motorizó Japón en la posguerra.',
    { potencia: '16 CV', peso: '385 kg', traccion: 'RR', velocidad_max: '90 km/h' }),

  // ── MITSUBISHI ────────────────────────────────────────────────────────────

  car('mitsubishi_lancer_evo1', 'Mitsubishi Lancer Evolution I', ['Japón'], 1992, 1993,
    ['Sedán', '2.0', 'Turbo', '4x4', 'Rally'],
    'El primer Lancer Evolution fue creado apresuradamente para homologar un auto de rally, y nació como una bestia sin pulir. El motor 4G63 turbo de 250 CV con tracción integral activa era demoledor en tierra. En su primera temporada completa ganó el Rally de Córcega. Un auto de competición con matrícula de calle.',
    { potencia: '250 CV', peso: '1.180 kg', traccion: '4WD', velocidad_max: '240 km/h' }),

  car('mitsubishi_lancer_evo6', 'Mitsubishi Lancer Evolution VI TME', ['Japón'], 1999, 2001,
    ['Sedán', '2.0', 'Turbo', '4x4', 'Rally'],
    'El Evo VI Tommi Mäkinen Edition es el preferido entre puristas. El motor 4G63 turbo de 280 CV y el sistema AYC de diferencial trasero activo lo hacían devastador. Mäkinen ganó el WRC cuatro veces consecutivas con versiones de rally de este modelo.',
    { potencia: '280 CV', peso: '1.360 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('mitsubishi_lancer_evo9', 'Mitsubishi Lancer Evolution IX', ['Japón'], 2005, 2007,
    ['Sedán', '2.0', 'Turbo', '4x4', 'Rally'],
    'El último Evo con el motor 4G63 original, el IX añadió el sistema MIVEC en el árbol de levas de admisión para mejorar el torque a bajas RPM sin sacrificar potencia pico. La versión MR con transmisión de doble embrague fue pionera en el segmento. Es considerado el mejor Evo para uso en carretera por su refinamiento superior.',
    { potencia: '280 CV', peso: '1.400 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('mitsubishi_3000gt_vr4', 'Mitsubishi 3000GT VR4', ['Japón'], 1990, 1999,
    ['Coupé', '3.0', 'BiTurbo', '4x4'],
    'El 3000GT VR4 fue el superdeportivo tecnológico por excelencia de los 90s: tracción integral, suspensión activa, dirección en las cuatro ruedas, motor 6G72 biturbo de 320 CV. Tan lleno de tecnología que su peso de 1.850 kg lo hacía pesado, pero sus prestaciones eran indiscutibles. Fue el Mitsubishi más ambicioso jamás producido.',
    { potencia: '320 CV', peso: '1.850 kg', traccion: '4WD', velocidad_max: '250 km/h' }),

  car('mitsubishi_eclipse_1g', 'Mitsubishi Eclipse 1G GSX', ['Japón'], 1989, 1994,
    ['Coupé', '2.0', 'Turbo', '4x4'],
    'El Eclipse de primera generación fue uno de los pocos coupés turbo de tracción integral disponibles a precio accesible. Con motor 4G63T de 195 CV y el sistema 4WD de Mitsubishi, podía poner en vergüenza a autos mucho más caros. Inmortalizado en The Fast and the Furious (2001), disparó su popularidad en el mundo del tuning.',
    { potencia: '195 CV', peso: '1.280 kg', traccion: '4WD', velocidad_max: '225 km/h' }),

  car('mitsubishi_galant_vr4', 'Mitsubishi Galant VR4 E39A', ['Japón'], 1988, 1992,
    ['Sedán', '2.0', 'Turbo', '4x4'],
    'El Galant VR4 fue el sedán ejecutivo más avanzado tecnológicamente de su época: tracción integral activa, motor 4G63T de 240 CV, suspensión con amortiguadores de control electrónico. Ganó el Rally de Córcega en 1989 antes de que Mitsubishi desarrollara el Lancer Evo. Una joya oculta del JDM de los 90s.',
    { potencia: '240 CV', peso: '1.390 kg', traccion: '4WD', velocidad_max: '245 km/h' }),

  car('mitsubishi_starion', 'Mitsubishi Starion ESI-R', ['Japón'], 1982, 1989,
    ['Coupé', '2.6', 'Turbo', 'Tracción trasera'],
    'El Starion fue el muscle car japonés de los 80s: coupé de tracción trasera con motor turbo de gran cilindrada. Las versiones Wide Body con guardabarros extendidos eran particularmente llamativas. Con 200 CV desde el 2G54T de 2.6 litros, competía directamente con el Porsche 944 Turbo pero a un tercio del precio.',
    { potencia: '200 CV', peso: '1.350 kg', traccion: 'FR', velocidad_max: '225 km/h' }),

  car('mitsubishi_pajero_gen1', 'Mitsubishi Pajero Gen1', ['Japón'], 1982, 1991,
    ['4x4', 'SUV', 'Todo Terreno'],
    'El Pajero de primera generación definió el SUV deportivo en los 80s. Ganó el Rally Dakar en 1983 y 1984 en sus primeras participaciones. Con carrocería sobre bastidor de escalera y 4WD part-time, fue el referente del segmento.',
    { potencia: '105 CV', peso: '1.700 kg', traccion: '4WD', velocidad_max: '145 km/h' }),

  car('mitsubishi_lancer_glxi', 'Mitsubishi Lancer 1.6 GLXi', ['Japón'], 1992, 1996,
    ['Sedán', '1.6', 'Tracción delantera'],
    'El Lancer con motor 4G92 de 1.6 litros fue alternativa popular frente al Corolla y Sentra en Latinoamérica. Su diseño limpio y equipamiento completo en versiones GLXi lo posicionaron como sedán compacto de calidad japonesa accesible.',
    { potencia: '113 CV', peso: '1.015 kg', traccion: 'FF', velocidad_max: '178 km/h' }),

  // ── SUZUKI ────────────────────────────────────────────────────────────────

  car('suzuki_fronte_coupe_gx', 'Suzuki Fronte Coupe GX', ['Japón'], 1971, 1976,
    ['Kei Car', 'Coupé', 'Tracción trasera'],
    'Motor trasero de 2 tiempos y carrocería coupé de líneas italianas. Con 360cc y 36 CV, pesaba 565 kg y alcanzaba 120 km/h. Participó exitosamente en rallys de época y se convirtió en objeto de culto para coleccionistas.',
    { potencia: '36 CV', peso: '565 kg', traccion: 'RR', velocidad_max: '120 km/h' }),

  car('suzuki_cappuccino_ea11r', 'Suzuki Cappuccino EA11R', ['Japón'], 1991, 1997,
    ['Kei Car', 'Roadster', '2 puertas'],
    'Configuración FR clásica en 660cc turbo. Techo removible en tres formas y chassis de doble hueco. Considerado uno de los roadsters más completos en categoría kei. Buscado mundialmente por coleccionistas.',
    { potencia: '64 CV', peso: '725 kg', traccion: 'FR', velocidad_max: '143 km/h' }),

  car('suzuki_swift_sport_zc31s', 'Suzuki Swift Sport ZC31S', ['Japón'], 2005, 2011,
    ['Hatchback', '1.6', 'Tracción delantera'],
    'El primer Swift Sport moderno demostró que Suzuki no había olvidado cómo hacer autos divertidos. Con motor M16A de 125 CV en apenas 980 kg, transmisión de 6 velocidades y suspensión deportiva, rivalizaba con el Mini Cooper S en agilidad a menos de la mitad del precio. Favorito en los circuitos de gymkhana de Japón.',
    { potencia: '125 CV', peso: '980 kg', traccion: 'FF', velocidad_max: '200 km/h' }),

  car('suzuki_jimny_sj', 'Suzuki Jimny SJ', ['Japón'], 1981, 1998,
    ['Kei Car', '4x4', 'Todo Terreno', '2 puertas'],
    'El Jimny SJ es el 4x4 más pequeño y capaz jamás producido en serie. Con carrocería sobre bastidor de escalera, reducida 4WD mecánica y eje trasero rígido, podía ir a lugares donde ningún SUV moderno llega. Su simplicidad mecánica y durabilidad lo han convertido en el todoterreno favorito de expedicionarios con presupuesto limitado.',
    { potencia: '50 CV', peso: '750 kg', traccion: '4WD', velocidad_max: '120 km/h' }),

  car('suzuki_alto_works', 'Suzuki Alto Works RS/R', ['Japón'], 1994, 1998,
    ['Kei Car', 'Hatchback', 'Turbo'],
    'Motor F6A turbo de 659cc con 64 CV en 630 kg. Con opciones de tracción trasera, era competidor en carreras de montaña kei de Japón. Un pequeño auto con alma de corredor.',
    { potencia: '64 CV', peso: '630 kg', traccion: 'FR', velocidad_max: '140 km/h' }),

  car('suzuki_baleno', 'Suzuki Baleno EG', ['Japón'], 1995, 2002,
    ['Sedán', 'Hatchback', '1.6', 'Tracción delantera'],
    'Motor G16B de 1.6 litros DOHC con 98 CV en apenas 890 kg. Relación potencia/peso sorprendente para su categoría, poco conocido pero muy valorado por entusiastas del compacto japonés.',
    { potencia: '98 CV', peso: '890 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  // ── DAIHATSU ──────────────────────────────────────────────────────────────

  car('daihatsu_mira_trxx', 'Daihatsu Mira TR-XX', ['Japón'], 1988, 1998,
    ['Kei Car', 'Hatchback', 'Turbo'],
    'Motor EF-JL de 659cc con turbocompresor intercooler al límite legal de 64 CV. La versión Avanzato TR-XX R4 con tracción en las cuatro ruedas era una pequeña bestia de tierra. Ícono del tuning kei japonés.',
    { potencia: '64 CV', peso: '670 kg', traccion: 'FF', velocidad_max: '145 km/h' }),

  car('daihatsu_copen', 'Daihatsu Copen L880K', ['Japón'], 2002, 2012,
    ['Kei Car', 'Roadster', '2 puertas', 'Turbo'],
    'El Copen fue el último kei roadster del mercado japonés durante años, ofreciendo techo retráctil de aluminio en un auto de 660cc turbo. Su carrocería de aluminio compuesta y el techo de apertura automática eran innovadores para la categoría. Una obra de ingeniería miniaturizada que ofrecía experiencia de descapotable auténtica.',
    { potencia: '64 CV', peso: '730 kg', traccion: 'FR', velocidad_max: '140 km/h' }),

  car('daihatsu_charade_g10', 'Daihatsu Charade G10', ['Japón'], 1977, 1983,
    ['Hatchback', '1.0', 'Tracción delantera'],
    'El Charade G10 fue uno de los primeros autos de tres cilindros de producción masiva, con un motor de apenas 993cc que entregaba excelente consumo sin sacrificar demasiada dinámica. Ganó premios de economía de combustible en Europa y estableció la reputación de Daihatsu como fabricante de autos pequeños eficientes.',
    { potencia: '50 CV', peso: '640 kg', traccion: 'FF', velocidad_max: '140 km/h' }),

  // ── ISUZU ─────────────────────────────────────────────────────────────────

  car('isuzu_117_coupe', 'Isuzu 117 Coupé', ['Japón'], 1968, 1981,
    ['Coupé', '1.6', 'Tracción trasera'],
    'El 117 Coupé es quizás el auto japonés más bello jamás diseñado: obra del carrocero italiano Giorgetto Giugiaro cuando aún trabajaba en Ghia. Las primeras versiones eran ensambladas completamente a mano. Con motor de 1.6 litros y tracción trasera, era un grand tourer japonés de alta costura. Las versiones manuales de carrocería son hoy pieza de museo.',
    { potencia: '100 CV', peso: '1.080 kg', traccion: 'FR', velocidad_max: '175 km/h' }),
];
