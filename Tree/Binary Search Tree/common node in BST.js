

// ! common node in BST--

// approach 1 using extra space--

function inOrder(root,result=[]){
    if(root==null) return result

    inOrder(root.left,result)
    result.push(root.val)
    inOrder(root.right,result)

    return result
}

function commonNode(root1,root2){
    if(!root1||root2) return
    let arr1=inOrder(root1)
    let arr2=inOrder(root2)

    let i=0
    let j=0
    let result=[]
    while(i<Math.min(arr1.length,arr2.length)){
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result
}