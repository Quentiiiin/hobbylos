<script lang="ts">
    import HobbyList from "$lib/components/HobbyList.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants.js";

    const { data } = $props();
</script>

<svelte:head>
    <title>
        {data.tagName} hobbies | {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

{#if data.hobbies}
    <HobbyList hobbies={data.hobbies} title="all {data.tagName} hobbies" />
{/if}
