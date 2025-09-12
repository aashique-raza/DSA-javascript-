//  start linked list---

// class Node {

//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(10);
// let node2 = new Node(20);
// let node3 = new Node(30);
// let node4 = new Node(40);
// node1.next = node2;
// console.log('node1',node1);
// console.log('node 1 data',node1.data);
// console.log('node 2 ka address in node 1',node1.next);

// console.log('node2', node2);
// console.log('node3', node3);
// console.log('node4', node4);

// //  traversing without head

// let tem=node1;
// while(tem!=null){
//     console.log(tem.data);
//     tem=tem.next;
// }

// // if lost node 1
// let head=node1;
// node1=null;
// console.log('node1',node1);
// console.log('node2',node2);
// console.log('head',head);

// //  traverse with head
// let temp=head;  
// while(temp!=null){
//     console.log(temp.data);
//     temp=temp.next;
// }


// !   strat again learning linked list with head

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;
let length = 0;  // ✅ Global length variable

function insertToEnd(data) {
    let newNode = new Node(data);
    
    if (head == null) {
        head = newNode;
    } else {
        let current = head;
        while(current.next != null) {  // Simplified loop
            current = current.next;
        }
        current.next = newNode;
    }
    
    length++;  // ✅ Increment length on every insertion
}

function getLength() {
    return length;
}

// Test:
// insertToEnd(10);
// console.log('Length:', getLength()); // 1

// insertToEnd(20);
// console.log('Length:', getLength()); // 2

// insertToEnd(30);
// console.log('Length:', getLength()); // 3
// insertToEnd(10);
// console.log('head', head);
// insertToEnd(20);
// console.log('head', head);
// insertToEnd(30);
// console.log('head', head);
// Test with proper logging:
// insertToEnd(10);
// console.log('After 10:', JSON.stringify(head)); // Shows exact state

// insertToEnd(20);  
// console.log('After 20:', JSON.stringify(head)); // Shows exact state

// insertToEnd(30);
// console.log('After 30:', JSON.stringify(head)); // Shows exact state
// insertToEnd(40);
// console.log('head', head);


//! class based approach



class LinkedList {
    constructor() {
        this.head = null;      // ✅ Head as class property
        this.length = 0;       // ✅ Length as class property
    }
    
    insertToEnd(data) {
        let newNode = new Node(data);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        
        this.length++;  // ✅ Auto-increment length
    }
    
    getLength() {
        return this.length;
    }
    
    display() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        
        let result = [];
        let current = this.head;
        while(current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("List:", result.join(' → '));
        console.log("Length:", this.length);
    }
}

// Usage:
let list = new LinkedList();

list.insertToEnd(10);
list.display();  // List: 10, Length: 1

list.insertToEnd(20);
list.display();  // List: 10 → 20, Length: 2

list.insertToEnd(30);
list.display();  // List: 10 → 20 → 30, Length: 3

console.log('Current length:', list.getLength()); // 3