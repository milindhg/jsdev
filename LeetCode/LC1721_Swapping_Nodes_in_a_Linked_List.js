/* 

https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

1721. Swapping Nodes in a Linked List
Medium

3254

116

Add to List

Share
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100
Accepted
184,578
Submissions
271,973



Solution:   https://leetcode.com/submissions/detail/811148245/  beats 91.81% JS Submissions
            Simple approach of fast and slow pointers. instead we can call it forward and backward pointers.
            So get kStart pointer at the length k from start by traversing next k times.
            Then set a traversal trav pointer to kStart position.
            and use the distance between head and trav to keep traversing both trav and kEnd, till trav reaches end of linkedlist.
            When trav reaches end of linkedlist, kEnd reaches to its length from end of list i.e. kth position from end of list.

 */

const LinkedList = require("../Utilities/LinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let kStart = head;
    let i = 1;
    //Get kth node from start
    while (i < k) {
        kStart = kStart.next;
        i++;
    }

    //Get kth node from end
    let kEnd = head;
    let trav = kStart;
    while (trav.next) {
        kEnd = kEnd.next;
        trav = trav.next;
    }

    //swap values of kStart and kEnd nodes. (Alternatively some more pointers can be used to actually swap the nodes in memory as well.)
    let temp = kStart.val;
    kStart.val = kEnd.val;
    kEnd.val = temp;

    return head;
};

let main = () => {
    let List = require("../Utilities/LinkedList");
    let l1 = new List();
    let head1 = l1.constructList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]);
    l1.printList(head1);
    head1 = swapNodes(head1, 5);
    l1.printList(head1);

    head1 = l1.constructList([1, 2, 3, 4, 5]);
    l1.printList(head1);
    head1 = swapNodes(head1, 2);
    l1.printList(head1);
};

main();