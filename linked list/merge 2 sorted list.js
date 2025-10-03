// ! merge two soreted list-----

// * approach1:iterative

function MakeNode(value){
    this.value=value;
    this.next=null

    
}

// list 1
let list1=new MakeNode(1)
list1.next=new MakeNode(2)
list1.next.next=new MakeNode(4)

// list 2
let list2=new MakeNode(1)
list2.next=new MakeNode(3)
list2.next.next=new MakeNode(4)

let current1=new MakeNode(1)

console.log('node',current1);   

var mergeTwoLists = function(list1, list2) {
    
    let currentNode=new MakeNode(0)

    let finalList=currentNode;

    while(list1&&list2){
        if(list1.value<=list2.value){
            currentNode.next=list1
            list1=list1.next
        }else{
            currentNode.next=list2
            list2=list2.next
        }
        currentNode=currentNode.next
    }
    if(list1){
        currentNode.next=list1
    }
    if(list2){
        currentNode.next=list2
    }
    return finalList.next
};


// ! approach2:recursive
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1
    if(list1.value<list2.value){
        list1.next=mergeTwoLists(list1.next,list2)
        return list1
    }else{
        list2.next=mergeTwoLists(list1,list2.next)
        return list2
    }
};



console.log('mergeTwoLists',mergeTwoLists(list1,list2));