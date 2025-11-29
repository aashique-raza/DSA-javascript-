// ! sum of k smallest element ---

function inOrder(root, result = []) {
  if (root == null) return result;

  inOrder(root.left, result);
  result.push(root.val);
  inOrder(root.right, result);

  return result;
}

function sumOfK(root, k) {
  if (root == null) return 0;

  let sum = 0;
  let arr = [];
  arr = inOrder(root, arr);

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  return sum;
}

//  optimized solution--

function sumOfkOptimized(root, k) {
  let sum = 0;
  let count = 0;

  function inorder(node) {
    if (!node || count >= k) return;

    inorder(node.left);

    if (count < k) {
      sum += node.val;
      count++;
    }

    inorder(node.right);
  }

  inorder(root);
  return sum;
}

