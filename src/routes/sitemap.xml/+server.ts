import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { getAllTags, hobbies } from '$lib/data';

export const GET: RequestHandler = async () => {
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