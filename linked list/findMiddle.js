
import { head, getLength, insertToEnd, insertAtBeginning, insertAtPosition, findInList, deleteFromEnd, deleteFromBeginning, deleteFromPosition } from './start.js'


console.log('head', head);
console.log('length', getLength());
// ! find middle of linked list

//  approach 1: find length of linked list and then traverse to middle node
function findMiddle(head) {

    let count = 0;
    let curr = head;

    console.log('curr', curr);
    while (curr !== null) {
        count++
        curr = curr.next
    }
    console.log('count', count);

    let findMiddle = Math.floor(count / 2);
    curr = head;
    let middleNode = null;
    for (let i = 0; i <= findMiddle; i++) {
        middleNode = curr;
        curr = curr.next
    }
    return middleNode;
}


console.log('middle node', findMiddle(head));