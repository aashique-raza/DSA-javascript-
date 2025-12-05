// ! find depth of a node----

//  iterative approach--

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

 depth(node) {
  if (this.root == null) {
    return -1;
  }

  // Queue me ab hum Node aur uski Depth dono rakhenge
  // Structure: [Node, Depth]
  let queue = [ [this.root, 0] ]; 

  while (queue.length > 0) {
    // Node aur uski depth ko bahar nikalo
    let [curr, currDepth] = queue.shift();

    // Check karo
    if (curr.val == node.val) {
      return currDepth;
    }

    // Left child ko dalo, lekin depth + 1 karke
    if (curr.left) {
      queue.push([curr.left, currDepth + 1]);
    }

    // Right child ko dalo, lekin depth + 1 karke
    if (curr.right) {
      queue.push([curr.right, currDepth + 1]);
    }
  }

  return -1;
}

  depthRecursive(root = this.root, node, depth = 0) {
    if (root == null) {
      return -1;
    }
    if (root.val == node.val) {
      return depth;
    }

    let leftdepth = this.depthRecursive(root.left, node, depth + 1);
    if (leftdepth != -1) {
      return leftdepth;
    }
    this.depthRecursive(root.right, node, depth + 1);
  }
}
