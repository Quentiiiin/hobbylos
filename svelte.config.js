import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess({})],
	kit: { adapter: adapter({
		routes: {
			exclude: ["/*"],
		}
	}) },
	extensions: ['.svelte']
};

export default config;