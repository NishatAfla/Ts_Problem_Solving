"use strict";
// Count Occurrence of Each Number
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const count = {};
for (const number of numbers) {
    if (count[number]) {
        count[number]++;
    }
    else {
        count[number] = 1;
    }
}
for (const key in count) {
    console.log(`${key}: ${count[key]}`);
}
//# sourceMappingURL=qs5.js.map