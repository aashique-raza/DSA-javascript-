

console.log("Doubly Linked List");


// Node class

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {

    head = null;
    tail = null;
    length = 0;

    //    insert at start (begining)

    insertAtStart(val) {

        if (this.head == null) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            let newNode = new Node(val);
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // insert at end (tail)

    insertAtEnd(val) {
        if (this.head == null) {
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = this.head;
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    // insert at position (index)

    insertAtPosition(index, val) {

        if (index < 0 || index > this.length) {
            return
        }

        if (index == 0) {
            console.log('index 0');
            this.insertAtStart(val);
        }

        else if (index == this.length) {
            this.insertAtEnd(val);
        }
        else {
            let newNode = new Node(val);
            let current = this.head;
            let previous;
            while (index--) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            current.prev = newNode;
            previous.next = newNode;
            newNode.prev = previous;
            this.length++;
        }
    }

    displaForward() {
        let temp = this.head;

        while (temp) {
            console.log('value', temp.val);
        }
    }

    displayBackward() {
        let temp=this.tail;

        while(temp){
            console.log('value',temp.val);
            temp=temp.prev;
        }
        // console.log('tail',this.tail);
    }

    //  delete at start
    deleteAtStart() {
        if(this.head==null){
            return;
        }

       this. head=this.head.next;
        this.head.prev=null;
        this.length--;
    }
}



let dll = new DoublyLinkedList();
//!  insert node at start
// dll.insertAtStart(10);
// dll.insertAtStart(20);
// dll.insertAtStart(30);

// ! insert node at end
// dll.insertAtEnd(10);
// dll.insertAtEnd(20);
// dll.insertAtEnd(30);

dll.insertAtPosition(0, 10);
dll.insertAtPosition(1, 20);
dll.insertAtPosition(1, 30);
dll.insertAtPosition(3, 40);

dll.displayBackward();
dll.deleteAtStart();
dll.displayBackward();

console.log('head', dll.head);
console.log('tail', dll.tail);