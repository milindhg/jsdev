/* https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example:



Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
 

Note:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.


Solution:   https://leetcode.com/submissions/detail/466302355/ beats 95.95% JS Subsmissions.
            The easiest and most intuitive approach is to do this problem by Level Order Traversal.
            However, one of the conditions given in the notes, is that this problem should be done in constant space.
            Level order traversal general is done by using queue usually which takes up max O(2^h) space at a time where h is the height of the tree.
            But think of the queue as a pseudoLinkedList. Then the idea is to prepare the current queue by keepingtrack of current pseudoLinkedList.
            That way whenever the root reaches to null, we have to check whether we can get some new root from the pseudolinkedlist. When the pseudo linked list is completely empty and we're at second last level's last node, the root will become null and there won't be any nodes left in pseudo linked list to make new root. 
            During this pseudo linked list and root traversal side by side, we keep forming the next pointers of all the levels, and finally return the backup variable which points to the root at the start of the problem.

            So iterative, and done in constant space.

TYPE: TREE, TRICKY, LINKEDLIST


 */

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    var pseudoLLHead = new Node(0);
    var travLL = pseudoLLHead;
    var rootAtStart = root;
    while(root){
        if(root.left){
            travLL.next = root.left;
            travLL = travLL.next;
        }
        if(root.right){
            travLL.next = root.right;
            travLL = travLL.next;
        }
        root = root.next;
        if(!root){
            root = pseudoLLHead.next;
            travLL = pseudoLLHead;
            pseudoLLHead.next = null;
        }
    }
    return rootAtStart;
};

