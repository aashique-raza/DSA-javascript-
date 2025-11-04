

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
printArrayElements(myArray);

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
printArrayReverse(myArray);