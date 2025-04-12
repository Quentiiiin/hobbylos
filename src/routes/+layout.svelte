<script lang="ts">
    import GridBackground from "$lib/components/GridBackground.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<GridBackground />
<Navbar />
<main class=" w-screen flex justify-center">
    {@render children()}
</main>
