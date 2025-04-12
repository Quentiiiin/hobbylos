import { HobbySchema, type Hobby, type Result } from "./types";

const hobbyFiles = import.meta.glob('../content/hobby/*.json', { eager: true });

export const hobbies: Hobby[] = [];

for(const h in hobbyFiles) {
    const hobbyMaybe = hobbyFiles[h];
    const abc = JSON.parse(JSON.stringify(hobbyMaybe)); // fucking weird bs required to make zod work
    const parseResult = HobbySchema.safeParse(abc);
    if(parseResult.success) {
        hobbies.push(parseResult.data);
    } else {
        console.error('Error reading hobby file:', h, parseResult.error);
    }
}

export function findHobbyBySlug(slug: string) {
    return hobbies.find((h) => h.slug === slug);
}

export function findHobbiesByTag(tag: string) {
    return hobbies.filter((h) => h.tags.includes(tag));
}

export function getAllTags() {
    const tags: string[] = [];
    hobbies.forEach((h) => {
        h.tags.forEach((t) => {
            if(!tags.includes(t)) tags.push(t);
        });
    });
    return tags;
}

export function match(tags: string[]): Result[] {
    return [];
}