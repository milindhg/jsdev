/*
https://leetcode.com/problems/reverse-linked-list/
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?

*/
/*
Solution:   https://leetcode.com/submissions/detail/328522236/ Iterative.  beats
            80.68 JS Submissions
 Keep 3 pointers prev, curr and next. Always change the
pointer of curr to point from next to prev. And keep moving 3 pointers ahead as
necessary until next node is NULL.

*/

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/LinkedList');

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
var reverseListRecursive = function (head) {
    return reverseListRecursiveHelper(null, head);
};

var main = function () {
    var list = List.prototype.constructList([1,2,3,4,5]);
    List.prototype.printList(list);
    list = reverseList(list);
    List.prototype.printList(list);
    list = List.prototype.constructList([1,2,3,4,5]);
    List.prototype.printList(list);
    list = reverseListRecursive(list);
    List.prototype.printList(list);
};

main();
