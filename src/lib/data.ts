import { HobbySchema, QuestionSchema, type Hobby, type Question, type QuestionPrompt, type Result } from "./types";

const hobbyFiles = import.meta.glob('../content/hobby/*.json', { eager: true });
const questionFiles = import.meta.glob('../content/question/*.json', { eager: true });

export const hobbies: Hobby[] = [];

export const questions: Question[] = [];

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

for(const q in questionFiles) {
    const questionMaybe = questionFiles[q];
    const abc = JSON.parse(JSON.stringify(questionMaybe)); // fucking weird bs required to make zod work
    const parseResult = QuestionSchema.safeParse(abc);
    if(parseResult.success) {
        questions.push(parseResult.data);
    } else {
        console.error('Error reading question file:', q, parseResult.error);
    }
}

export function findHobbyBySlug(slug: string) {
    return hobbies.find((h) => h.slug === slug);
}

export function findHobbiesByTag(tag: string) {
    return hobbies.filter((h) => h.tags.some(t => t.tag === tag));
}

export function getAllTags() {
    const tags: string[] = [];
    hobbies.forEach((h) => {
        h.tags.forEach((t) => {
            if(!tags.includes(t.tag)) tags.push(t.tag);
        });
    });
    return tags;
}

export function match(inputTags: string[]): Result[] {
    const results: Result[] = [];

    for (const hobby of hobbies) {
        const overlap = hobby.tags.filter(tag => inputTags.includes(tag.tag)).length;
        const totalTags = hobby.tags.length;
        const percent = totalTags === 0 ? 0 : (overlap / totalTags) * 100;

        results.push({
            hobby: hobby,
            matchRate: Math.round(percent)
        });
    }
    return results;
}