

// ! right side view 


var rightSideView = function(root) {
     if (root == null) return [];

  let result = [];

  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();

      if (i == levelSize - 1) {
        result.push(curr.val);
      }

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return result;
};

function leftView2(root,level=0,result=[]){

    if(root==null) return 0

    if(level==result.length){
        result.push(root.val)
    }

    leftView2(root.right,level+1,result)
    leftView2(root.left,level+1,result)
    
    return result
}
