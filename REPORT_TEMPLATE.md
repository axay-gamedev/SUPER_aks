# Project Report: SUPER_aks — Superconductor Learning App

**Student name:** Akshay Mishra  
**Roll number:** 260149009  
**Course / class:** CSE — AI & ML  
**Subject:** Engineering Physics (DPH 101)  
**Submission date:** ____________________

## 1. Introduction and objective
The objective of this project is to develop a mobile-friendly learning application about superconducting materials. The app presents a database of at least ten materials and displays each material's name, critical temperature in kelvin, Type-I or Type-II classification, representative critical magnetic field and important applications. A key requirement is that the application should remain usable without an internet connection after installation and caching.

## 2. Software and platform used
- HTML5 for the application structure.
- CSS3 for responsive mobile-first styling.
- JavaScript for database rendering, search, filters, detail views and quiz interactions.
- JSON-style JavaScript data (`data.js`) for the bundled local materials database.
- Progressive Web App technologies: Web App Manifest and Service Worker.
- Safari on iPhone for adding the web app to the Home Screen.
- Static HTTPS hosting (write the provider and URL you actually used): ____________________.

## 3. Step-by-step development procedure
1. Created the project folder and application entry point (`index.html`).
2. Designed a responsive dark interface in `styles.css`.
3. Created the local materials database in `data.js`.
4. Wrote JavaScript functions in `app.js` to display materials, search, filter and open material details.
5. Added a Learn section explaining superconductivity, critical temperature, critical field and Type-I / Type-II materials.
6. Added a five-question quiz to demonstrate interactivity.
7. Created `manifest.webmanifest` with the app name, display mode, theme and icons.
8. Created `sw.js` to cache the app shell and data files for offline use.
9. Deployed the project to an HTTPS static host.
10. Opened the site in Safari on iPhone and added it to the Home Screen.
11. Enabled Airplane Mode and tested the installed app. **Only report this step as complete after you have actually tested it.**

## 4. Method used to create and store the material database
The database is stored in `data.js` as a local JavaScript array of material records. Each record contains an identifier, material name, chemical formula, symbol, critical temperature, classification, representative critical magnetic field, field-condition note, applications, explanatory note and reference note. The app reads this array directly; it does not request records from a remote server. The service worker caches `data.js` with the rest of the application files.

The critical-field values are representative and have different stated measurement conditions. Type-I values refer to thermodynamic critical fields near 0 K; Type-II values are indicative upper critical fields under the conditions stated in each profile. These values depend on temperature, composition, sample and orientation.

## 5. Screenshots
Insert your own screenshots below. Suggested captures:
- Figure 1: Home screen / app introduction.
- Figure 2: Materials library with all entries.
- Figure 3: Search or Type-I / Type-II filter in use.
- Figure 4: A material detail page showing Tc, type, critical field and applications.
- Figure 5: Learn section.
- Figure 7: SUPER_aks icon on the iPhone Home Screen.
- Figure 8: App opened while Airplane Mode is enabled.

## 6. Procedure followed to install the application on the iPhone
1. Opened the deployed HTTPS application URL in Safari.
2. Waited for the app to load and cache its files while connected to the internet.
3. Opened the Share menu and selected Add to Home Screen.
4. Enabled Open as Web App if available and tapped Add.
5. Launched SUPER_aks from the iPhone Home Screen.
6. Enabled Airplane Mode and checked that the app, material list, details and learning content continued to work.

**Hosting URL:** ____________________  
**iPhone model / iOS version:** ____________________  
**Offline test result:** Pass / Fail (describe what you observed): ____________________

## 7. Conclusion
The project demonstrates a mobile-first learning app with a locally stored superconductors database and offline caching. The app provides searchable material information, concept explanations and a short quiz. The final conclusion should reflect the tests actually performed on the target iPhone.

## References
1. HyperPhysics, Georgia State University, “Superconductivity”: https://hyperphysics.phy-astr.gsu.edu/hbase/Solids/scond.html
2. OSTI, “Critical Temperature, Magnetic Field, and Current Density for Representative Superconductors”: https://www.osti.gov/servlets/purl/7319423
3. CERN, “Accelerator Engineering and Technology: Accelerator Technology” (table of representative technical-superconductor parameters): https://cds.cern.ch/record/2743158/files/Bordry2020_Chapter_AcceleratorEngineeringAndTechn.pdf
4. University of Technology Sydney, thesis on high-temperature superconducting materials, Table 2.2: https://opus.lib.uts.edu.au/bitstream/10453/172001/1/thesis.pdf
5. Apple Support, “Turn a website into an app in Safari on iPhone”: https://support.apple.com/en-az/guide/iphone/iphea86e5236/26/ios/26

**Note:** Confirm the bibliographic details and values with your instructor's preferred references. Add any additional sources you consult.
