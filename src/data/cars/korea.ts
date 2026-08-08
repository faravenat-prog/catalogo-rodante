import { car } from './_helper';

export const KOREA = [

  car('hyundai_pony_1975', 'Hyundai Pony 1976', ['Corea del Sur'], 1975, 1990,
    ['Sedán', '1.2', 'Tracción trasera'],
    'El Pony fue el primer automóvil diseñado y producido enteramente en Corea del Sur, y el primer auto coreano en exportarse. Giorgio Giugiaro diseñó la carrocería y Mitsubishi proporcionó el motor y la transmisión. Cuando llegó a Canadá en 1984 con un precio de 5.788 dólares, fue el auto importado más barato del mercado y abrió el camino de la industria coreana al mundo.',
    { potencia: '81 CV', peso: '830 kg', traccion: 'FR', velocidad_max: '140 km/h' }),

  car('hyundai_excel', 'Hyundai Excel', ['Corea del Sur'], 1985, 1994,
    ['Hatchback', 'Sedán', '1.5', 'Tracción delantera'],
    'El Excel fue el auto coreano que rompió el mercado norteamericano: en su primer año de venta en EE.UU. (1986) vendió 168.882 unidades, record para primer año de un importador. Con motor Mitsubishi de 1.5 litros y precio notablemente bajo, demostró que los autos coreanos podían ser competitivos. Estableció a Hyundai como marca global.',
    { potencia: '68 CV', peso: '820 kg', traccion: 'FF', velocidad_max: '150 km/h' }),

  car('hyundai_sonata_y2', 'Hyundai Sonata Y2', ['Corea del Sur'], 1988, 1993,
    ['Sedán', '2.0', 'Tracción delantera'],
    'El Sonata Y2 fue el salto cualitativo de Hyundai al segmento medio: diseño de Giugiaro, motor propio Hyundai Alpha de 2.0 litros y equipamiento que no tenía nada que envidiar a los japoneses de su clase. Con él, Hyundai dejó de ser percibido como fabricante de autos baratos para convertirse en opción seria en el segmento familiar.',
    { potencia: '105 CV', peso: '1.200 kg', traccion: 'FF', velocidad_max: '175 km/h' }),

  car('hyundai_tiburon_tuscani', 'Hyundai Tiburón Tuscani', ['Corea del Sur'], 2002, 2008,
    ['Coupé', '2.7', 'V6', 'Tracción delantera'],
    'El Tuscani fue el primer coupé deportivo coreano genuinamente competitivo. Con motor Lambda V6 de 2.7 litros y 173 CV, diseño de Italdesign-Giugiaro y un precio 40% menor que los japoneses equivalentes, cambió la percepción mundial de los autos coreanos. El GT con neumáticos 17" y diferencial de deslizamiento limitado era sorprendentemente capaz en curva.',
    { potencia: '173 CV', peso: '1.340 kg', traccion: 'FF', velocidad_max: '215 km/h' }),

  car('hyundai_genesis_coupe', 'Hyundai Genesis Coupé 3.8', ['Corea del Sur'], 2008, 2016,
    ['Coupé', '3.8', 'V6', 'Tracción trasera'],
    'El Genesis Coupé fue revolucionario: el primer Hyundai de tracción trasera en décadas y el primer coupé deportivo coreano de nivel premium. Con motor Lambda V6 de 3.8 litros y 308 CV en configuración FR, competía directamente con el Nissan 370Z y el Mustang V6 en precio y prestaciones. Estableció las bases para la posterior marca Genesis.',
    { potencia: '308 CV', peso: '1.569 kg', traccion: 'FR', velocidad_max: '235 km/h' }),

  car('hyundai_lantra_j2', 'Hyundai Lantra J2', ['Corea del Sur'], 1995, 2000,
    ['Sedán', '1.8', 'Tracción delantera'],
    'El Lantra J2 representó la maduración de Hyundai en el segmento compacto: diseño europeo limpio, motores propios de 1.5 y 1.8 litros y calidad de construcción notablemente mejorada respecto al Excel. Fue el Hyundai más vendido en Europa durante varios años y el primero en recibir calificaciones de seguridad respetables en los test europeos.',
    { potencia: '128 CV', peso: '1.190 kg', traccion: 'FF', velocidad_max: '195 km/h' }),

  car('kia_sephia', 'Kia Sephia', ['Corea del Sur'], 1992, 2001,
    ['Sedán', '1.6', 'Tracción delantera'],
    'El Sephia fue el primer sedán propio de Kia diseñado en colaboración con Mazda —compartía plataforma y mecánica con el 323. Con motor DOHC de 1.6 litros y diseño europeo, fue la apuesta de Kia para competir en el segmento compacto. En Latinoamérica fue especialmente popular por su precio competitivo y mecánica conocida de los talleres Mazda.',
    { potencia: '105 CV', peso: '1.070 kg', traccion: 'FF', velocidad_max: '178 km/h' }),

  car('kia_sportage_gen1', 'Kia Sportage Gen1', ['Corea del Sur'], 1993, 2002,
    ['SUV', '2.0', '4x4'],
    'El primer Sportage fue el SUV compacto más asequible del mercado cuando llegó a Occidente a mediados de los 90s. Con bastidor de escalera, reducida 4WD mecánica y motor de 2.0 litros, ofrecía capacidad todoterreno real a precio de auto de familia. Su precio 30% inferior al Suzuki Vitara lo convirtió en el SUV del primer comprador en muchos mercados.',
    { potencia: '128 CV', peso: '1.480 kg', traccion: '4WD', velocidad_max: '165 km/h' }),

  car('daewoo_lanos', 'Daewoo Lanos', ['Corea del Sur'], 1997, 2004,
    ['Hatchback', 'Sedán', '1.6', 'Tracción delantera'],
    'El Lanos fue el producto más exitoso de Daewoo en Occidente, vendido bajo distintas marcas en diferentes mercados (Chevrolet, Zaz, FSO). Con diseño de Giugiaro e Italdesign y motor de 1.6 litros, era un auto honesto y accesible. Después de la quiebra de Daewoo en 2000, GM adquirió la compañía y continuó fabricando versiones del Lanos en varios países hasta bien entrados los 2000s.',
    { potencia: '106 CV', peso: '1.065 kg', traccion: 'FF', velocidad_max: '185 km/h' }),

  car('ssangyong_musso', 'SsangYong Musso', ['Corea del Sur'], 1993, 2006,
    ['SUV', '2.9', 'Diesel', '4x4'],
    'El Musso fue el SUV premium de SsangYong, desarrollado en colaboración con Mercedes-Benz que proporcionó motores diesel y la tecnología de transmisión 4WD. Con el motor OM602 de 5 cilindros diesel de Mercedes, era uno de los SUV diésel más refinados de su precio. En Argentina fue ensamblado localmente durante años.',
    { potencia: '120 CV', peso: '1.870 kg', traccion: '4WD', velocidad_max: '155 km/h' }),

  car('kia_pride', 'Kia Pride / Ford Festiva', ['Corea del Sur'], 1987, 2000,
    ['Hatchback', '1.1', 'Tracción delantera'],
    'El Pride —vendido en Norteamérica como Ford Festiva— fue desarrollado en colaboración entre Kia, Ford y Mazda. Con motor de 1.1 litros y precio mínimo, fue el auto de entrada al mercado más vendido de Kia en los 90s. En Chile fue muy popular por su economía y facilidad de mantención, y aún circula en buenas cantidades en zonas rurales.',
    { potencia: '55 CV', peso: '750 kg', traccion: 'FF', velocidad_max: '140 km/h' }),
];
