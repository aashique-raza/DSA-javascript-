

console.log('online stock span problem')

// ! online stock span problem

class StockSpanner {
    constructor() {
        this.stack = []; // Stack to store pairs of (price, span)
    }
    next(price) {
        let span = 1; // Initialize span for the current price  

        // Pop elements from the stack while the current price is greater than or equal to the price at the top of the stack
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()[1]; // Add the span of the popped element to the current span
        }
        this.stack.push([price, span]); // Push the current price and its span onto the stack
        return span; // Return the computed span for the current price
    }
}

// Example usage:
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // returns 1
console.log(stockSpanner.next(80));  // returns 1
console.log(stockSpanner.next(60));  // returns 1
console.log(stockSpanner.next(70));  // returns 2
console.log(stockSpanner.next(60));  // returns 1
console.log(stockSpanner.next(75));  // returns 4
console.log(stockSpanner.next(85));  // returns 6