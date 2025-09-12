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
function insertToEnd(data) {
    let newNode = new Node(data);
    if (head == null) {
        head = newNode;
        return;
    }else{
        let prev=head;
        let temp=head;
        while(temp!=null){
            prev=temp;
            temp=temp.next;
        }
        prev.next=newNode;
        newNode.next=temp
    }
    
}
// insertToEnd(10);
// console.log('head', head);
// insertToEnd(20);
// console.log('head', head);
// insertToEnd(30);
// console.log('head', head);
// Test with proper logging:
insertToEnd(10);
console.log('After 10:', JSON.stringify(head)); // Shows exact state

insertToEnd(20);  
console.log('After 20:', JSON.stringify(head)); // Shows exact state

insertToEnd(30);
console.log('After 30:', JSON.stringify(head)); // Shows exact state
// insertToEnd(40);
// console.log('head', head);