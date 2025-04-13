<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants";
    import { getAllTags } from "$lib/data";
</script>

<svelte:head>
    <title>
        all tags | {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

<h2 class=" text-4xl font-bold absolute p-4 pt-14">all tags</h2>
<ul class="flex md:w-1/2 p-10 pt-24 flex-wrap">
    {#each getAllTags() as tag}
        <li class=" p-1">
            <Tag name={tag} />
        </li>
    {/each}
</ul>
