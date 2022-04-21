import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		package: {
			files: (filepath) => {
				if (filepath.includes('components/')) return false;
				return true;
			}
		},
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components/')
				}
			}
		}
	}
};

export default config;
