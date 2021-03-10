/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Solution:   User recursion. For each node, get left and right subtree depths and add 1. 
            Each time to get the max depth between left and right subtrees, use Math.max function.
            
            https://leetcode.com/submissions/detail/91061813/

*/

var Tree = require("../Utilities/Tree");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root || root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

const main = () => {
    var t1 = Tree.prototype.buildBinaryTree([3,9,20,null,null,15,7]);
    Tree.prototype.printBinaryTree(t1);
    console.log(maxDepth(t1));

    t1 = Tree.prototype.buildBinaryTree([1,null,2]);
    Tree.prototype.printBinaryTree(t1);
    console.log(maxDepth(t1));

    t1 = Tree.prototype.buildBinaryTree([]);
    Tree.prototype.printBinaryTree(t1);
    console.log(maxDepth(t1));

    t1 = Tree.prototype.buildBinaryTree([0]);
    Tree.prototype.printBinaryTree(t1);
    console.log(maxDepth(t1));
};

main();