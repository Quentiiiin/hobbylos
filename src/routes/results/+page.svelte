<script lang="ts">
    import ResultCard from '$lib/components/ResultCard.svelte';

    const { data } = $props();
</script>

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
