

console.log("merge sort")

// ! merge sort --

function mergeSort(arr,s,e){

    if(s>=e){
        return
    }
    // let mid=Math.floor(e+(e-s)/2)
    let mid = Math.floor(s + (e - s) / 2);

    // left part call--

    mergeSort(arr,s,mid)

    // right part call

    mergeSort(arr,mid+1,e)

 return   merge(arr,s,mid,e)
}

function merge(arr,s,mid,e){

    let i=s;
    let j=mid+1
    let result=[]
    let k=0;

    while(i<=mid&&j<=e){

        if(arr[i]<=arr[j]){
            result[k]=arr[i]
            i++
            k++
        }else{
            result[k]=arr[j]
            j++
            k++
        }
    }

    while(i<=mid){
          result[k]=arr[i]
            i++
            k++
    }
     while(j<=e){
          result[k]=arr[j]
            j++
            k++
    }
    for (let index = 0; index < result.length; index++) {
    arr[s + index] = result[index];
  }

    return result
}


let arr=[4,5,6,3,1,2,5]

console.log("sorted arrays",mergeSort(arr,0,arr.length-1))