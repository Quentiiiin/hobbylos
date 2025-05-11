import * as sitemap from 'super-sitemap';
import { getAllTags, hobbies } from '$lib/data';

export const prerender = true;

export async function GET(): Promise<Response> {
  return await sitemap.response({
    origin: 'https://hobbylos.quentins.space',
    excludeRoutePatterns: [
      '^/results.*',
      '^/prompts.*'
    ],
    paramValues: {
        '/hobby/[slug]': hobbies.map((v) => v.slug),
        '/tags/[slug]': getAllTags()
    }
  });
};