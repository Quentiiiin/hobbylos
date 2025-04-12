<script lang="ts">
    const links = [{name: 'ALL HOBBIES', path: '/mighty-index'}, {name: 'ALL TAGS', path: '/tags'}];
</script>

<nav class=" select-none fixed m-1 flex items-center bg-amber-300 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] [writing-mode:vertical-lr]">
    <h1 class=" font-black text-3xl hover:underline">
        <a href="/">
          HOBBYLOS
        </a>
    </h1>
    <div class=" p-2 font-bold text-xl">
        {#each links as link}
            <a class=" p-1 hover:underline" href={link.path}>
                {link.name}
            </a>
        {/each}
    </div>
</nav>