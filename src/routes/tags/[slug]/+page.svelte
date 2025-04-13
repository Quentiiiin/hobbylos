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

<h2 class=" text-4xl font-bold absolute p-4">
    all <span class=" text-amber-500">{data.tagName}</span> hobbies
</h2>
{#if data.hobbies}
    <HobbyList hobbies={data.hobbies} />
{/if}
