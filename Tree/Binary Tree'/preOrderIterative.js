

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