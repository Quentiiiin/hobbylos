import type { RequestHandler } from './$types';
import { getAllTags, questions } from '$lib/data';

export const GET: RequestHandler = () => {

    const allTags = getAllTags();
    const allQuestions: string[] = [];
    questions.forEach(q => allQuestions.push(q.text));

    const introduction = 'i am creating a hobby finding app that first asks you a few questions about your interests and then finds the most fitting hobbies. each possible answer has tags that are associated to them that are then selected when you give this answer. then the tags are used to find the hobbies with the most overlapping tags. the goal is not to have one tag describe a hobby perfectly but multiple tags together doing it. the tags should be lowercase and have dashes instead of withespaces.';

    const instruction = `now generate 20 new unique questions that can be shown to the user using this schema:

export const QuestionSchema = z.object({

    text: z.string().min(2).max(50).describe('the question that is given to the user'),

    answers: z.array(

        z.object({

            text: z.string().min(2).max(20).describe('the question answer that the user sees'),

            tags: z.array(z.string().min(2).max(20)).describe('the tags that match this answer')

        })),

});


every question should have 2 to 5 answers and each answer can have multiple tags assigned to them.`;



    const prompt = `${introduction}
    
    These are the tags: ${JSON.stringify(allTags)} 

    These questions already exist: ${JSON.stringify(allQuestions)}

    ${instruction}`;


    return new Response(prompt);
};