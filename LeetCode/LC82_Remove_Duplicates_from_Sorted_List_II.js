/* 
https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3


Solution:   https://leetcode.com/submissions/detail/322824266/  beats 95.21% JS Submissions.
            So the basic idea is to have 3 pointers prev, curr and next.
            These are needed to keep track of prev, curr and next nodes

            Prev is needed to join to the next non-duplicate node since we want to altogether remove the duplicate nodes.
            Curr is needed for traversal
            Next is needed for traversal and checking whether there is a duplicate node by comparing value with curr.

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
    var prev = null;
    var curr = head;
    var next = curr.next;
    while(next!=null){
        if(curr.val==next.val){
            while(next!=null && curr.val==next.val){
                next = next.next;
            }
            if(head.val == curr.val){
                prev = null;
                head = next;
            }else{
                prev.next = next;
            }
            curr = next;
        }else{
            prev = curr;
            curr = next;
        }

        if(curr!=null)
            next = curr.next;
    }
    return head;
};

var main = () => {
    var l1 = List.prototype.constructList([1,1,1,2,3]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([1,1,2,2,3]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([1,2,3,3,4,4,5]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([1]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([1,2]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([2,2]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);

    l1 = List.prototype.constructList([1,2,3,3]);
    List.prototype.printList(l1);
    l1 = deleteDuplicates(l1);
    List.prototype.printList(l1);
};

main();