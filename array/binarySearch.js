

// ! binary search implementation
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        }
        if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        }

        else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if the target element is not found
}
// Example usage
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const target = 5;





// ! Find First & Last Position Of Element In Sorted Array

function findFirstAndLast(arr, target) {

    let s=0; e=arr.length-1; 
    let leftmost = -1;
    let rightmost = -1;

    // Find the leftmost index
    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (arr[mid] === target) {
            leftmost = mid; // Update leftmost index
            e = mid - 1; // Search in the left half
        } else if (arr[mid] < target) {
            s = mid + 1; // Search in the right half
        } else {
            e = mid - 1; // Search in the left half
        }
    }

    // Find the rightmost index
    s = 0; e = arr.length - 1;
    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (arr[mid] === target) {
            rightmost = mid;
            s = mid + 1; // Search in the right half
        } else if (arr[mid] < target) {
            s = mid + 1; // Search in the right half
        }
        else {            e = mid - 1; // Search in the left half
        }
    }
    return [leftmost, rightmost]; // Return the indices of the first and last occurrences
}

// Example usage
// const arr = [1, 2, 2, 2, 3, 4, 5];
// const target = 2;
// console.log(findFirstAndLast(arr, target)); // Output: [1, 3]

// !   Search Insert Position

function searchInsertPosition(arr, target) {
    let s=0;
    let e=arr.length-1;
    let insertIdx=0

    while (s <= e) {
         let mid = Math.floor((s + e) / 2);

        if(arr[mid] === target) {
            insertIdx = mid; // If target is found, return the index
            return insertIdx;
        }else if(arr[mid] < target) {
            s = mid + 1; // Search in the right half
            insertIdx = mid + 1; // Update insert index to the right of mid
        }else {
            e = mid - 1;
            insertIdx = mid; // Update insert index to the left of mid
        }
       
    }
    return insertIdx; // Return the index where the target should be inserted
}


// Example usage
// const arr = [1, 3, 5, 6];
const target = 5;
// console.log(searchInsertPosition(arr, target)); // Output: 2 
// console.log(searchInsertPosition(arr, 7)); // Output: 4 (7 should be inserted at index 4)
// console.log(searchInsertPosition(arr, 2)); // Output: 1 (2 should be inserted at index 1)
// console.log(searchInsertPosition(arr, 0)); // Output: 0 (0 should be inserted at index 0)

// ! find minimum in rotated sorted array

function findMinInRotatedArray(arr) {
    let s = 0, e = arr.length - 1;

    while (s < e) {
        let mid = Math.floor((s + e) / 2);

        if (arr[mid] > arr[e]) {
            s = mid + 1; // min is in right half
        } else {
            e = mid; // min is in left half including mid
        }
    }
    return s; // at the end, s == e → minimum element
}

// Example usage
// const arr = [4, 5, 6, 7, 0, 1, 2];
// console.log(findMinInRotatedArray(arr)); // Output: 0
// console.log(findMinInRotatedArray([3, 4, 5, 1, 2])); // Output: 1
// console.log(findMinInRotatedArray([11, 13, 15, 17])); // Output: 11

// ! Search in Rotated Sorted Array

function searchInRotatedArray(arr, target) {


 let minimumValueINdex=findMinInRotatedArray(arr)

 
  
let s=0, e=minimumValueINdex-1;
// console.log("s: ", s, "e: ", e, "minimumValueINdex: ", minimumValueINdex)
    

    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if(arr[mid] === target) {
            return mid; // Return the index if target is found
        }else if(arr[mid] < target) {
            s = mid + 1; // Search in the right half
        }   
        else {
            e = mid - 1; // Search in the left half
        }   
    }

     
     let end=arr.length-1
    while (minimumValueINdex <= end) {
        let mid = Math.floor((minimumValueINdex + end) / 2);  
        if(arr[mid] === target) {
            return mid; // Return the index if target is found
        }
        else if(arr[mid] < target) {
            minimumValueINdex = mid + 1; // Search in the right half
        }
        else {
            end = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if target is not found
}
// Example usage
// const arr = ;
// const target = 0;
// console.log(searchInRotatedArray([1,3], 3)); // Output: 1 (index of target)
// console.log(searchInRotatedArray([4,5,6,7,0,1,2], 0)); // Output: 4 (index of target)
// console.log(searchInRotatedArray([4,5,6,7,0,1,2], 6)); // Output: 2 (index of target)
// console.log(searchInRotatedArray([4,5,6,7,0,1,2], 3)); // Output: -1 (target not found)
// console.log(searchInRotatedArray([6,7,1,2,3,4,5], 2)); // Output: 3 (index of target)

// ! sort colors

// approach: Count the occurrences of each color (0, 1, 2) and then reconstruct the array based on these counts.
function sortColors(arr) {
    let count0=0 ;
    let count1=0 ; let count2=0;
    result=[]

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            count0++;
        } else if(arr[i] === 1) {
            count1++;
        } else if(arr[i] === 2) {
            count2++;
        }
    }

    for(let i=0; i<count0; i++) {
        result.push(0);
    }
    for(let i=0; i<count1; i++) {
        result.push(1);
    }
    for(let i=0; i<count2; i++) {
        result.push(2);
    }
    return result; // Return the sorted array
}
// Example usage
// const arr = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(arr)); // Output: [0, 0, 1, 1, 2, 2]

//  approach: Use the Dutch National Flag algorithm to sort the colors in a single pass.
var sortColors = function(nums) {
    let i = 0, j = 0, k = nums.length - 1;

    while (j <= k) {
        if (nums[j] === 2) {
            let temp = nums[j];
            nums[j] = nums[k];
            nums[k] = temp;
            k--; // right side shrink
        } 
        else if (nums[j] === 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j++; // dono ko aage badhao
        } 
        else {
            j++; // agar 1 hai to bas mid pointer aage
        }
    }
    return nums;
};
// Example usage
// const arr = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(arr)); // Output: [0, 0, 1, 1, 2, 2]


// ! Find pair with given sum 

function findPairWithSum(arr, targetSum) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        let sum = arr[left] + arr[right];

        if(sum === targetSum) {
            return [arr[left], arr[right]]; // Return the pair if found
        }
        else if(sum < targetSum) {
            left++; // Move left pointer to increase sum
        }   
        else {
            right--; // Move right pointer to decrease sum
        }       
    }
    return null; // Return null if no pair is found
}

// Example usage
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetSum = 10;
// console.log(findPairWithSum(arr, targetSum)); // Output: [1, 9] or [2, 8] or [3, 7] or [4, 6]

//  ! Find Intersection of Two Arrays
var intersection = function(nums1, nums2) {
    
    let set=new Set()
    let result=[]
    console.log(set)
    let seen={}

    for(let i=0; i<nums1.length; i++){
        if(!seen[nums1[i]]){
            seen[nums1[i]]=1
        }
    }

    for(let i=0; i<nums2.length; i++){
        if(seen[nums2[i]]){

            if(!set.has(nums2[i])){
                result.push(nums2[i])
            }
            set.add(nums2[i]); // Add the element to the set if it exists in nums1
        }
    }

    return result; // Return the intersection of the two arrays
};

// Example usage

console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
