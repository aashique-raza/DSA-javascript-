
console.log("queue start");


// ! using simple array

class Queue {
    constructor(){
        this.items = [];
       this. front=-1;
       this. rear=-1;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    push(value){
        if(this.isEmpty()){
            this.front+=1
            this.rear+=1
            this.items[this.rear] = value;
        }else{
            this.rear+=1
            this.items[this.rear] = value;

        }
    }

    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        let item= this.items[this.front]
        this.items[this.front] = null;
        this.front+=1;
        if(this.front > this.rear){
            this.front=-1;
            this.rear=-1;
            this.items = [];
        }
        return item;

    }

    peek(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items[this.front];
    }

}

let queue = new Queue();
console.log('queue',queue);
queue.push(10);
queue.push(20);
queue.push(30);
console.log('queue after push',queue);
console.log('peek',queue.peek());
queue.pop();
console.log('queue after pop',queue);
console.log('peek',queue.peek());
queue.pop();
console.log('queue after pop',queue);
console.log('is empty',queue.isEmpty());