<script lang="ts">
    import type { Result } from "$lib/types";
    import Tag from "./Tag.svelte";

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
    class="bg-fuchsia-300 m-4 p-4 md:p-10 rounded-md shadow-[4px_4px_0px_black] border-2 border-black w-[90vw] md:w-auto"
>
    <div class="flex justify-between items-center mb-2">
        <a href="/hobby/{result.hobby.slug}">
            <h3
                class={`font-bold hover:underline uppercase tracking-wider ${
                    extended ? "md:text-4xl text-xl leading-none" : "text-xl"
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
              <li class="group">
                <Tag name={tag.tag} overlap={tag.overlap} />
              </li>
            {/each}
          </ul>
    {/if}
</div>
