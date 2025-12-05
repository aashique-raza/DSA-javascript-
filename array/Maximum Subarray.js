
console.log("Maximum Subarray");


// !    Kadane's Algorithm Maximum Subarray

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

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
// console.log(maxSubArray([-1,-2,-3,-4])); // Output:
// // Output: 0 (since all elements are negative, we return 0)
// console.log(maxSubArray([1,2,3,4])); // Output:
console.log(maxSubArray([-1])); // Output: 10 (sum of all elements)