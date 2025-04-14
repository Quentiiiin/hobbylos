<script lang="ts">
    import type { Hobby } from "$lib/types";

    const {hobbies}: {hobbies: Hobby[]} = $props();
    
</script>

<div class=" bg-blue-300 p-2 border-2 border-black shadow-[4px_4px_0px_black] rounded-md max-w-2xl mx-2">
    <h3 class=" text-2xl font-bold">
        You may also like
    </h3>
    <ul class=" flex flex-col md:flex-row">
        {#each hobbies as hobby}
        
        <li class=" bg-amber-200 p-1 m-2 md:w-full border-2 border-black shadow-[4px_4px_0px_black] rounded-md transition-colors duration-200 hover:bg-amber-300">
            <a href="/hobby/{hobby.slug}">
                <h4 class=" text-xl font-semibold">
                    {hobby.name}
                </h4>
            </a>
        </li>
    {/each}
    </ul>
</div>