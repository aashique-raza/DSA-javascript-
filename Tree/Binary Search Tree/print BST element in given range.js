// ! print BST element in given range--

// approach 1 (recursive(DFS))

function printBst(root, l, h) {
  if (root == null) return [];

  let result = [];

  function storeResult(root, l, h) {
    if (root == null) return;

    if (root.val > l) {
      storeResult(root.left, l, h);
    }
    if (root.val >= l && root.val <= h) {
      result.push(root.val);
    }
    if (root.val < h) {
      storeResult(root.right, l, h);
    }
  }
  storeResult(root, l, h);
  return result;
}



var rangeSumBST = function(root, l, h) {
    if (root == null) return 0;

  let result = 0;

  function storeResult(root, l, h) {
    if (root == null) return;

    if (root.val > l) {
      storeResult(root.left, l, h);
    }
    if (root.val >= l && root.val <= h) {
      result+=root.val;
    }
    if (root.val < h) {
      storeResult(root.right, l, h);
    }
  }
  storeResult(root, l, h);
  return result;
};
