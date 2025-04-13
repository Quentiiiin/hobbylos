<script lang="ts">
    import HobbyCard from "$lib/components/HobbyCard.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants.js";

    const {data} = $props();
</script>

<svelte:head>
    <title>
        {data.hobby?.name} | {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

{#if data.hobby}
<HobbyCard hobby={data.hobby} />
{/if}
