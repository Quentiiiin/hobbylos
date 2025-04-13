<script lang="ts">
    import HobbyList from "$lib/components/HobbyList.svelte";

    const { data } = $props();
</script>

{#if data.hobbies}
    <HobbyList hobbies={data.hobbies} />
{/if}
