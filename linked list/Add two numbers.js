console.log('add two numbers linked list');

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let head1 = null;
let head2 = null;
let length1 = 0;
let length2 = 0;

function insertToEnd1(val){
    let newNode = new Node(val);    
    if(head1 == null){
        head1 = newNode;
    }
    else{
        let temp = head1;   
        while(temp.next != null){
            temp = temp.next;
        }

        temp.next = newNode;
    }
    length1++;
}
function insertToEnd2(val){
    let newNode = new Node(val);    
    if(head2 == null){
        head2 = newNode;
    }
    else{
        let temp = head2;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode;
    }
    length2++;
}

head1 = new Node(2);
head1.next = new Node(4);
head1.next.next = new Node(3);

head2 = new Node(5);
head2.next = new Node(6);
head2.next.next = new Node(4);

console.log('head1', head1);
console.log('head2', head2);


let temp=head1;
let num1=''

while(temp!=null){
    num1 = temp.val + num1;
    temp = temp.next;
}
console.log('num1', num1);

let temp2=head2;
let num2=''
while(temp2!=null){
    num2 = temp2.val + num2;
    temp2 = temp2.next;
}
console.log('num2', num2);

let sum = parseInt(num1) + parseInt(num2);
console.log('sum', sum);

let sumStr = sum.toString();
console.log('sumStr', sumStr);


let finalHead = null;

 function insertAtHead(val){
    let newNode = new Node(val);    
    if(finalHead == null){
        finalHead = newNode;
    }
    else{
        newNode.next = finalHead;
        finalHead = newNode;
    }
 }
    for(let i=0; i<sumStr.length; i++){
        insertAtHead(parseInt(sumStr[i]));
    }
    console.log('finalHead', finalHead);