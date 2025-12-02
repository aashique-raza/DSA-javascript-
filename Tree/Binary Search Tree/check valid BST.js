

// ! check valid BSt---

function inOrder(root,result=[]){
    if(root==null) return

 inOrder(root.left,result)
 result.push(root.val)
 inOrder(root.right,result)
 return result
}

function checkBST(root){
    if(root==null)return

    let arr=inOrder(root)

    let i=0;

    while(i<arr.length-1){

        if(arr[i+1]<=arr[i]){
            return false
        }
        i++
    }


    return true
}


function checkBst2(root){
    if(root==null) return

    let prev=-Infinity

    function valid(root){
        if(root==null) return true 

        if(!valid(root.left)) return false

        if(root.val<prev){
            return false
        }else{
            prev=root.val
        }
       return valid(root.right)
      
    }
    return valid(root)
}