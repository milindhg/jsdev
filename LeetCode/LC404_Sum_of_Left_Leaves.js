/*
https://leetcode.com/problems/sum-of-left-leaves/?tab=Description
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

*/
/*
Solution:   https://leetcode.com/submissions/detail/78968198/
            Recursive approach to access left subtree and right subtree each time.
            Only each time check if the left child of current root is a leaf node. If it is add its value to sum.
            Otherwise just traverse the tree.
            If root is null then return 0.
*/

/**
 * Definition for a binary tree node. function TreeNode(val) { this.val = val; this.left =
 * this.right = null; }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    var sum = 0;
    if (root === null) {
        return 0;
    }
    if (isLeafNode(root.left)) {
        sum += root.left.val;
    }
    sum += sumOfLeftLeaves(root.right);
    sum += sumOfLeftLeaves(root.left);
    return sum;
};

var isLeafNode = function (node) {
    if (node !== null && node.left === null && node.right === null) {
        return true;
    }
    return false;
};

