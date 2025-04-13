<script lang="ts">
  import type { Hobby } from '$lib/types';
    import Tag from './Tag.svelte';

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

<div class="bg-yellow-200 p-6 border-2 border-black shadow-[4px_4px_0px_black] m-10 rounded-md max-w-2xl mx-2">
  <h2 class="text-4xl font-bold mb-4 leading-tight tracking-wider">
    {hobby.name}
  </h2>

  <ul class="flex flex-wrap gap-2 mb-4">
    {#each visibleTags as tag (tag.tag)}
      <li class="group">
        <Tag name={tag.tag} overlap={tag.overlap} />
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
          rel="noopener nofollow"
        >
          {resource.name}
        </a>
      </li>
    {/each}
  </ul>
</div>