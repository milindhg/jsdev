/* 
https://leetcode.com/problems/convert-bst-to-greater-tree/description/

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13

Solution:   A very simple solution of simply doing an inverse inorder traversal. 
            That way you would be starting from the last node of inorder traversal and work your way to the first node of inorder traversal updating the node values plus ongoing sum on the way.

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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    mySum = 0;
    convertBSTHelper(root, mySum);
    return root;
};

var mySum = 0;

var convertBSTHelper = function(root){
    if(root){
        convertBSTHelper(root.right);
        root.val = root.val + mySum;
        mySum = root.val;
        console.log(root.val);
        convertBSTHelper(root.left);
    }
}

var main = () => {
    var root = Tree.prototype.buildBinaryTree([2,5,13]);
    Tree.prototype.printBinaryTree(root);
    convertBST(root);
    Tree.prototype.printBinaryTree(root);
};

main();