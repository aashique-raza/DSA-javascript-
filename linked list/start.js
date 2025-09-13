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



// class LinkedList {
//     constructor() {
//         this.head = null;      // ✅ Head as class property
//         this.length = 0;       // ✅ Length as class property
//     }

//     insertToEnd(data) {
//         let newNode = new Node(data);

//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while(current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }

//         this.length++;  // ✅ Auto-increment length
//     }

//     getLength() {
//         return this.length;
//     }

//     display() {
//         if (this.head === null) {
//             console.log("List is empty");
//             return;
//         }

//         let result = [];
//         let current = this.head;
//         while(current) {
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log("List:", result.join(' → '));
//         console.log("Length:", this.length);
//     }
// }

// // Usage:
// let list = new LinkedList();

// list.insertToEnd(10);
// list.display();  // List: 10, Length: 1

// list.insertToEnd(20);
// list.display();  // List: 10 → 20, Length: 2

// list.insertToEnd(30);
// list.display();  // List: 10 → 20 → 30, Length: 3

// console.log('Current length:', list.getLength()); // 3


// ! using functions
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
        console.log('calling if part')
        head = newNode;
    } else {

        let current = head;
        while (current.next != null) {  // Simplified loop
            current = current.next;
        }
        current.next = newNode;
    }

    length++;  // ✅ Increment length on every insertion
}

function getLength() {
    return length;
}


//  insert at beginning

function insertAtBeginning(data) {

    // console.log('calling insert at beginning',data);
    let newNode = new Node(data);

    if (!head) {
        head = newNode;
    } else {

        // console.log('calling else part')
        let temp = head;
        head = newNode;
        newNode.next = temp
    }

    length++;
}

// insert at last
insertToEnd(10)
insertToEnd(20)

console.log('head after add at the end', head);

insertAtBeginning('hello')
console.log('head after add at the beginning', head);


console.log('Length:', getLength()); // 3

//  run a for loop to print linked list

let temp = head;
for (let i = 0; i < getLength(); i++) {

    console.log('Node', i + 1, ':', temp.data);
    temp = temp.next;


}


// ! insert at any position

function insertAtPosition(data, position) {

    if (position < 0 || position > getLength()) {
        return 'invalid position'
    }
    // console.log('calling insert at position',position);

    if (position === 0) {
        insertAtBeginning(data);
    }
    else if (position === getLength()) {
        insertToEnd(data);
    }
    else {
        let temp = head;
        let prev = null;
        // for (let i = 0; i < position - 1; i++) {
        //     prev = prev.next;
        // }
        for (let i = 0; i < position; i++) {

            if ((position - 1) === i) {
                prev = temp;
                break
            }

            temp = temp.next;

        }

        console.log('prev', prev);
        let newNode = new Node(data);
        let nextNode = prev.next;
        prev.next = newNode;
        newNode.next = nextNode;
        length++;
    }
}



insertAtPosition('end', getLength());
console.log('insert at end', head);

insertAtPosition('middle', 2);
console.log('insert at in betwwen', head);


insertAtPosition('start', 0);
console.log('insert at 0', head);


console.log('length', getLength())


// ! find in list usig index

function findInList(index) {

    if (index < 0 || index >= getLength()) {
        return 'invalid index'
    }
    let temp = head;
    for (let i = 0; i < getLength(); i++) {

        if (i === index) {
            return temp.data
        }
        temp = temp.next
    }

}
// console.log('find in list',findInList(3));
// console.log('find in list',findInList(-1));
// console.log('find in list',findInList(10));
// console.log('find in list',findInList(0));

// ! delete node from the last of linked list

function deleteFromEnd() {


    if (head == null) {
        return 'list is empty'
    }
    let temp = head;
    let lastnode = null;
    let seconLastNode = null;

    if (temp.next == null) {
        head = null;
    } else {
        // traverse to the last node
        // while (temp.next != null) {
        //     seconLastNode = temp;
        //     temp = temp.next;
        // }
        seconLastNode.next = null;

        while (temp != null) {

            seconLastNode = lastnode;
            lastnode = temp;
            temp = temp.next;
        }


        seconLastNode.next = null
    }


    length--;
}

deleteFromEnd();
console.log('after delete from end', head);
console.log('length after delete from end', getLength());