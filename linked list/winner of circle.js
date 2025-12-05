

console.log("winner of circle")

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


let head = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = head


// console.log("head", head)

function circularWinner(n,k) {
   
    let head={val:1,next:null}
    let prev=head

    for(let i=2; i<=n; i++){

        prev.next={val:i,next:null}

        prev=prev.next
    }

    prev.next=head

    let curr=prev

    while(curr.next!==curr){
        

        for(let i=0;i<k-1; i++){
            curr=curr.next
        }

        curr.next=curr.next.next
        
    }

    return curr.val

}

console.log("winner", circularWinner(5,2))
console.log("winner", circularWinner(5,1))