/* 
https://leetcode.com/problems/binary-tree-preorder-traversal/description/

Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?

Solution:   https://leetcode.com/submissions/detail/279990914/
            iterative solution beats 79.04% JS Submissions.
            
            https://leetcode.com/submissions/detail/279991199/ 
            recursive solution beats 53.29% JS Submissions.
            
The approach is same as the preorder traversal or a n-ary tree.  i.e. in
recursive approach - VLR.


@time:  O(n)
@Space: O(1)

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
var preorderTraversal = function(root) {
    var output = [];
    preOrderIterativeHelper(root, output);
    return output;
};

var preOrderRecursiveHelper = function(root, output){
    if(root){
        output.push(root.val);
        preOrderRecursiveHelper(root.left,output);
        preOrderRecursiveHelper(root.right,output);
    }
};

var preOrderIterativeHelper = function(root, output){
    var stk = [];
    if(root){
        stk.push(root);
        while(stk.length>0){
            var currNode = stk.pop();
            output.push(currNode.val);
            if(currNode.right)
                stk.push(currNode.right);
            if(currNode.left)
                stk.push(currNode.left);
        }
    }
};

