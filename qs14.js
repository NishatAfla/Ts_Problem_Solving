"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amount = 546;
const notes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let remaining = amount;
for (const note of notes) {
    const count = Math.floor(remaining / note);
    if (count > 0) {
        console.log(`${note} x ${count}`);
        remaining %= note;
    }
}
//# sourceMappingURL=qs14.js.map