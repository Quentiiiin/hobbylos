<script>
    import { SITE_FRIENDLY_NAME } from "$lib/constants";
</script>

<footer class=" w-full flex justify-center pb-4">
    <ul class=" flex flex-col justify-center items-center">
        <li>
            <a class=" hover:underline" href="/stats"> Stats </a>
        </li>
        <li>
            <a class=" hover:underline" href="https://quentins.space">
                made by Quentin
            </a>
        </li>
        <li>
            <span>
                © {SITE_FRIENDLY_NAME}
                {new Date().getFullYear()}
            </span>
        </li>
    </ul>
</footer>
