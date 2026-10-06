# William Steinley - Portfolio site

Source for https://williamsteinley.github.io/, a portfolio and resume for forester and GIS analyst roles: one main page plus an interactive Leaflet map.

## What is on the main page

- **Header**: Gold Run, California; "Forester / GIS Analyst · M.S. Forestry"; an at-a-glance row (years, degree, RPF eligibility, core tools); links to the resume PDF, the projects section, GitHub and email; the email address as text with a copy button.
- **Projects**: two cards, each written as problem, data, method, result and limits.
  - *Mohawk Valley West Slope: LiDAR-based harvest-unit planning* - a demonstration on public data: LiDAR terrain and canopy products, 24 demonstration units, a skyline corridor screen, an 11x17 unit map series and simulated-cruise review sheets. A hero image and five thumbnails link to full-size JPEGs. Two sections that open on request follow: four Blender renders of the terrain and canopy from the same LiDAR, and a before-and-after of the symbology review. A button opens the interactive map; two sample sheets download from the release; the source and full deliverables are at [plumas-lidar-harvest-planning](https://github.com/williamsteinley/plumas-lidar-harvest-planning) and its v1.1 release.
  - *Forest Inventory Analyzer* - a Rust command-line and web cruise compiler, at [forest-inventory-analyzer-rust](https://github.com/williamsteinley/forest-inventory-analyzer-rust) with a Windows installer and macOS and Linux binaries on its v0.2.0 release, shown with two dashboard screenshots from that release run on its sample cruise.
- **About**: two paragraphs on National Forest project work, LiDAR and inventory experience, and what the two projects are.
- **Professional Resume**: work experience, education, certifications and research, with a PDF download. The text follows the resume master word for word, without the hours-per-week notes.
- **Technical Skills**: forestry and field operations, GIS and spatial science, programming and data.
- **Get in touch**: availability, the email address with a copy button, GitHub and the resume PDF.

## Files

| Path | Purpose |
|---|---|
| `index.html` | The main page. No templates, no build step. |
| `styles.css` | Design tokens, light and dark themes, responsive layout, print styles. |
| `site.js` | Optional extras: the copy-address button, and opening the closed sections for printing. The page works without it. |
| `404.html` | Not-found page in the site's style, with links to the main sections. |
| `og-card.jpg` | 1200x630 link-preview image (name, title and a crop of the unit 404 map) used by both pages. |
| `projects/resume/William_Steinley_Resume.pdf` | Two-page resume served by the site (no phone number). |
| `projects/plumas-lidar-harvest-planning/*.jpg` | Gallery previews: the map sheets, cable figures and review sheet rendered by the project's own scripts, four Blender terrain renders and the symbology before-and-after, plus `*_thumb.jpg` copies for the strips. |
| `projects/*/*_<width>.webp` | Resized WebP copies of those images, picked by screen size: the hero sheet at 700 to 1870 px, larger strip images for phones. Made with `gdal_translate -of WEBP -co QUALITY=80 -r lanczos -outsize <width> 0` from the full-size JPEGs. |
| `projects/forest-inventory-analyzer/*.jpg` | Two dashboard screenshots of the analyzer's v0.2.0 release on its shipped sample cruise, plus thumbnails. |
| `projects/plumas-lidar-harvest-planning/map/index.html` | Interactive Leaflet map on USGS basemaps: units, corridors, landings, exclusion zones, streams, contours, yarding class and simulated plots. |
| `projects/plumas-lidar-harvest-planning/map/data/` | GeoJSON layers in WGS84 exported from the project GeoPackage, and the yarding-class PNG overlay with its bounds. |
| `robots.txt`, `sitemap.xml` | Crawl directives and the sitemap for the main page, the map page and the resume PDF. |

## Working on it

- Plain HTML, CSS, a small `site.js` and one Leaflet script, so any static preview works. A headless browser screenshot is enough to check layout:
  `msedge --headless=new --screenshot=out.png --window-size=1280,2400 index.html`
- The map page fetches GeoJSON, which browsers block from `file://`. Serve the repo root with `python -m http.server` to test it locally.
- Keep the main page free of inline styles; every class is defined in `styles.css`.
- The resume PDF is exported from the resume document, then copied here. The map, cable and review previews are copied from the project repository's `output/previews` folder after each render, so the site never holds a sheet the project cannot reproduce. The terrain renders come from a separate Blender pipeline on the same rasters, and the analyzer screenshots from its published release.
- Every project shown is built from public data with the author's own code. No employer or client material is used.

## License

Page text and layout: all rights reserved. The map sheets, figures and map data from the harvest-planning project are CC BY 4.0 under that repository's `LICENSE-MAPS-DATA.md`; the terrain renders and analyzer screenshots are covered by the page terms.

## Hosting

GitHub Pages from the `main` branch root. A push to `main` rebuilds the site within a minute.
