console.log('split linked list')



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







var splitListToParts = function (head, k) {
 if (!head) return new Array(k).fill(null);
    let curr = head;
    let arr = []

    let length = 0;

    while (curr) {
        length++
        curr = curr.next
    }
    curr = head

    let nodes = Math.floor(length / k)
    let rem = length % k

    if (length < k) {
        while (curr) {

            let nextNode = curr.next;
            curr.next = null;
            arr.push(curr)
            curr = nextNode
        }

        for (let i = 0; i < k - length; i++) {
            arr.push(null)
        }

        return arr
    }

    else if (length == k) {
        while (curr) {
            let nextNode = curr.next;
            curr.next = null;

            arr.push(curr)

            curr = nextNode
        }
        return arr
    } else {
   
    for (let i = 0; i < k; i++) {
        
       
        let part_head = curr;

       
        let part_size = nodes + (rem > 0 ? 1 : 0);
        if (rem > 0) {
            rem--;
        }

        
        for (let j = 0; j < part_size - 1; j++) {
            if (curr) {
                curr = curr.next;
            }
        }
        
        
        if (curr) {
            let next_head = curr.next; 
            curr.next = null;          
            curr = next_head;        
        }
        
       
        arr.push(part_head);
    }
    
    return arr;
}
};

console.log("split lsi after call", splitListToParts(head, 3))