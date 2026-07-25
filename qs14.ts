const amount: number = 546;

const notes: number[] = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

let remaining = amount;

for (const note of notes) {

    const count = Math.floor(remaining / note);

    if (count > 0) {
        console.log(`${note} x ${count}`);
        remaining %= note;
    }

}