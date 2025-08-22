
// console.log('maximum sum circular subaaray')

// // * brute force approach

// function leftRotation(arr){

//     let copy=arr[0]
//     // console.log(copy)

//     for(let i=0; i<arr.length-1; i++){
//         arr[i]=arr[i+1]

//         // console.log(`step ${i}`,arr)
//     }

//     arr[arr.length-1]=copy

//     return arr
// }

// function maxSubArray(nums) {

//     let max= -Infinity; // Initialize max to the smallest possible value
//     let currentSum= -Infinity; // Initialize current sum to the smallest possible value

//     for(let i=0; i<nums.length; i++){
//         currentSum += nums[i];
//         max = Math.max(max, currentSum);
//        if(currentSum < 0) {
//             currentSum = 0; // Reset current sum if it goes negative
//         }
        
//     }
//     ; // If all elements are negative, return 0
//     return max;
// }

// function circularSubArray(nums){
//     let max=-Infinity;

//     for(let i=0; i<nums.length; i++){
//         let rotatedArr=leftRotation(nums)
//         // console.log('rotatedArr',rotatedArr)
//         let sum;

//         sum=maxSubArray(nums)
//         // console.log('sum',sum)
//         max=Math.max(sum,max)
//     }

//     return max
// }
// // console.log(circularSubArray([5,-3,5]))
// // console.log(circularSubArray([1,-2,3,-2]))
// console.log(circularSubArray([-3,-2,-3]))


function leftRotation(arr){
    let copy = arr[0];
    for(let i=0; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy;
    return arr;
}

function maxSubArray(nums) {
    let max = -Infinity; 
    let currentSum = 0; 
    for(let i=0; i<nums.length; i++){
        currentSum += nums[i];
        max = Math.max(max, currentSum);
        if(currentSum < 0) {
            currentSum = 0;
        }
    }
    return max;
}

function circularSubArray(nums){
    let max = -Infinity;
    let arr = [...nums]; // copy banayi, taaki original na badle

    for(let i=0; i<nums.length; i++){
        let sum = maxSubArray(arr);
        max = Math.max(sum, max);
        leftRotation(arr); // ab copy ko rotate karenge
    }
    return max;
}

// console.log(circularSubArray([5,-3,5]));   // 10
// console.log(circularSubArray([1,-2,3,-2])); // 3
// console.log(circularSubArray([-3,-2,-3]));  // -2



//  * approach 2 optimal ---

function maxSubArray(nums) {

    let max= -Infinity; // Initialize max to the smallest possible value
    let currentSum= 0; // Initialize current sum to the smallest possible value

    for(let i=0; i<nums.length; i++){
        currentSum += nums[i];
        max = Math.max(max, currentSum);
       if(currentSum < 0) {
            currentSum = 0; // Reset current sum if it goes negative
        }
        
    }
    ; // If all elements are negative, return 0
    return max;
}
function minSubArray(nums) {
    let min = Infinity; 
    let currentSum = 0; 
    for(let i=0; i<nums.length; i++){
        currentSum = Math.min(currentSum + nums[i], nums[i]);
        min = Math.min(min, currentSum);
    }
    return min;
}


function  circularSumOptimal(nums){

    let SUM=0

    // find total sum of nums array---

    for(let i=0; i<nums.length; i++){
        SUM+=nums[i]
    }
    console.log('SUM',SUM)

    let minSum;

    // min sum-----
    minSum=minSubArray(nums)

    console.log('minSum',minSum)

    let maxSum;

    // max sum---
    maxSum=maxSubArray(nums)

        console.log('maxSum',maxSum)

    let circular_sum=SUM-minSum
     console.log('circular_sum',circular_sum)

    if(circular_sum>0){
        return Math.max(maxSum,circular_sum)
    }

    return maxSum


}


console.log(circularSumOptimal([5,-3,5]))
// console.log(circularSumOptimal([-1,-1,-1]))