/* 

https://leetcode.com/problems/merge-nodes-in-between-zeros/

2181. Merge Nodes in Between Zeros
Medium

755

19

Add to List

Share
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

 

Example 1:


Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.
Example 2:


Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4.
 

Constraints:

The number of nodes in the list is in the range [3, 2 * 105].
0 <= Node.val <= 1000
There are no two consecutive nodes with Node.val == 0.
The beginning and end of the linked list have Node.val == 0.
Accepted
48,266
Submissions
55,464

Solution:   https://leetcode.com/submissions/detail/794454743/  beats 61.54% JS Submissions
            Start traversal from head.next since head is always going to be zero.
            Use the same linked list and keep counting the nodes which are non-zero.
            As soon as you find zero, update the zero node to sum value and set set prev node's next to this newly updated node. (i.e. skip nodes between prev node and newly updated node)
            Finally to skip the zero head node, just return head.next
            
 */


let List = require("../Utilities/LinkedList");
let ListNode = require("../Utilities/ListNode");

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
 */
var mergeNodes = function (head) {
    let ansHead;
    let ansTrav;
    let trav = head.next;
    let prev = head;
    let sum = 0;
    while (trav != null) {
        if (trav.val == 0) {
            trav.val = sum;
            prev.next = trav;
            prev = prev.next;
            sum = 0;
        } else {
            sum += trav.val;
        }
        trav = trav.next;
    }
    return head.next;
};

let main = () => {
    let l1 = new List();
    let h1 = l1.constructList([0, 3, 1, 0, 4, 5, 2, 0]);
    let h2 = mergeNodes(h1);
    l1.printList(h2);
    let h3 = l1.constructList([0, 3, 0]);
    let h4 = mergeNodes(h3);
    l1.printList(h4);
};

main();