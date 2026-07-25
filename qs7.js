"use strict";
// Print Unique Characters from a String
Object.defineProperty(exports, "__esModule", { value: true });
const text = "abcaabbcc";
// Remove duplicate characters
const uniqueCharacters = [...new Set(text)];
console.log("Unique characters:", uniqueCharacters.join(", "));
console.log("Total unique characters:", uniqueCharacters.length);
//# sourceMappingURL=qs7.js.map