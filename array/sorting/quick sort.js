



// ! quick sort algorithm implementation

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
function quickSort(arr) {
    if (arr.length <= 1) return arr;    
    let pi=partition(arr,low,hight)
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
    return arr;
}
let arr = [10, 7, 8, 9, 1, 5];
console.log("Unsorted array:", arr);
let sortedArr = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:", sortedArr);
    
