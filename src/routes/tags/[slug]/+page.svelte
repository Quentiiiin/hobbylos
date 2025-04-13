<script lang="ts">
    import HobbyList from "$lib/components/HobbyList.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants.js";

    const { data } = $props();

    let description = $state("");

    data.hobbies.forEach((h) => {
        if (description.length < 250) {
            description = description + h.name + " ";
        }
    });
</script>

<svelte:head>
    <title>
        {data.tagName} hobbies | {SITE_FRIENDLY_NAME}
    </title>
    <meta name="keywords" content="hobby, {data.tagName}" />
    <meta name="description" content="all hobbies that for the {data.tagName} tag" />
    <meta property="og:title" content="{data.tagName}" />
    <meta property="og:description" content="all hobbies that for the {data.tagName} tag"/>
</svelte:head>

{#if data.hobbies}
    <HobbyList hobbies={data.hobbies} title="all {data.tagName} hobbies" />
{/if}
