/* 
https://leetcode.com/problems/merge-two-sorted-lists/description/

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


Solution:   https://leetcode.com/submissions/detail/154804739/      beats 98.5% of js submissions.
            The easy way to merge sort 2 sorted lists without extra space is to have 2 pointers go over each list respectively.
            Every time compare values at 2 pointers and join the smaller value node to the answer list.
            Keep joining and at last check if any of the list is already over, then join the remaining part of the other list to the answer linked list.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
if (l2 == null) return l1;
var outputListHead = new ListNode(-1);
var tempNode = outputListHead;
while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
        tempNode.next = l1;
        tempNode = tempNode.next;
        l1 = l1.next;
    } else {
        tempNode.next = l2;
        tempNode = tempNode.next;
        l2 = l2.next;
    }
}
if (l1 != null) tempNode.next = l1;
if (l2 != null) tempNode.next = l2;
return outputListHead.next;
};

