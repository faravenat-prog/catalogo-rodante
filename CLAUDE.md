# Catálogo Rodante — Contexto del proyecto

App Android personal tipo catálogo/juego de autos. React Native + Expo SDK 57 + TypeScript.
Sin backend, sin monetización, sin autenticación. Todo el estado vive en el dispositivo.

## Stack

- React Native + Expo SDK 57 (managed → bare con `expo prebuild`)
- TypeScript
- `expo-file-system` API legacy (`downloadAsync`, `getInfoAsync`, `makeDirectoryAsync`, `Paths.document.uri`) — NO usar la nueva API (`File`/`Directory`) porque falla en nueva arquitectura JSI
- `expo-image` (no `Image` de React Native) — mejor caché y transiciones para URLs remotas, usa Glide en Android
- `react-navigation` (stack + tabs)
- GitHub Actions → APK descargable desde Artifacts (sin EAS, sin cuenta Expo)

## Estado actual (último commit: dde29ff)

### Features implementadas ✅
- 8 pantallas: MenuScreen, SetupScreen, CarCardScreen, AddCarScreen, PhotoSearchScreen, PlayScreen, ReplayScreen, CatalogsScreen
- Almacenamiento JSON con expo-file-system (API legacy, probada y confiable)
- Tema visual revista 90s: tokens paper/ink/red/yellow/blue/pink, tipografías Anton + JetBrains Mono
- Navegación react-navigation stack + tabs
- GitHub Actions workflow genera APK debug (sin EAS)
- ~9,114 autos en catálogo organizados por país (Japan, Germany, USA, France, Italy, UK, Korea, Sweden) + 46 archivos de marca en `src/data/cars/brands/`
- ~4,653 autos de marca con fotos de Wikimedia Commons (commit d33fbb7)
- Seed v3 forzado (commit 68eb482) para que los clientes recarguen datos con fotos
- Fotos se descargan automáticamente al abrir un auto → se guardan en `{Paths.document.uri}/cr_photos/`
- Botón fullscreen al tocar una foto (Modal negro)
- Retry de descarga por foto individual si falla

### Estructura de datos
- `src/data/cars/{japan,germany,usa,france,italy,uk,korea,sweden}.ts` — datos detallados (prioridad)
- `src/data/cars/brands/{toyota,honda,nissan,...}.ts` — 46 marcas, datos mínimos + fotos
- `src/data/allCars.ts` — importa todo y expone array unificado
- `src/data/allCatalogs.ts` — catálogos temáticos y por marca
- `src/storage/seed.ts` — carga inicial con flag `seeded_v3`

### Descarga de fotos local
- Al abrir `CarCardScreen`: verifica si foto existe en `cr_photos/{hash}.jpg` vía `getInfoAsync`
- Si no existe: descarga con `downloadAsync` (API legacy) → spinner por slot
- Hash del filename: `urlToFilename(url)` — mismo algoritmo en app y en `scripts/download_photos.py`
- Fotos persisten aunque se actualice la app

## Próxima tarea pendiente

**Script Python para descargar fotos masivas** — el usuario quiere un script para bajar todas las fotos de los ~9,114 autos a una carpeta local en su PC (Arch Linux, RTX 2060) y luego copiarlas al dispositivo o incluirlas en el APK.

### Contexto de lo que ya existe
- `scripts/download_photos.py` — script básico para Termux. Descarga fotos de `scripts/cars_list.json` usando el mismo `urlToFilename()` que la app. Directorio destino configurable con `DEST_DIR`.
- `scripts/progress.json` — 62K líneas, fotos de los autos de país (japan/germany/etc.)
- `scripts/progress_all.json` — 60K líneas, fotos de los 8,545 autos de marcas (brands/)
- `scripts/cars_list.json` — 486 líneas, lista de autos de países con id/nombre/país/año
- `scripts/cars_list_all.json` — 1.1MB, lista de todos los autos incluyendo marcas

### Lo que falta implementar
El script de descarga masiva debe:
1. Leer `scripts/progress.json` + `scripts/progress_all.json` (fuente de verdad de URLs)
2. Para cada auto que tenga fotos, descargar las URLs a una carpeta local (ej: `~/cr_photos/`)
3. Usar el mismo hash `urlToFilename()` que usa la app para nombrar los archivos
4. Continuar desde donde quedó (skip si el archivo ya existe)
5. Mostrar progreso (X/total, %)
6. Manejar errores / timeouts sin abortar

