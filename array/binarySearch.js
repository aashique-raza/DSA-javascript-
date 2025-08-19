

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
const arr = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
console.log(findFirstAndLast(arr, target)); // Output: [1, 3]
