/* 
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.


Solution:   https://leetcode.com/submissions/detail/744848522/ beats 79.31% JS submissions.
            This is a basic condition checking problem. The main intuition is that the least common ancestor is the root of the subtree containing both input values p and q.
            If both are in some left or right subtree of the main rooted input tree, then least common ancestor will also be in the left or right subtree respectively.
            If the tree is skewed then perhaps one of the two p or q is going to be the least common ancestor itself.


 */

var TreeNode = require("../Utilities/TreeNode");
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    while (root) {
        if (root.val === p.val ||
            root.val === q.val ||
            (root.val < q.val && root.val > p.val) ||
            (root.val < p.val && root.val > q.val))
            return root;
        else if (root.val < p.val)
            root = root.right   //that means the subtree containing both p and q is on the right
        else if (root.val > q.val)
            root = root.left   //that means the subtree containing both p and q is on the left
    }

};

var main = function () {
    var t1 = Tree.prototype.buildBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    var p = new TreeNode(2), q = new TreeNode(8);
    console.log(lowestCommonAncestor(t1, p, q));

    t1 = Tree.prototype.buildBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
    var p = new TreeNode(2), q = new TreeNode(4);
    console.log(lowestCommonAncestor(t1, p, q));

    t1 = Tree.prototype.buildBinaryTree([2, 1]);
    var p = new TreeNode(2), q = new TreeNode(1);
    console.log(lowestCommonAncestor(t1, p, q));
}

main();