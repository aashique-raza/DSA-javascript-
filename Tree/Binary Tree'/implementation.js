
// console.log('binarybtree')

// ! create a node--

class Node{
    constructor(val){
        this.val=val
        this.left=null;
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }

    add(val){
        let newNode=new Node(val)
        if(this.root==null){
            this.root=newNode
            return this.root
        }
    }
}

let binaryTree=new BinaryTree()

console.log("root",binaryTree.add(10))
