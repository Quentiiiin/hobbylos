import { hobbies } from '$lib/data';
import type { Result } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

    const res: Result[] = [
        { hobby: hobbies[0], matchRate: 100 },
    ];

    const sortedRes = res.toSorted((a, b) => b.matchRate - a.matchRate); //sort by matchrate

    return {
        results: sortedRes
    };
};