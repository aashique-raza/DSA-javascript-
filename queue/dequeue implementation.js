

// !dequeue implementation using linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Dequeue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    addFront(data){
        let newNode=new Node(data);
        if(this.front===null){
            this.front=newNode;
            this.rear=newNode;
        }
        else{
            newNode.next=this.front;
            this.front=newNode;
        }
    }

    addRear(data){
        let newNode=new Node(data);
        if(this.rear===null){
            this.front=newNode;
            this.rear=newNode;
        }
        else{
            this.rear.next=newNode;
            this.rear=newNode;
        }
    }
    removeFront(){
        if(this.front===null){
            return null;
        }
        let removedData=this.front.data;
        this.front=this.front.next;
        if(this.front===null){
            this.rear=null;
        }
        return removedData;
    }
    removeRear(){
        if(this.rear===null){
            return null;
        }
        let removedData=this.rear.data;
        if(this.front===this.rear){
            this.front=null;
            this.rear=null;
        }
        else{
            let current=this.front;
            while(current.next!==this.rear){
                current=current.next;
            }
            current.next=null;
            this.rear=current;
        }
        return removedData;
    }

    isEmpty(){
        return this.front===null;
    }
    peekFront(){
        if(this.front===null){
            return null;
        }
        return this.front.data;
    }
    peekRear(){
        if(this.rear===null){
            return null;
        }
        return this.rear.data;
    }
    display(){
        let current=this.front;
        let elements=[];
        while(current!==null){
            elements.push(current.data);
            current=current.next;
        }

        console.log(elements.join(" -> "));
    }
}
let dq=new Dequeue();
dq.addRear(10);
dq.addRear(20);
dq.addFront(5);
dq.display();