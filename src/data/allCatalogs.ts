import { Catalog } from '../types';
import { JAPAN, GERMANY, USA, FRANCE, ITALY, UK, KOREA, SWEDEN } from './allCars';

function ids(cars: { id: string }[]) {
  return cars.map(c => c.id);
}

export const ALL_CATALOGS: Catalog[] = [
  // ── Por país ──────────────────────────────────────────────────────────────
  {
    id: 'pais_japon',
    nombre: 'Japón — Todos',
    pais_principal: 'Japón',
    auto_ids: ids(JAPAN),
  },
  {
    id: 'pais_alemania',
    nombre: 'Alemania — Todos',
    pais_principal: 'Alemania',
    auto_ids: ids(GERMANY),
  },
  {
    id: 'pais_usa',
    nombre: 'EE.UU. — Todos',
    pais_principal: 'EE.UU.',
    auto_ids: ids(USA),
  },
  {
    id: 'pais_francia',
    nombre: 'Francia — Todos',
    pais_principal: 'Francia',
    auto_ids: ids(FRANCE),
  },
  {
    id: 'pais_italia',
    nombre: 'Italia — Todos',
    pais_principal: 'Italia',
    auto_ids: ids(ITALY),
  },
  {
    id: 'pais_reino_unido',
    nombre: 'Reino Unido — Todos',
    pais_principal: 'Reino Unido',
    auto_ids: ids(UK),
  },
  {
    id: 'pais_corea',
    nombre: 'Corea del Sur — Todos',
    pais_principal: 'Corea del Sur',
    auto_ids: ids(KOREA),
  },
  {
    id: 'pais_suecia',
    nombre: 'Suecia — Todos',
    pais_principal: 'Suecia',
    auto_ids: ids(SWEDEN),
  },

  // ── Temáticos ─────────────────────────────────────────────────────────────
  {
    id: 'tematico_hot_hatches',
    nombre: 'Hot Hatches — Europa y Japón',
    pais_principal: 'Europa',
    auto_ids: [
      'vw_golf_gti_mk1', 'vw_golf_gti_mk2', 'vw_golf_gti_mk3',
      'peugeot_205_gti', 'peugeot_106_rallye',
      'renault_5_gt_turbo', 'renault_clio_williams', 'renault_megane_rs',
      'ford_fiesta_xr2',
      'opel_kadett_gsi',
      'honda_civic_eg', 'honda_civic_ek', 'honda_integra_dc2',
      'honda_crx_ef', 'suzuki_swift_sport_zc31s',
      'mini_cooper_r53', 'alfa_romeo_147_gta',
    ],
  },
  {
    id: 'tematico_kei_cars',
    nombre: 'Kei Cars Japón',
    pais_principal: 'Japón',
    auto_ids: [
      'suzuki_fronte_coupe_gx', 'honda_n360', 'honda_beat',
      'suzuki_cappuccino_ea11r', 'suzuki_alto_works',
      'subaru_360', 'daihatsu_mira_trxx', 'daihatsu_copen',
      'mazda_carol_360',
    ],
  },
  {
    id: 'tematico_muscle_cars',
    nombre: 'Muscle Cars USA',
    pais_principal: 'EE.UU.',
    auto_ids: [
      'ford_mustang_1965', 'ford_mustang_boss_302', 'ford_mustang_mach1_1969',
      'ford_mustang_svt_cobra', 'shelby_gt500_1967', 'shelby_cobra_427',
      'chevrolet_camaro_z28_1969', 'chevrolet_camaro_ss_1970',
      'chevrolet_nova_ss', 'chevrolet_bel_air_1957',
      'dodge_charger_rt_1969', 'dodge_viper_rt10', 'dodge_challenger_1970',
      'pontiac_gto_1964', 'pontiac_firebird_1969', 'pontiac_trans_am_1977',
      'plymouth_barracuda_1970', 'amc_javelin_sst', 'amc_amx_1969',
    ],
  },
  {
    id: 'tematico_jdm_deportivos',
    nombre: 'JDM — Deportivos Japoneses',
    pais_principal: 'Japón',
    auto_ids: [
      'nissan_skyline_r32', 'nissan_skyline_r33', 'nissan_skyline_r34',
      'nissan_silvia_s13', 'nissan_silvia_s14', 'nissan_silvia_s15',
      'toyota_ae86_trueno', 'toyota_supra_a70', 'toyota_supra_a80',
      'toyota_mr2_sw10', 'toyota_mr2_sw20',
      'mazda_rx7_sa', 'mazda_rx7_fc', 'mazda_rx7_fd',
      'mazda_mx5_na', 'mazda_mx5_nb',
      'honda_nsx_na1', 'honda_s2000_ap1', 'honda_integra_dc2',
      'subaru_brz_zc6',
      'mitsubishi_3000gt_vr4', 'mitsubishi_eclipse_1g',
      'datsun_fairlady_z_s30', 'isuzu_117_coupe',
    ],
  },
  {
    id: 'tematico_rally',
    nombre: 'Rally — Leyendas del WRC',
    pais_principal: 'Global',
    auto_ids: [
      'subaru_impreza_wrx_gc8', 'subaru_impreza_sti_gd',
      'mitsubishi_lancer_evo1', 'mitsubishi_lancer_evo6', 'mitsubishi_lancer_evo9',
      'lancia_delta_integrale', 'lancia_stratos',
      'audi_quattro_ur', 'audi_rs2',
      'toyota_celica_st185',
      'peugeot_405_mi16',
      'ford_fiesta_xr2',
      'nissan_pulsar_gtir', 'mitsubishi_galant_vr4',
      'mg_metro_6r4', 'citroen_bx_4tc', 'fiat_131_abarth',
    ],
  },
  {
    id: 'tematico_superdeportivos',
    nombre: 'Superdeportivos — Icons',
    pais_principal: 'Global',
    auto_ids: [
      'ferrari_testarossa', 'ferrari_308_gtb', 'ferrari_f355',
      'ferrari_365_daytona', 'ferrari_512_bb',
      'lamborghini_countach', 'lamborghini_miura', 'lamborghini_diablo',
      'porsche_911_993', 'porsche_944_turbo',
      'jaguar_e_type', 'jaguar_xj220',
      'aston_martin_db5',
      'lotus_esprit_turbo',
      'bmw_m1', 'ford_gt40_mk2',
      'honda_nsx_na1', 'mazda_rx7_fd',
    ],
  },
  {
    id: 'tematico_4x4',
    nombre: '4x4 — Todo Terreno Clásico',
    pais_principal: 'Global',
    auto_ids: [
      'toyota_land_cruiser_fj40', 'toyota_land_cruiser_fj80', 'toyota_rav4_gen1',
      'nissan_patrol_y60',
      'mitsubishi_pajero_gen1',
      'land_rover_defender_90', 'mg_metro_6r4',
      'subaru_forester_sf',
      'ssangyong_musso', 'kia_sportage_gen1',
    ],
  },
  {
    id: 'tematico_clasicos_populares',
    nombre: 'Clásicos Populares Latinoamérica',
    pais_principal: 'Global',
    auto_ids: [
      'nissan_sentra_b13', 'nissan_sentra_b14',
      'toyota_corolla_ae90', 'toyota_corolla_e100', 'toyota_tercel_el50',
      'honda_civic_ek', 'mazda_323_bg',
      'mitsubishi_lancer_glxi', 'suzuki_baleno',
      'hyundai_excel', 'hyundai_lantra_j2', 'kia_pride',
      'vw_beetle_1967', 'daewoo_lanos',
    ],
  },
];
