/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (51.46%)
 * Likes:    1222
 * Dislikes: 128
 * Total Accepted:    274.2K
 * Total Submissions: 532.8K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted array: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/463149595/ beats 96.17% JS Submissions.
 *              Idea is simple recursion. Work with base cases of only 1 number and no numbers in array.
 *              Then whenever there are more than 1 numbers in array - prepare a root, left subtree and right subtree.
 *              The slice method takes start and end or only start (i.e. from start till end of array) as arguments so that we can work on the sub-array in recursion.
 *              
 *              Instead of slicing we can also keep passing the indices for start and end in the recursion so that we can improvise the space complexity of the solution. 
 *              Only a helper method will be needed in that case to keep the signature of main method of problem unchanged. 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var Tree = require("../Utilities/Tree")
var TreeNode = require("../Utilities/TreeNode")

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length==0) return null;
    if(nums.length==1) return new TreeNode(nums[0]);
    else{
        var midIndex = Math.floor(nums.length/2);
        var root = new TreeNode(nums[midIndex]);
        var left = sortedArrayToBST(nums.slice(0,midIndex));
        var right = sortedArrayToBST(nums.slice(midIndex+1));
        root.left = left;
        root.right = right;
        return root;
    }
};

var main = () => {
    var root = sortedArrayToBST([-10,-3,0,5,9]);
    Tree.prototype.printBinaryTree(root);

    root = sortedArrayToBST([1,3]);
    Tree.prototype.printBinaryTree(root);
}

main();
