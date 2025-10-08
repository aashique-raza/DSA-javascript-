
console.log("queue start");


// ! using simple array

// class Queue {
//     constructor(){
//         this.items = [];
//        this. front=-1;
//        this. rear=-1;
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     push(value){
//         if(this.isEmpty()){
//             this.front+=1
//             this.rear+=1
//             this.items[this.rear] = value;
//         }else{
//             this.rear+=1
//             this.items[this.rear] = value;

//         }
//     }

//     pop(){
//         if(this.isEmpty()){
//             return "underflow"
//         }
//         let item= this.items[this.front]
//         this.items[this.front] = null;
//         this.front+=1;
//         if(this.front > this.rear){
//             this.front=-1;
//             this.rear=-1;
//             this.items = [];
//         }
//         return item;

//     }

//     peek(){
//         if(this.isEmpty()){
//             return "underflow"
//         }
//         return this.items[this.front];
//     }

// }

// let queue = new Queue();
// console.log('queue',queue);
// queue.push(10);
// queue.push(20);
// queue.push(30);
// console.log('queue after push',queue);
// console.log('peek',queue.peek());
// queue.pop();
// console.log('queue after pop',queue);
// console.log('peek',queue.peek());
// queue.pop();
// console.log('queue after pop',queue);
// console.log('is empty',queue.isEmpty());


// ! using linked list

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    inqueue(value){
        if(this.size === 0){
            let newNode = new Node(value);
            this.front = newNode;
            this.rear = newNode;
        }else{
            let newNode = new Node(value);
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size+=1;
    }

    dequeue(){
        if(this.size === 0){
            return "underflow"
        }
        let item = this.front.value;
        this.front = this.front.next;
        this.size-=1;
        if(this.size === 0){
            this.rear = null;
            this.front = null;
        }
        return item;
    }
    peek(){
        if(this.size === 0){
            return "underflow"
        }
        return this.front.value;
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

}