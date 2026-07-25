"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sum of Prime Numbers
const numbers = [11, 15, 2, 7, 6];
// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let sum = 0;
for (const number of numbers) {
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Sum of prime numbers:", sum);
//# sourceMappingURL=qs2.js.map