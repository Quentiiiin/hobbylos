<script lang="ts">
    const links = [{name: 'ALL HOBBIES', path: '/mighty-index'}, {name: 'ALL TAGS', path: '/tags'}];
</script>

<nav class=" select-none fixed m-1 flex items-center bg-amber-300 border-2 border-black rounded-md px-1 shadow-[4px_4px_0px_0px_rgba(0,0,0)] [writing-mode:vertical-lr] h-[98vh]">
    <h1 class=" font-black text-3xl italic">
        <a href="/">
          HOBBYLOS
        </a>
    </h1>
    <div class=" p-2 font-bold text-xl">
        {#each links as link}
            <a class=" p-1 underline decoration-3" href={link.path}>
                {link.name}
            </a>
        {/each}
    </div>
</nav>