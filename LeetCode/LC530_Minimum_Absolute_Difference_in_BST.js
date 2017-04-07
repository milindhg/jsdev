/*

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
Note: There are at least two nodes in this BST.

*/

/*
Solution:   https://leetcode.com/submissions/detail/96143102/ - beats 21% of js submissions.
            Since its given that the tree is a BST, we know that the elements are sorted when we try to see them in inorder traversal.
            So we can use the same logic that we use to find the minimum absolute difference between numbers in a sorted array.
            A smart way would be to do this while traversing inorder on the BST.
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
 * @return {number}
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifferenceBetter = function (root) {
    minAbsDiff = Number.MAX_VALUE;
    prevNodeVal = null;
    minAbsDiff = inorderCalc(root);
    return minAbsDiff;
};

var minAbsDiff = null;
var prevNodeVal = null;
/*
 * @param {TreeNode} root
 * @return {number} number
 */
var inorderCalc = function (root, minAbsDiff) {
    if (root === null) {
        return minAbsDiff;
    }

    inorderCalc(root.left);
    if (prevNodeVal != null) {
        minAbsDiff = Math.min(minAbsDiff, root.val - prevNodeVal);
    }
    prevNodeVal = root.val;
    inorderCalc(root.right);
    return minAbsDiff;
};

var getMinimumDifference = function (root) {
    MinAbsArr = new Array();
    inorder(root);
    // MinAbsArr.sort(function(a,b){
    // return a-b;
    // });
    // console.log(MinAbsArr);
    var answer = Number.MAX_VALUE;
    for (var i = 1; i < MinAbsArr.length; i++) {
        if (MinAbsArr[i] - MinAbsArr[i - 1] < answer) {
            answer = MinAbsArr[i] - MinAbsArr[i - 1];
            // console.log('answer is ' + answer);
        }
    }
    // console.log('answer is ' + answer);
    return answer;
};

var MinAbsArr = null;

var inorder = function (root) {
    if (root === null)
        return;
    inorder(root.left);
    MinAbsArr.push(root.val);
    inorder(root.right);
}