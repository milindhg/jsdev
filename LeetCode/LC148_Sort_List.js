/* https://leetcode.com/problems/sort-list/description/

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

 */
var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/LinkedList');

// * Definition for singly-linked list.
/*   function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 */ 

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) { //Using insertion sort. gives only 6% percentile on JS Submissions.
    if (head == null) return null;
    if (head.next == null) return head;
    var iter = head;
    var prev = head;
    var curr = head.next; //curr is the first element to be considred.
    var prevCurr = head;
    var currSorted = false;
    while (curr != null) {
        //console.log(curr.val);
        if (curr.val < head.val) { //put curr first and increase curr.
            prevCurr.next = curr.next;
            curr.next = head;
            head = curr;
            curr = prevCurr.next;
        } else { // correct place for curr might be in the middle somewhere or probably already well placed.
            prev = head;
            iter = head.next;
            while (iter.val < curr.val && iter != curr) {
                iter = iter.next;
                prev = prev.next;
            }
            if(curr!=iter){
                prevCurr.next = curr.next;
                prev.next = curr;
                curr.next = iter;
                curr = prevCurr.next;    
            }else{
                prevCurr = prevCurr.next;
                curr = curr.next;
            }
        }
    }
    return head;    
};

//suggested is merge sort.
var main = function(){
    var head = List.prototype.constructList([4,2,1,3]);
    List.prototype.printList(head);
    head = sortList(head);
    List.prototype.printList(head);
};

main();