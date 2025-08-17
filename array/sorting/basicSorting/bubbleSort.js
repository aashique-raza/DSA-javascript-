
// bubble sort implementation

function bubbleSortAsc(arr) {

    for(let i=0; i<arr.length ; i++) {

        for(let j=0; j<arr.length-1-i; j++) {

            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortAsc([5, 1, 4, 2, 8])); // Output: [1, 2, 4, 5, 8]
console.log(bubbleSortAsc([3, 2, 1])); // Output: [1, 2, 3]
console.log(bubbleSortAsc([1, 2, 3])); // Output: [1, 2, 3]

function bubbleSortDesc(arr) {
    for(let i=0; i<arr.length ; i++) {
        for(let j=0; j<arr.length-1-i; j++) {
            if(arr[j]<arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSortDesc([5, 1, 4, 2, 8])); // Output: [8, 5, 4, 2, 1]
console.log(bubbleSortDesc([3, 2, 1])); // Output: [3, 2, 1]
console.log(bubbleSortDesc([1, 2, 3])); // Output: [3, 2, 1]