

// ! check whether BST contains dead end--

function dead(root){
    if(!root) return false

    function check(root,L,U){
        if(!root) return false
        if(!root.left && ! root.right){
            if(root.val-L==1&&U-root.val==1){
                return true
            }else{
               return false
            }
        }

      return  check(root.left,L,root.val) || check(root.right,root.val,U)
    }
    return check(root,0,+Infinity)
}