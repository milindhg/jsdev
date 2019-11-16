/* https://leetcode.com/problems/binary-tree-pruning/description/

We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]
 
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.


Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]



Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]



Note:

The binary tree will have at most 100 nodes.
The value of each node will only be 0 or 1.


Solution:   https://leetcode.com/submissions/detail/211012669/  beats 56.09% JS Submissions.
            This is same as finding the sum of all nodes of a tree or finding the max weight of tree. 
            Basically determine for every subtree whether there are nodes with 1 or no nodes with 1 as val.

 */


var Tree = require("../Utilities/Tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(!root) { return null; }
    let left = pruneTree(root.left);
    let right = pruneTree(root.right);
    if(!left) { root.left = null;  }
    if(!right) { root.right = null; }
    if(!left && !right && !root.val) { return null; }
    return root;
};

var main = () => {
    var arr = [1,null,0,0,1];
    var root = Tree.prototype.buildBinaryTree(arr);
    Tree.prototype.printBinaryTree(root);
    root = pruneTree(root);
    Tree.prototype.printBinaryTree(root);
    console.log(root);

    arr = [1,0,1,0,0,0,1];
    root = Tree.prototype.buildBinaryTree(arr);
    Tree.prototype.printBinaryTree(root);
    root = pruneTree(root);
    Tree.prototype.printBinaryTree(root);
    console.log(root);

    arr = [1,1,0,1,1,0,1,0];
    root = Tree.prototype.buildBinaryTree(arr);
    Tree.prototype.printBinaryTree(root);
    root = pruneTree(root);
    Tree.prototype.printBinaryTree(root);
    console.log(root);
};

main();