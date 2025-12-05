

// ! two node cosuin---

function cosuin(root,x,y){
    if(root==null) return

    let xLevel; let yLevel;
    let xParent=null; let yParent=null

     let check=(node,parent,level)=>{
        if(!node) return

        if(node.val==x){
            xLevel=level
            xParent=parent
        }

        if(node.val==y){
            yLevel=level
            yParent=parent
        }

        check(node.left,node,level+1)
        check(node.right,node ,level+1)
    }
    check(root,null,0)

    return (xLevel==yLevel) && (xParent!==yParent)
}