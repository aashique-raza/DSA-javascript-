

console.log("intersection of linked list");
// Step 1: Define the Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Step 2: Create the nodes for each list and the shared part

// List A nodes
let headA = new Node(4);
let a2 = new Node(1);

// List B nodes
let headB = new Node(5);
let b2 = new Node(6);
let b3 = new Node(1);

// Shared nodes (the intersection part)
let c1 = new Node(8);
let c2 = new Node(4);
let c3 = new Node(5);


// Step 3: Link the nodes to form the lists and the intersection

// Link List A
headA.next = a2;

// Link List B
headB.next = b2;
b2.next = b3;

// Link the shared part
c1.next = c2;
c2.next = c3;

// Create the intersection by linking the end of both lists to the shared part
a2.next = c1;
b3.next = c1;

// Now, headA and headB are the two heads of the intersecting linked lists.
console.log("headA starts at node with value:", headA.val);
console.log("headB starts at node with value:", headB.val);
console.log("The intersection node has the value:", c1.val);
console.log("headA starts at node", headA);
console.log("headB starts at node ", headB);
console.log("The intersection node", c1);
// ! intersection of linked list

var getIntersectionNode = function (headA, headB) {

    let tempA = headA;

let visitedNodes = new Set();

    while (tempA) {
        let v = tempA.next

        visitedNodes.add(v)

        tempA = tempA.next
    }
    let tempB = headB
    while (tempB) {
        let v = tempB.next

      if(visitedNodes.has(v)){
        return v
      }


        tempB = tempB.next
    }

    return null
};

console.log('intersection node', getIntersectionNode(headA, headB));