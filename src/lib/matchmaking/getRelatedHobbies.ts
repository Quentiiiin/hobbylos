import type { Hobby } from "$lib/types";
import { match } from "./matchmaking";

export function getRelatedHobbies(hobbyA: Hobby, amount: number = 3): Hobby[] {

    const aTags: Record<string, number> = {};
    hobbyA.tags.forEach(t => {
        aTags[t.tag] = t.overlap;
    });

    const matches = match(aTags).filter(m => m.hobby.slug !== hobbyA.slug);



    if (matches.length > amount) matches.length = amount;

    const matchedHobbies: Hobby[] = [];
    matches.forEach(m => { matchedHobbies.push(m.hobby) });
    return matchedHobbies;
}