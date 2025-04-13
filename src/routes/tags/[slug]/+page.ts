import { findHobbiesByTag } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const hobbies = findHobbiesByTag(params.slug);

    return {
        hobbies,
        tagName: params.slug
    };
};