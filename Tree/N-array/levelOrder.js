

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


var maxDepth = function(root) {
    if(!root) return 0

    
    function findDepth(node){
        if(!node) return 0
        let max=0;
        for(let child of node.children){
           max=Math.max(max,findDepth(child))
        }
        return 1+max
    }

    return findDepth(root)
};


var maxDepth = function(root) {
    if (!root) return 0;

    let stack = [[root, 1]];  // [node, depth]
    let max = 0;

    while (stack.length > 0) {
        let [node, depth] = stack.pop();
        max = Math.max(max, depth);

        for (let child of node.children) {
            stack.push([child, depth + 1]);
        }
    }

    return max;
};
