

// ! pre order iterative----


function preOrderIterative(root){

    if(root==null) return 

    let stack=[root]

    while(stack.length>0){

        let el=stack.pop()

        console.log(el.val)

        if(el.right) stack.push(el.right)
         if(el.left) stack.push(el.left)   
    }
}



// ! in oreder iterative

function inOrderIterative(root){
    if(root==null) return

    let stack=[]

    let curr=root

    while(curr!=null || stack.length>0){

        while(curr!=null){
            stack.push(curr)
            curr=curr.left
        }

        curr=stack.pop()
        console.log('val',curr.val)
        curr=curr.right
    }
}

function postOrderIterative(root){
    if(root==null) return []

    let stack=[root]
    let result=[]

    while(stack.length>0){
        let curr=stack.pop()
        result.push(curr.val)
        if(curr.left) stack.push(curr.left)
            if(curr.right)stack.push(curr.right)
    }
return result.reverse()
}