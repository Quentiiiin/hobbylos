import { hobbies } from "./data";
import type { Result } from "./types";

export function match(inputTags: Record<string, number>): Result[] {
    const results: Result[] = [];

    // 1. Calculate the total possible score based on the sum of importance values in inputTags.
    // This represents the maximum possible weighted score if a hobby matched all input tags.
    const totalInputImportance = Object.values(inputTags).reduce((sum, value) => sum + value, 0);

    // Handle the edge case where inputTags is empty or all values are zero.
    if (totalInputImportance === 0) {
        // If no importance is defined, all weighted matches are effectively 0%.
        // You could alternatively return an empty array or fall back to the old count-based method.
        // Returning 0% for all seems consistent with the weighting logic.
        return hobbies.map(hobby => ({
            hobby: hobby,
            matchRate: 0
        }));
    }

    // 2. Iterate through each hobby to calculate its weighted match score.
    for (const hobby of hobbies) {
        let weightedScore = 0;

        // 2a. Sum the importance of the tags that overlap between the hobby and the input.
        for (const hobbyTag of hobby.tags) {
            // Check if the hobby's tag exists as a key in the inputTags object.
            if (inputTags.hasOwnProperty(hobbyTag.tag)) {
                // Alternative check: if (hobbyTag.tag in inputTags)
                // If it matches, add the importance value of that tag from inputTags to the score.
                weightedScore += inputTags[hobbyTag.tag];
            }
        }

        // 2b. Calculate the match rate.
        // This is the hobby's weighted score as a percentage of the total possible input importance.
        const percent = (weightedScore / totalInputImportance) * 100;

        // 2c. Store the result with the hobby and the rounded percentage match rate.
        results.push({
            hobby: hobby,
            // Round the percentage to the nearest whole number.
            matchRate: Math.round(percent)
        });
    }

    // 3. Optional: Sort the results so the best matches appear first.
    results.sort((a, b) => b.matchRate - a.matchRate);

    return results;
}
