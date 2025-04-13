import { ALREADY_KNOWN_TAG_PENALTY, POTENTIAL_HOBBY_TAG_REWARD } from "./constants";
import { hobbies, questions } from "./data";
import type { Hobby, Question, QuestionPrompt, Result } from "./types";

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

    if (results.length > 10) results.length = 10;

    return results;
}


export function getNextQuestion(previousPrompts: QuestionPrompt[]): Question | undefined {


    const previousTags: string[] = [];
    const previousQuestions: Question[] = [];

    previousPrompts.forEach(pp => {
        if(pp.chosenAnswer) {
            const a = pp.question.answers[pp.chosenAnswer];
            a.tags.forEach(t => {
                if(!previousTags.includes(t)) previousTags.push(t);
            });
        }
        previousQuestions.push(pp.question);
    });


    const potentialHobbies: Hobby[] = [];

    // step 1: filter potential hobbies
    hobbies.forEach(h => {
        if (h.tags.some(tag => previousTags.includes(tag.tag)) || previousTags.length === 0) {
            if (!potentialHobbies.find(ph => ph.name === h.name)) { // Assuming Hobby has a 'name' property for unique identification
                potentialHobbies.push(h);
            }
        }
    });

    // step 2 & 3: question scoring
    const unaskedQuestions = questions.filter(q => !previousQuestions.some(pq => pq.text === q.text));
    const questionMap = new Map<Question, number>();

    unaskedQuestions.forEach(q => {
        let score = 0;
        let penalty = 0;

        q.answers.forEach(a => {
            a.tags.forEach(tag => {
                if (previousTags.includes(tag)) {
                    penalty += ALREADY_KNOWN_TAG_PENALTY; // Penalize already known tags
                } else {
                    // Award points if this tag is present in potential hobbies
                    potentialHobbies.forEach(ph => {
                        if (ph.tags.some(t => t.tag === tag)) {
                            score += POTENTIAL_HOBBY_TAG_REWARD;
                        }
                    });
                }
            });
        });

        // Subtract the penalty for already known tags from the score
        questionMap.set(q, score - penalty);
    });

    // step 4: select the question with the highest score
    let bestQuestion: Question | undefined = undefined;
    let maxScore = -Infinity;

    questionMap.forEach((score, question) => {
        if (score > maxScore) {
            maxScore = score;
            bestQuestion = question;
        }
    });

    return bestQuestion;
}