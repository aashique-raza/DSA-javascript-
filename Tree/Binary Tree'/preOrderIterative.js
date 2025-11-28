

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