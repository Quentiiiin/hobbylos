<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import GridBackground from "$lib/components/GridBackground.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import { BASE_URL, SITE_FRIENDLY_NAME } from "$lib/constants";
    import '@fontsource-variable/lexend';
    import "../app.css";
    import { page } from '$app/state';

    let { children } = $props();
</script>

<svelte:head>
    <title>
        {SITE_FRIENDLY_NAME}
    </title>
    <link rel="canonical" href="{BASE_URL}{page.url.pathname}">
</svelte:head>

<GridBackground />
<Navbar />
<main class=" w-screen flex justify-center min-h-screen">
    {@render children()}
</main>
<Footer />