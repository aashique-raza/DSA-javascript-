// ! right rotation by 1
function rightRotation(arr){

    let copy=arr[arr.length-1]
    console.log(copy)

    for(let i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1]

        console.log(`step ${i}`,arr)
    }

    arr[0]=copy

    return arr
}

console.log(rightRotation([1,2,3,4,5]))