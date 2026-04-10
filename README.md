# ScreenVerse (Movie Platform)

ScreenVerse is a modern Angular movie and TV discovery platform powered by TMDB data.

It includes rich content browsing, detail pages, watch-provider data, a watch page with server switching, favorites, bilingual UI (English/French), dark/light themes, and responsive layouts designed for desktop, tablet, and mobile.

## Tech Stack

- Angular 21 (standalone components, lazy routes)
- TypeScript
- Angular Material (icons/spinner/buttons)
- TMDB API
- Signal-based state management

## Main Features

- Home page with curated sections and hero content
- Movies and TV Shows pages with:
	- genre filter
	- rating filter
	- country filter
	- pagination
- Detail page with trailers, metadata, cast, and provider info
- Watch page:
	- movie and TV watch URL generation
	- TV season and episode selection
	- 4 server buttons (Server 1-4)
- Favorites management
- Theme toggle (dark/light)
- Language toggle (EN/FR)
- Offline banner and resilient loading/error states

## Project Structure

```text
src/
	app/
		core/services/
			tmdb.ts
			favorites.ts
			theme.ts
			language.ts
		features/
			home/
			movies/
			tv-shows/
			detail/
			watch/
			favorites/
		layout/
			navbar/
			footer/
		shared/
			components/
			pipes/
		models/
	environments/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment values

Real environment files are ignored by git for security.

This project generates `src/environments/environment.ts` and `src/environments/environment.prod.ts` automatically during `npm start` and `npm run build` from environment variables.

If you do not define variables locally, fallback defaults are used.

Main variables:

- `TMDB_API_KEY`
- `TMDB_ACCESS_TOKEN`
- `TMDB_BASE_URL`
- `TMDB_IMAGE_BASE`
- `TMDB_YOUTUBE_EMBED`
- `WATCH_SITE_URL1`
- `WATCH_SITE_URL2`
- `WATCH_SITE_URL3`
- `WATCH_SITE_URL4`

Example tracked template:

- `src/environments/environment.example.ts`

### 3. Start development server

```bash
npm start
```

Open: `http://localhost:4200`

## Available Scripts

- `npm start` -> run development server
- `npm test` -> run unit tests
- `npm run build` -> create production build

## Build for Production

```bash
npm run build
```

Build output is generated in `dist/`.

## Deploy to Netlify (Production Link)

This repo is ready for Netlify deployment.

1. In Netlify, choose "Add new site" -> "Import an existing project".
2. Connect GitHub and select this repository.
3. Build settings are already configured through `netlify.toml`:
	- Build command: `npm run build`
	- Publish directory: `dist/movie-platform/browser`
4. In Netlify site settings, add these environment variables:
	- `TMDB_API_KEY`
	- `TMDB_ACCESS_TOKEN`
	- `TMDB_BASE_URL` (optional)
	- `TMDB_IMAGE_BASE` (optional)
	- `TMDB_YOUTUBE_EMBED` (optional)
	- `WATCH_SITE_URL1`
	- `WATCH_SITE_URL2`
	- `WATCH_SITE_URL3`
	- `WATCH_SITE_URL4`
5. Trigger deploy. Netlify will generate environment files during build and publish a live URL.

SPA route fallback is enabled using:

- `netlify.toml` redirect rule
- `public/_redirects`

## Notes

- TMDB content and poster metadata are provided by The Movie Database (TMDB).
- Streaming availability depends on region and provider availability.
- Keep real API keys/tokens out of git (already enforced via `.gitignore`).

## Repository

Git remote configured for this project:

`https://github.com/cherifaghorbel/movie-platform.git`
