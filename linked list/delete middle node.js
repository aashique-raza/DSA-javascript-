

// ! delete middle node in a linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


console.log("Delete middle node in a linked list");

// Example usage:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

// ! delete middle node in a linked list


// * approach1: using length of linked list

function deleteMiddleNode(head) {
    if (head == null || head.next == null) return null; // empty list or single node

    let count = 0;

    let curr = head;

    while (curr) {
        count++

        curr = curr.next;
    }

    //  find middle
    let middle = Math.floor(count / 2);
    curr = head;
    let prev = null;

    for (let i = 0; i < middle; i++) {

        prev = curr;
        curr = curr.next
    }

    prev.next = curr.next; // delete middle node

    return head;

}


// console.log("Original list:", head);
// console.log("After deleting middle node:", deleteMiddleNode(head));

// * approach2: using slow and fast pointer
function deleteMiddleNode2(head) {

    let slow=head; 
    let fast=head;
    let prev=null;

    if(head==null || head.next==null) return null; // empty list or single node
    while(fast!==null && fast.next!==null){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    prev.next=slow.next; // delete middle node

    return head;
}
console.log("Original list:", head);
// console.log("After deleting middle node:", deleteMiddleNode2(head));