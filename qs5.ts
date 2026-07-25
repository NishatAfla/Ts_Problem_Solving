// Count Occurrence of Each Number

const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

const count: Record<number, number> = {};

for (const number of numbers) {

    if (count[number]) {
        count[number]++;
    } else {
        count[number] = 1;
    }

}

for (const key in count) {
    console.log(`${key}: ${count[key]}`);
}