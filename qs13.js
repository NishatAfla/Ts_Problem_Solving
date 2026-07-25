"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paragraph = "A Core i7 laptop price is 85000  tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";
const prices = paragraph.match(/\d+/g);
if (prices) {
    const laptop = Number(prices[1]);
    const mouse = Number(prices[2]);
    const discount = Number(prices[4]);
    const total = laptop + mouse;
    const finalCost = total - (total * discount / 100);
    console.log(finalCost + " tk");
}
//# sourceMappingURL=qs13.js.map