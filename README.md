# SUPER_aks — Superconductor Atlas

A student-built, offline-first Progressive Web App (PWA) for learning about superconducting materials.

**Student:** Akshay Mishra  
**Roll number:** 260149009  
**Branch:** CSE — AI & ML  
**Subject:** Engineering Physics (DPH 101)

## Features
- 10 superconducting materials with Tc, classification, representative critical magnetic field and applications.
- Search and filters (Type-I, Type-II and High-Tc).
- Material detail sheets with scientific notes.
- Concept-learning section.
- Service-worker caching for offline use after the first successful online load.
- No external APIs, fonts, images, packages or runtime network dependencies.

## Run locally
The app is static. You do not need npm or a build step.

### Option A — Python
From this folder run:
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

### Option B — VS Code
Install the Live Server extension, right-click `index.html`, then choose **Open with Live Server**.

> Service workers require HTTPS or localhost. Opening `index.html` directly using `file://` will not enable offline caching.

## Deploy (for iPhone installation)
Deploy the complete folder to a static HTTPS host such as GitHub Pages or Vercel. Do not remove `sw.js`, `manifest.webmanifest`, `data.js` or the `assets` folder.

### Vercel
1. Extract the ZIP.
2. Import the folder/repository into Vercel, or run `vercel` from the folder.
3. Framework preset: **Other**.
4. Build command: leave blank.
5. Output directory: `.` (project root).
6. Deploy and open the HTTPS URL once in Safari.

### GitHub Pages
1. Push all project files to a GitHub repository.
2. Open Settings → Pages.
3. Select Deploy from a branch, choose `main` and `/ (root)`.
4. Save and wait for the Pages URL.

## Install on iPhone
1. Open the deployed HTTPS URL in **Safari** (not an in-app browser).
2. Allow the app to finish loading while online. Keep it open briefly so the service worker can cache its files.
3. Tap Share → Add to Home Screen.
4. Enable **Open as Web App** if the option appears, then tap Add.
5. Launch SUPER_aks from the Home Screen.
6. Test offline: enable Airplane Mode, reopen the Home Screen app and test Explore, Learn, Quiz and material detail pages.

The first installation and first cache population require internet access. After caching, the app's interface and database are available offline.

## Update the app
When changing files, update `CACHE_NAME` in `sw.js` (for example, `super-aks-v2`) before redeploying. Open the updated site online once so the new cache is installed.

## Scientific-data notes
Values are representative reference values, not universal constants. Critical magnetic fields depend on temperature, composition, sample quality and (especially for anisotropic Type-II compounds) crystal orientation. For Type-I entries the listed field is the thermodynamic critical field near 0 K. For Type-II entries the listed field is an indicative upper critical field under the conditions stated in the detail view. Do not compare these numbers as though all were measured under identical conditions.

## Project structure
- `index.html` — app structure
- `styles.css` — responsive mobile-first styling
- `data.js` — local superconductors database
- `app.js` — search, filters, detail views and quiz
- `sw.js` — offline caching
- `manifest.webmanifest` — install metadata
- `assets/` — app icons
- `REPORT_TEMPLATE.md` — report structure to complete with your own screenshots and installation evidence

## Academic integrity
This is a starter project for you to inspect, run, test and explain. Read the code and personalise it before submission. Capture your own screenshots and describe the steps you actually performed.
