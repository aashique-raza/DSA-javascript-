

console.log("Doubly Linked List");


// Node class

 class Node{
    constructor(val){
        this.val=val;
        this.prev=null;
        this.next=null;
    }
 }

 class DoublyLinkedList{

     head=null;
     tail=null;
     length=0;

    //    insert at start (begining)

    insertAtStart(val){

        if(this.head==null){
            this.head=new Node(val);
            this.tail=this.head;
        }else{
            let newNode=new Node(val);
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
    }
 }


//  insert node at start
    let dll=new DoublyLinkedList();

    dll.insertAtStart(10);
    dll.insertAtStart(20);
    dll.insertAtStart(30);

    console.log('head',dll.head);
    console.log('tail',dll.tail);