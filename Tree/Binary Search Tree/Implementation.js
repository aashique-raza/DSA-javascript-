

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

}

let binarySearch=new BinarySearchTree()
let root=binarySearch.insert(10)
binarySearch.insert(12)
binarySearch.insert(15)
binarySearch.insert(5)
binarySearch.bfs()
console.log('root',root)