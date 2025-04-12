import { hobbies, match } from '$lib/data';
import type { Result } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, url }) => {

    const tags: string[] = Array.from(url.searchParams.keys());


    const res: Result[] = match(tags);

    const sortedRes = res.toSorted((a, b) => b.matchRate - a.matchRate); //sort by matchrate

    return {
        results: sortedRes
    };
};