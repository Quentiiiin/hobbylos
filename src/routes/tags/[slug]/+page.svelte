<script lang="ts">
    const {data} = $props();
</script>

{#if data.hobbies}
<ul>
    {#each data.hobbies as hobby}
        <li>
            <a class=" hover:underline" href="/hobby/{hobby.slug}">
                {hobby.name}
            </a>
        </li>
    {/each}
</ul>
{/if}
