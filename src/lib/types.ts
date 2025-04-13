import z from "zod"

export type QuestionPrompt = {
    question: Question,
    chosenAnswer?: number
}

export type Result = {
    hobby: Hobby,
    matchRate: number,
}

export const QuestionSchema = z.object({
    text: z.string().min(2).max(100).describe('the question that is given to the user'),
    answers: z.array(
        z.object({
            text: z.string().min(2).max(50).describe('the question answer that the user sees'),
            tags: z.array(z.string().min(2).max(20)).describe('the tags that match this answer')
        })),
});

export const HobbySchema = z.object({
    name: z.string().min(2).describe('the name of the hobby'),
    slug: z.string().lowercase().min(2).describe('a url slug for the hobby page, dashes instead of whitespaces'),
    tags: z.array(z.object({
        tag: z.string().min(2).max(20).describe('the tag itself'),
        overlap: z.number().min(0.1).max(1).describe('the amount of overlap the hobby has with the tag')
    })).describe('tags that add context to a hobby to allow them to be filtered'),
    description: z.string().max(1000).describe('a description for the hobby'),
    resources: z.array(z.object({ 
        name: z.string().min(2).describe('the name of the resource'),
        url: z.url().describe('the url of the resource') })).describe('resources that help you get started with your hobby')
});

export type Hobby = z.infer<typeof HobbySchema>;

export type Question = z.infer<typeof QuestionSchema>;