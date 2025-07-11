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

    const imageModules: Record<string, any> = import.meta.glob(
      "$lib/assets/images/*.png",
      {
        eager: true,
        query: {
          enhanced: true,
        },
      },
    );
  
    let imageSrc: any = $state();
    Object.entries(imageModules).forEach((i) => {
      if (data.hobby && i[0].replaceAll(".png", "").endsWith(data.hobby.slug)) {
        imageSrc = i[1].default;
      }
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
        {#key data.hobby}
            <HobbyCard hobby={data.hobby} imageSrc={imageSrc} />
        {/key}
        {#if data.relatedHobbies}
            <RelatedHobbiesBox hobbies={data.relatedHobbies} />
        {/if}
    {/if}
</div>
