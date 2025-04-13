<script lang="ts">
    import type { Result } from "$lib/types";

    const { result, extended }: { result: Result; extended: boolean } =
        $props();

    const initialTagCount = 5;

    const sortedTags = $derived(
        result.hobby.tags.slice().sort((a, b) => b.overlap - a.overlap),
    );

    const visibleTags = $derived(
        sortedTags.slice(0, initialTagCount),
    );
</script>

<div
    class="bg-fuchsia-300 m-2 p-4 rounded-md shadow-[4px_4px_0px_black] border-2 border-black w-full"
>
    <div class="flex justify-between items-center mb-2">
        <a href="/hobby/{result.hobby.slug}">
            <h3
                class={`font-bold hover:underline uppercase tracking-wider ${
                    extended ? "text-4xl leading-none" : "text-xl"
                }`}
            >
                {result.hobby.name}
            </h3>
        </a>
        <span
            class="font-black text-xl shadow-[2px_2px_0px_black] bg-white px-2 py-1 rounded"
        >
            {result.matchRate}%
        </span>
    </div>
    {#if extended}
        <p class="text-lg font-medium leading-relaxed mb-3">
            {result.hobby.description}
        </p>
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
                  class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 group-hover:opacity-100 opacity-0 invisible group-hover:visible transition-opacity duration-200 text-xs font-semibold bg-gray-100 border border-black shadow-[1px_1px_0px_black] rounded-sm whitespace-nowrap"
                >
                  Overlap: {(tag.overlap * 100).toFixed(0)}%
                </span>
              </li>
            {/each}
          </ul>
    {/if}
</div>
