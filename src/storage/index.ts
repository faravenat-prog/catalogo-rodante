import { File, Directory, Paths } from 'expo-file-system';
import { Car, Catalog } from '../types';

const carsDir = new Directory(Paths.document, 'cars');
const catalogsDir = new Directory(Paths.document, 'catalogs');

function ensureDirs() {
  if (!carsDir.exists) carsDir.create();
  if (!catalogsDir.exists) catalogsDir.create();
}

// --- Cars ---

export function saveCar(car: Car): void {
  ensureDirs();
  const file = new File(carsDir, `${car.id}.json`);
  file.write(JSON.stringify(car));
}

export async function loadCar(id: string): Promise<Car | null> {
  try {
    const file = new File(carsDir, `${id}.json`);
    if (!file.exists) return null;
    const raw = await file.text();
    return JSON.parse(raw) as Car;
  } catch {
    return null;
  }
}

export async function loadAllCars(): Promise<Car[]> {
  ensureDirs();
  const files = carsDir.list().filter(f => f instanceof File && f.name.endsWith('.json')) as File[];
  const cars = await Promise.all(
    files.map(async f => {
      const raw = await f.text();
      return JSON.parse(raw) as Car;
    })
  );
  return cars.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

export function deleteCar(id: string): void {
  const file = new File(carsDir, `${id}.json`);
  if (file.exists) file.delete();
}

// --- Catalogs ---

export function saveCatalog(catalog: Catalog): void {
  ensureDirs();
  const file = new File(catalogsDir, `${catalog.id}.json`);
  file.write(JSON.stringify(catalog));
}

export async function loadAllCatalogs(): Promise<Catalog[]> {
  ensureDirs();
  const files = catalogsDir.list().filter(f => f instanceof File && f.name.endsWith('.json')) as File[];
  const catalogs = await Promise.all(
    files.map(async f => {
      const raw = await f.text();
      return JSON.parse(raw) as Catalog;
    })
  );
  return catalogs.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

export async function loadCatalog(id: string): Promise<Catalog | null> {
  try {
    const file = new File(catalogsDir, `${id}.json`);
    if (!file.exists) return null;
    const raw = await file.text();
    return JSON.parse(raw) as Catalog;
  } catch {
    return null;
  }
}

export async function loadCarsForCatalog(catalog: Catalog): Promise<Car[]> {
  const results = await Promise.all(catalog.auto_ids.map(id => loadCar(id)));
  return results.filter((c): c is Car => c !== null);
}
