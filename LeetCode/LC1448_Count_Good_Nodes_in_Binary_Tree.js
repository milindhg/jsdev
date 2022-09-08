/* 

https://leetcode.com/problems/count-good-nodes-in-binary-tree/

1448. Count Good Nodes in Binary Tree
Medium

4081

114

Add to List

Share
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

 

Example 1:



Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.
Example 2:



Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
Example 3:

Input: root = [1]
Output: 1
Explanation: Root is considered as good.
 

Constraints:

The number of nodes in the binary tree is in the range [1, 10^5].
Each node's value is between [-10^4, 10^4].
Accepted
269,120
Submissions
360,485

Solution:   https://leetcode.com/submissions/detail/794356230/ beats 81.77% JS Submissions.
            Simple approach to traverse the binary tree but keep passing the max node value so far so that on path to any node, max node value seen so far is handy to lookup.


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
 * @return {number}
 */
var goodNodes = function (root) {
    let goodNodesArr = [];
    traverse(root, root.val, goodNodesArr);
    return goodNodesArr.length;
};

let traverse = (root, maxSoFar, goodNodesArr) => {
    if (root) {
        if (root.val >= maxSoFar)
            goodNodesArr.push(root.val);
        traverse(root.left, Math.max(maxSoFar, root.val), goodNodesArr);
        traverse(root.right, Math.max(maxSoFar, root.val), goodNodesArr);
    }
};


var main = () => {
    let t1 = new Tree();
    let root1 = t1.buildBinaryTree([3, 3, null, 4, 2]);
    console.log(goodNodes(root1));

    let root2 = t1.buildBinaryTree([3, 1, 4, 3, null, 1, 5]);
    console.log(goodNodes(root2));
};

main();