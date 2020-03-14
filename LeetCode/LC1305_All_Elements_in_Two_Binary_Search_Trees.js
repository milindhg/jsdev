/* 
https://leetcode.com/problems/all-elements-in-two-binary-search-trees/description/

Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.


TYPE:   TREE, INORDER TRAVERSAL, DFS, TREE TRAVERSAL

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:

Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]
Example 3:

Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
Example 4:

Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]
Example 5:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].


Solution:   https://leetcode.com/submissions/detail/312405192/  beats 97.77% JS Submissions.
            Very simple approach of reusability. Use solutions of inorder tree traversal and merging 2 sorted arrays.
            Prepare sorted arrays by traversing both the trees in inorder.
            Then merge the 2 sorted arrays by using merge algorithm.

            EASY PEASY.
 */

var Tree = require("../Utilities/Tree");
var TreeNode = require("../Utilities/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    var arr1 = [], arr2 = [];
    inorder(root1, arr1);
    inorder(root2, arr2);
    return merge(arr1, arr2);
};

var inorder = (root, arr) => {
    if(root){
        if(root.left) inorder(root.left, arr);
        arr.push(root.val);
        if(root.right) inorder(root.right, arr);
    }
};

var merge = (arr1, arr2) => {
    var ans = [];
    var i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]) 
            ans.push(arr1[i++]);
        else 
            ans.push(arr2[j++]);
    }
    while(i<arr1.length){
        ans.push(arr1[i++]);
    }
    while(j<arr2.length){
        ans.push(arr2[j++]);
    }
    return ans;
};

var main = () => {
    var root1 = Tree.prototype.buildBinaryTree([1,0,3]);
    Tree.prototype.printBinaryTree(root1);
    var root2 = Tree.prototype.buildBinaryTree([2,1,4]);
    Tree.prototype.printBinaryTree(root2);
    console.log(getAllElements(root1, root2));
};


main();