<script>
    import { getAllTags, hobbies, questions } from "$lib/data";

    const {data} = $props();

</script>
<div class=" mt-20 bg-red-300 h-min border-2 border-black shadow-[4px_4px_0px_black] m-10 rounded-md px-20 py-8 flex flex-col">
    <h2 class=" text-4xl font-bold w-full text-center">
        STATS
    </h2>
    <ul class=" text-xl mt-10">
        <li>
            {hobbies.length} Hobbies
        </li>
        <li>
            {getAllTags().length} Tags
        </li>
        <li>
            {questions.length} Questions
        </li>
        <li>
            Version: {data.branch}-{data.HASH.slice(0,7)}
        </li>
    </ul>
</div>