/* 
https://leetcode.com/problems/palindrome-linked-list/description/

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

Solution:   https://leetcode.com/submissions/detail/328525333/
            beats 81.23% JS Submissions.

Simple approach of first using a stack to push the elements till the middle of
the list.
Then comparing each element from the middle of the list uptill the end.

Small caveat is that you should push the middle element only in case its odd
number of elements in the list. i.e. your fast pointer has not reached null yet
and is standing on the last element.

Otherwise don't push the last element on the stack.


 */

let List = require("../Utilities/LinkedList");
let ListNode = require("../Utilities/ListNode");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let stack = new Array();
    while(fast && fast.next){
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast)
        stack.push(slow.val);
    while(slow){
        if(slow.val != stack[stack.length-1])
            return false;
        stack.pop();
        slow = slow.next;
    }
    return true;
};

let main = () => {
    let l1 = List.prototype.constructList([1,2,3,2,1]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1,2,2,1]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1,2,3,4]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1,2]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1,2,3,4,2,1]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1,2,3,4,3,2,1]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1,2,3,3,2,1]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([1]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
    l1 = List.prototype.constructList([]);
    List.prototype.printList(l1);
    console.log(isPalindrome(l1));
};

main();