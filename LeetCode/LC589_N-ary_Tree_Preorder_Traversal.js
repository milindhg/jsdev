/* 
https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/

Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Follow up:

Recursive solution is trivial, could you do it iteratively?

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
 

Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]

Solution:   https://leetcode.com/submissions/detail/279938996/ Recursive solution beats 99.79% JS submissions
            https://leetcode.com/submissions/detail/279940316/ Iterative solution beats 99.89% JS Submissions.
            Same logic as preorder traversal for the preorder traversal of the binary tree.
            For iterative approach, use stack.

 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var output = [];
    preorderIterativeHelper(root, output);
    return output;
};


var preorderRecursiveHelper = function(root, output){
    if(root){
        output.push(root.val);
        root.children.forEach((child)=>{
            preorderRecursiveHelper(child,output);
        });
    }
};

var preorderIterativeHelper = function(root, output){
    var stk = [];
    var visited = new Set();
    if(root){
        stk.push(root);
        while(stk.length>0){
            var currNode = stk.pop();
            output.push(currNode.val);
            if(currNode.children)
                currNode.children.slice().reverse().forEach((child)=>{
                    stk.push(child);
                });
        }
    }
};
