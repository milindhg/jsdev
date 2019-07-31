/*

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.

Solution: Since you've been given direct access to node and you don't have to worry about the last node, just copy next nodes, value in current node and point to next.next node. i.e. delete next node.


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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 
 * This solution beats 45.93% of other JS Solutions.
 * 
 */
var deleteNode = function(node) {
    var nextnode = node.next;
    node.val = nextnode.val;
    node.next = nextnode.next;
    delete nextnode;
};

var main = function(){
    var l1 = List.prototype.constructList([1,2,3,4]);
    List.prototype.printList(l1);
    var thirdNode = l1.next.next;
    deleteNode(thirdNode);
    List.prototype.printList(l1);
};
main();