// ! height of heap--

//  approach 1: build heap

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIdx(i) {
    return 2 * i + 1;
  }
  getRightChildIdx(i) {
    return 2 * i + 2;
  }
  swap(idx1, idx2) {
    return ([this.heap[idx2], this.heap[idx1]] = [
      this.heap[idx1],
      this.heap[idx2],
    ]);
  }
  insert(val) {
    this.heap.push(val);
    return this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.heap.length - 1;

    let parentIdx = this.getParentIdx(idx);

    while (this.heap[idx] > this.heap[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(parentIdx);
    }
    return this.heap;
  }

  heightOfHeap() {
    let i = 0;
    let height = 0;

    while (i < this.heap.length) {
      let leftChild = this.getLeftChildIdx(i);
      if (this.heap[leftChild] == undefined) {
        return height;
      }
      height++;
      i = this.getLeftChildIdx(i);
    }
    return height;
  }

//   heightOfHeap() {
//     if (this.heap.length === 0) return 0; // Edge case: Empty heap

//     let height = 0;
//     let i = 0; // Root se start karo

//     // Jab tak left child exist karta hai, neeche jaate raho
//     while (this.getLeftChildIdx(i) < this.heap.length) {
//       height++;
//       i = this.getLeftChildIdx(i); // Next level pe jump karo
//     }

//     return height;
//   }
}

let maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(2);
// maxHeap.insert(3)
// maxHeap.insert(4)
console.log("height", maxHeap.heightOfHeap());
console.log("max heap", maxHeap);
