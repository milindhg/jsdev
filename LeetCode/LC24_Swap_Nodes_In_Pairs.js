/**
 * 
 */
// https://leetcode.com/problems/swap-nodes-in-pairs/?tab=Description
// Given a linked list, swap every two adjacent nodes and return its head.
//
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only
// nodes itself can be changed.
// Definition for singly-linked list.
/* function ListNode (val) {
    this.val = val;
    this.next = null;
} */

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/LinkedList');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) {
        return head;
    }
    var trav = head;
    var prev = null;
    while (trav !== null && trav.next !== null) {
        trav = swap(head ? prev : head, trav, trav.next);
        if (prev === null)
            head = trav;
        prev = trav.next;
        trav = trav.next.next;
    }
    return head;
};

var swap = function (prev, node1, node2) {
    if (node1 === null || node2 === null)
        return;
    node1.next = node2.next;
    node2.next = node1;
    if (prev !== null) {
        prev.next = node2;
    }
    return node2;
};

var swapPairsRecursive = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    head = swapPairsRecursiveHelper(head);
    return head;
}

var swapPairsRecursiveHelper = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    var n = head.next;
    head.next = swapPairsRecursiveHelper(head.next.next);
    n.next = head;
    return n;
}

var main = function () {
    
    var nums = [];
    nums = [ 1, 2, 3, 4 ];
    var head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairs(head);
    List.prototype.printList(head);
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
}

main();