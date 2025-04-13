<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import {  getAllTags } from "$lib/data";


</script>

<ul class=" flex flex-wrap p-20 w-1/2">
    {#each getAllTags() as tag}
        <li class=" p-1">
            <Tag name={tag} />
        </li>
    {/each}
</ul>