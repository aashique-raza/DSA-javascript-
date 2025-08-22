// ! right rotation by 1
function rightRotation(nums){

    let copy=nums[nums.length-1]
    console.log(copy)

    for(let i=nums.length-1; i>0; i--){
        nums[i]=nums[i-1]

        console.log(`step ${i}`,nums)
    }

    nums[0]=copy

    return nums
}

// console.log(rightRotation([1,2,3,4,5]))

// ! right rotation by k
// * optimized solution--

function rightRotationByK(nums,k){

    let n = nums.length;
     k = k % n;  // in case k > n
    //  first reverse k to length-1
    let i=n-k; let j=n-1
    while(i<j){
        let temp=nums[i]
        nums[i]=nums[j]
        nums[j]=temp
        i++
        j--
    }

    // after this reverse numsay look like this
    // [1,2,3,5,4]

    //  second reverse start to k-1

    i=0; j=n-k-1

    while(i<j){
         let temp=nums[i]
        nums[i]=nums[j]
        nums[j]=temp
        i++
        j--
    }
    // after this reverse numsay look like this
    // [3,2,1,4,5]

    // final reverse start to end

    i=0; j=n-1

     while(i<j){
         let temp=nums[i]
        nums[i]=nums[j]
        nums[j]=temp
        i++
        j--
    }

    return nums

}

console.log(rightRotationByK([1,2,3,4,5],3))