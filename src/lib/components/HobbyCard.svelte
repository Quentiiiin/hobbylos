<script lang="ts">
  import type { Hobby } from '$lib/types';

  const { hobby }: { hobby: Hobby } = $props();

  let showAllTags = $state(false);
  const initialTagCount = 5;

  const sortedTags = $derived(
    hobby.tags.slice().sort((a, b) => b.overlap - a.overlap)
  );

  const visibleTags = $derived(
    showAllTags ? sortedTags : sortedTags.slice(0, initialTagCount)
  );

  function toggleShowTags() {
    showAllTags = !showAllTags;
  }

</script>

<div class="bg-yellow-200 p-6 border-2 border-black shadow-[4px_4px_0px_black] m-10 rounded-md max-w-2xl mx-auto">
  <h2 class="text-4xl font-bold mb-4 leading-tight tracking-wider">
    {hobby.name}
  </h2>

  <ul class="flex flex-wrap gap-2 mb-4">
    {#each visibleTags as tag (tag.tag)}
      <li class="group relative">
        <a
          href={`/tags/${tag.tag}`}
          class="block bg-blue-300 rounded-md text-black border-2 border-black shadow-[2px_2px_0px_black] px-3 py-1 uppercase text-sm font-bold hover:bg-blue-400 transition-colors duration-200 whitespace-nowrap"
        >
          {tag.tag}
        </a>
        <span
          class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 group-hover:opacity-100 opacity-0 invisible group-hover:visible transition-opacity duration-200 text-xs font-semibold bg-gray-100 border border-black shadow-[1px_1px_0px_black] rounded-sm whitespace-nowrap z-10"
        >
          Overlap: {(tag.overlap * 100).toFixed(0)}%
        </span>
      </li>
    {/each}
  </ul>

  {#if hobby.tags.length > initialTagCount}
    <button
      onclick={toggleShowTags}
      class="mt-1 mb-4 block bg-green-300 hover:bg-green-400 active:bg-green-500 px-4 py-1 border-2 border-black shadow-[2px_2px_0px_black] active:shadow-[1px_1px_0px_black] active:translate-x-[1px] active:translate-y-[1px] rounded text-black text-sm font-bold uppercase transition-all duration-150"
    >
      {showAllTags ? `Show Top ${initialTagCount}` : `Show All ${hobby.tags.length} Tags`}
    </button>
  {/if}

  <p class="text-lg leading-relaxed mb-6">
    {hobby.description}
  </p>

  <h3 class="text-2xl font-semibold mb-2 uppercase tracking-wide">
    Resources:
  </h3>
  <ul class="list-disc pl-5 space-y-1">
    {#each hobby.resources as resource}
      <li>
        <a
          class="text-blue-700 hover:text-blue-900 underline font-medium"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {resource.name}
        </a>
      </li>
    {/each}
  </ul>
</div>