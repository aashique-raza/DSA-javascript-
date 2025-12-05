// ! common node in BST--

// approach 1 using extra space--

function inOrder(root, result = []) {
  if (root == null) return result;

  inOrder(root.left, result);
  result.push(root.val);
  inOrder(root.right, result);

  return result;
}

function commonNode(root1, root2) {
  if (!root1 || root2) return;
  let arr1 = inOrder(root1);
  let arr2 = inOrder(root2);

  let i = 0;
  let j = 0;
  let result = [];
  while (i < Math.min(arr1.length, arr2.length)) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

// optimized solution--

function commonOptimized(root1, root2) {
  if (!root1 || !root2) return [];

  let s1 = [];
  let s2 = [];
  let ans = [];

  while (root1) {
    s1.push(root1);
    root1 = root1.left;
  }
  while (root2) {
    s2.push(root2);
    root2 = root2.left;
  }

  while (s1.length > 0 && s2.length > 0) {
    if (s1[s1.length - 1].val == s2[s2.length - 1].val) {
      ans.push(s1[s1.length - 1].val);

      root1 = s1[s1.length - 1].right;
      s1.pop();
      root2 = s2[s2.length - 1].right;
      s2.pop();
    } else if (s1[s1.length - 1].val > s2[s2.length - 1].val) {
      root2 = s2[s2.length - 1].right;
      s2.pop();
    } else {
      root1 = s1[s1.length - 1].right;
      s1.pop();
    }

    while (root1) {
      s1.push(root1);
      root1 = root1.left;
    }
    while (root2) {
      s2.push(root2);
      root2 = root2.left;
    }
  }
  return ans
}
