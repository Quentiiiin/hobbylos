<script lang="ts">
    import type { QuestionPrompt } from "$lib/types";

    const {
        prompt,
        changeAnswer,
    }: {
        prompt: QuestionPrompt;
        changeAnswer: (index?: number) => void;
    } = $props();

    const colors = ["bg-amber-200", "bg-rose-200", "bg-lime-200", "bg-sky-200"];

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
</script>

<div
    class="{randomColor()} border-2 border-black p-6 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
>
    <p class="text-xl font-bold mb-4">
        {prompt.question.text}
    </p>
    {#if prompt.chosenAnswer !== undefined}
        <button
            onclick={() => changeAnswer(undefined)}
            class=" cursor-pointer mt-4 p-4 border-2 w-full border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0)] bg-white"
        >
            {prompt.question.answers[prompt.chosenAnswer]}
        </button>
    {:else}
        <div class="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {#each prompt.question.answers as answer, index}
                <button
                    class="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-zinc-200 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px] text-center"
                    onclick={() => {
                        changeAnswer(index);
                    }}
                >
                    {answer.text}
                </button>
            {/each}
        </div>
    {/if}
</div>
