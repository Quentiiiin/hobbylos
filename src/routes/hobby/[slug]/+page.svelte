<script lang="ts">
    import HobbyCard from "$lib/components/HobbyCard.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants.js";

    const {data} = $props();

    let keywords = $state("");
    data.hobby?.tags.forEach(t => {
        keywords = keywords + ", " + t.tag;
    });

</script>

<svelte:head>
    <title>
        {data.hobby?.name} | {SITE_FRIENDLY_NAME}
    </title>
    <meta name="keywords" content={keywords}>
    <meta name="description" content={data.hobby?.description}>
</svelte:head>

{#if data.hobby}
<HobbyCard hobby={data.hobby} />
{/if}
