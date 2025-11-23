
// ! two tree are identical--

function identical(root1,root2){

    if(root1==null && root2==null)return 1
    if(root1 ==null || root2==null) return -1

    if(root1.val==root2.val){
      let left=  identical(root1.left,root2.left)
       let right= identical(root1.right,root2.right)
       if(left ==1 && right ==1){
        return 1
       }else{
        return -1
       }
    }else{
        return -1
    }
}