

// ! search a value--

function search(root,target){
    if(root==null) return

    if(root.val==target) return root
    else if(root.val>target) return search(root.left,target)
     else return search(root.right,target)   
}