

//  ! linear search in 2D array--

function linearSearch(arr,target){

    console.log('arr',arr)
    for(let i=0; i<arr.length; i++){

        for(j=0; j<arr[i].length; j++){

          
            if(arr[i][j]==target){
                  console.log('hello')
                return [i,j]
            }
        }
    }

    return [-1,-1]
}

// let mat=[[1,2,3],[4,5,6],[7,8,9]]

// console.log(linearSearch(mat,8))

function staircaseSearch(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Start from top-right corner
    let i = 0, j = cols - 1;

    while (i < rows && j >= 0) {
        if (matrix[i][j] === target) {
            return [i, j];  // found
        } else if (matrix[i][j] > target) {
            j--;  // move left
        } else {
            i++;  // move down
        }
    }

    return [-1, -1]; // not found
}

// Example
let mat = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10,13,14,17]
];

console.log(staircaseSearch(mat, 5));   // [1,1]
console.log(staircaseSearch(mat, 20));  // [-1,-1]
