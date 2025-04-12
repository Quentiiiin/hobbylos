<script lang="ts">
    import ResultCard from '$lib/components/ResultCard.svelte';

    const { data } = $props();
</script>

<div>
    <ol>
        {#each data.results as result, i}
        {#if result.matchRate > 0}
            <li>
                <ResultCard result={result} extended={true} />
            </li>
            {/if}
        {/each}
    </ol>
</div>
