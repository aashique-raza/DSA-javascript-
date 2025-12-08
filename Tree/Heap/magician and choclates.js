

//  ! magicain and chocolates--

function maxChoclates(arr,timer){
    if(arr.length==0) return 0

    let maximum=0;
    let maxHeap=new MaxHeap()

    for(let val of arr){
        maxHeap.insert(val)
    }

    while(timer>0){
        if (maxHeap.heap.length === 0) break;
        let max=maxHeap.remove()
        maximum+=max
        let temp=Math.floor(max/2)
        maxHeap.insert(temp)
        timer--
    }
    return maximum
}



var minStoneSum = function(piles, k) {
    // Local heap inside function to avoid redeclare problems in LeetCode runner
    const heap = [];
    const swap = (i, j) => { const t = heap[i]; heap[i] = heap[j]; heap[j] = t; };

    const bubbleUp = (idx) => {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (heap[parent] >= heap[idx]) break;
            swap(parent, idx);
            idx = parent;
        }
    };

    const bubbleDown = (idx) => {
        const n = heap.length;
        while (true) {
            let largest = idx;
            const l = 2 * idx + 1;
            const r = 2 * idx + 2;
            if (l < n && heap[l] > heap[largest]) largest = l;
            if (r < n && heap[r] > heap[largest]) largest = r;
            if (largest === idx) break;
            swap(idx, largest);
            idx = largest;
        }
    };

    const push = (val) => {
        heap.push(val);
        bubbleUp(heap.length - 1);
    };

    const pop = () => {
        if (heap.length === 0) return undefined;
        if (heap.length === 1) return heap.pop();
        const top = heap[0];
        heap[0] = heap.pop();
        bubbleDown(0);
        return top;
    };

    // Build heap
    for (let v of piles) push(v);

    // k operations
    while (k-- > 0) {
        let x = pop();
        if (x === undefined) break;
        let removed = Math.floor(x / 2);
        let newVal = x - removed;
        push(newVal);
    }

    // Sum remaining
    let total = 0;
    while (heap.length) total += pop();
    return total;
};
