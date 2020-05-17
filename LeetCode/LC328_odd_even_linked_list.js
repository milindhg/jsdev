/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 *
 * https://leetcode.com/problems/odd-even-linked-list/description/
 *
 * algorithms
 * Medium (52.80%)
 * Likes:    1607
 * Dislikes: 285
 * Total Accepted:    247.1K
 * Total Submissions: 454.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given a singly linked list, group all odd nodes together followed by the
 * even nodes. Please note here we are talking about the node number and not
 * the value in the nodes.
 * 
 * You should try to do it in place. The program should run in O(1) space
 * complexity and O(nodes) time complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 1->3->5->2->4->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 2->1->3->5->6->4->7->NULL
 * Output: 2->3->6->7->1->5->4->NULL
 * 
 * 
 * Note:
 * 
 * 
 * The relative order inside both the even and odd groups should remain as it
 * was in the input.
 * The first node is considered odd, the second node even and so on ...
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/340434261/
 *              beats 89% JS Submissions.
 * 

Very simple approach of trav pointer and deleting the even nodes and preparing a
new linked list of even nodes. At last joining even list at the end of odd list.

 * 
 */

let ListNode = require("../Utilities/ListNode");
let List = require("../Utilities/LinkedList");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @time O(n)
 * @space O(1)
 */
var oddEvenList = function (head) {
    if (!head || !head.next)
        return head;

    let trav = head;
    let tempHead = null;
    let tempTrav = tempHead;

    while (trav.next) {
        if (trav.next) {
            if (tempHead == null) {
                tempHead = deleteNode(trav, trav.next);
                tempTrav = tempHead;
            }
            else {
                tempTrav.next = deleteNode(trav, trav.next);
                tempTrav = tempTrav.next;
            }
        }
        if(trav.next) trav = trav.next;
    }

    trav.next = tempHead;
    return head;
};

let deleteNode = function (prev, curr) {
    prev.next = curr.next;
    curr.next = null;
    return curr;
};
// @lc code=end

let main = () => {
    let l1 = List.prototype.constructList([1, 2, 3, 4, 5]);
    List.prototype.printList(l1);
    List.prototype.printList(oddEvenList(l1));

    l1 = List.prototype.constructList([1, 2]);
    List.prototype.printList(l1);
    List.prototype.printList(oddEvenList(l1));

    l1 = List.prototype.constructList([1]);
    List.prototype.printList(l1);
    List.prototype.printList(oddEvenList(l1));

    l1 = List.prototype.constructList([]);
    List.prototype.printList(l1);
    List.prototype.printList(oddEvenList(l1));

    l1 = null;
    List.prototype.printList(l1);
    List.prototype.printList(oddEvenList(l1));

    l1 = List.prototype.constructList([1, 2, 3, 4, 5, 6]);
    List.prototype.printList(l1);
    List.prototype.printList(oddEvenList(l1));
};

main();