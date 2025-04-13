<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants";
    import {  getAllTags } from "$lib/data";


</script>

<svelte:head>
    <title>
       all tags | {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

<ul class=" flex flex-wrap p-20 w-1/2">
    {#each getAllTags() as tag}
        <li class=" p-1">
            <Tag name={tag} />
        </li>
    {/each}
</ul>