// ! maximum row sum ----


function maximumRowSum(matrix){

    let max=-Infinity

    for(let i=0; i<matrix.length; i++){

        let sum=0;

        for(let j=0; j<matrix[i].length; j++){
            sum+=matrix[i][j]
        }

        max=Math.max(max,sum)
    }

    return max
}

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


console.log(maximumRowSum(matrix))