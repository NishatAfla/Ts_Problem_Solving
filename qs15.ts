const totalQuestions: number = 15;
const totalMarks: number = 100;

for (let five = 0; five <= totalQuestions; five++) {

    const ten = totalQuestions - five;

    if ((five * 5) + (ten * 10) === totalMarks) {

        console.log(`5-mark questions: ${five}`);
        console.log(`10-mark questions: ${ten}`);

        break;
    }

}