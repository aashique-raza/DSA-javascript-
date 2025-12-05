

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


//  ! dequeue implementation using  doubly linked list to avoid traversing the list in removeRear method

class DNode{    
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class Deque{
    constructor(){
        this.front=null;
        this.rear=null;
        // use dummy nodes for front and rear to avoid edge cases
        this.front=new DNode(null);
        this.rear=new DNode(null);
        this.front.next=this.rear;
        this.rear.prev=this.front;
    }
    addFront(data){
        let newNode=new DNode(data);
        newNode.next=this.front.next;
        newNode.prev=this.front;
        this.front.next.prev=newNode;
        this.front.next=newNode;
    }
    addRear(data){
        let newNode=new DNode(data);
        newNode.prev=this.rear.prev;    
        newNode.next=this.rear;
        this.rear.prev.next=newNode;
        this.rear.prev=newNode;
    }
    removeFront(){
        if(this.isEmpty()){
            return null;
        }
        let removedData=this.front.next.data;
        this.front.next=this.front.next.next;
        this.front.next.prev=this.front;
        return removedData;
    }
    removeRear(){
        if(this.isEmpty()){
            return null;
        }
        let removedData=this.rear.prev.data;
        this.rear.prev=this.rear.prev.prev;
        this.rear.prev.next=this.rear;
        return removedData;
    }
    isEmpty(){
        return this.front.next===this.rear;
    }
    peekFront(){
        if(this.isEmpty()){
            return null;
        }
        return this.front.next.data;
    }
    peekRear(){
        if(this.isEmpty()){
            return null;
        }
        return this.rear.prev.data;
    }   
    display(){
        let current=this.front.next;
        let elements=[];
        while(current!==this.rear){
            elements.push(current.data);
            current=current.next;
        }
        console.log(elements.join(" <-> "));
    }
}

let dq2=new Deque();
dq2.addRear(10);
dq2.addRear(20);
dq2.addFront(5);
dq2.display();