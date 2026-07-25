"use strict";
// Difference Between Maximum and Second Maximum
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [11, 7, 2, 15, 6];
// Sort in descending 
const sortedNumbers = [...numbers].sort((a, b) => b - a);
const maximum = sortedNumbers[0];
const secondMaximum = sortedNumbers[1];
const difference = maximum - secondMaximum;
console.log("Maximum:", maximum);
console.log("Second Maximum:", secondMaximum);
console.log("Difference:", difference);
//# sourceMappingURL=qs1.js.map