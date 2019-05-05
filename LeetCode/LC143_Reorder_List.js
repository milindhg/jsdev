/* https://leetcode.com/problems/reorder-list/description/

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.


Solution:   https://leetcode.com/submissions/detail/226877643/ beats 99.28% JS Submissions
            Simple solution. break the linkedlist into 2.
            Reverse the second half part of linkedlist.
            Then alternatively take nodes from the first half and the reversed second half till both the linkedlists are not completely trsversed.
            In such a way the new list formed is automatically the answer.

 */


var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var rabbit = head;
    var tortoise = head;
    var tortoiseFollower = null;
    while(rabbit!=null && rabbit.next!=null){
        tortoiseFollower = tortoise;
        tortoise = tortoise.next;
        rabbit = rabbit.next.next;
    }
    tortoiseFollower.next = null;
    var tortoise = reverseList(tortoise);
    var trav = head.next;
    var iter = head;
    while(trav!=null && tortoise!=null){
        iter.next = tortoise;
        tortoise = tortoise.next;
        iter = iter.next;
        iter.next = trav;
        trav = trav.next;
        iter = iter.next;
    }
    while(tortoise){
        iter.next = tortoise;
        tortoise = tortoise.next;
        iter = iter.next;
    }
};

var reverseList = function(head){
    if(!head.next) return head;
    var prev = null;
    var trav = head;
    var nxt = trav.next;
    while(nxt!=null){
        nxt = trav.next;
        trav.next = prev;
        prev = trav;
        trav = nxt;
    }
    head = prev;
    return head;
}

var main = function(){
    var head = List.prototype.constructList([1,2]);
    reorderList(head);
    List.prototype.printList(head);
    head = List.prototype.constructList([1,2,3,4]);
    reorderList(head);
    List.prototype.printList(head);
    head = List.prototype.constructList([1,2,3,4,5]);
    reorderList(head);
    List.prototype.printList(head);
};

main();