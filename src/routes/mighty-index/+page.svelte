<script lang="ts">
    import { hobbies } from "$lib/data";
</script>

<ul class=" flex flex-col">
    {#each hobbies as hobby, i}
        <li>
            <a class=" hover:underline" href="/hobby/{hobby.slug}">
                {i}  {hobby.name}
            </a>
            [
            {#each hobby.tags as t}
                <a class=" px-1 hover:underline" href="/tags/{t}">
                    {t}
                </a>
            {/each}
            ]
            {#each hobby.resources as r}
                <a href={r.url} rel="nofollow">
                    {r.name}
                </a>
            {/each}
        </li>
    {/each}
</ul>
