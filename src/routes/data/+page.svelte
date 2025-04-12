<script>

    import { getAllTags, hobbies } from "$lib/data";

</script>
<div class=" bg-fuchsia-300">
    {JSON.stringify(hobbies)}
</div>

<div class=" bg-amber-200">
    {JSON.stringify(getAllTags())}
</div>