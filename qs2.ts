// Sum of Prime Numbers
const numbers: number[] = [11, 15, 2, 7, 6];

// Function to check if a number is prime
function isPrime(num: number): boolean {

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