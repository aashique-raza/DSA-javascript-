var reverseKGroup = function(head, k) {
    if (head == null || k == 1) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupNode = dummy;
    let curr = head;

    while (curr != null) {
        let groupStartNode = curr;
        let temp = curr;
        let count = 0;

        while (count < k && temp != null) {
            temp = temp.next;
            count++;
        }

        if (count === k) {
            let prev = null;
            let nextGroupNode = temp;

            for (let i = 0; i < k; i++) {
                let nextNode = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextNode;
            }
            
            prevGroupNode.next = prev;
            groupStartNode.next = nextGroupNode;

            prevGroupNode = groupStartNode;
            curr = nextGroupNode;
        } else {
            break;
        }
    }

    return dummy.next;
};