

// ! top view of binary tree--

function topView(root){
    if(root==null) return []

    let result=[]
    let queue=[root]

    while(queue.length>0){

        let size=queue.length;

        for(let i=0; i<size; i++){

            let curr=queue.shift()
            if(i==0){
                result.push(curr.val)
            }
            if(i==size-1){
                result.push(curr.val)
            }

            if(curr.left) queue.push(curr.left)
            if(curr.right)queue.push(curr.right)    
        }
    }
    return result
}

function topView(root) {
    if (root == null) return [];

    let result = [];
    
  
    let queue = [ [root, 0] ]; 
    
   
    let hdMap = new Map();

    while (queue.length > 0) {
        
        
        let [curr, hd] = queue.shift();

       
        if (!hdMap.has(hd)) {
            hdMap.set(hd, curr.val);
        }

       
        if (curr.left) queue.push([curr.left, hd - 1]);
        
       
        if (curr.right) queue.push([curr.right, hd + 1]);
    }

   
    let sortedHDs = [...hdMap.keys()].sort((a, b) => a - b);
    
    for(let key of sortedHDs){
        result.push(hdMap.get(key));
    }

    return result;
}