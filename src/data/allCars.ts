// Archivos de país: datos detallados existentes
import { JAPAN } from './cars/japan';
import { GERMANY } from './cars/germany';
import { USA } from './cars/usa';
import { FRANCE } from './cars/france';
import { ITALY } from './cars/italy';
import { UK } from './cars/uk';
import { KOREA } from './cars/korea';
import { SWEDEN } from './cars/sweden';

// Archivos de marca: autos adicionales scrapeados de Wikipedia
import { ACURA } from './cars/brands/acura';
import { ALFA } from './cars/brands/alfa';
import { ASTON } from './cars/brands/aston';
import { AUDI } from './cars/brands/audi';
import { BENTLEY } from './cars/brands/bentley';
import { BMW } from './cars/brands/bmw';
import { BUICK } from './cars/brands/buick';
import { CADILLAC } from './cars/brands/cadillac';
import { CHEVROLET } from './cars/brands/chevrolet';
import { CITROEN } from './cars/brands/citroen';
import { DAIHATSU } from './cars/brands/daihatsu';
import { DATSUN } from './cars/brands/datsun';
import { DODGE } from './cars/brands/dodge';
import { FERRARI } from './cars/brands/ferrari';
import { FIAT } from './cars/brands/fiat';
import { FORD } from './cars/brands/ford';
import { HONDA } from './cars/brands/honda';
import { HYUNDAI } from './cars/brands/hyundai';
import { INFINITI } from './cars/brands/infiniti';
import { ISUZU } from './cars/brands/isuzu';
import { JAGUAR } from './cars/brands/jaguar';
import { JEEP } from './cars/brands/jeep';
import { KIA } from './cars/brands/kia';
import { LAMBORGHINI } from './cars/brands/lamborghini';
import { LANCIA } from './cars/brands/lancia';
import { LANDROVER } from './cars/brands/landrover';
import { LEXUS } from './cars/brands/lexus';
import { LINCOLN } from './cars/brands/lincoln';
import { MASERATI } from './cars/brands/maserati';
import { MAZDA } from './cars/brands/mazda';
import { MERCEDES } from './cars/brands/mercedes';
import { MINI } from './cars/brands/mini';
import { MITSUBISHI } from './cars/brands/mitsubishi';
import { NISSAN } from './cars/brands/nissan';
import { OPEL } from './cars/brands/opel';
import { PEUGEOT } from './cars/brands/peugeot';
import { PONTIAC } from './cars/brands/pontiac';
import { PORSCHE } from './cars/brands/porsche';
import { RENAULT } from './cars/brands/renault';
import { ROLLS } from './cars/brands/rolls';
import { SAAB } from './cars/brands/saab';
import { SUBARU } from './cars/brands/subaru';
import { SUZUKI } from './cars/brands/suzuki';
import { TOYOTA } from './cars/brands/toyota';
import { VOLVO } from './cars/brands/volvo';
import { VW } from './cars/brands/vw';

export const ALL_CARS = [
  // Datos detallados (prioridad)
  ...JAPAN,
  ...GERMANY,
  ...USA,
  ...FRANCE,
  ...ITALY,
  ...UK,
  ...KOREA,
  ...SWEDEN,
  // Autos adicionales por marca (datos mínimos, rellenar con el tiempo)
  ...ACURA,
  ...ALFA,
  ...ASTON,
  ...AUDI,
  ...BENTLEY,
  ...BMW,
  ...BUICK,
  ...CADILLAC,
  ...CHEVROLET,
  ...CITROEN,
  ...DAIHATSU,
  ...DATSUN,
  ...DODGE,
  ...FERRARI,
  ...FIAT,
  ...FORD,
  ...HONDA,
  ...HYUNDAI,
  ...INFINITI,
  ...ISUZU,
  ...JAGUAR,
  ...JEEP,
  ...KIA,
  ...LAMBORGHINI,
  ...LANCIA,
  ...LANDROVER,
  ...LEXUS,
  ...LINCOLN,
  ...MASERATI,
  ...MAZDA,
  ...MERCEDES,
  ...MINI,
  ...MITSUBISHI,
  ...NISSAN,
  ...OPEL,
  ...PEUGEOT,
  ...PONTIAC,
  ...PORSCHE,
  ...RENAULT,
  ...ROLLS,
  ...SAAB,
  ...SUBARU,
  ...SUZUKI,
  ...TOYOTA,
  ...VOLVO,
  ...VW,
];

export { JAPAN, GERMANY, USA, FRANCE, ITALY, UK, KOREA, SWEDEN };
