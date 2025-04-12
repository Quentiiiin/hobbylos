<script lang="ts">
    const { data } = $props();
</script>

<div>
    <ol>
        {#each data.results as result}
        {#if result.matchRate > 0}
            <li>
                {result.hobby.name}
                {result.matchRate}%
            </li>
            {/if}
        {/each}
    </ol>
</div>
