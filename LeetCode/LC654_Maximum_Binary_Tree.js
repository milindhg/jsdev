/* 

https://leetcode.com/problems/maximum-binary-tree/description/

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].


Solution:   https://leetcode.com/submissions/detail/247997684/ beats 86.69% JS Submissions.
            Idea is very much similar to this problem - LC108 Convert sorted array to BST.


 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var TreeNode = require("../Utilities/TreeNode");
var Tree = require("../Utilities/Tree");

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length==0) return null;
    if(nums.length==1) return new TreeNode(nums[0]);
    var max = findMax(nums);
    console.log(max);
    var midIndex = nums.indexOf(max);
    var root = new TreeNode(max);
    var left = constructMaximumBinaryTree(nums.slice(0,midIndex));
    var right = constructMaximumBinaryTree(nums.slice(midIndex+1));
    root.left = left;
    root.right = right;
    return root;
};

var findMax = (nums) => {
    var max = Number.MIN_VALUE;
    var i=0;
    while(i<nums.length){
        max = Math.max(nums[i++],max);
    }
    return max;
};

var main = () => {
    var t1 = constructMaximumBinaryTree([3,2,1,6,0,5]);
    Tree.prototype.printTree(t1);
};

main();