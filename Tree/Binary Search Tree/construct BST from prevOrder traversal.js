

// ! construct BST from pre Order traversal--


function constructBST(arr){
    if(arr.length==0) return null

   
    let idx=0;

    function work(lower,upper){

        if(arr.length==idx || arr[idx]<lower || arr[idx]>upper){
            return null
        }

        let root=new Node(arr[idx++])

        root.left=work(lower,root.val)
        root.right=work(root.val,upper)

        return root
    }

    return work(-Infinity,+Infinity)
}