/*

Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?

*/
/*
Solution:   https://leetcode.com/submissions/detail/93380570/ Iterative.
            Keep 3 pointers prev, curr and next. Always change the pointer of curr to point from next to prev. And keep moving 3 pointers ahead as necessary until next node is NULL.
            
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
 * @return {ListNode}
 * @Runtime: https://leetcode.com/submissions/detail/93380570/ O(n)
 * 
 */
var reverseList = function (head) {
    if (head === null)
        return null;
    var prev = null;
    var trav = head;
    var next = trav.next;
    while (next !== null) {
        trav.next = prev;
        prev = trav;
        trav = next;
        next = trav.next;
    }
    trav.next = prev;
    head = trav;
    return head;
};

/**
 * @param {ListNode, ListNode} prev, head
 * @return {ListNode}
 * @Runtime: O(n)
 * 
 */
var reverseListRecursiveHelper = function (prev, head) {
    if (head === null)
        return null;
    else if (head.next === null) {
        head.next = prev;
        return head;
    } else {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        return reverseListRecursiveHelper(prev, head);
    }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @Runtime: O(n) https://leetcode.com/submissions/detail/93388955/
 * 
 */
var reverseListRecursive = function (prev, head) {
    return reverseListRecursiveHelper(null, head);
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

var main = function () {
    var list = new ListNode(1);
    var head = list;
    for (var i = 2; i < 7; i++) {
        list.next = new ListNode(i * 1);
        list = list.next;
    }

    printList(head);
    // head = reverseList(head);
    // printList(head);
    head = reverseListRecursive(null, head);
    printList(head);
};

main();
