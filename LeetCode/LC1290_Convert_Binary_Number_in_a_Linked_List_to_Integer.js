/* 
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

 

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
Example 5:

Input: head = [0,0]
Output: 0
 

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1. 

Solution:   https://leetcode.com/submissions/detail/444855264/  beats 97.33% JS Submissions.
            Very simple - Here main question to ask is which is the most significant number - Head or Tail.
            This solution is for scenario when head is the most significant number. i.e. as it appears on a paper.
            So simply do 2 operations - left shift by 1 so as to increment ans's power by 2. and then or with the new value from traversal item so as to add that to the ans.
*/

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/LinkedList');


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let trav = head;
    let ans;
    while (trav) {
        ans = (ans ? ((ans << 1) | trav.val) : trav.val);
        trav = trav.next;
    }
    return ans;
};

var main = () => {
    var l1 = List.prototype.constructList([1, 0, 1]);
    List.prototype.printList(l1);
    console.log(getDecimalValue(l1));
    l1 = List.prototype.constructList([1, 0]);
    List.prototype.printList(l1);
    console.log(getDecimalValue(l1));
    l1 = List.prototype.constructList([1]);
    List.prototype.printList(l1);
    console.log(getDecimalValue(l1));
    var l1 = List.prototype.constructList([0]);
    List.prototype.printList(l1);
    console.log(getDecimalValue(l1));
    var l1 = List.prototype.constructList([0, 0]);
    List.prototype.printList(l1);
    console.log(getDecimalValue(l1));
    var l1 = List.prototype.constructList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]);
    List.prototype.printList(l1);
    console.log(getDecimalValue(l1));
};

main();