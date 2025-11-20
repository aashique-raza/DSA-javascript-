

// ! find height of a tree


function height(root){

    if(root==null){
        return -1
    }

    let leftHeight=height(root.left)
    let rightHeight=height(root.right)

    return Math.max(leftHeight,rightHeight)+1
}