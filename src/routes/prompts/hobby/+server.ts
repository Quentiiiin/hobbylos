import type { RequestHandler } from './$types';
import { getAllTags, hobbies } from '$lib/data';

export const GET: RequestHandler = () => {

    const allTags = getAllTags();
    const allHobbies: string[] = [];
    hobbies.forEach(h => allHobbies.push(h.name));

    const introduction = 'i am creating a hobby finding app that first asks you a few questions about your interests and then finds the most fitting hobbies. each possible answer has tags that are associated to them that are then selected when you give this answer. then the tags are used to find the hobbies with the most overlapping tags. the goal is not to have one tag describe a hobby perfectly but multiple tags together doing it. the tags should be lowercase and have dashes instead of withespaces.';

    const instruction = `now generate 50 more hobbies that follow this schema:

export const HobbySchema = z.object({

    name: z.string().min(2).max(20).describe('the name of the hobby'),

    slug: z.string().lowercase().min(2).max(25).describe('a url slug for the hobby page, dashes instead of whitespaces'),

    tags: z.array(z.object({

        tag: z.string().min(2).max(20).describe('the tag itself'),

        overlap: z.number().min(0.1).max(1).describe('the amount of overlap the hobby has with the tag')

    })).describe('tags that add context to a hobby to allow them to be filtered'),

    description: z.string().max(1000).describe('a description for the hobby'),

    resources: z.array(z.object({

        name: z.string().min(2).max(30).describe('the name of the resource'),

        url: z.url().describe('the url of the resource') })).describe('resources that help you get started with your hobby')

});

give them as many of the above tags as possible and set an overlap value for each tag so that the algorithm can decide how much a hobby has to do with each tag.

if you can, add at least 5 resources and if possible subreddits `;



    const prompt = `${introduction} These are the tags: ${JSON.stringify(allTags)} 


    All these hobbies already exist: ${JSON.stringify(allHobbies)}
    
    ${instruction}`;


    return new Response(prompt);
};