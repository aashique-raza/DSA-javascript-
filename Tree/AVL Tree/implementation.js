// !  implementation----

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AvlTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (node == null) return 0;

    return node.height;
  }

  getBalanceFactor(node) {
    if (node == null) return;

    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  insert(val) {
    return (this.root = this.add(this.root, val));
  }
  add(root, val) {
    if (root == null) return new Node(val);

    if (val > root.val) {
      root.right = this.add(root.right, val);
    } else if (val < root.val) {
      root.left = this.add(root.left, val);
    } else {
      return root;
    }

    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    let balanceFactor = this.getBalanceFactor(root);
    // console.log('balance factor',balanceFactor)

    if (balanceFactor > 1 && val<root.left.val) {
        console.log('when balance factor is greater than 1')
      return this.rightRotation(root);
    }

    if (balanceFactor < -1 && val > root.right.val) {
      return this.leftRotation(root);
    }

    if (balanceFactor > 1 && root.left.val < val) {
     root.left = this.leftRotation(root.left);
     return this.rightRotation(root);
       
    }
    if (balanceFactor < -1 && root.right.val > val) {
     root.right = this.rightRotation(root.right);
     return  this.leftRotation(root);

    
    }

    return root;
  }
  rightRotation(node) {
    let newRoot = node.left;
    let temp = newRoot.right;
    newRoot.right = node;
    node.left = temp;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    newRoot.height =
      1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot;
  }

  leftRotation(node) {
    let newRoot = node.right;
    let temp = newRoot.left;
    newRoot.left = node;
    node.right = temp;

    node.height =1+ Math.max(
      this.getHeight(node.left),
      this.getHeight(node.right)
    );
    newRoot.height =1+ Math.max(
      this.getHeight(newRoot.left),
      this.getHeight(newRoot.right)
    );

    return newRoot;
  }
}

let avlTree = new AvlTree();

let root = avlTree.insert(20);
avlTree.insert(30)
avlTree.insert(40)

// avlTree.insert(1)
// avlTree.insert(10)   checl duplicate---

console.log("root", avlTree.root);
