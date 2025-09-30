console.log('LFUcache ....')

// --- 1. Item Node ---
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.usage = 1; // Usage count
        this.prev = null;
        this.next = null;
    }
}

// --- 2. Doubly Linked List for Recency ---
class DLL {
    constructor() {
        this.head = new Node(0, 0); 
        this.tail = new Node(0, 0); 
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.count = 0; 
    }

    add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.count++;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.count--;
    }

    removeLRU() {
        if (this.count === 0) return null;
        
        const nodeToRemove = this.tail.prev;
        this.remove(nodeToRemove);
        return nodeToRemove;
    }

    isEmpty() {
        return this.count === 0;
    }
}

// --- 3. LFU Cache ---
class LfuCache {
    constructor(capacity) {
        this.capacity = capacity;
        
        this.items = new Map(); // <key, Node>
        this.usageMap = new Map(); // <usageCount, DLL>
        
        this.minUsage = 0; 
        this.size = 0;
    }

    _updateUsage(node) {
        const oldUsage = node.usage;
        
        const oldList = this.usageMap.get(oldUsage);
        oldList.remove(node);

        if (oldList.isEmpty()) {
            this.usageMap.delete(oldUsage);
            if (oldUsage === this.minUsage) {
                this.minUsage++;
            }
        }

        node.usage++;
        const newUsage = node.usage;

        if (!this.usageMap.has(newUsage)) {
            this.usageMap.set(newUsage, new DLL());
        }
        const newList = this.usageMap.get(newUsage);

        newList.add(node);
    }

    _evict() {
        const listToEvictFrom = this.usageMap.get(this.minUsage);
        
        const nodeToRemove = listToEvictFrom.removeLRU();

        this.items.delete(nodeToRemove.key);

        this.size--;
        
        if (listToEvictFrom.isEmpty()) {
            this.usageMap.delete(this.minUsage);
        }
    }

    get(key) {
        if (!this.items.has(key)) {
            return -1;
        }

        const node = this.items.get(key);
        this._updateUsage(node);
        
        return node.value;
    }

    put(key, value) {
        if (this.capacity === 0) return;

        if (this.items.has(key)) {
            const node = this.items.get(key);
            node.value = value;
            this._updateUsage(node);
            return;
        }

        if (this.size === this.capacity) {
            this._evict();
        }

        const newNode = new Node(key, value);

        this.items.set(key, newNode);
        this.size++;

        if (!this.usageMap.has(1)) {
            this.usageMap.set(1, new DLL());
        }
        
        this.usageMap.get(1).add(newNode);

        this.minUsage = 1;
    }
}

// Example usage (simple test)
const cache = new LfuCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log(cache.get(1)); // Output: 10 (Usage of 1 becomes 2)
cache.put(3, 30); // Evicts 2 (Min Usage is 1, Node 2 is the only one left)
console.log(cache.get(2)); // Output: -1


let lfuCache=new LFUCache(2)
console.log('lfe cache',lfuCache)
lfuCache.put(1, 10)
lfuCache.put(2, 20)
lfuCache.put(3,30)
lfuCache.put(3,40)
console.log('lfe cache after put ',lfuCache)
let data =lfuCache.get(1)
let data1 =lfuCache.get(2)
console.log('get dta',data)
console.log('get dta',data1)

