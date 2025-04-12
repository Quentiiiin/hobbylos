<script lang="ts">
    import { findHobbiesByTag, getAllTags } from "$lib/data";


</script>

<ul>
    {#each getAllTags() as tag}
        <li>
            <a class=" hover:underline" href="/tags/{tag}">
                {tag} {findHobbiesByTag(tag).length}
            </a>
        </li>
    {/each}
</ul>