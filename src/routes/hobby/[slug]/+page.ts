import { findHobbyBySlug, hobbies } from '$lib/data';
import { getRelatedHobbies } from '$lib/matchmaking/getRelatedHobbies';
import type { Hobby } from '$lib/types';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

    const hobby = findHobbyBySlug(params.slug);

    let relatedHobbies: Hobby[] | undefined = undefined;

    if(hobby) relatedHobbies = getRelatedHobbies(hobby);

    return {
        hobby,
        relatedHobbies
    };
};

export const entries: EntryGenerator = () => {
    const pages: { slug: string }[] = [];
    hobbies.forEach(e => {
        pages.push({slug: e.slug});
    });
    return pages;
};