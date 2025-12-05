console.log('swapping nodes in linked list');

// Your Node class
class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
       
    }
}

// Step 1: Create all the separate nodes first
const node1 = new Node(7, null);
const node2 = new Node(13, null);
const node3 = new Node(11, null);
const node4 = new Node(10, null);

// Step 2: Connect the nodes using the 'next' pointer to form a line
node1.next = node2; // 7 -> 13
node2.next = node3; // 13 -> 11
node3.next = node4; // 11 -> 10

// The head of our list is the first node
let head = node1;
console.log('head',head);


//  * approach 1 using stack and map
var swapNodes = function(head, k) {
    if(head==null) return


    let curr=head;
    let length=0

    while(curr){
        length++
        curr=curr.next
    }

let start=head;

for(let i=1;i<k;i++){
    start=start.next
}

let fromEnd=head;

for(let i=0; i<length-k; i++){
    fromEnd=fromEnd.next
}

let temp=start.val;
start.val=fromEnd.val
fromEnd.val=temp
    return head
};;


console.log('after swap',swapNodes(head,2));