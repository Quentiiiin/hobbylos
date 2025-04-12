import { sleep } from "bun";

export async function transform() {
    const path = './llm-out.json';
    const input = Bun.file(path);
    const abc: any[] = await input.json();

    abc.forEach(async (e) => {
        const s = e.slug;
        if(s) {
            await Bun.write('src/content/hobby/' + s + '.json', JSON.stringify(e));
        }
    });
    await sleep(2000);
}

await transform();