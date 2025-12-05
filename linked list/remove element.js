import { head, getLength, insertToEnd, insertAtBeginning, insertAtPosition, findInList, deleteFromEnd, deleteFromBeginning, deleteFromPosition } from './start.js'





// ! remove element by value

function removeElementByValue(head, value) {

    if (head == null) return head;

    while (head && head.data === value) {

        head = head.next;

    }
    console.log('head after removing from start', head);

    let prev = head;
    let curr = head;
    while (curr) {


        if (curr.data === value) {
            prev.next = curr.next;

        } else {
            prev = curr;
        }


        curr = curr.next

    }
    return head;
}

insertToEnd(7)
insertToEnd(7)
insertToEnd(7)
insertToEnd(7)
// insertToEnd(10)
// insertToEnd(40)
console.log('head', head);
// console.log('length', getLength());

removeElementByValue(head, 10);
// console.log('after removing ', head);
// console.log('length after removing ', getLength());