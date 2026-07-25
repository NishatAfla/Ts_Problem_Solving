"use strict";
// Find the Missing Number
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [0, 1, 2, 4, 5];
const n = Math.max(...numbers);
//  expected sum
const expectedSum = (n * (n + 1)) / 2;
//  actual sum
let actualSum = 0;
for (const number of numbers) {
    actualSum += number;
}
const missingNumber = expectedSum - actualSum;
console.log("Missing number:", missingNumber);
//# sourceMappingURL=qs4.js.map