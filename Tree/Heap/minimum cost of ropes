

// ! minimum cost of ropes

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChild(i) {
        return (2 * i) + 1;
    }

    getRightChild(i) {
        return (2 * i) + 2;
    }

    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {
            let parent = this.getParent(idx);

            if (this.heap[idx] < this.heap[parent]) {
                this.swap(idx, parent);
                idx = parent;
            } else {
                break;
            }
        }
    }

     remove(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()

         let min=this.heap[0]
         
         this.heap[0]=this.heap.pop()
         this.heapifyDown()
         return min;
    }

    heapifyDown(){
        let index=0;
        let length=this.heap.length
        while(true){
            let leftIdx=this.getLeftChild(index)
            let rightIdx=this.getRightChild(index)
            let lowest=index
            if(leftIdx<length && this.heap[leftIdx]<this.heap[lowest]){
               lowest=leftIdx
            }

            if(rightIdx<length&&this.heap[rightIdx]<this.heap[lowest]){
                lowest=rightIdx
            }

            if(lowest!=index){
                this.swap(index,lowest)
                index=lowest
            }else{
                break
            }
        }
    }
}





function minCostOfRopes(arr) {
    if (arr.length <= 1) return 0;

    
    let minHeap = new MinHeap();
    for (let rope of arr) {
        minHeap.insert(rope);
    }

    let totalCost = 0;

    
    while (minHeap.size() > 1) {
        
        let first = minHeap.extractMin();
        let second = minHeap.extractMin();

       
        let currentCost = first + second;

        
        totalCost += currentCost;

       
        minHeap.insert(currentCost);
    }

    return totalCost;
}