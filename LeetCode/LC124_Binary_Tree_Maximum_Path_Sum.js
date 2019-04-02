/* https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

Given a non-empty binary tree, find the maximum path sum.

TYPE: HARD, TRICKY, TREE, MUSTSEE

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42


Solution:   https://leetcode.com/submissions/detail/219422191/  beats 90.24% JS Submissions.
            This is a very tricky problem
            Here the most tricky part of the problem is that the problem can be done using recursion. But the answer expected not only can be path from any node to any node, it can also be a single internal node. 
            For eg: Input: [-10,9,20,null,null,-2,-3]
            Output: 20

            So we sort of wan't to find the maxmimum path within the tree and return its sum. So not simply putting a condition based on leaf node is very important. 
            The max out of scope variable should be updated to keep track of max.
            The return should be done from the helper function because the helper function works based on the responses from the recursive calls made.


            Another small JS nuance - Just using an out of scope variable and passing it to an inner function definition improves the performance multifold. from 60.49 % to 90.24 % within all the JS Submissions.

 */

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
var maxPathSum = function(root) {
    if(root==null) return 0;
    var max = -Number.MAX_VALUE;
    var maxPathSumHelper = function(root){
        if(root==null) return 0;
        var leftPathSum = Math.max(maxPathSumHelper(root.left), 0);
        var rightPathSum = Math.max(maxPathSumHelper(root.right), 0);
        max = Math.max(max, (root.val+leftPathSum+rightPathSum));
        return ((root.val) + Math.max(leftPathSum, rightPathSum));
    }
    maxPathSumHelper(root);
    return max;
};

