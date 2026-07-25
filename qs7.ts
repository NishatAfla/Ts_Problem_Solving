// Print Unique Characters from a String

const text: string = "abcaabbcc";

// Remove duplicate characters
const uniqueCharacters = [...new Set(text)];

console.log("Unique characters:", uniqueCharacters.join(", "));
console.log("Total unique characters:", uniqueCharacters.length);