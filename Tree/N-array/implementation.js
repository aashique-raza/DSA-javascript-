// ! implementation---

class NaryNode {
  constructor(val, id) {
    this.id = id;
    this.val = val;
    this.children = [];
  }
}

class NaryTree {
  constructor() {
    this.root = null;
  }
  findNode(id) {
    if (this.root == null) return null;

    let queue = [this.root];

    while (queue.length > 0) {
      let curr = queue.shift();

      if (curr.id == id) {
        return curr;
      }
      for (let child of curr.children) {
        queue.push(child);
      }
    }
    return null;
  }
  addNode(val, id, parentId) {
    let newNode = new NaryNode(val, id);
    if (this.root == null) {
      this.root = newNode;
      return this.root;
    }

    const parentNode = this.findNode(parentId);
    if (parentNode) {
      parentNode.children.push(newNode);
    }
    return this.root;
  }

  dfs(node = this.root) {
    if (node == null) return;
    console.log("node", node.val);
    for (let child of node.children) {
      this.dfs(child);
    }
  }
}

let naryTree = new NaryTree();
naryTree.addNode(10, 0);
naryTree.addNode(20, 1, 0);
naryTree.addNode(30, 2, 1);
naryTree.dfs();
console.log("n-ary tree", naryTree);
