/* https://leetcode.com/problems/insertion-sort-list/description/

Sort a linked list using insertion sort.


A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 

Algorithm of Insertion Sort:

Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
It repeats until no input elements remain.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5



Solution:   https://leetcode.com/submissions/detail/195978354/  beats 82.35 % JS Submissions.


 */

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/LinkedList');

// * Definition for singly-linked list.
/* function ListNode(val) {
    this.val = val;
    this.next = null;
}
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    if (head == null) return null;
    if (head.next == null) return head;
    var iter = head;
    var prev = head;
    var curr = head.next; //curr is the first element to be considred.
    var prevCurr = head;
    var currSorted = false;
    while (curr != null) {
        // console.log(curr.val);
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

var main = function(){
    var arr = [4,2,1,3];
    var head = List.prototype.constructList(arr);
    List.prototype.printList(head);
    head = insertionSortList(head);
    List.prototype.printList(head);
    arr = [1,5,3,4,0];
    head = List.prototype.constructList(arr);
    List.prototype.printList(head);
    head = insertionSortList(head);
    List.prototype.printList(head);
};

main();