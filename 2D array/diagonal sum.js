

// ! diagonal sum---

function diagonalSum(matrix){

    let n=matrix.length
    let sum=0;

    for(let i=0; i<matrix.length; i++){

        for(let j=0; j<matrix[i].length; j++){

            if(i==j){
                sum+=matrix[i][j]
            }else if(i + j == n - 1){
                sum+=matrix[i][j]
            }
        }
    }

    return sum
}

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(diagonalSum(matrix))