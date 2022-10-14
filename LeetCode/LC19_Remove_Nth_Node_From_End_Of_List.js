/*
 * 
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/
/*
Solution:   https://leetcode.com/submissions/detail/79619191/
            If we want to remove n'th element from the end of list, 
            keep 2 pointers. Fast to go till n from front.
            then fast and slow move together untill fast reaches end of list. Automatically that slow pointer is at n from end of list.
            Remove the element, slow pointer is pointing to. We get the updated LinkList.

            Runtime: O(n)
            Space: O(1)
            
*/

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/LinkedList');


//Definition for singly-linked list.
/* function ListNode (val) {
    this.val = val;
    this.next = null;
}; */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var fastnode = head;
    var slownode = head;
    var prev = null;

    // Move the fast pointer n places ahead to get the nth place from last element after this.
    while (n > 0) {
        fastnode = fastnode.next;
        n--;
    }

    // Check if it is last element from the last element
    // i.e. first element from front to be removed.
    // Then simply remove the first element and return remaining list.
    if (fastnode === null) {
        head = slownode.next;
        return head;
    }

    // Keep traversing till the fastpointer reached null i.e. end of list.
    // At this point the slowpointer is n elements away from end of list.
    while (fastnode !== null) {
        prev = slownode;
        slownode = slownode.next;
        fastnode = fastnode.next;
    }

    // check whether is is the first element of a single element list to be removed.
    if (prev === null) {
        return null;
    } else {
        prev.next = slownode.next;
        return head;
    }
};


var main = function () {
    var nums = [1, 2, 3, 4, 5];
    var l1 = List.prototype.constructList(nums);
    List.prototype.printList(l1);
    l1 = removeNthFromEnd(l1, 2);
    List.prototype.printList(l1);
    nums = [11, 22];
    l1 = List.prototype.constructList(nums);
    List.prototype.printList(l1);
    l1 = removeNthFromEnd(l1, 2);
    List.prototype.printList(l1);
};

main();

