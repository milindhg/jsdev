/* https://leetcode.com/problems/partition-list/description/

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5


Solution:   https://leetcode.com/submissions/detail/211299522/ beats 52% JS Submissions.
            //segregate nodes into 2 lists, one containing nodes less than x and other containing nodes greater than or equal 
            //join the lists. Join afterList after the beforeList. Check whether beforelist is prepared if not, then directly return afterlist.
            //It is a good idea to prepare the before and after list as empty nodes first as dummy nodes. This will avoid handling any null pointer exceptions later to see if before or after list is empty or not.

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head==null) return null;
    //segregate nodes into 2 lists, one containing nodes less than x and other containing nodes greater than or equal to x.
    var beforeListHead = null;
    var beforeListTrav = beforeListHead;
    var afterListHead = null;
    var afterListTrav = afterListHead;
    var trav = head;
    while(trav!=null){
        if(trav.val<x){
            if(beforeListHead == null){
                beforeListHead = trav;
                beforeListTrav = beforeListHead;
            }else{
                beforeListTrav.next = trav;
                beforeListTrav = beforeListTrav.next;
            }
        }else{
            if(afterListHead == null){
                afterListHead = trav;
                afterListTrav = afterListHead
            }else{
                afterListTrav.next = trav;
                afterListTrav = afterListTrav.next;
            }
        }
        trav = trav.next;
    }
    if(beforeListTrav) beforeListTrav.next = null;
    if(afterListTrav) afterListTrav.next = null;

    //join the lists. Join afterList after the beforeList. Check whether beforelist is prepared if not, then directly return afterlist.
    if(beforeListTrav) {
        beforeListTrav.next = afterListHead;
        return beforeListHead;
    }
    return afterListHead;
};


var printList = function(head){
    var trav = head;
    while(trav!=null){
        console.log(trav.val + ' -> ');
        trav = trav.next;
    }
};