<script lang="ts">
    import { hobbies } from "$lib/data";
</script>

<ul class=" flex flex-col">
    {#each hobbies as hobby, i}
        <li>
            <a class=" hover:underline" href="/hobby/{hobby.slug}">
                {i}  {hobby.name}
            </a>
        </li>
    {/each}
</ul>
