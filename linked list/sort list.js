console.log("sort list")


class Node{
    constructor(val){
        this.next=null;
        this.val=val
    }
}

// ! sort list -----

function sortList(head){

    //  base case

    if(!head || !head.next){
        return head
    }

    let slow=head;
    let fast=head.next;

    while(fast!=null&&fast.next!=null){

        slow=slow.next;
        fast=fast.next.next
    }

    // break at middle--

    let rightHalf=slow.next;

    slow.next=null;

    //  recursive call for left part--

    let sortedLeft=sortList(head)

    // recursive call for right part--

    let sortedRight=sortList(rightHalf)

    return mergeNode(sortedLeft,sortedRight)
}

function mergeNode(list1,list2){

    let dummyHead=new Node(0)

    let curr=dummyHead

    while(list1&&list2){

        if(list1.val<=list2.val){
            curr.next=list1
            list1=list1.next
        }else{
            curr.next=list2
            list2=list2.next
        }

        curr=curr.next
    }

    if(list1){
        curr.next=list1
    }else{
        curr.next=list2
    }

    return dummyHead.next
}


let head=new Node(1)
let node2=new Node(2)
let node3= new Node(3)
let node4= new Node(4)

node2.next=node4
node3.next=node2
head.next=node3

console.log("head",head)


console.log("sort list",sortList(head))