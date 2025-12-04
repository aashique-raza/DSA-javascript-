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
}

let maxHeap=new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(30)
console.log('max heap',maxHeap)