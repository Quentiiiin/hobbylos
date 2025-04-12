<script lang="ts">
    import HobbyCard from "$lib/components/HobbyCard.svelte";

    const {data} = $props();
</script>

{#if data.hobby}
<HobbyCard hobby={data.hobby} />
{/if}
