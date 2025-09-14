
// ! detect cycle in a linked list
// * using floyd's cycle detection algorithm (tortoise and hare algorithm)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function detectCycle(head) {
    if (head == null) return false; // empty list

    let slow = head;        
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // move slow by 1
        fast = fast.next.next;     // move fast by 2
        if (slow === fast) {       // cycle detected
            return true;
        }
    }
    return false; // no cycle
}

// Example usage:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next; // Creating a cycle for testing   