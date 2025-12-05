
// ! reverse an array 

function reverseArray(arr) {
    let i=0;
    let j=arr.length-1;
    while(i<j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }   
    return arr;
}
// console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// ! remove duplicates from sorted array
function removeDuplicates(arr) {
      let i=0; let j=1

    while(j<arr.length){
        if(arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]
        }
        j++
    }

    return i+1
    
}

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

// ! merge two sorted arrays
function mergeSortedArrays(arr1, arr2,m,n) {
    let i = m - 1;        // last valid index in arr1
    let j = n - 1;        // last index in arr2
    let k = m + n - 1;    // last position in arr1

    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }

    // Copy remaining elements from arr2 if any
    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }

    return arr1;
    
}
// console.log(mergeSortedArrays([1,2,3,0,0,0], [2,5,6], 3, 3)); // Output: [1, 2, 2, 3, 5, 6]

// ! two sum

// * this is for only sorted array
function twoSum(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        const sum = arr[i] + arr[j];
        if (sum === target) {
            return [i, j];
        }
        if (sum < target) {
            i++;
        }   else {
            j--;
        }   
    }
    return null; // No pair found
}
// console.log(twoSum([1, 2, 3, 4, 6], 6)); // Output: [1, 3] (2 + 4 = 6)

// * this is for unsorted array
function twoSumUnsorted(arr, target) {

    let map={}

    for(let i=0; i<arr.length; i++) {
        let complement = target - arr[i];
        if(map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i;
    }
    return null; // No pair found
    
}


// ! move zeroes to end of array
function moveZeroesToEnd(arr) {
    let i = 0; // Pointer for the next non-zero element
    let j=0

    while( j < arr.length) {
        if(arr[j] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        j++;
    }
    return arr;
}
// console.log(moveZeroesToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

// ! find the maximum sum of a subarray of size k
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    let i=0
    let j=0
    

    while(j < arr.length) {

        if(k<j-i+1){
           currentSum= currentSum-arr[i]
            i++; 
        }
        currentSum+= arr[j];
        maxSum = Math.max(maxSum, currentSum);
        
        j++;
    }
return maxSum;

}

// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (subarray [5, 1, 3])
// console.log(maxSumSubarray([1, 2, 3, 4, 5], 2)); // Output: 9 (subarray [4, 5])
// console.log(maxSumSubarray([1, 2, 3, 4, 5], 1)); // Output: 5 (subarray [5])
// console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], k=3)); // Output: 9 (subarray [5, 1, 3])

// !min size subarray with sum greater than or equal to target

function minSizeSubarrayWithSum(arr, target) {
    let minLength = Infinity;
    let currentSum = 0;
    let i = 0;
    let j = 0;

    while (j < arr.length) {
        currentSum += arr[j];
        while (currentSum >= target) {
            minLength = Math.min(minLength, j - i + 1);
            currentSum -= arr[i];
            i++;
        }
        j++;
    }
    return minLength === Infinity ? 0 : minLength;

}

// console.log(minSizeSubarrayWithSum([2, 1, 5, 2, 3, 2], 7));  // Output: 2 (subarray [5, 2])
// console.log(minSizeSubarrayWithSum([2, 1, 5, 2, 3, 2], 10)); // Output: 5 (subarray [2, 1, 5, 2, 3])
// console.log(minSizeSubarrayWithSum([1, 2, 3, 4, 5], 11)); // Output: 3 (subarray [3, 4, 5])
// console.log(minSizeSubarrayWithSum([1, 2, 3], 7)); // Output: 0 (no subarray found)


// ! longest subaarray with at most k distinct elements
function longestSubarrayWithKDistinct(arr, k) {
    let maxLength = 0;
    let i = 0;
    let j = 0;
    const freqMap = {}
    while (j < arr.length) {
        
        if(freqMap[arr[j]]) {
            freqMap[arr[j]]++;
        }else {
            freqMap[arr[j]] = 1;
            k--;
        }

        while (k < 0) {
            freqMap[arr[i]]--;
            if (freqMap[arr[i]] === 0) {
                delete freqMap[arr[i]];
                k++;
            }
            i++;
        }
        if(k >= 0) {
            maxLength = Math.max(maxLength, j - i + 1);
        }
        j++;

};
    return maxLength;
}

// console.log(longestSubarrayWithKDistinct([1, 2, 1, 2, 3], 2)); // Output: 4 (subarray [1, 2, 1, 2])
// console.log(longestSubarrayWithKDistinct([1, 2, 3, 4, 5], 3)); // Output: 3 (subarray [3, 4, 5])
// console.log(longestSubarrayWithKDistinct([1, 2, 1, 2, 3], 1)); // Output: 2 (subarray [1, 1] or [2, 2])
// console.log(longestSubarrayWithKDistinct([1, 2, 3], 0)); // Output: 0 (no subarray found)  

// ! Longest Subarray with Sum ≤ k
function longestSubarrayWithSumLessThanOrEqualToK(arr, k) {
    let maxLength = 0;
    let currentSum = 0;
    let i = 0;
    let j = 0;   
    while (j < arr.length) {
        currentSum += arr[j];   
        while (currentSum > k && i <= j) {
            currentSum -= arr[i];
            i++;
        }
        maxLength = Math.max(maxLength, j - i + 1);
        j++;
    }   

    return maxLength;


}

// console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 5)); // Output: 2 (subarray [2, 3])
// console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 10)); // Output: 4 (subarray [1, 2, 3, 4])
// console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 15)); // Output: 5 (subarray [1, 2, 3, 4, 5])
// console.log(longestSubarrayWithSumLessThanOrEqualToK([1, 2, 3, 4, 5], 0)); // Output: 0 (no subarray found)

// ! fruit into baskets
function fruitIntoBaskets(fruits) {
    let maxFruits = 0;
    let i = 0;
    let j = 0;
    const fruitCount = {};
    let basketCount = 0;

    while (j < fruits.length) {
        if(fruitCount[fruits[j]]) {
            fruitCount[fruits[j]]++;
        } else {
            fruitCount[fruits[j]] = 1;
            basketCount++;
        }

        while (basketCount > 2) {
            fruitCount[fruits[i]]--;    
            if (fruitCount[fruits[i]] === 0) {
                delete fruitCount[fruits[i]];
                basketCount--;
            }   
            i++;

        }
        maxFruits = Math.max(maxFruits, j - i + 1);
        j++;
    }
    return maxFruits;


}
// console.log(fruitIntoBaskets(['A', 'B', 'C', 'A', 'C'])); // Output: 3 (subarray ['A', 'B', 'C'])
// console.log(fruitIntoBaskets(['A', 'B', 'C', 'A', 'C', 'B'])); // Output: 5 (subarray ['A', 'B', 'C', 'A', 'C'])
// console.log(fruitIntoBaskets(['A', 'B', 'C', 'A', 'C', 'B', 'D'])); // Output: 4 (subarray ['A', 'B', 'C', 'A'])

