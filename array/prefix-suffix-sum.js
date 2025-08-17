console.log("Array Prefix and Suffix Sum");

// ! range sum using prefix 

function prefixSum(arr, queries) {

    let prefix = []
    let result = []
    prefix[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i]
    }

    for (let i = 0; i < queries.length; i++) {
        let [L, R] = queries[i];
        let sum = prefix[R] - (L > 0 ? prefix[L - 1] : 0);
        result.push(sum);
    }
    return result;
}

// console.log(prefixSum([1,2,3,4,5], [[0,2],[1,3],[2,4]]));
// console.log(prefixSum([10,20,30,40,50], [[0,1],[1,3],[2,4]]));

// ! subarray sum equals k

function subarraySum(nums, k) {
  
    let map={}
    let result=0

    let cumulativeSum = 0;
    map[0] = 1; // Initialize with sum 0

    for(let i=0; i<nums.length; i++) {

         cumulativeSum = cumulativeSum + nums[i];
        let need= cumulativeSum - k;

        if(map.hasOwnProperty(need)) {
            result += map[need];
        }
        if(map.hasOwnProperty(cumulativeSum)) {
            map[cumulativeSum]++;
        }
        else {
            map[cumulativeSum] = 1;
        }
    }
    return result;
}

console.log(subarraySum([1,2,3,4,5], 5)); // Output: 2 (subarrays: [2,3], [5])
console.log(subarraySum([1,-1,0], 0)); // Output: 3 (subarrays: [1,-1], [-1,0], [1,-1,0])
console.log(subarraySum([1,-1], 0)); // Output: 1 (subarray: [1,-1])
console.log(subarraySum([1, 2, 3], 3)); // Output: 2 (subarrays: [1,2], [3])