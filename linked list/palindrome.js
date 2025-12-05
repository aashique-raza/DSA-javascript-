
function MakeNode(value){
    this.value=value;
    this.next=null

    
}

// list 1
let list1=new MakeNode(1)
list1.next=new MakeNode(2)
list1.next.next=new MakeNode(1)

// function removeDuplicates(head) {
// console.log('head',head);
//     let curr=head;
    
//     prev=null;

//     while(curr){
//         let nextAdd=curr.next
//         curr.next=prev
//         prev=curr
//         curr=nextAdd    
//     }

//     console.log('prev',prev);

   
// }

// console.log('removeDuplicates',removeDuplicates(list1));



// using array and two pointer

function isPalindrome(head) {

    let temp=head;

    let arr=[]

    while(temp){
        arr.push(temp.value)
        temp=temp.next
    }

    // now implement two pointer techniuwe

    let i=0;
    let j=arr.length-1;

    console.log('arr',arr);

    while(i<j){
        if(arr[i]!=arr[j]){
            return false
        }
        i++
        j--
    }

    return true
}

console.log('isPalindrome',isPalindrome(list1));


