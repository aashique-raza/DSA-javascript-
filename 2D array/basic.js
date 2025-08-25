

console.log('2d array basic')

// ! static 
const array=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// console.log('access element',array)

// console.log('individual element',array[1][2])


// ! dynamic ---
let rows=4, cols=4 

let matrix=Array.from({length:4},()=>Array(cols))

// console.log('matrix',matrix)

// * fill with value---

for(let i=0; i<rows; i++){

    for(let j=0; j<cols; j++){

        matrix[i][j]=i+j+1
    }
}

// console.log('matrix',matrix)

// ! row wise traversal---

for(let i=0; i<array.length; i++){
    for(let j=0; j<array[0].length; j++){
        // console.log('array',array[i][j])
    }
}


// ! column wise traversal---
for(let i=0; i<array[0].length; i++){
    let line=''
    for(let j=0; j<array.length; j++){
        line+=array[i][j] + " "
    }

    console.log(line.trim())
}
