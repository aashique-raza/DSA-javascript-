
console.log ('remove nt node from last')

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

// Step 1: Create all the separate nodes first
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);


// Step 2: Connect the nodes using the 'next' pointer to form a line
let head = node1;
node1.next = node2;
node2.next = node3;

console.log('head', head)


var removeNthFromEnd = function (head, n) {

    if (head == null) {
        return null
    }
    let dummyHead = new ListNode(0, head)
    let curr = dummyHead;
    let prev = null;

    let length = 0;

    while (curr) {
        length++
        curr = curr.next
    }

    curr = dummyHead;

    let end = length - n
    for (let i = 0; i < end; i++) {
        prev = curr
        curr = curr.next ? curr.next : null
    }
    prev.next = curr.next ?? null

    return dummyHead.next
};