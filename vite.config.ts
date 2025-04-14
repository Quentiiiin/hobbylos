import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'child_process';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(),tailwindcss(), sveltekit()]
});

const commitDate = execSync('git log -1 --format=%cI').toString().trimEnd();
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trimEnd();
const commitHash = execSync('git rev-parse HEAD').toString().trimEnd();

process.env.VITE_GIT_COMMIT_DATE = commitDate;
process.env.VITE_GIT_BRANCH_NAME = branchName;
process.env.VITE_GIT_COMMIT_HASH = commitHash;