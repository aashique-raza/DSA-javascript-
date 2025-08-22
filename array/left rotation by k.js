console.log("left rotation")

// ! left rotation by 1
function leftRotation(arr){

    let copy=arr[0]
    console.log(copy)

    for(let i=0; i<arr.length-1; i++){
        arr[i]=arr[i+1]

        console.log(`step ${i}`,arr)
    }

    arr[arr.length-1]=copy

    return arr
}

console.log(leftRotation([1,2,3,4,5]))

// ! left rotation by k

// * brute force approach

function leftRotationByK(arr,k){

    for(let i=0; i<1; i++){
        let copy=arr[i-i]

        for(let j=0; j<arr.length-1; j++){
            arr[i]=arr[i+1]
        }

        arr[arr.length-1]=copy
    }
    return arr
}

// console.log(leftRotationByK([1,2,3,4,5,6],2))