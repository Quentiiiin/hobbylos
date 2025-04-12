<script lang="ts">
    import Prompt from "$lib/components/Prompt.svelte";
    import { hobbyFinderQuestions } from "$lib/questions";
    import type { QuestionPrompt } from "$lib/types";
    const questions: QuestionPrompt[] = $state([]);

    hobbyFinderQuestions.forEach((q) => {
        questions.push({ question: q });
    });

    const resultParams = $derived.by(() => {
        let paramText = "";
        questions.forEach((q) => {
            if (q.chosenAnswer !== undefined) {
                paramText =
                    paramText + q.question.answerTags[q.chosenAnswer] + "&";
            }
        });
        return paramText.slice(0, -1);
    });

    let currentPrompt = $state(0);
</script>

<ul class="">
    <div class=" flex">
        {#each questions as question}
            {#if questions[currentPrompt] === question}
                <li class="py-4">
                    <Prompt
                        prompt={question}
                        changeAnswer={(index) => {
                            question.chosenAnswer = index;
                            if (index !== undefined && currentPrompt + 1 < questions.length) {
                                currentPrompt++;
                            }
                        }}
                    />
                </li>
            {/if}
        {/each}
    </div>

    <li class=" flex w-full justify-center items-center">
        {#if currentPrompt > 0}
            <button
                class="mt-6 bg-gray-300 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                onclick={() => currentPrompt--}
            >
                Prev
            </button>
        {/if}
        {#if currentPrompt + 1 < questions.length}
            <button
                class="mt-6 bg-gray-300 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                onclick={() => currentPrompt++}
            >
                Skip
            </button>
        {/if}
    </li>
    <li class="flex w-full justify-center items-center mb-20">
        <a
            href={"results?" + resultParams}
            class="mt-6 bg-red-500 border-2 font-black text-xl border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
        >
            RESULT
        </a>
    </li>
</ul>
