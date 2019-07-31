/* https://leetcode.com/problems/binary-search-tree-iterator/description/

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

 

Example:



BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false


Note:

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.


Solution:   https://leetcode.com/submissions/detail/224827532/ beats 100% of JS Submissions.
            Here the basic idea is to first prepare an inorder traversal of the BST tree given in input. 
            So that way this problem reduces to getting the next element from the array given an array with iterator.
            Neat solution but the space complexity is about O(n) where n is number of nodes in the tree.
            We still need to see if we can get a O(h) solution with the h being the height of the tree.

 */



var Tree = require('../Utilities/Tree');
var TreeNode = require('../Utilities/TreeNode');


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.nodeArr = new Array();
    function inorder(root, arr){
        if(root==null) return;
        if(root.left)
            inorder(root.left,arr);
        arr.push(root);
        if(root.right)
            inorder(root.right,arr);
    }
    inorder(root,this.nodeArr);
    this.iter = 0;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return (this.nodeArr[this.iter++]).val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.iter<this.nodeArr.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var main = function(){
    var root = Tree.prototype.buildBinaryTree([7,3,15,null,null,9,20]);
    Tree.prototype.printBinaryTree(root);
    var obj = new BSTIterator(root);
    var param_1 = obj.next();
    var param_2 = obj.hasNext();

};

main();