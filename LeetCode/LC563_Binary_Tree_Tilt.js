/*
https://leetcode.com/problems/binary-tree-tilt/#/description
Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input: 
         1
       /   \
      2     3
Output: 1
Explanation: 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
Note:

The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer.
*/

/*
Solution:    This problem is a problem where you need to keep track of 2 things in recursion - 1. Sum of all the children nodes and 2. Tilt of left and right subtree.
             We can return only 1 value in recursion and use it in the calling function.
             So we construct a complex object with 2 values - tilt and sum and return this complex object.
             To handle this and not disturb the API function, we write our recursion function as a helper function. Get the answer response and send it to the main API calling function.
             Then we simply return the answer from the API function.
             Runtime of this approach: https://leetcode.com/submissions/detail/102503158/ beats 77% of python submissions
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
var findTilt = function (root) {
    return findTiltHelper(root).tilt;
};

var findTiltHelper = function (root) {
    resp = {};
    if (root == null) {
        resp.tilt = 0;
        resp.sum = 0;
        return resp;
    }
    if (root.left == null && root.right == null) {
        resp.tilt = 0;
        resp.sum = root.val;
        return resp;
    } else {
        var left_sum = 0, right_sum = 0, left_tilt = 0, right_tilt = 0;
        if (root.left != null) {
            var left_resp = findTiltHelper(root.left);
            left_tilt = left_resp.tilt;
            left_sum = left_resp.sum;
        } else {
            left_sum = 0;
            left_tilt = 0;
        }
        if (root.right != null) {
            var right_resp = findTiltHelper(root.right);
            right_tilt = right_resp.tilt;
            right_sum = right_resp.sum;
        } else {
            right_tilt = 0;
            right_sum = 0;
        }
        resp.tilt = Math.abs(left_sum - right_sum) + left_tilt + right_tilt;
        resp.sum = left_sum + right_sum + root.val;
        return resp;
    }
}