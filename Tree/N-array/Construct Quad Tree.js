
// ! Construct Quad Tree--

// function isAllSame(matrix,x,y){
//     let val=matrix[x][y]

//     for(let i=x; i<x+matrix.length; i++){
//         for(let j=y; j<y+matrix[i].length; j++){
//             if(val!==matrix[i][j]){
//                 return false
//             }
//         }
//     }
//     return true
// }

// function quadTree(matrix){

//     return solve (matrix,0,0)
// }

// function solve(matrix,x,y){
//     if(isAllSame(matrix,x,y)){
//         return new Node(matrix[x][y],true)
//     }else{
//         let root=new Node(matrix[x][y],false)

//         root.topLeft=solve(matrix,x,y,false)
//         root.topRight=solve(matrix,x,y+(matrix.length/2),false)
//         root.bottomLeft=solve(matrix,x+(matrix.length/2),y,false)
//         root.bottomRight=solve(matrix,x+(matrix.length/2),y+(matrix.length/2),false)
//         return root
//     }
// }


function isAllSame(matrix, x, y, size) {
    let val = matrix[x][y];
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (matrix[i][j] !== val) {
                return false;
            }
        }
    }
    return true;
}

function solve(matrix, x, y, size) {
    if (isAllSame(matrix, x, y, size)) {
        return new Node(matrix[x][y] === 1, true);
    }

    let half = size / 2;
    let node = new Node(false, false);

    node.topLeft = solve(matrix, x, y, half);
    node.topRight = solve(matrix, x, y + half, half);
    node.bottomLeft = solve(matrix, x + half, y, half);
    node.bottomRight = solve(matrix, x + half, y + half, half);

    return node;
}

function quadTree(matrix) {
    return solve(matrix, 0, 0, matrix.length);
}
