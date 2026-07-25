"use strict";
// Return Repetitive Elements
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const count = {};
// Count occurrences
for (const number of numbers) {
    if (count[number]) {
        count[number]++;
    }
    else {
        count[number] = 1;
    }
}
// Stored duplicate numbers
const repetitiveElements = [];
for (const key in count) {
    const value = count[key];
    if (value > 1) {
        repetitiveElements.push(Number(key));
    }
}
console.log(repetitiveElements);
//# sourceMappingURL=qs6.js.map