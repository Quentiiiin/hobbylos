import { findHobbyBySlug, hobbies } from '$lib/data';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

    const hobby = findHobbyBySlug(params.slug);

    return {
        hobby
    };
};

export const entries: EntryGenerator = () => {
    const pages: { slug: string }[] = [];
    hobbies.forEach(e => {
        pages.push({slug: e.slug});
    });
    return pages;
};