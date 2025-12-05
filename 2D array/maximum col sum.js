

// ! maximum col sum

function maximumColSum(matrix){

    let max=-Infinity
    console.log('col',matrix[0].length)
    console.log('rows',matrix.length)

    for(let i=0; i<matrix[0].length; i++){

        let sum=0;

        for(let j=0; j<matrix.length; j++){

            console.log([j,i])
            sum+=matrix[j][i]
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

console.log(maximumColSum(matrix))