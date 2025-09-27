console.log("removing zero sum in linked list");

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

// Step 1: Create all the separate nodes first
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(-3);
const node4 = new Node(3);
const node5 = new Node(2);

// Step 2: Connect the nodes using the 'next' pointer to form a line
let head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// The head of our list is the first node

// console.log('before deletion head',head);


// ! approach 1 brute force

// var removeZeroSumSublists = function(head) {
//     let temp=head;

//     let length=0;

//     while(temp){
//         length++
//         temp=temp.next
//     }

//     let deleteNode=0;
//     let dummyHead=head;
//     let prev=null;
//     let i=1;
//     let j=i+1;

//     while(i<length-deleteNode){
//         let curr=dummyHead
//         let nextNode=curr.next??null
//         let sum=curr.val

//         while(j<length-deleteNode){

//             sum+=nextNode.val

//             if(sum==0){

//                 if(dummyHead==head){
//                     head=nextNode.next??null
//                     dummyHead=head
//                     prev=null
//                 }else{
//                     prev.next=nextNode.next??null
//                 }

//                 deleteNode+=j-i+1
//                 i=1
//                 j=i+1
//                 break
//             }
//             nextNode=nextNode.next??null
//             j++
//         }
//         if(sum!=0){
//             prev=dummyHead
//             dummyHead=dummyHead.next
//             i++
//             j=i+1
//         }

//     }
// }


// ! approach 2 using map

// var removeZeroSumSublists = function(head) {

//     let sum=0;
//     let curr=head;
//     let map=new Map()

//     map.set(sum,null)

//     while(curr){
//         sum+=curr.val

//         if(!map.has(sum)){
//             map.set(sum,curr)
//         }
//         else{
//             let prevNode=map.get(sum)
//             if(prevNode==null){
//                 head=curr.next
//             }else{
//                 prevNode.next=curr.next
//             }
//         }
//         curr=curr.next
//     }
//     return head
// };

// ! corect two pass
var removeZeroSumSublists = function (head) {

    let dummyNode = new Node(0)
    dummyNode.next = head
    let sum = 0;
    let curr = dummyNode;
    let map = new Map()



    while (curr) {
        sum += curr.val


        map.set(sum, curr)


        curr = curr.next
    }

    sum = 0;
    curr = dummyNode
    while (curr) {
        sum += curr.val
        if (map.has(sum)) {
            let findNode = map.get(sum)
          
            curr.next = findNode.next
        }
        curr = curr.next
    }
    return dummyNode.next
};


console.log('after deletion head', removeZeroSumSublists(head));