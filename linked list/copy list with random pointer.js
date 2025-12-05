console.log("Copy List with Random Pointer");


// Your Node class
class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
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

// The head of our list is the first node
let head = node1;

// Step 3: Now, connect the 'random' pointers
// You can make them point anywhere!

// First node's random pointer points to the third node (11)
node1.random = node3;

// Second node's random pointer points back to the first node (7)
node2.random = node1;

// Third node's random pointer points to itself (11)
node3.random = node3;

// Fourth node's random pointer points to the second node (13)
node4.random = node2;

console.log('head',head);

//  * approach 1 using stack and map
//  * Time O(N) | Space O(N)
// var copyRandomList = function(head) {
//     let curr=head;
//     let map=new Map()
//     let dummyHead=null;
//     let temp=dummyHead

//     while(curr){
//         let newNode= new Node(curr.val,null,null)

//         map.set(curr,newNode)


//         if(dummyHead==null){
//             dummyHead=newNode
//             temp=dummyHead
//         }else{
//             temp.next=newNode
//             temp=temp.next
//         }

//         curr=curr.next
//     }

//     let curr2=head
//     let temp2=dummyHead

//     while(curr2){
        
//         if(curr2.random==null){
//             temp2.random=null
//         }else{
//             temp2.random=map.get(curr2.random)
//         }
//         curr2=curr2.next
//         temp2=temp2.next
//     }

//     return dummyHead
// };


// * approach 2
var copyRandomList = function(head) {
    let curr=head;
   

    while(curr){
        let newNode=new Node(curr.val,null,null)
        newNode.next=curr.next
        curr.next=newNode
        curr=curr.next?curr.next.next:null
    }

    let temp=head
    let temp2=head.next

    while(temp!=null && temp2!=null){
        if(temp.random==null){
            temp2.random=null
        }else{
            temp2.random=temp.random.next
        }

        temp=temp.next?temp.next.next:null
        temp2=temp2.next?temp2.next.next:null
    }

    return head

    let dummyHead=head.next
    let cur=dummyHead
    let cur2=head

    while(cur!=null&& cur2!=null){
        cur.next=cur.next?cur.next.next:null
        cur2.next=cur2.next?cur2.next.next:null

        cur=cur.next
        cur2=cur2.next
    }
       
    return dummyHead
};

console.log('copyRandomList',copyRandomList(head));