"use strict";
// Print All Permutations of a String
Object.defineProperty(exports, "__esModule", { value: true });
const text = "cat";
const permutations = [];
function generatePermutation(current, remaining) {
    if (remaining.length === 0) {
        permutations.push(current);
        return;
    }
    for (let i = 0; i < remaining.length; i++) {
        generatePermutation(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
}
generatePermutation("", text);
console.log("Permutations:");
for (const word of permutations) {
    console.log(word);
}
console.log("Total permutations:", permutations.length);
//# sourceMappingURL=qs8.js.map