

// ! linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }   
    return -1; // Return -1 if the target element is not found
}
// Example usage
const arr = [5, 3, 8, 4, 2];
const target = 4;
const index = linearSearch(arr, target);