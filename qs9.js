"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordLength = 8;
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+";
const allChars = upper + lower + numbers + special;
let password = "";
// Ensure at least one of each type
password += upper[Math.floor(Math.random() * upper.length)];
password += lower[Math.floor(Math.random() * lower.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += special[Math.floor(Math.random() * special.length)];
// Fill remaining characters
for (let i = 4; i < passwordLength; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
}
// Shuffle password
password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
console.log(password);
//# sourceMappingURL=qs9.js.map