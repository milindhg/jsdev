/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 *
 * https://leetcode.com/problems/range-sum-of-bst/description/
 *
 * algorithms
 * Easy (78.53%)
 * Likes:    932
 * Dislikes: 173
 * Total Accepted:    174.4K
 * Total Submissions: 218.2K
 * Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'
 *
Given the root node of a binary search tree, return the sum of values of all
nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 * Output: 32
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * Output: 23
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes in the tree is at most 10000.
 * The final answer is guaranteed to be less than 2^31.
 * 
 * Solution:    https://leetcode.com/submissions/detail/327735088/
 *              Beats 99.08% JS Submissions.
 * 
 * Very simple approach.
 * Just do a inorder function. and put a condition on the L and R.
 * 
 */

let Tree = require("../Utilities/Tree");
let TreeNode = require("../Utilities/TreeNode");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let ans = new Array();
    ans.push(0);
    inorder(root, L, R, ans);
    return ans[0];
};

let inorder = (root, L, R, ans) => {
    if(!root)
        return;
    
    inorder(root.left, L, R, ans);
    if(L <= root.val && root.val <= R)
        ans[0] += root.val;
    inorder(root.right, L, R, ans);
};
// @lc code=end


let main = () => {
    let t1 = Tree.prototype.buildBinaryTree([10,5,15,3,7,null,18]);
    Tree.prototype.printBinaryTree(t1);
    console.log(rangeSumBST(t1, 7, 17));
};

main();