

// ! level Order traversal--

// var levelOrder = function(root) {
    
//     if(!root) return []
//     let result=[]
//     let queue=[root]

//     while(queue.length>0){
//         let size=queue.length
//         let temp=[]

//         for(let i=0; i<size; i++){
//             let curr=queue.shift()
//             temp.push(curr.val)

//             for(let child of curr.children){
//                 queue.push(child)
//             }
//         }
//         result.push(temp)

//     }
//     return result
// };

var levelOrder = function(root) {
    
    if(!root) return []
    let result=[]
    let queue=[root]
    let j=0;
    while(queue.length>j){
        let size=queue.length-j
        let temp=[]

        for(let i=0; i<size; i++){
            let curr=queue[j++]
            temp.push(curr.val)

            for(let child of curr.children){
                queue.push(child)
            }
        }
        result.push(temp)

    }
    return result
};



var preorder = function(root) {
    if(!root) return []
    let result=[]

    function collectResult(node){
        if(!node)return result

        result.push(node.val)

        for(let child of node.children){
            collectResult(child)
        }
        return result
    }
    return collectResult(root)
};

var postorder = function(root) {
     if(!root) return []
    let result=[]

    function collectResult(node){
        if(!node)return 

       

        for(let child of node.children){
            collectResult(child)
             result.push(child.val)
        }
        return result
    }
    result= collectResult(root)
    result.push(root.val)
    return result
};