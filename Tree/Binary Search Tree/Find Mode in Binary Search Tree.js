

// ! Find Mode in Binary Search Tree

//  approach 1 using extra space--

function findMode(root){
    if(!root) return []
    let result=[]
    let maxFreq=0;
    let map={}

    function traverse(node){
        if(!node) return null

        if(map[node.val]){
            map[node.val]++
        }else{
            map[node.val]=1
        }

        traverse(node.left)
        traverse(node.right)
    }

    traverse(root)

    for(let key in map){

        if(maxFreq<map[key]){
            result=[]

            result.push(Number(key))
            maxFreq=map[key]
        }

        else if(maxFreq==map[key]){
            result.push(Number(key))
        }
    }

    return result
}