

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