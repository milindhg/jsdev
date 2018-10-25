/* https://leetcode.com/problems/binary-tree-inorder-traversal/description/

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?

Solution:   https://leetcode.com/submissions/detail/169969098/ beats 100% JS Submissions.
Nice explanation here: https://leetcode.com/problems/binary-tree-inorder-traversal/solution/



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
 * @return {number[]}
 */
var inorderTraversalIterative = function(root) {
    var ans = [];
    var stack = [];
    var curr = root;
    while(curr!=null || stack.length>0){
        while(curr!=null){
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop();
        ans.push(curr.val);
        curr=curr.right;
    }
    return ans;
};

