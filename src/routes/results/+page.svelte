<script lang="ts">
    import ResultCard from '$lib/components/ResultCard.svelte';
    import { SITE_FRIENDLY_NAME } from '$lib/constants.js';

    const { data } = $props();
</script>

<svelte:head>
    <title>
        hobbyfinder results | {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

{#if data.results}
<div>
    {#if data.results.some(r => r.matchRate > 0)}
    <ol class=" max-w-2xl">
        {#each data.results as result, i}
        {#if result.matchRate > 0}
            <li>
                <ResultCard result={result} extended={i < 1} />
            </li>
            {/if}
        {/each}
    </ol>
    {:else}
    <div class=" flex-col flex justify-center items-center bg-yellow-200 p-6 border-2 border-black shadow-[4px_4px_0px_black] m-10 rounded-md max-w-2xl mx-auto">
        <h2 class=" text-3xl font-medium">
            No results for your selected questions
        </h2>
        <a href="/" class=" w-min mt-6 bg-green-300 border-2 font-black text-xl border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]">
            Try again?
        </a>
    </div>
    {/if}
</div>
{/if}

