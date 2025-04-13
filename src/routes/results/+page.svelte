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
    <ol class=" max-w-2xl">
        {#each data.results as result, i}
        {#if result.matchRate > 0}
            <li>
                <ResultCard result={result} extended={i < 1} />
            </li>
            {/if}
        {/each}
    </ol>
</div>
{/if}

