
//  ! leaves node ---

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

    search(searchVal){
        if(this.root==null){
            return false
        }

        let queue=[this.root]

        while(queue.length>0){
            let curr=queue.shift()

            if(curr.val===searchVal){
                return true
            }

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return false
    }

     searchVal(search,root=this.root){

        if(root==null ){
            return false
        }
        if(root.val==search){
            return true
        }

        return this.searchVal(search, root.left) || this.searchVal(search, root.right);
    }

    preOrder(root=this.root){
        if(root==null){
            return
        }
        console.log(root.val)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

     inOrder(root=this.root){
        if(root==null) return

        this.inOrder(root.left)
        console.log(root.val)
        this.inOrder(root.right)
    }

    postOrder(root=this.root){
        if(root==null) return

        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.val)
    }

    // BFS traversal(level order)

    levelOrder(){
        if(this.root==null) return

        let queue=[this.root]

        while(queue.length>0){
            let curr=queue.shift()
            console.log(curr.val)

            if(curr.left!=null) queue.push(curr.left);
            if(curr.right!=null) queue.push(curr.right)  ;  
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


//  method 1 --

function leavesNode(root){
    if(root==null) return

    let leaf=0;
    let queue=[root]
    while(queue.length>0){
        let curr=queue.shift()

        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
         
            if(curr.left==null && curr.right==null) leaf++
    }
    return leaf
}

function leavesNode2(root,count=0){
    if(root==null) return
    if(root.left==null && root.right==null){
        
        return 1
    }

   return leavesNode2(root.left,count) + leavesNode2(root.right,count)
    
}

// console.log ('leaf node',leavesNode2(root))

function nonLeaves(root){
    if(root==null) return

    let queue=[root]
let nonLeaf=0
    while(queue.length>0){

        let curr=queue.shift()

        if(curr.left || curr.right) nonLeaf++
        if(curr.left)queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
    }
return nonLeaf
}

console.log('non leaf',nonLeaves(root))