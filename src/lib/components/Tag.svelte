<script lang="ts">
    const { name, overlap }: { name: string; overlap?: number } = $props();
</script>

<a
    href={`/tags/${name}`}
    class="block bg-blue-300 rounded-md text-black border-2 border-black shadow-[2px_2px_0px_black] px-3 py-1 uppercase text-sm font-bold hover:bg-blue-400 transition-colors duration-200 whitespace-nowrap"
>
    {name}
</a>
{#if overlap}
    <span
        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 group-hover:opacity-100 opacity-0 invisible group-hover:visible transition-opacity duration-200 text-xs font-semibold bg-gray-100 border border-black shadow-[1px_1px_0px_black] rounded-sm whitespace-nowrap z-10"
    >
        Overlap: {(overlap * 100).toFixed(0)}%
    </span>
{/if}
