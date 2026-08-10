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

  car('datsun_fairlady_z_s30', 'Datsun 240Z (Fairlady Z S30)', ['Japón'], 1969, 1978,
    ['Deportivo', 'Coupé', '2.4', 'Tracción trasera'],
    'El 240Z fue el primer deportivo japonés que convenció al mundo de que Japón podía fabricar autos de lujo. Con motor 6 cilindros en línea de 2.4 litros, diseño que evocaba el E-Type Jaguar y un precio 40% menor que los europeos comparables, fue un fenómeno de ventas especialmente en EE.UU. Padre de una saga que continúa hasta hoy.',
    { potencia: '151 CV', peso: '1.045 kg', traccion: 'FR', velocidad_max: '200 km/h' }),

  car('datsun_bluebird_510', 'Datsun Bluebird 510', ['Japón'], 1967, 1973,
    ['Sedán', '1.6', 'Tracción trasera'],
    'El Bluebird 510 fue el auto que convenció al mercado norteamericano de que los autos japoneses podían ser ingeniería seria. Con suspensión independiente en las cuatro ruedas —algo inusual en su clase y precio— y un motor confiable, ganó múltiples premios de automovilismo amateur en EE.UU. Peter Brock lo llevó a la victoria en las Trans-Am.',
    { potencia: '96 CV', peso: '870 kg', traccion: 'FR', velocidad_max: '165 km/h' }),

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
