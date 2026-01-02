

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


//  approach 2 without extra space--

function findMode2(root){
    if(!root) return []

    let result=[];
    let currNo=null;
    let currFreq=0;
    let maxFreq=0

    function solve(node){
        if(!node) return null

        solve(node.left)

        if(node.val==currNo){
            currFreq++
        }else{
            currNo=node.val
            currFreq=1
        }

        if(currFreq>maxFreq){
            result=[]
            result.push(currNo)
            maxFreq=currFreq
        }else if(currFreq==maxFreq){
            result.push(currNo)
        }

        solve(node.right)
    }
    solve(root)
    return result
}