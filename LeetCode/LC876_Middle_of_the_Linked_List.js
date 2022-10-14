/* 
https://leetcode.com/problems/middle-of-the-linked-list/description/

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Note:

The number of nodes in the given list will be between 1 and 100.

Solution:   https://leetcode.com/submissions/detail/321561549/  beats 97.28% JS Submissions.
            Best trick is to use slow and fast pointer. Remember tortoise and hare story ;-)
            Runtime: O(n)
            Space: O(1)

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
var middleNode = function (head) {
    var slow = head;
    var fast = head;
    while (fast.next != null && fast.next.next != null && slow.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return (fast.next != null) ? slow.next : slow;
};

var main = () => {
    var l1 = List.prototype.constructList([1, 2, 3, 4, 5]);
    List.prototype.printList(l1);
};

main();