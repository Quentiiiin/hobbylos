export function stringToSeed(str: string): number {
    let seed = 0;
    for (let i = 0; i < str.length; i++) {
        seed = (seed * 31 + str.charCodeAt(i)) >>> 0; // Multiply by prime and add char code, unsigned right shift
    }
    return seed;
}

export function seededRandom(seed: number): () => number {
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 32);

    let state = seed;

    return function (): number {
        state = (a * state + c) % m;
        return state / m;
    };
}

export function selectRandomWithSeed<T>(arr: T[], seedString: string): T | undefined {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    const seed = stringToSeed(seedString);
    const rng = seededRandom(seed);
    const randomIndex = Math.floor(rng() * arr.length);
    return arr[randomIndex];
}