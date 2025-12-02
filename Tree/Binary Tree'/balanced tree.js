

// ! balanced tree----

function balanced(root){

    return checkHeight(root) !== -1
}

function checkHeight(root){
    if(root==null) return 0

    let left=checkHeight(root.left)
    if(left==-1){
        return -1
    }

    let right=checkHeight(root.right)
    if(right==-1){
        return -1
    }

    if(Math.abs(left-right)>1){
        return -1
    }

    return Math.max(left,right)+1
}