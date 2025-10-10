

// ! implement queue using stack

class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(x) {
        this.stack1.push(x);
    }   
    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {    
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // returns 1
console.log(queue.pop());  // returns 1
console.log(queue.empty()); // returns false