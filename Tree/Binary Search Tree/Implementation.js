

// ! implementation----


class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(val){
        if(this.root==null){
            this.root=new Node(val)
            return this.root
        }
       let node= this.add(this.root,val)
    //    console.log('node',node)
        return this.root
    }
    add(root,val){
        if(root==null){
        let node= new Node(val)
        return node
        } 
           
            if(root.val>val){
                root.left= this.add(root.left,val)
                
            }else if(root.val<val){
                root.right=this.add(root.right,val)
                
            }else{
                return root
            }
         return root   
    }

    bfs(){
        if(this.root==null) return

        let queue=[this.root]

        while(queue.length>0){
            let curr=queue.shift()

            console.log(curr.val)

            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)    
        }
    }

    preOrder(root=this.root){
        if(root==null) return

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

}

let binarySearch=new BinarySearchTree()
let root=binarySearch.insert(10)
binarySearch.insert(12)
binarySearch.insert(15)
binarySearch.insert(5)
binarySearch.inOrder()
console.log('root',root)