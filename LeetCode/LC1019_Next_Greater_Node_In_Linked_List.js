/* 

https://leetcode.com/problems/next-greater-node-in-linked-list/description/

We are given a linked list with head as the first node.  Let's number the nodes
in the list: node_1, node_2, node_3, ... etc.

Each node may have a next larger value: for node_i, next_larger(node_i) is the
node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest
possible choice.  If such a j does not exist, the next larger value is 0.

Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).

Note that in the example inputs (not outputs) below, arrays such as [2,1,5]
represent the serialization of a linked list with a head node value of 2, second
node value of 1, and third node value of 5.

 

Example 1:
Input: [2,1,5]
Output: [5,5,0]

Example 2:
Input: [2,7,4,3,5]
Output: [7,0,5,5,0]

Example 3:
Input: [1,7,5,1,9,2,5,1]
Output: [7,9,9,9,0,5,0,0]
 

Note:

1 <= node.val <= 10^9 for each node in the linked list.
The given list has length in the range [0, 10000].


Solution:   https://leetcode.com/submissions/detail/280259053/ 
            beats 70.70% JS Submissions
            

Stack Approach: Traverse the list and Keep pushing elements on stack until they
are smaller than the stack's top. Once you find an element which is greater than
the stack's top, then keep popping elements from stack until the current element
is greater than stack's top. So that means the current element is next greater
element for all the elements popped from stacks.

Finally if the stack is not empty. then basically the next greater element for
all the elements in the stack is 0 i.e no next greater element for the elements
in the stack after the list is completely traversed and stack is not empty.

 */


var List = require("../Utilities/LinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    var output = [];
    var stk = [];
    if(head){
        var trav = head;
        stk.push(head);
        while(trav.next){
            trav = trav.next;
            if(stk.length>0 && trav.val>stk[stk.length-1].val){   
                // if current elem is greater than prev elem then update prev
                // elements next greater.
                while(stk.length>0 && stk[stk.length-1].val<trav.val){
                    var elem = stk.pop();
                    elem.nextGreater = trav.val;
                }
            }
            stk.push(trav);
        }
        if(stk.length>0){
            while(stk.length>0){
                var elem = stk.pop();
                elem.nextGreater = 0;
            }
        }
        
        var trav = head;
        while(trav){
            output.push(trav.nextGreater);
            trav = trav.next;
        }
    }
    
    return output;
    
};


var main = () => {
    var arr = [2,1,5];
    var head = List.prototype.constructList(arr);
    List.prototype.printList(head);
    console.log(nextLargerNodes(head));

    var arr = [2,7,4,3,5];
    var head = List.prototype.constructList(arr);
    List.prototype.printList(head);
    console.log(nextLargerNodes(head));

    var arr = [1,7,5,1,9,2,5,1];
    var head = List.prototype.constructList(arr);
    List.prototype.printList(head);
    console.log(nextLargerNodes(head));

};

main();