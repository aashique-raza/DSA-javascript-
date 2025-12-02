

// ! find height of a tree


function height(root){

    if(root==null){
        return 0
    }

    let leftHeight=height(root.left)
    let rightHeight=height(root.right)

    return Math.max(leftHeight,rightHeight)+1
}
