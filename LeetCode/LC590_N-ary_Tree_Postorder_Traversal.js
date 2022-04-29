/* 
https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/

Given an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Follow up:

Recursive solution is trivial, could you do it iteratively?

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]
Explanation: Representation of 3-ary tree.
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 

Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]


Solution:   https://leetcode.com/submissions/detail/279789577/ recursive solution beats 99.87% JS Submissions.
            https://leetcode.com/submissions/detail/279791278/ iterative solutions beats 100% JS Submissions.

            Recursive solution is same as recursive solution of postorder for a binary tree.
            For iterative solution though similar to binary tree, you have to process the array of children from back to front like we push right first and then left child in binary tree.
            
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var output = [];
    postOrderRecursiveHelper(root, output);
    return output;
};

var postOrderRecursiveHelper = function(root, output){
    if(root){
        root.children.forEach((child)=>{
            postOrderRecursiveHelper(child,output);
        });
        output.push(root.val);
    }
};

var postOrderIterativeHelper = function(root, output){
    var stk = [];
    var visited = new Set();
    if(root){
        stk.push(root);
        while(stk.length>0){
            if(!visited.has(stk[stk.length-1])){
                //peek and add children if not already added
                var currNode = stk[stk.length-1];
                currNode.children.slice().reverse().forEach((child)=>{
                    stk.push(child);
                });
                visited.add(currNode);
            }else{
                //pop and print
                var currNode = stk.pop();
                output.push(currNode.val);
            }
        }
    }
};


var main = () => {
    
};

main();