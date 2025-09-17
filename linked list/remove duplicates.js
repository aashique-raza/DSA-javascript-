
// ! remove duplicates from sorted linked list
function MakeNode(value){
    this.value=value;
    this.next=null

    
}

// list 1
let list1=new MakeNode(1)
list1.next=new MakeNode(2)
list1.next.next=new MakeNode(4)
list1.next.next.next=new MakeNode(4)
list1.next.next.next.next=new MakeNode(5)
list1.next.next.next.next.next=new MakeNode(5)
list1.next.next.next.next.next.next=new MakeNode(6)


function deleteDuplicates(head) {
    let temp=head;

    while(temp!=null && temp.next!=null){

        if(temp.value==temp.next.value){
            temp.next=temp.next.next
        }else{
            temp=temp.next
        }
    }
    return head
}

console.log('After remove duplicates',deleteDuplicates(list1));