**Función urlToFilename en la app** (`src/screens/CarCardScreen.tsx`):
```typescript
function urlToFilename(url: string): string {
  // simple hash numérico del URL
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // 32-bit int
  }
  return Math.abs(hash).toString() + '.jpg';
}
```

El script Python debe replicar exactamente este hash para que los nombres coincidan con lo que busca la app.

## Scripts en `scripts/`

| Script | Uso |
|---|---|
| `wiki_scraper.py` | Scraper Wikipedia. `python3 wiki_scraper.py <marca>` o `--all`. Genera `scripts/brands/{marca}.json` |
| `merge_brands.py` | Integra brand JSONs → `src/data/cars/brands/*.ts` y actualiza `allCars.ts` |
| `apply_photos.py` | Aplica fotos de progress.json a archivos TS. Convierte `car()` → `carP()` |
| `auto_photos.py` | Busca fotos en Wikimedia Commons automáticamente |
| `auto_photos_all.py` | Igual que auto_photos.py pero para los 8,545 autos de brands/ |
| `auto_photos_retry.py` | Reintenta autos sin fotos completas |
| `photo-finder.html` | UI visual para asignar fotos manualmente. `python3 -m http.server 8787 --directory scripts` → `http://localhost:8787/photo-finder.html` |
| `download_photos.py` | Descarga fotos a carpeta local (Termux). DEST_DIR configurable |

## Archivos clave

- `App.tsx` — entry point y navegación
- `src/screens/CarCardScreen.tsx` — ficha auto + descarga fotos locales
- `src/screens/AddCarScreen.tsx` — formulario agregar auto
- `src/screens/PhotoSearchScreen.tsx` — buscador Wikimedia
- `src/storage/seed.ts` — carga datos iniciales
- `src/data/allCars.ts` — exporta array unificado de todos los autos
- `src/theme/tokens.ts` — paleta y tipografía
- `.github/workflows/build-apk.yml` — CI/CD genera APK

## Entorno de desarrollo (PC Arch Linux)

```bash
# Clonar
git clone https://github.com/faravenat-prog/catalogo-rodante.git
cd catalogo-rodante
npm install

# Correr en metro (dev)
npx expo start --android

# Generar APK via CI
git push  # GitHub Actions lo compila automáticamente
# APK descargable desde: Actions → último run → Artifacts → catalogo-rodante-apk
```

Requisitos: Node 20, JDK 17, Android Studio (para emulador) o dispositivo físico.

## GitHub Actions — build APK

```yaml
- run: npm install
- run: npx expo prebuild --platform android --clean
- run: |
    mkdir -p android/app/src/main/assets
    npx expo export:embed \
      --platform android \
      --entry-file index.ts \
      --bundle-output android/app/src/main/assets/index.android.bundle \
      --assets-dest android/app/src/main/res
- working-directory: android
  run: ./gradlew assembleDebug
```

APK en: `android/app/build/outputs/apk/debug/app-debug.apk`

## Diseño visual — Estilo revista autos 90s

| Token | Hex | Uso |
|---|---|---|
| `paper` | `#F3EEDF` | fondo principal |
| `paper2` | `#EAE2CB` | fondo secundario |
| `ink` | `#161311` | texto, bordes |
| `red` | `#E23227` | acentos primarios, CTAs |
| `yellow` | `#F6C315` | acentos secundarios, chips activos |
| `blue` | `#1E4FA3` | selección / estado activo |
| `pink` | `#E8437B` | acento decorativo |

Tipografía: `Anton` (display bold), `JetBrains Mono` (datos/specs), Arial (cuerpo).
Estilo: bandas diagonales `rotate(-6deg)`, sombras duras offset sólido `4px 4px 0 ink`, bordes gruesos negros 2px.

## Credenciales GitHub

Usuario: `faravenat-prog`
Repo: `https://github.com/faravenat-prog/catalogo-rodante`

El token personal (PAT) NO se guarda aquí. Configura el remote así:

```bash
git remote set-url origin https://faravenat-prog:TU_TOKEN@github.com/faravenat-prog/catalogo-rodante.git
```
