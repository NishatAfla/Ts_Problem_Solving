"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const totalQuestions = 15;
const totalMarks = 100;
for (let five = 0; five <= totalQuestions; five++) {
    const ten = totalQuestions - five;
    if ((five * 5) + (ten * 10) === totalMarks) {
        console.log(`5-mark questions: ${five}`);
        console.log(`10-mark questions: ${ten}`);
        break;
    }
}
//# sourceMappingURL=qs15.js.map