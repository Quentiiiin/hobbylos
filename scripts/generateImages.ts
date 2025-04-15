import { BunFile, write } from "bun";
import { HobbySchema } from '../src/lib/types.ts';
import { readdir } from "node:fs/promises";

const imageGenerator = 'https://silent-unit-7682.quentins-arbeitssklaven.workers.dev/';

const imagePath = 'src/lib/assets/images/';

const hobbyPath = 'src/content/hobby/';

export async function processHobbyFile(file: BunFile, overwrite: boolean) {
    const json = await file.json();
    const data = HobbySchema.parse(json);

    const filename = `${data.slug}.png`;
    const location = imagePath + filename;

    if (!overwrite && await Bun.file(location).exists()) {
        return;
    }

    const res = await fetch(`${imageGenerator}?hobby=${data.name}`);
    if (!res.ok) return;

    const blob = await res.blob();
    await write(location, blob);
}


const files = await readdir(hobbyPath);

for (let i = 0; i < files.length; i++) {
    const fi = Bun.file(hobbyPath + files[i]);
    await processHobbyFile(fi, false);
    console.log(`${i + 1} done`);
}