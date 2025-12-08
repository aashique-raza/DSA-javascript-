

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