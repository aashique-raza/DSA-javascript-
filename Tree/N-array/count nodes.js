

//  ! count nodes--

//  approach 1->  level order-->

function countNodes(root){
    if(!root) return 0;

    let queue=[root]
    let sum=0;
    while(queue.length>0){
        let curr=queue.shift()
        sum++

        for(let child of curr.children){
            queue.push(child)
        }
    }

    return sum
}

function countNodes2(root){
    if(!root) return 0

    let queue=[root]
    let i=0;
    while(queue.length>i){
        let curr=queue[i++]

        for(let child of curr.children){
            queue.push(child)
        }
    }
    return queue.length
}