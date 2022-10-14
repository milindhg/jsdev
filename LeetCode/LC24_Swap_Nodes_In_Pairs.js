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



//https://leetcode.com/submissions/detail/328518272/ beats 99.83% JS Submissions
//Runtime: O(n)
//Space: O(1)
//Iterative approach: have 2 pointers, trav and prev to track current traversal node and previous node.
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

//https://leetcode.com/submissions/detail/811131731/ beats 97.82% JS Submissions
//Runtime: O(n)
//Space: O(stack space)
//Recursive approach: Work from base case, 
//  if 1 node return the node
//  if 2 nodes, swap the nodes and return the new head amongst the 2 nodes
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
    var toBeHead = head.next;
    head.next = swapPairsRecursiveHelper(toBeHead.next);
    toBeHead.next = head;
    return toBeHead;
}

var main = function () {
    var List = require('../Utilities/LinkedList');
    var nums = [];
    nums = [1, 2, 3, 4];
    var head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairs(head);
    List.prototype.printList(head);
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
    nums = [1, 2, 3];
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
    nums = [];
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
    nums = [1];
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
    nums = [1, 2];
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
    nums = [1, 2, 3, 4, 5, 6, 7, 8];
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
    List.prototype.printList(head);
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    head = List.prototype.constructList(nums);
    List.prototype.printList(head);
    head = swapPairsRecursive(head);
}

main();