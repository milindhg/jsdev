/* https://leetcode.com/problems/rotate-list/description/

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

Solution:   https://leetcode.com/submissions/detail/206920884/  beats 43% JS Submissions.
            The best way to solve the problem is to treat it similar to the removing kth element of linklist from last.
            1. So first reduce k within length of linkedlist. Since k can be very large also. k = k% len;
            Tricky part is doing the calculation of length and k together.
            2. So first calulate length and since we're in javascript, also create a new attribute for Node called prev. And keep marking each node's prev as its previous element.
            3. Also mark the tail.
            4. Then simply keep bringing 1 element at a time from tail to head and update head. Do this k times.
            



 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/ListNode');


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head==null) return head;
    
    var prev = head;
    prev.prev = null;
    var len = 1;
    while(prev.next){
        prev.next.prev = prev;
        prev = prev.next;
        len++;
    }
    var tail = prev;
    
    k = k%len;
    while(k>0){
        tail.next = head;
        head = tail;
        tail = tail.prev;
        tail.next = null;
        k--;
    }
    return head;
};


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRightBetterAndEasy = function(head, k) {
    var len = 0;
    var trav = head;
    var tail = null;
    while(trav){
        len++;
        tail = trav.next ? trav.next : tail;
        trav = trav.next;
    }

    //so we've marked the tail of the linkedlist and also calculated the length of linkedlist.
    // now check whether linkedlist is null or single noded.
    k = k%len;
    if(k===0 || len<=1){
        return head;
    }

    //now connect tail to head and keep moving len - k times. Then update new tail and new head.
    tail.next = head;
    k = len - k;
    while(k>0){
        tail = tail.next;
        k--;
    }

    head = tail.next;
    tail.next = null;
    return head;

};


var main = function(){
    
}