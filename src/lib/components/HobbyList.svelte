<script lang="ts">
    import type { Hobby } from "$lib/types";

    const {hobbies}: {hobbies: Hobby[]} = $props();
</script>

<ul class="flex flex-col w-1/2 p-20">
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