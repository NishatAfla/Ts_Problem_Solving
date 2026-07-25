// Print All Permutations of a String

const text: string = "cat";

const permutations: string[] = [];

function generatePermutation(current: string, remaining: string): void {

    if (remaining.length === 0) {
        permutations.push(current);
        return;
    }

    for (let i = 0; i < remaining.length; i++) {

        generatePermutation(
            current + remaining[i],
            remaining.slice(0, i) + remaining.slice(i + 1)
        );

    }

}

generatePermutation("", text);

console.log("Permutations:");

for (const word of permutations) {
    console.log(word);
}

console.log("Total permutations:", permutations.length);