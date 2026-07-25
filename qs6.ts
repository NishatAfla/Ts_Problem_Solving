// Return Repetitive Elements

const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

const count: Record<number, number> = {};

// Count occurrences
for (const number of numbers) {

    if (count[number]) {
        count[number]++;
    } else {
        count[number] = 1;
    }

}

// Stored duplicate numbers
const repetitiveElements: number[] = [];

for (const key in count) {

    const value = count[key]!;

    if (value > 1) {
        repetitiveElements.push(Number(key));
    }

}

console.log(repetitiveElements);