<script lang="ts">
    import HobbyCard from "$lib/components/HobbyCard.svelte";
    import RelatedHobbiesBox from "$lib/components/RelatedHobbiesBox.svelte";
    import { BASE_URL, SITE_FRIENDLY_NAME } from "$lib/constants.js";

    const { data } = $props();

    let keywords = $state("");
    data.hobby?.tags.forEach((t) => {
        keywords = keywords + ", " + t.tag;
    });

    const schema: any = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: data.hobby?.name,
        slug: data.hobby?.slug,
        // svelte-ignore state_referenced_locally
        keywords: keywords,
        description: data.hobby?.description,
        url: `${BASE_URL}/hobby/${data.hobby?.slug}`,
        hasPart: [],
    };

    data.hobby?.resources.forEach((r) => {
        schema.hasPart.push({
            "@type": "WebPage",
            name: r.name,
            url: r.url,
        });
    });
</script>

<svelte:head>
    <title>
        {data.hobby?.name} | {SITE_FRIENDLY_NAME}
    </title>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={data.hobby?.description} />
    <meta property="og:title" content={data.hobby?.name} />
    <meta property="og:description" content={data.hobby?.description} />
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<div class=" flex flex-col">
    {#if data.hobby}
        <HobbyCard hobby={data.hobby} />
        {#if data.relatedHobbies}
            <RelatedHobbiesBox hobbies={data.relatedHobbies} />
        {/if}
    {/if}
</div>
