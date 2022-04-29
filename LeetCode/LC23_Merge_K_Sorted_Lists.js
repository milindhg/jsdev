/* https://leetcode.com/problems/merge-k-sorted-lists/description/
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

 */

/* 
Solution:   https://leetcode.com/submissions/detail/154737744/  beats 100% js submissions.
            Best way is to keep merging 2 lists at a time until 1 list is left. 
            Use the given lists as a queue and keep removing 2 lists, merge them and enqueue the merged list back to queue.

            !!! TODO Do this problem using Priority Queue. Explanation here - https://www.youtube.com/watch?v=ptYUCjfNhJY | https://leetcode.com/problems/merge-k-sorted-lists/discuss/10528/A-java-solution-based-on-Priority-Queue 
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists == null || lists.length == 0)
        return [];
    while (lists.length > 1) {
        var list1 = lists.shift();
        var list2 = lists.shift();
        lists.push(mergeTwoLists(list1, list2));
    }
    return lists.shift();
};

var mergeTwoLists = function (l1, l2) {
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

var main = function(){
    var l1 = List.prototype.constructList([1,3,5]);
    List.prototype.printList(l1);
    var l2 = List.prototype.constructList([1,3,4]);
    List.prototype.printList(l2);
    var l3 = List.prototype.constructList([2,6]);
    List.prototype.printList(l3);
    var l4 = mergeKLists([l1,l2,l3]);
    List.prototype.printList(l4);
};
main();