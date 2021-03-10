/*

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

*/

/*
Solution:   https://leetcode.com/submissions/detail/96649061/ - beats 47% of js submissions.
            Keep going down the tree and pass the sum obtained till now. 
            If the sum obtained + root value sum = target sum return true. else return false.
            We can use height function to calculate left height and right height at each node and then return true if it matches. But height function takes O(logn) time and calling it for every node will result in O(nlogn) worst case time or O(logn^2) time.
            So we do both calculate height and compare in the same function which is a helper function.
*/

const Tree = require("../Utilities/Tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root == null) {
        return false;
    } else {
        return hasPathSumHelper(root, sum, 0);
    }
};

var hasPathSumHelper = function (root, sum, sumTillNow) {
    if (root == null) {
        return false;
    } else if (root.left == null && root.right == null) {
        // console.log('leaf value is ' + root.val);
        if (sum == sumTillNow + root.val) {
            return true;
        }
        return false;
    } else {
        // console.log('root is: ' + root.val + ' sum is: ' + sum + ' sumTillNow is ' + sumTillNow);
        return hasPathSumHelper(root.left, sum, sumTillNow + root.val)
            || hasPathSumHelper(root.right, sum, sumTillNow + root.val);
    }
};

const main = () => {
    let t1 = Tree.prototype.buildBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    Tree.prototype.printBinaryTree(t1);
    console.log((hasPathSum(t1, 22)));

    t1 = Tree.prototype.buildBinaryTree([1, 2, 3]);
    Tree.prototype.printBinaryTree(t1);
    console.log((hasPathSum(t1, 5)));

    t1 = Tree.prototype.buildBinaryTree([1, 2]);
    Tree.prototype.printBinaryTree(t1);
    console.log((hasPathSum(t1, 2)));
};

main();