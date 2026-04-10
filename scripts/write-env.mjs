import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const envDir = join(root, 'src', 'environments');

mkdirSync(envDir, { recursive: true });

const fromEnv = (name, fallback = '') => process.env[name] || fallback;

const config = {
  apiKey: fromEnv('TMDB_API_KEY', 'REPLACE_ME'),
  accessToken: fromEnv('TMDB_ACCESS_TOKEN', 'REPLACE_ME'),
  baseUrl: fromEnv('TMDB_BASE_URL', 'https://api.themoviedb.org/3'),
  imageBase: fromEnv('TMDB_IMAGE_BASE', 'https://image.tmdb.org/t/p'),
  youtubeEmbed: fromEnv('TMDB_YOUTUBE_EMBED', 'https://www.youtube.com/embed/'),
  siteUrl1: fromEnv('WATCH_SITE_URL1', 'https://api.cinezo.net/'),
  siteUrl2: fromEnv('WATCH_SITE_URL2', 'https://111movies.net/'),
  siteUrl3: fromEnv('WATCH_SITE_URL3', 'https://vidzen.fun/'),
  siteUrl4: fromEnv('WATCH_SITE_URL4', 'https://vidfast.pro/')
};

const ts = (isProduction) => `export const environment = {
  production: ${isProduction},
  tmdb: {
    apiKey: '${config.apiKey}',
    accessToken: '${config.accessToken}',
    baseUrl: '${config.baseUrl}',
    imageBase: '${config.imageBase}',
    youtubeEmbed: '${config.youtubeEmbed}',
    siteUrl1: '${config.siteUrl1}',
    siteUrl2: '${config.siteUrl2}',
    siteUrl3: '${config.siteUrl3}',
    siteUrl4: '${config.siteUrl4}'
  }
};
`;

writeFileSync(join(envDir, 'environment.ts'), ts(false), 'utf8');
writeFileSync(join(envDir, 'environment.prod.ts'), ts(true), 'utf8');

console.log('Generated src/environments/environment.ts and environment.prod.ts');
