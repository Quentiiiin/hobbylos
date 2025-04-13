<script lang="ts">
    import HobbyList from "$lib/components/HobbyList.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants";
    import { hobbies } from "$lib/data";


</script>

<svelte:head>
    <title>
        all hobbies | {SITE_FRIENDLY_NAME}
    </title>
    <meta name="keywords" content="hobby">
    <meta name="description" content="all hobbies on the site">
    <meta property="og:title" content="all hobbies">
    <meta property="og:description" content="all hobbies on the site">
</svelte:head>

<HobbyList {hobbies} title="all hobbies" />
