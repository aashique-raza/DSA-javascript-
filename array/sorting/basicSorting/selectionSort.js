

// selectionSort implementation

function selectionSort(arr) {

    for(let i=0; i<arr.length; i++){

        let minValueIndex=i
        for(let j=i+1; j<arr.length; j++){

            if(arr[j]<arr[minValueIndex]){
                minValueIndex=j
            }
        }
        if(minValueIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minValueIndex];
            arr[minValueIndex] = temp;
        }
    }
    return arr;
}

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log("Unsorted array:", arr);
const sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);

// descending order
function selectionSortDescending(arr) {
    for(let i=0; i<arr.length; i++){
        let maxValueIndex=i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]>arr[maxValueIndex]){
                maxValueIndex=j
            }

        }
        if(maxValueIndex !== i){
            let temp = arr[i];
            arr[i] = arr[maxValueIndex];
            arr[maxValueIndex] = temp;
        }
    }
    return arr;
}
// Example usage for descending order
const arrDesc = [64, 25, 12, 22, 11];
console.log("Unsorted array (descending):", arrDesc);
const sortedArrDesc = selectionSortDescending(arrDesc);
console.log("Sorted array (descending):", sortedArrDesc);