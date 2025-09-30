console.log('swap nodes ')


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

let node1=new Node(1)
let node2=new Node(2)
let node3=new Node(3)
let node4=new Node(4)

let head=node1
head.next=node2
node2.next=node3
node3.next=node4

console.log("head",head)


// ! swap node in pair

function swapNode(head){

      if(head==null) return null

    let dummyHead=new ListNode(0)

    dummyHead.next=head

    let curr=dummyHead;

    while(curr.next!=null && curr.next.next!=null){

        if(curr.next!=null && curr.next.next!==null){
            let nextNode=curr.next
            curr.next=nextNode.next;
            nextNode.next=curr.next.next
            curr.next.next=nextNode
            curr=nextNode
        }
       
 
    }

    return dummyHead.next
}

console.log('after swap',swapNode(head))
