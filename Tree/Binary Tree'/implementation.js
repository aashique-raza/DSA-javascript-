
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

        let queue=[this.root]

        while(queue.length>0){
            let current=queue.shift()

            if(current.left==null){
                current.left=newNode
                return this.root
            }else{
                queue.push(current.left)
            }

            if(current.right==null){
                current.right=newNode
                return this.root
            }else{
                queue.push(current.right)
            }
        }
    }
}

let binaryTree=new BinaryTree()
let root=binaryTree.add(10)
binaryTree.add(20)
binaryTree.add(30)
binaryTree.add(40)
binaryTree.add(50)
binaryTree.add(60)
binaryTree.add(70)

console.log("root",root)
