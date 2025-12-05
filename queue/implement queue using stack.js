

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



var MyQueue = function() {
    this.mainStack=[]
    this.helperStack=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   
        while(this.mainStack.length!==0){
            this.helperStack.push(this.mainStack.pop())
        }
        this.mainStack.push(x)

        while(this.helperStack.length!=0){
            this.mainStack.push(this.helperStack.pop())
        }
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   return this.mainStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainStack[this.mainStack.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.length===0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */