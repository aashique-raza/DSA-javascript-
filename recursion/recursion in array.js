

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
const sum = sumOfArrayElements(myArray);
console.log("Sum of array elements:", sum);

// !  sum of array elements using recursion way 2

function sumOfArrayElementsWay2(arr, index = arr.length - 1) {  
    if(index < 0) {
        return 0;
    }
    return arr[index] + sumOfArrayElementsWay2(arr, index - 1);
}

