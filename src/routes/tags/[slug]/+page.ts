import { findHobbiesByTag, getAllTags, hobbies } from '$lib/data';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

   const hobbies = findHobbiesByTag(params.slug);

    return {
        hobbies,
        tagName: params.slug
    };
};

export const entries: EntryGenerator = () => {
    const pages: { slug: string }[] = [];
    getAllTags().forEach(t => {
        pages.push({slug: t});
    });
    return pages;
};