/* 
https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?


Solution:   https://leetcode.com/submissions/detail/279209203/ beats 95.06% JS Submissions.
            Simple idea since its already a BST. So sort of already sorted array given.
            So just do a inorder traversal to actually get the sorted array and then return the k-1th number since array indices start from 0.
            O(n) where n is the number of nodes in the tree.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var inorderOutput = [];
    inorder(root,inorderOutput);
    // console.log(inorderOutput);
    return inorderOutput[k-1];
};

var inorder = function(root, inorderOutput, k){
    if(root){
        inorder(root.left, inorderOutput);
        inorderOutput.push(root.val);
        inorder(root.right, inorderOutput);
    }
};

var main = () => {
    var arr = [3,1,4,null,2];
    var root = Tree.prototype.buildBinaryTree(arr);
    var k = 1;
    console.log(kthSmallest(root, k));

    arr = [5,3,6,2,4,null,null,1];
    root = Tree.prototype.buildBinaryTree(arr);
    k = 3;
    console.log(kthSmallest(root, k));


};

main();