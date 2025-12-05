
import {insertToEnd, head,  insertAtBeginning,getLength} from "./start.js";



console.log('head before odd even',head);


// ! odd even list

function oddEvenList(head) {

    
    if(head==null || head.next==null)return
    console.log('head again',head);
    let odd=head;
    let even=head.next;

    let storeEven=head.next;
    console.log('odd',odd);
    console.log('even',even);
    console.log('storeEven',storeEven);

    while(even!=null&&even.next!=null){
        odd.next=even.next;
        even.next=even.next.next

        odd=odd.next;
        even=even.next
    }

    console.log('odd',odd);
    console.log('even',even);
    console.log('storeEven',storeEven);

    odd.next=storeEven

    return head
}
console.log('After odd even',oddEvenList(head));