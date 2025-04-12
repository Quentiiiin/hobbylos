<script lang="ts">
    import type { Result } from "$lib/types";

    const { result, extended }: { result: Result; extended: boolean } =
        $props();
</script>

<div
    class="bg-fuchsia-300 m-2 p-4 rounded-md shadow-[4px_4px_0px_black] border-2 border-black"
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
        <ul class="flex space-x-2">
            {#each result.hobby.tags as tag}
                <li
                    class="bg-yellow-200 border-2 border-black rounded-sm shadow-[2px_2px_0px_black]"
                >
                    <a
                        class="px-2 py-1 text-sm font-bold hover:underline"
                        href="/tags/{tag.tag}"
                    >
                        {tag.tag}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</div>
