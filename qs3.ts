// Sum of Unique Elements After Removing Duplicates

const numbers: number[] = [11, 7, 7, 11, 2, 15, 6, 6];

// Remove duplicates
const uniqueNumbers = [...new Set(numbers)];

let sum = 0;

for (const number of uniqueNumbers) {
    sum += number;
}

console.log("Unique numbers:", uniqueNumbers);
console.log("Sum:", sum);