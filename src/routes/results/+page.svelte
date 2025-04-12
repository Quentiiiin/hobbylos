<script lang="ts">
    const { data } = $props();
</script>

<div>
    <ol>
        {#each data.results as result}
            <li>
                {result.hobby.name}
                {result.matchRate}%
            </li>
        {/each}
    </ol>
</div>
