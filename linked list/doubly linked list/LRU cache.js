console.log("LRU cache ")


// ! doubly linked list  
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null; // To point to the previous node
        this.next = null; // To point to the next node
    }
}

let head=null;
let tail=null;

 head=new Node('h',5)
 tail=new Node('t',5)
 head.next=tail
 tail.prev=head
console.log('head',head)
console.log('tail',tail)

//  LRU cache 

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // This is our Hash Map

        // Dummy nodes to mark the start and end of the list
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        // Connect the dummy head and tail to each other
        // This represents an empty list
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Helper to remove a node from the list
    _remove(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // Helper to insert a node at the front (right after dummy head)
    _insertAtHead(node) {
        let nextNode = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = nextNode;
        nextNode.prev = node;
    }


    get(key) {
        // 1. Check if the item exists in our map
        if (this.map.has(key)) {
            let node = this.map.get(key);

            // 2. Move this node to the front of the list
            // because it is now the "most recently used"
            this._remove(node);
            this._insertAtHead(node);

            // 3. Return its value
            return node.value;
        }

        // 4. If not found, return -1
        return -1;
    }

    put(key, value) {
        // Case 1: The key already exists.
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node.value = value; // Update the value

            // Move it to the front because it was just used
            this._remove(node);
            this._insertAtHead(node);
            return;
        }

        // Case 2: The key is new.
        // First, check if the cache is full.
        if (this.map.size === this.capacity) {
            // The cache is full, so we must remove the LRU item.
            // The LRU item is always at the tail of our list.
            let lruNode = this.tail.prev;

            // Remove it from the map AND the list
            this.map.delete(lruNode.key);
            this._remove(lruNode);
        }

        // Now, add the new item.
        const newNode = new Node(key, value);
        this._insertAtHead(newNode);
        this.map.set(key, newNode);
    }



}