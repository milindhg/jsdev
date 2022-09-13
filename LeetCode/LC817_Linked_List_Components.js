/* 

https://leetcode.com/problems/linked-list-components/

817. Linked List Components
Medium

769

1883

Add to List

Share
You are given the head of a linked list containing unique integer values and an integer array nums that is a subset of the linked list values.

Return the number of connected components in nums where two values are connected if they appear consecutively in the linked list.

 

Example 1:


Input: head = [0,1,2,3], nums = [0,1,3]
Output: 2
Explanation: 0 and 1 are connected, so [0, 1] and [3] are the two connected components.
Example 2:


Input: head = [0,1,2,3,4], nums = [0,3,1,4]
Output: 2
Explanation: 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.
 

Constraints:

The number of nodes in the linked list is n.
1 <= n <= 104
0 <= Node.val < n
All the values Node.val are unique.
1 <= nums.length <= n
0 <= nums[i] < n
All the values of nums are unique.
Accepted
73,871
Submissions
127,203


Solution:   https://leetcode.com/submissions/detail/795642789/  beats 84% JS Submissions
            Very simple approach 1 - store the elements in the set and then keep counting the adjacent groups of nodes from the linkedlist as we traverse the linked list.


 */

let ListNode = require("../Utilities/ListNode");
let List = require("../Utilities/LinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
    //approach 1 - store the elements in the set and then keep counting the adjacent groups of nodes from the linkedlist as we traverse the linked list.
    let numsSet = new Set();
    nums.forEach(item => numsSet.add(item));

    let trav = head;
    let ans = 0;
    while (trav != null) {
        if (numsSet.has(trav.val)) {
            ans += 1;
            while (trav != null && numsSet.has(trav.val)) {
                trav = trav.next;
            }
        }
        while (trav != null && !numsSet.has(trav.val)) {
            trav = trav.next;
        }
    }
    return ans;
};

let main = () => {
    let l1 = new List();
    let head1 = l1.constructList([0, 1, 2, 3, 4]);
    l1.printList(head1);
    console.log(numComponents(head1, [0, 3, 1, 4]));
    let head2 = l1.constructList([0, 1, 2, 3]);
    l1.printList(head2);
    console.log(numComponents(head2, [0, 1, 3]));
    let head3 = l1.constructList([3, 2, 1, 0]);
    l1.printList(head3);
    console.log(numComponents(head3, [0, 1]));
    let head4 = l1.constructList([0, 1]);
    l1.printList(head4);
    console.log(numComponents(head4, [1]));
};

main();