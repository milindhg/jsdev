/* 
https://leetcode.com/problems/binary-tree-paths/description/

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

Solution:   https://leetcode.com/submissions/detail/311717783/  beats 59.59% JS Submissions.
            The idea is exactly same as the inorder traversal. 
            But the trick is to have a pass-by-reference variable that can be used to keep track of all the paths found so far.

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var ans = [];
    helper(root, "", ans);
    return ans;
};

var helper = (root, currentPath, ans) => {
    if(root){
        if(root.left) helper(root.left, currentPath+"->"+root.val, ans);
        if(root.left==null && root.right==null){
            currentPath += "->"+root.val;
            ans.push(currentPath);
        }
        if(root.right) helper(root.right, currentPath+"->"+root.val, ans);
    }
};


var main = () => {
    var t1 = Tree.prototype.buildBinaryTree([1,2,3,null,5]);
    Tree.prototype.printBinaryTree(t1);
    console.log(binaryTreePaths(t1));
};

main();