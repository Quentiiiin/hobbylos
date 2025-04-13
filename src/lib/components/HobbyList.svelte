<script lang="ts">
    import type { Hobby } from "$lib/types";

    const {hobbies, title}: {hobbies: Hobby[], title: string} = $props();
</script>

<h2 class=" text-4xl font-bold absolute p-4 pt-14">{title}</h2>
<ul class="flex flex-col md:w-1/2 p-10 pt-24">
    {#each hobbies as hobby, i}
      <li class="border-2 m-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] active:shadow-[1px_1px_0px_black] active:translate-x-[1px] active:translate-y-[1px] rounded-md bg-amber-200 h-min">
        <a
          href="/hobby/{hobby.slug}"
          class="block p-4 text-xl font-sans transition-colors duration-100"
        >
          {hobby.name}
        </a>
      </li>
    {/each}
  </ul>