const text: string = "s@atur!day";

const result = text.replace(/[^a-zA-Z0-9]/g, "");

console.log(result);