
// ! left view of binary tree--

function leftVuew(root){
    if(root==null) return []

    let queue=[root]
    let result=[]

    while(queue.length>0){

        let size=queue.length;

        for(let i=0; i<size; i++){

            let curr=queue.shift()

            if(i==0){
                result.push(curr.val)
            }
            if(curr.left)queue.push(curr.left)
                if(curr.right)queue.push(curr.right)
        }
    }
    return result
}