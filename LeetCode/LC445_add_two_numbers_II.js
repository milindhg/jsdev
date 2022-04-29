/* https://leetcode.com/problems/add-two-numbers-ii/

445. Add Two Numbers II
Medium

3450

225

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
Example 2:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
Example 3:

Input: l1 = [0], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 

Follow up: Could you solve it without reversing the input lists?

Solution:   https://leetcode.com/submissions/detail/688955692/  beats 96.10% of JS submissions.
            Prepare 2 stacks by traversing the 2 linked lists essentially preparing reversal of the number in the stack.
            As we keep popping numbers from stack basically we keep adding 2 unit numbers and carry over. 
            After every answer we prepare a new node for answer linked list, make previous head of ans as next node of new node prepared and update the head of answer linked list. 

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/ListNode');


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var stack1 = [];
    while (l1 != null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    var stack2 = [];
    while (l2 != null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    var carry = 0;
    var ansL;
    while (stack1.length > 0 || stack2.length > 0) {
        var a = stack1.pop();
        var b = stack2.pop();
        var sum = carry;
        if (a) sum += a;
        if (b) sum += b;
        var node;
        if (sum > 9) {
            carry = 1;
            node = new ListNode(sum - 10);
        } else {
            carry = 0;
            node = new ListNode(sum);
        }
        if (ansL == null) {
            ansL = node;
        } else {
            node.next = ansL;
            ansL = node;
        }
    }
    if (carry > 0) {
        var node = new ListNode(carry);
        node.next = ansL;
        ansL = node;
    }
    // console.log(ansL);
    return ansL;
};

var main = function () {
    var l1 = List.prototype.constructList([7, 2, 4, 3]);
    var l2 = List.prototype.constructList([5, 6, 4]);
    List.prototype.printList(l1);
    List.prototype.printList(l2);
    var l3 = addTwoNumbers(l1, l2);
    List.prototype.printList(l3);
    var l1 = List.prototype.constructList([9]);
    var l2 = List.prototype.constructList([9]);
    List.prototype.printList(l1);
    List.prototype.printList(l2);
    var l3 = addTwoNumbers(l1, l2);
    List.prototype.printList(l3);
    var l1 = List.prototype.constructList([0]);
    var l2 = List.prototype.constructList([0]);
    List.prototype.printList(l1);
    List.prototype.printList(l2);
    var l3 = addTwoNumbers(l1, l2);
    List.prototype.printList(l3);


};

main();