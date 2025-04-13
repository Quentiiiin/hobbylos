<script lang="ts">
    import Prompt from "$lib/components/Prompt.svelte";
    import { questions } from "$lib/data";
    import type { QuestionPrompt } from "$lib/types";
    const prompts: QuestionPrompt[] = $state([]);

    questions.forEach((q) => {
        prompts.push({ question: q });
        shuffleArray(prompts);
        prompts.length = 5;
    });

    function shuffleArray<T>(arr: T[]) {
        arr.sort(() => Math.random() - 0.5);
    }

    const resultParams = $derived.by(() => {
        let paramText = "";
        const chosenTags: Record<string, number> = {};
        prompts.forEach((q) => {
            if (q.chosenAnswer !== undefined) {
                const answerTags = q.question.answers[q.chosenAnswer].tags;
                answerTags.forEach((t) => {
                    if (chosenTags[t]) {
                        chosenTags[t] = chosenTags[t] + 1;
                    } else {
                        chosenTags[t] = 1;
                    }
                });
            }
        });
        for(const t in chosenTags) {
            paramText =
            `${paramText}${t}=${chosenTags[t]}&`;
        }

        return paramText.slice(0, -1);
    });

    let currentPrompt = $state(0);
</script>

<div class="  h-screen flex items-center justify-center">
    <ul class="">
        <div class=" flex">
            {#each prompts as prompt}
                {#if prompts[currentPrompt] === prompt}
                    <li class="py-4">
                        <Prompt
                            {prompt}
                            changeAnswer={(index) => {
                                prompt.chosenAnswer = index;
                                if (
                                    index !== undefined &&
                                    currentPrompt + 1 < prompts.length
                                ) {
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
                    class="mt-6 mx-2 bg-gray-300 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                    onclick={() => currentPrompt--}
                >
                    Prev
                </button>
            {/if}
            {#if currentPrompt + 1 < prompts.length}
                <button
                    class="mt-6 mx-2 bg-gray-300 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                    onclick={() => currentPrompt++}
                >
                    Skip
                </button>
            {/if}
        </li>
        <li class=" flex items-center justify-center">
            {#if currentPrompt + 1 === prompts.length}
                <a
                    href={"results?" + resultParams}
                    class="mt-6 bg-red-500 border-2 font-black text-xl border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                >
                    RESULT
                </a>
            {/if}
        </li>
    </ul>
</div>
