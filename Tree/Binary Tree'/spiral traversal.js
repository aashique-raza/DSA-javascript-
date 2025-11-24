// ! spiral traverse---


function spiralTraverse(root){
    let s1=[]
    let s2=[]
    let result=[]

    s1.push(root)

    while(s1.length!==0 || s2.length!==0){

        if(s1.length!=0){
            while(s1.length!==0){
                let temp=s1.pop()
                result.push(temp.val)
                if(temp.right) s2.push(temp.right)
                if(temp.left) s2.push(temp.left)    
            }
        }else{
            while(s2.length!=0){
                let temp=s2.pop()
                result.push(temp.val)
                if(temp.left)s1.push(temp.left)
                if(temp.right)s1.push(temp.right)    
            }
        }
    }
    return result
}