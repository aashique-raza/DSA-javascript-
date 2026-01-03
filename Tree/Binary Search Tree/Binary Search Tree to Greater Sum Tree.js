// ! Binary Search Tree to Greater Sum Tree

//  approach 1 using extra space--

function greaterSumTree(root) {
  if (!root) return null;
  let arr = [];
  let map = {};

  // traver inorder---

  function inorder(node) {
    if (!node) return null;

    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }
  inorder(root);

  //  making sum --

  let suffixSum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    map[arr[i]] = arr[i] + suffixSum;
    suffixSum += arr[i];
  }

  //  again traverse and fill value--

  function solve(node) {
    if (!node) return null;

    solve(node.left);
    let original = node.val;
    node.val = map[original];

    solve(node.right);
  }
  solve(root);

  return root;
}

//  approach 2 without using extra space--

function greaterSumTree2(root){
  if(!root) return null

  let sum=0;

  function solve(node){

    if(!node) return null

    solve(node.right)
    sum=sum+node.val
    node.val=sum
    solve(node.left)
  }
  solve(root)
  return root
}

