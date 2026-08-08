import { File, Paths } from 'expo-file-system';
import { SEED_CARS } from '../data/seedCars';
import { SEED_CATALOGS } from '../data/seedCatalogs';
import { saveCar, saveCatalog } from './index';

const flagFile = new File(Paths.document, '.seeded_v1');

export function seedIfNeeded(): void {
  if (flagFile.exists) return;
  for (const car of SEED_CARS) saveCar(car);
  for (const catalog of SEED_CATALOGS) saveCatalog(catalog);
  flagFile.create();
}
