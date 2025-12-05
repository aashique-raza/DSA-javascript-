

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