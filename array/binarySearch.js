

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
console.log(searchInRotatedArray([4,5,6,7,0,1,2], 0)); // Output: 4 (index of target)
console.log(searchInRotatedArray([4,5,6,7,0,1,2], 6)); // Output: 2 (index of target)
console.log(searchInRotatedArray([4,5,6,7,0,1,2], 3)); // Output: -1 (target not found)
console.log(searchInRotatedArray([6,7,1,2,3,4,5], 2)); // Output: 3 (index of target)

