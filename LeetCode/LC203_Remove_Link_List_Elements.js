/*
https://leetcode.com/problems/remove-linked-list-elements/  
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Solution 1: https://leetcode.com/submissions/detail/78416947/
            Traverse and remove. Especially to remove tail, keep prev pointer.
            Trick here is to have a helper node and a traversal node. Helper is like a sentinel prev which will point to head always. And trav will keep traversing and removing elements next to it. to keep a tr
Solution 2: Keep fast and slow pointer to get to the node quickly. So that if fast node catches the element, then slow can follow till fast and then remove the fast node. Otherwise slow will traverse and follow the same method as solution 1.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var prev = null;
    var curr = head;
    while (curr !== null) {
        if (curr.val === val) {
            if (curr === head) { // i.e. list with only 1 node.
                console.log("Reached here");
                head = curr.next;
                curr = curr.next;
            } else {
                prev.next = curr.next;
                curr = curr.next;
            }
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @Runtime improved tremendously to 93.20% percentile.
 */
var removeElementsBetter = function (head, val) {
    var helper = new ListNode(0);
    helper.next = head;
    // We create a new pinter p for traversal and keep helper as it is pointing to head. So head is
    // not lost.
    var p = helper;
    while (p.next !== null) {
        if (p.next.val === val) {
            var next = p.next;
            p.next = next.next;
        } else {
            p = p.next;
        }
    }
    return helper.next;
};

function ListNode (val) {
    this.val = val;
    this.next = null;
}

var printList = function (list) {
    var trav = list;
    var output = "";
    if (trav === null) {
        console.log(null);
        return;
    }
    while (trav.next !== null) {
        output += trav.val + " -> ";
        trav = trav.next;
    }
    output += trav.val;
    console.log(output);
};

var removeElementsRecursive = function (head, val) {
    if (head == null)
        return null;
    head.next = removeElements(head.next, val);
    return (head.val == val ? head.next : head);
}

var main = function () {
    var list = new ListNode(1);
    var head = list;
    for (var i = 2; i < 7; i++) {
        list.next = new ListNode(i * 1);
        list = list.next;
    }

    printList(head);
    head = removeElements(head, 6);
    printList(head);

    var l2 = new ListNode(1);
    head2 = l2;
    l2.next = new ListNode(2);
    l2 = l2.next;
    l2.next = new ListNode(2);
    l2 = l2.next;
    l2.next = new ListNode(1);
    printList(head2);
    head2 = removeElementsRecursive(head2, 1);
    head2 = removeElementsRecursive(head2, 2);
    printList(head2);

}

main();