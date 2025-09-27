

console.log("deleting node in linked list");

//  Node class
class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
       
    }
}

// Step 1: Create all the separate nodes first
const node1 = new Node(7, null, null);
const node2 = new Node(13, null, null);
const node3 = new Node(11, null, null);
const node4 = new Node(10, null, null);

// Step 2: Connect the nodes using the 'next' pointer to form a line
node1.next = node2; // 7 -> 13
node2.next = node3; // 13 -> 11
node3.next = node4; // 11 -> 10

console.log('before deletion head',node1);


var deleteNode = function(node) {
  let nextNode=node.next
  node.val=nextNode.val
  node.next=nextNode.next

};


deleteNode(node3)

console.log('after deletion head',node1);