

// ! recursion in array

//   print array elements using recursion

function printArrayElements(arr, index = 0) {
  // base case
  if (index >= arr.length) {
    return;
  }
    console.log(arr[index]);
    printArrayElements(arr, index + 1); 
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
// printArrayElements(myArray);

//  print array reverse using recursion
function printArrayReverse(arr, index = arr.length - 1) {
  // base case
  if (index < 0) {
    return;
  }
    console.log(arr[index]);
    printArrayReverse(arr, index - 1); 
}
// Example usage:
// printArrayReverse(myArray);


// print array reverse using recursion  way 2 

function printArrayReverseWay2(arr, index = 0) {
  // base case
  if (index >= arr.length) {
    return;
  }
    printArrayReverseWay2(arr, index + 1); 
    console.log(arr[index]);
}
// Example usage:
// printArrayReverseWay2(myArray);


// ! sum of array elements using recursion

function sumOfArrayElements(arr, index = 0) {

    if(index >= arr.length) {
        return 0;
    }
    return arr[index] + sumOfArrayElements(arr, index + 1);
}
// Example usage:
// const sum = sumOfArrayElements(myArray);
// console.log("Sum of array elements:", sum);

// !  sum of array elements using recursion way 2

function sumOfArrayElementsWay2(arr, index = arr.length - 1) {  
    if(index < 0) {
        return 0;
    }
    return arr[index] + sumOfArrayElementsWay2(arr, index - 1);
}


// ! find min element in array using recursion

function findMinInArray(arr, index = 0) {

    if(index>=arr.length){
        return Infinity;
    }

    return Math.min(arr[index], findMinInArray(arr, index + 1));
}
// Example usage:
const minElement = findMinInArray(myArray);
console.log("Minimum element in array:", minElement);


// ! check array is sorted using recursion

function isArraySorted(arr, index = 0) {  
    if(index >= arr.length - 1) {
        return true;
    } 

    if(arr[index] > arr[index + 1]) {
        return false;
    }
    return isArraySorted(arr, index + 1);
}
// Example usage:
const sortedArray = [10, 20, 30, 40, 50];
const unsortedArray = [10, 30, 20, 40, 50];
// console.log("Is sortedArray sorted?", isArraySorted(sortedArray)); // true
// console.log("Is unsortedArray sorted?", isArraySorted(unsortedArray)); // false

// ! linear search in array using recursion

function linearSearch(arr, target, index = 0) {  
    if(index >= arr.length) {
        return -1; // not found
    }
    if(arr[index] === target) {
        return index; // found
    }
    return linearSearch(arr, target, index + 1);
}
// Example usage:
const target = 30;
const foundIndex = linearSearch(myArray, target);
// console.log(`Element ${target} found at index:`, foundIndex);

// ! binary search in array using recursion

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if(left > right) {
        return -1; // not found
    } 
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) {
        return mid; // found
    } 
    else if(arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    } 
    else {
        return binarySearch(arr, target, left, mid - 1);
    } 
}
// Example usage:
// const sortedArrayForBinarySearch = [10, 20, 30, 40, 50];
// const targetForBinarySearch = 40;
// const foundIndexBinary = binarySearch(sortedArrayForBinarySearch, targetForBinarySearch);
// console.log(`Element ${targetForBinarySearch} found at index:`, foundIndexBinary);
