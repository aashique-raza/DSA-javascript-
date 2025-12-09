

// ! find height of a tree


function height(root){

    if(root==null){
        return 0
    }

    let leftHeight=height(root.left)
    let rightHeight=height(root.right)

    return Math.max(leftHeight,rightHeight)+1
}


//  approach 2 : BFS

function height1(root){
    if(!root) return 0

    let queue=[root]
    let height=0

    while(queue.length>0){
        let size=queue.length

        for(let i=0; i<size; i++){
            let curr=queue.shift()

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)    
        }
    height++
    }
    return height
}