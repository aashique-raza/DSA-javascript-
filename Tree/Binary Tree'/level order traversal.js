//!  level order traversal

function levelOrder(root) {
  if (root == null) return [];

  let result = [];

  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    let temp = [];

    for (let i = levelSize - 1; i < levelSize; i++) {
      let curr = queue.shift();

      temp.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(temp);
  }
  return result;
}
