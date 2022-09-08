/* 

https://leetcode.com/problems/average-of-levels-in-binary-tree/

637. Average of Levels in Binary Tree
Easy

4236

274

Add to List

Share
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
Accepted
356,345
Submissions
498,663


Solution:   https://leetcode.com/submissions/detail/794383724/  beats 78.30% JS Submissions
            Simple approach of regular level order traversal of a tree. Use queue and sentinel like '$'
            At detection of every level also calculate the average of the level.
            Otherwise keep counting number of nodes and sum of values at each level.
            Before returning answer array, calculate avg for last level.
 */

let TreeNode = require("../Utilities/TreeNode");
let Tree = require("../Utilities/Tree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let queue = [];
    let ans = [];
    let sum = 0, nodeCount = 0;
    queue.push(root);
    queue.push('$');
    while (queue.length > 1) {
        let node = queue.shift();
        if (node == '$') { // new level
            //calculate average and push to answer
            ans.push(sum / nodeCount);
            sum = 0;
            nodeCount = 0;
            queue.push('$');
        } else {
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
            sum += node.val;
            nodeCount++;
        }
    }
    ans.push(sum / nodeCount);
    return ans;
};

let main = () => {
    let t1 = new Tree();
    let root1 = t1.buildBinaryTree([3, 9, 20, 15, 7]);
    t1.printBinaryTree(root1);
    console.log(averageOfLevels(root1));

};

main();