<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
import GridBackground from "$lib/components/GridBackground.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>
        {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

<GridBackground />
<Navbar />
<main class=" w-screen flex justify-center min-h-screen">
    {@render children()}
</main>
<Footer />