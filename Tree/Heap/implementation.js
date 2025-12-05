class MaxHeap{
    constructor(){
        this.heap=[]
    }

    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return (2*i)+1
    }
    getRightChild(i){
        return (2*i)+2
    }

    swap(i1,i2){
         [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    insert(val){
        this.heap.push(val)
        this.heapifyUp()    
    }
    heapifyUp(){
        let lastIdx=this.heap.length-1

        while(lastIdx>0){
            let parent=this.getParent(lastIdx)
            if(this.heap[lastIdx]>this.heap[parent]){
                this.swap(lastIdx,parent)
                lastIdx=parent
            }else{
                break
            }
        }
    }

    remove(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()

         let max=this.heap[0]
         
         this.heap[0]=this.heap.pop()
         this.heapifyDown()
         return max;
    }

    heapifyDown(){
        let index=0;
        let length=this.heap.length
        while(true){
            let leftIdx=this.getLeftChild(index)
            let rightIdx=this.getRightChild(index)
            let largest=index
            if(leftIdx<length && this.heap[leftIdx]>this.heap[largest]){
               largest=leftIdx
            }

            if(rightIdx<length&&this.heap[rightIdx]>this.heap[largest]){
                largest=rightIdx
            }

            if(largest!=index){
                this.swap(index,largest)
                index=largest
            }else{
                break
            }
        }
    }
}

let maxHeap=new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(30)
console.log('max heap',maxHeap)



// ! min heap--------------------

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
}
