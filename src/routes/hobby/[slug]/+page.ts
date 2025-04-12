import { findHobbyBySlug } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const hobby = findHobbyBySlug(params.slug);

    return {
        hobby
    };
};