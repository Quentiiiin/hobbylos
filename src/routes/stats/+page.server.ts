import { VITE_GIT_BRANCH_NAME, VITE_GIT_COMMIT_COUNT, VITE_GIT_COMMIT_DATE, VITE_GIT_COMMIT_HASH } from "$env/static/private";

import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    return {
        branch: VITE_GIT_BRANCH_NAME,
        date: VITE_GIT_COMMIT_DATE,
        HASH: VITE_GIT_COMMIT_HASH,
        count: VITE_GIT_COMMIT_COUNT
    }
};