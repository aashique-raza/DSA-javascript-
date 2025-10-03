console.log("merge k sorted lists")

// ! approach 1: using loop

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let list1 = new Node(1)
let list1_node2 = new Node(4)
let list1_node3 = new Node(5)
list1.next = list1_node2
list1_node2.next = list1_node3

// list 2
let list2 = new Node(1)
let list2_node2 = new Node(3)
let list2_node3 = new Node(4)
list2.next = list2_node2
list2_node2.next = list2_node3

// list 3
let list3 = new Node(2)
let list3_node2 = new Node(6)
list3.next = list3_node2

//  function to merge two sorted lists
function mergeTwoLists(list1, list2) {

    if(!list1) return list2
    if(!list2) return list1
    let dummyHead = new Node(0)
    let temp = dummyHead

    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1
            list1 = list1.next
        } else {
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }
    if (list1) {
        temp.next = list1
    }
    if (list2) {
        temp.next = list2
    }
    return dummyHead.next
}

var mergeKLists = function (lists) {
    if (lists.length === 0) return null
    let mergedList = lists[0]
    for (let i = 1; i < lists.length; i++) {
        mergedList = mergeTwoLists(mergedList, lists[i])
    }
    return mergedList
}
let lists = [list1, list2, list3]
let mergedHead = mergeKLists(lists)
console.log("merged head", mergedHead)