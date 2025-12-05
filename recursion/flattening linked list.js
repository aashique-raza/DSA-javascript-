
// ! flattening linked list

function flatteningList(head){

    if(head==null) return

    let flatted=flatteningList(head.next)

    return merge (head,flatted)
}

function merge(l1,l2){
    if(l1==null) return l2
    if(l2==null) return l1

    if(l1.val>=l2.val){
        l2.bottom=merge(l1,l2.bottom)
        return l2
    }else{
        l1.bottom=merge(l1.bottom,l2)
        return l1
    }
}
