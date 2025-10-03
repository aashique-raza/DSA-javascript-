class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


let head = new Node(-1)
let node2 = new Node(5)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(0)

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next 

var insertionSortList = function(head) {
    

    let dummyHead=new Node(0)
    let prev=dummyHead;

    let curr=head;

    while(curr){
        let nextNode=curr.next;

        while(prev.next&& prev.next.val<curr.val){
            prev=prev.next
        }

        let prevNode=prev.next
        prev.next=curr
        curr.next=prevNode

        prev=dummyHead;

        curr=nextNode
    }

    return dummyHead.next
};

console.log("before sort", head)
let sortedHead=insertionSortList(head)
console.log("after sort", sortedHead)