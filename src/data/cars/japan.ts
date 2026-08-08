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
