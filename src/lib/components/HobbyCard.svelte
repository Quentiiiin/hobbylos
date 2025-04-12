<script lang="ts">
    import type { Hobby } from "$lib/types";
  
    const { hobby }: { hobby: Hobby } = $props();
  </script>
  
  <div class="bg-yellow-200 p-6 border-2 border-black shadow-[4px_4px_0px_black] m-10 rounded-md">
    <h2 class="text-4xl font-bold mb-4 leading-tight tracking-wider">
      {hobby.name}
    </h2>
    <ul class="flex space-x-2 mb-4">
      {#each hobby.tags as tag}
        <li class="group w-min">
          <a
            href={`/tags/${tag.tag}`}
            class="bg-blue-300 rounded-md text-black border-2 border-black shadow-[2px_2px_0px_black] px-3 py-1 uppercase text-sm font-bold hover:bg-blue-400 transition-colors duration-200"
          >
            {tag.tag}
          </a>
          <span
            class="px-1 group-hover:visible invisible text-xs font-semibold bg-gray-100 border border-black shadow-[1px_1px_0px_black]"
          >
            {tag.overlap}%
          </span>
        </li>
      {/each}
    </ul>
    <p class="text-lg leading-relaxed mb-6">
      {hobby.description}
    </p>
    <h3 class="text-2xl font-semibold mb-2 uppercase tracking-wide">
      Resources:
    </h3>
    <ul class="list-disc pl-5">
      {#each hobby.resources as resource}
        <li class="mb-1">
          <a
            class="text-blue-600 hover:underline font-medium"
            href={resource.url}
            rel="nofollow"
          >
            {resource.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>