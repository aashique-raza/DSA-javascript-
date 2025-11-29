

// ! minimum distance between BST nodes--

function inOrder(root,result=[]){
    if(root==null) return result

    inOrder(root.left,result)
    result.push(root.val)
    inOrder(root.right,result)

    return result
}

function minDistance(root){
    if(root==null) return

    let min=+Infinity
    let arr=[]

    arr=inOrder(root,arr)

    for(let i=1; i<arr.length; i++){

        min=Math.min(min,(arr[i]-arr[i-1]))
    }

    return min
}

