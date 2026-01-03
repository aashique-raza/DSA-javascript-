
// ! Balance a Binary Search Tree

//  approach 1--

var balanceBST = function(root) {
    if(!root) return null

    let arr=[]

    function inOrder(node){
        if(!node) return null

        inOrder(node.left)
        arr.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)

    function solve(l,r,arr){
        if(l>r) return null

       let mid = Math.floor((l + r) / 2);

       let newNode = new TreeNode(arr[mid]);

        newNode.left = solve(l, mid - 1, arr);
        newNode.right = solve(mid + 1, r, arr);

        return newNode;


    }
    return solve(0,arr.length-1,arr)
};