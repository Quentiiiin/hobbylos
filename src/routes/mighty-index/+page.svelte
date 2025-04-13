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

<h2 class=" text-4xl font-bold absolute p-4">all hobbies</h2>
<HobbyList {hobbies} />
