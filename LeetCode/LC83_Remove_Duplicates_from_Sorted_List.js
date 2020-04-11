/* 
https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

Solution:   https://leetcode.com/submissions/detail/322871097/  beats 78.62% JS Submissions.
            Simple strategy is to use 2 pointers.

            Curr to keep track of current list node and
            Next to detect duplicate values in next nodes by comparing with curr.

 */

var ListNode = require("../Utilities/ListNode");
var List = require("../Utilities/LinkedList");

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
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next)
        return head;
    var curr = head;
    var next = curr.next;
    while(next!=null){
        if(next.val == curr.val){
            while(next && next.val == curr.val)
                next = next.next;
            curr.next = next;
        }else{
            curr = next;
            next = curr.next;
        }
    }
    return head;
};

var main = () => {
    let l1 = List.prototype.constructList([1,1,2,2,2,2]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);
};

main();