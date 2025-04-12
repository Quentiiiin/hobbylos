<script lang="ts">
    const {data} = $props();
</script>

{#if data.hobby}
<div>
    <h1>
        {data.hobby.name}
    </h1>
    <p>
        {data.hobby.tags}
    </p>
</div>
{/if}
