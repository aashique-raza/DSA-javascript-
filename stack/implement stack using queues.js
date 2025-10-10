

// ! implement stack using queues

class MyStack {
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
        this.topElement = null;
    }
    push(value){
        this.queue1.push(value);
        this.topElement = value;
    }
    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        while(this.queue1.length > 1){
            this.topElement = this.queue1.shift();
            this.queue2.push(this.topElement);
        }
        let poppedElement = this.queue1.shift();
        // swap the names of the two queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return poppedElement;
    }
    top(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.topElement;
    }   
    isEmpty(){
        return this.queue1.length === 0;
    }
    size(){
        return this.queue1.length;
    }
}

let myStack = new MyStack();


var MyStack = function() {
    this.q=new Queue()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
     this.q.enqueue(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for(let i=0; i< this.q.size()-1; i++){
         this.q.enqueue( this.q.dequeue())
    }
    return  this.q.dequeue()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    for(let i=0; i< this.q.size()-1; i++){
         this.q.enqueue( this.q.dequeue())
    }
    let value=this.q.dequeue()
     this.q.enqueue(value)
     return value;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
   return  this.q.isEmpty()
};