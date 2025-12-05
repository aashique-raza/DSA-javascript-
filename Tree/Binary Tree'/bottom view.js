function bottomView(root) {
    if (root == null) return [];

    let result = [];
    
  
    let queue = [ [root, 0] ]; 
    
   
    let hdMap = new Map();

    while (queue.length > 0) {
        
        
        let [curr, hd] = queue.shift();

       
       
            hdMap.set(hd, curr.val);
        

       
        if (curr.left) queue.push([curr.left, hd - 1]);
        
       
        if (curr.right) queue.push([curr.right, hd + 1]);
    }

   
    let sortedHDs = [...hdMap.keys()].sort((a, b) => a - b);
    
    for(let key of sortedHDs){
        result.push(hdMap.get(key));
    }

    return result;
}