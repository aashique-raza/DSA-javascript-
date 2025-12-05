

console.log("stack start here");
class Stack {
   
    constructor() {
        this.items = [];
    }

   
    push(element) {
        this.items.push(element);
    }

  
    pop() {
       
        if (this.isEmpty()) {
            return "Underflow: Stack is empty";
        }
        return this.items.pop();
    }

    
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
       
        return this.items[this.items.length - 1];
    }

   
    isEmpty() {
        return this.items.length === 0;
    }

   
    size() {
        return this.items.length;
    }
}

// 1. Create a new stack instance
const myStack = new Stack();

// 2. Push items onto the stack
myStack.push(10); // Stack is now: [10]
myStack.push(20); // Stack is now: [10, 20]
myStack.push(30); // Stack is now: [10, 20, 30]

// 3. Use the other methods
console.log("Current top element:", myStack.peek()); // Output: 30
console.log("Current stack size:", myStack.size()); // Output: 3

// 4. Pop an item
const removedItem = myStack.pop();
console.log("Removed item:", removedItem); // Output: 30
console.log("New top element:", myStack.peek()); // Output: 20