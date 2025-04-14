<script lang="ts">
    import { goto } from "$app/navigation";
    import Prompt from "$lib/components/Prompt.svelte";
    import { MAX_QUESTIONS, SITE_FRIENDLY_NAME } from "$lib/constants";
    import { getNextQuestion, match } from "$lib/matchmaking/matchmaking";
    import type { QuestionPrompt } from "$lib/types";
    const prompts: QuestionPrompt[] = $state([]);

    function addNewQuestion() {
        const next = getNextQuestion(prompts);
        if (next) prompts.push({ question: next });
    }

    addNewQuestion();

    function nextQuestion() {
        currentPrompt++;
        if (currentPrompt + 1 >= prompts.length) {
            addNewQuestion();
        }
    }

    const chosenTags = $derived.by(() => {
        const tags: Record<string, number> = {};
        prompts.forEach((q) => {
            if (q.chosenAnswer !== undefined) {
                const answerTags = q.question.answers[q.chosenAnswer].tags;
                answerTags.forEach((t) => {
                    if (tags[t]) {
                        tags[t] = tags[t] + 1;
                    } else {
                        tags[t] = 1;
                    }
                });
            }
        });
        return tags;
    });

    const resultParams = $derived.by(() => {
        let paramText = "";
        for (const t in chosenTags) {
            paramText = `${paramText}${t}=${chosenTags[t]}&`;
        }

        return paramText.slice(0, -1);
    });

    let currentPrompt = $state(0);

    const questionAmount = MAX_QUESTIONS;
</script>

<svelte:head>
    <title>
        {SITE_FRIENDLY_NAME} | A Hobby Finding App
    </title>
    <meta name="keywords" content="hobby, hobby finder" />
    <meta name="description" content="an interactive hobby finding app" />
    <meta property="og:title" content={SITE_FRIENDLY_NAME} />
    <meta
        property="og:description"
        content="an interactive hobby finding app"
    />
</svelte:head>

<!-- <enhanced:img class=" absolute h-50 w-auto" src="$lib/assets/text.png" alt="Find your new Hobby here ➞" /> -->
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
                                    currentPrompt + 1 < questionAmount
                                ) {
                                    nextQuestion();
                                }
                                if (currentPrompt + 1 === questionAmount) {
                                    goto("results?" + resultParams);
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
            {#if currentPrompt + 1 < questionAmount}
                <button
                    class="mt-6 mx-2 bg-gray-300 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                    onclick={nextQuestion}
                >
                    Skip
                </button>
            {/if}
        </li>
        <li class=" flex items-center justify-center">
            {#if currentPrompt + 1 === questionAmount}
                <a
                    href={"results?" + resultParams}
                    class="mt-6 bg-green-200 border-2 font-black text-xl border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0)] px-4 py-2 cursor-pointer hover:bg-gray-400 active:shadow-[1px_1px_0px_0px_rgba(0,0,0)] active:translate-x-[3px] active:translate-y-[3px]"
                >
                    RESULT
                </a>
            {/if}
        </li>
    </ul>
</div>
