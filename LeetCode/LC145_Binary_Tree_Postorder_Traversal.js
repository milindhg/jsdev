/* 
https://leetcode.com/problems/binary-tree-postorder-traversal/description/

Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?

Solution:   https://leetcode.com/submissions/detail/279787572/ beats 99.44% JS Submissions.
            Basic idea of recursive approach is very simple for all three pre, post and inorder solutions.
            pre = VLR
            post = LRV
            inorder = LVR

            But for recursion you basically have to build this internal stack manually.
            So for postorder traversal first you have to push right and then left in the stack.
            and when you consider any element to print/add in the output, first you have to add its children and process its children.
            If children are processed already and the same element (i.e. the one whose children were already added and processed earlier) is found again only then print/add it to the output.


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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var output = [];
    postOrderIterativeHelper(root, output);
    return output;
};

var postOrderRecursiveHelper = function(root, output){
    if(root){
        postOrderRecursiveHelper(root.left,output);
        postOrderRecursiveHelper(root.right,output);
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
                if(currNode.right)
                    stk.push(currNode.right);
                if(currNode.left)
                    stk.push(currNode.left);
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
    var root1 = Tree.prototype.buildBinaryTree([-64,12,18,-4,-53,null,76,null,-51,null,null,-93,3,null,-31,47,null,3,53,-81,33,4,null,-51,-44,-60,11,null,null,null,null,78,null,-35,-64,26,-81,-31,27,60,74,null,null,8,-38,47,12,-24,null,-59,-49,-11,-51,67,null,null,null,null,null,null,null,-67,null,-37,-19,10,-55,72,null,null,null,-70,17,-4,null,null,null,null,null,null,null,3,80,44,-88,-91,null,48,-90,-30,null,null,90,-34,37,null,null,73,-38,-31,-85,-31,-96,null,null,-18,67,34,72,null,-17,-77,null,56,-65,-88,-53,null,null,null,-33,86,null,81,-42,null,null,98,-40,70,-26,24,null,null,null,null,92,72,-27,null,null,null,null,null,null,-67,null,null,null,null,null,null,null,-54,-66,-36,null,-72,null,null,43,null,null,null,-92,-1,-98,null,null,null,null,null,null,null,39,-84,null,null,null,null,null,null,null,null,null,null,null,null,null,-93,null,null,null,98]);
    Tree.prototype.printBinaryTree(root1);
    console.log(postorderTraversal(root1));
};

main();