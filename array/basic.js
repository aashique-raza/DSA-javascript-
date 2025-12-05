
console.log("Array Basics");

// ! revese  an array

// * approach 1 : using for loop and extra array

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// * approach 2 : two pointer approach
function reverseArrayTwoPointer(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // swap elements at left and right
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        // move pointers towards the center
        left++;
        right--;
    }
    return arr;
}
// console.log(reverseArrayTwoPointer([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// ! find max and min in an array
function findMaxMin(arr) {
    if (arr.length === 0) return { max: null, min: null };
    let max=-Infinity;
    let min=Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }   
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    return { max, min };

}
// console.log(findMaxMin([3, 1, 4, 1, 5, 9])); // { max: 9, min: 1 }

// ! sum of all elements in an array
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(sumOfArray([1, 2, 3, 4, 5])); // 15
// * built-in method
function sumOfArrayBuiltIn(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumOfArrayBuiltIn([1, 2, 3, 4, 5])); // 15

// ! count frequency of elements in an array
function countFrequency(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    return map;
}
// console.log(countFrequency([1, 2, 2, 3, 3, 3])); // { '1': 1, '2': 2, '3': 3 }

// ! check if an array is sorted
function isArraySorted(arr, order = 'asc') {
    if( arr.length === 0) return true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (order === 'asc') {
            if (arr[i] > arr[i + 1]) return false;
        } else if (order === 'desc') {
            if (arr[i] < arr[i + 1]) return false;
        }
    }
    return true;
}

// console.log(isArraySorted([1, 2, 3, 4, 5])); // true
// console.log(isArraySorted([5, 4, 3, 2, 1], 'desc')); // true
// console.log(isArraySorted([1, 3, 2, 4])); // false   
