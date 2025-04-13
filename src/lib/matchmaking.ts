import { hobbies } from "./data";
import type { Result } from "./types";

export function match(inputTags: Record<string, number>): Result[] {
    const results: Result[] = [];

    const totalInputImportance = Object.values(inputTags).reduce((sum, value) => sum + value, 0);

    if (totalInputImportance === 0) {
        return hobbies.map(hobby => ({
            hobby: hobby,
            matchRate: 0
        }));
    }

    for (const hobby of hobbies) {
        let weightedScore = 0;

        for (const hobbyTag of hobby.tags) {
            const inputImportance = inputTags[hobbyTag.tag];
            if (inputImportance !== undefined && inputImportance > 0) {
                // Multiply input tag importance by the overlap of this tag in the hobby
                weightedScore += inputImportance * hobbyTag.overlap;
            }
        }

        const percent = (weightedScore / totalInputImportance) * 100;

        results.push({
            hobby: hobby,
            matchRate: Math.round(percent)
        });
    }

    results.sort((a, b) => b.matchRate - a.matchRate);

    if(results.length > 10) results.length = 10;

    return results;
}
