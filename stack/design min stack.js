

console.log("design min stack")

//!  using two stacks


// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     push(element) {
//         this.items.push(element);
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow: Stack is empty";
//         }
//         return this.items.pop();
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items[this.items.length - 1];
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     size() {
//         return this.items.length;
//     }
// }


// class MinStack {
//     constructor() {
      
//         this.stack = new Stack(); 
       
//         this.minStack = []; 
//     }

//     push(val) {
       
//         this.stack.push(val);

        
//         if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//             this.minStack.push(val);
//         }
//     }

//     pop() {
       
//         if (this.stack.isEmpty()) {
//             return "Underflow: Stack is empty";
//         }
        
//         let poppedValue = this.stack.pop();

       
//         if (poppedValue === this.minStack[this.minStack.length - 1]) {
//             this.minStack.pop();
//         }
//         // LeetCode ke anusaar, pop kuch return nahi karta
//     }
    
//     // Naya 'top' method add kiya jo problem mein pucha gaya hai
//  getMin() {
//         if (this.minStack.length === 0) {
//             return "No elements in stack";
//         }
//         return this.minStack[this.minStack.length - 1];
//     }

// }


var MinStack = function () {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (this.minStack.length == 0 || this.minStack[this.minStack.length - 1] >= val) {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
if(this.stack.length==0){
    return "stack underflow"
}
let pVal=this.stack[this.stack.length-1]
this.stack.pop()

if(this.minStack[this.minStack.length-1]==pVal){
    this.minStack.pop()
}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
if(this.stack.length==0){
    return "stack underflow"
}
return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
if(this.minStack.length==0){
    return "stack underflow"
}

return this.minStack[this.minStack.length-1]
};

