/* https://leetcode.com/problems/linked-list-cycle/description/

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


 

Follow up:

Can you solve it using O(1) (i.e. constant) memory?


Solution:   https://leetcode.com/submissions/detail/226010828/  beats 91.68% of JS Submissions. But this is using O(n) extra space.
            Prepare a set of all the nodes iterated.
            If current node is already present in the set, then cycle is found. Return true.

            https://leetcode.com/submissions/detail/226016520/  beats 100% JS Submissions.
            Keep 2 pointers fast and slow.
            Slow with speed of next
            Fast with a speed of next.next.
            So if there is a cycle found. fast will become equal to slow somepoint after fast has gone once in the loop already and meeting slow again in next loop. But this is not the cycle point yet. 
                To get the cycle point, move slow to head again and decrease the speed of fast to same as slow.
                Then start moving slow and fast to next at the same pace. Now when slow and fast meets, that is the cycle starting point.
            If no cycle, then fast will finish as null. So iteration will end and return null.


            ALGORITHM:
            1. Traverse linked list using two pointers - fast and slow.
            2. Move one pointer by one and other pointer by two.  
            3. If these pointers meet at same node then there is a loop.  
            If pointers do not meet then linked list doesn’t have loop.
            4. If a loop is found, initialize slow pointer to head, let fast pointer be at 
            its position.
            5. Move both slow and fast pointers one node at a time.
            6. The point at which they meet is the start of the loop.



 */


var ListNode = require('../Utilities/ListNode');
var List = require('../Utilities/LinkedList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * O(n) time complexity
 * O(n) space complexity
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var cur = head;
    var hmap = {};
    var myset = new Set();
    while(cur!=null){
        if(myset.has(cur))
            return true;
        else{
            myset.add(cur);
            cur = cur.next;
        }
    }
    return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * O(n) time complexity
 * O(1) space complexity
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycleBetter = function(head) {
    var rab = head, tort = head;
    var isCycleFound = false;
    while(rab!=null && rab.next!=null){
        tort = tort.next;
        rab = rab.next.next;
        if(tort==rab){
            return true;
        }
    }
    return false;
};


var main = function(){
    function prepareInput(arr, pos){
        var head = List.prototype.constructList(arr);
        var tail = List.prototype.getTail(head);
        var inputPos = pos;
        var i = 0;
        var trav = head;
        if(pos>=0){
            while(i<inputPos){
                trav = trav.next;
                i++;
            }
            tail.next = trav;
        }
        return head;
    };

    var listHead = prepareInput([3,2,0,-4],1);
    var answer = detectCycle(listHead);
    console.log("Output: " + answer + ' ' + ((answer==true) ? 'CORRECT' : 'INCORRECT'));
    listHead = prepareInput([1,2],0);
    answer = detectCycle(listHead);
    console.log("Output: " + answer + ' ' + ((answer==true) ? 'CORRECT' : 'INCORRECT'));
    listHead = prepareInput([1],-1);
    answer = detectCycle(listHead);
    console.log("Output: " + answer + ' ' + ((answer==false) ? 'CORRECT' : 'INCORRECT'));
};

main();