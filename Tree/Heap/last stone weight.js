class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChild(i) {
    return 2 * i + 1;
  }
  getRightChild(i) {
    return 2 * i + 2;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }
  heapifyUp() {
    let lastIdx = this.heap.length - 1;

    while (lastIdx > 0) {
      let parent = this.getParent(lastIdx);
      if (this.heap[lastIdx] > this.heap[parent]) {
        this.swap(lastIdx, parent);
        lastIdx = parent;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length == 0) return null;
    if (this.heap.length == 1) return this.heap.pop();

    let max = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let leftIdx = this.getLeftChild(index);
      let rightIdx = this.getRightChild(index);
      let largest = index;
      if (leftIdx < length && this.heap[leftIdx] > this.heap[largest]) {
        largest = leftIdx;
      }

      if (rightIdx < length && this.heap[rightIdx] > this.heap[largest]) {
        largest = rightIdx;
      }

      if (largest != index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }
  }
}

let maxHeap = new MaxHeap();
// maxHeap.insert(2)
// maxHeap.insert(7)
// maxHeap.insert(4)
// maxHeap.insert(1)
// maxHeap.insert(8)
// maxHeap.insert(1)
console.log("max heap", maxHeap.heap);

// ! last stone weight---

function lastStoneWeight(stones) {
  if (stones.length == 0) return 0;
  const heap = [];
  const swap = (i, j) => {
    const t = heap[i];
    heap[i] = heap[j];
    heap[j] = t;
  };

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
  for (let v of stones) push(v);
  console.log('heap here',heap)
  while (heap.length > 1) {
    let y = pop();
    let x = pop();
    
    if (x < y) {
        console.log('smash',y-x)
      push(y - x);
    }
  }
  
  return heap[0]?heap[0]:0;
}

console.log("result", lastStoneWeight([2, 2]));
