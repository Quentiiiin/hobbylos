import { browser } from '$app/environment';
import { match } from '$lib/matchmaking/matchmaking';
import type { Result } from '$lib/types';
import type { PageLoad } from './$types';


export const load: PageLoad = ({ params, url }) => {

    if(!browser) return;

    const tags: string[] = Array.from(url.searchParams.keys());
    const tagsWithValue: Record<string, number> = {};

    tags.forEach(t => {
        tagsWithValue[t] = Number.parseInt(url.searchParams.get(t) ?? '1') ?? 1;
    });


    const res: Result[] = match(tagsWithValue);

    const sortedRes = res.toSorted((a, b) => b.matchRate - a.matchRate); //sort by matchrate

    return {
        results: sortedRes
    };
};