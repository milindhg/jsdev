/* 
https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

TYPE:   TREE, INORDER Traversal, Tree Traversal

Solution:   https://leetcode.com/submissions/detail/311735758/ beats 90.44% JS Submissions.
            Again this problem is very simple tree traversal using inorder traversal from root to leaf.
            So caveat is that keep calculating the sum on the go like you would for a path in string form so that backtracking automatically takes care of the stack since string is a pass-by-value.
            And can keep a pass-by-reference variable also to keep adding the pathsums found at every leaf.

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
 * @return {number}
 */
var sumNumbers = function(root) {
    var ans = [0];
    helper(root, "", ans);
    return ans[0]
};

var helper = (root, pathSum, ans) => {
    if(root){
        if(root.left) helper(root.left, pathSum*10+root.val, ans);
        if(root.left==null && root.right==null){
            pathSum = pathSum*10 + root.val;
            ans[0] += pathSum;
        }
        if(root.right) helper(root.right, pathSum*10+root.val, ans);
    }
};

var main = () => {
    var t1 = Tree.prototype.buildBinaryTree([7,4,3,null,null,6,19]);
    Tree.prototype.printBinaryTree(t1);
    console.log(sumNumbers(t1));
    t1 = Tree.prototype.buildBinaryTree([1,2,3]);
    Tree.prototype.printBinaryTree(t1);
    console.log(sumNumbers(t1));
};

main();