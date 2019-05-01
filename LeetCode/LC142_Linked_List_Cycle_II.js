/* https://leetcode.com/problems/linked-list-cycle-ii/description/

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


 

Follow up:
Can you solve it without using extra space?


Solution:   https://leetcode.com/submissions/detail/226010828/  beats 91.68% of JS Submissions. But this is using O(n) extra space.
            Prepare a set of all the nodes iterated.
            If current node is already present in the set, then cycle is found. Return that node.

            https://leetcode.com/submissions/detail/226012722/  beats 100% JS Submissions.
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

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/ListNode');

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
            return cur;
        else{
            myset.add(cur);
            cur = cur.next;
        }
    }
    return null;
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
            tort = head;
            isCycleFound = true
            break;
        }
    }
    while(rab!=tort && isCycleFound){
        rab = rab.next;
        tort = tort.next;
    }
    if(isCycleFound) return tort;
    return null;
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
        return [head,(pos>-1)?trav:null];
    };

    var input = prepareInput([3,2,0,-4],1);
    var listHead = input[0];
    var answer = detectCycle(listHead);
    console.log("Output: " + answer + ' ' + ((answer==input[1]) ? 'CORRECT' : 'INCORRECT'));
    input = prepareInput([1,2],0);
    listHead = input[0];
    answer = detectCycle(listHead);
    console.log("Output: " + answer + ' ' + ((answer==input[1]) ? 'CORRECT' : 'INCORRECT'));
    input = prepareInput([1],-1);
    listHead = input[0];
    answer = detectCycle(listHead);
    console.log("Output: " + answer + ' ' + ((answer==input[1]) ? 'CORRECT' : 'INCORRECT'));
};

main();