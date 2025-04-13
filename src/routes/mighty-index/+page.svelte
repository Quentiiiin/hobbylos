<script lang="ts">
    import HobbyList from "$lib/components/HobbyList.svelte";
    import { SITE_FRIENDLY_NAME } from "$lib/constants";
    import { hobbies } from "$lib/data";
</script>

<svelte:head>
    <title>
        all hobbies | {SITE_FRIENDLY_NAME}
    </title>
</svelte:head>

<HobbyList {hobbies} title="all hobbies" />
