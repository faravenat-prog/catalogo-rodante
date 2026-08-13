import { File, Paths } from 'expo-file-system';
import { ALL_CARS } from '../data/allCars';
import { ALL_CATALOGS } from '../data/allCatalogs';
import { saveCar, saveCatalog } from './index';

const flagFile = new File(Paths.document, '.seeded_v3');

export function seedIfNeeded(): void {
  if (flagFile.exists) return;
  for (const car of ALL_CARS) saveCar(car);
  for (const catalog of ALL_CATALOGS) saveCatalog(catalog);
  flagFile.create();
}
