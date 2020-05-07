/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
 *
 * https://leetcode.com/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (52.26%)
 * Likes:    541
 * Dislikes: 32
 * Total Accepted:    48.5K
 * Total Submissions: 92.3K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * In a binary tree, the root node is at depth 0, and children of each depth k
 * node are at depth k+1.
 * 
 * Two nodes of a binary tree are cousins if they have the same depth, but have
 * different parents.
 * 
 * We are given the root of a binary tree with unique values, and the values x
 * and y of two different nodes in the tree.
 * 
 * Return true if and only if the nodes corresponding to the values x and y are
 * cousins.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: root = [1,2,3,4], x = 4, y = 3
 * Output: false
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
 * Output: true
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * 
 * 
 * Input: root = [1,2,3,null,4], x = 2, y = 3
 * Output: false
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes in the tree will be between 2 and 100.
 * Each node has a unique integer value from 1 to 100.
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/335671516/
 *              beats 75% JS Submissions.
 * 

This approach is based on DFS. i.e. traverse the tree in recursion and keep
track of depth at each level. While checking depth also fetch parent and depth
of both x and y. After traversal compare and return as per the required
condition.


A slightly better approach is to avoid traversing complete tree and return the
answer when you get it. So in such cases for True cases, you can return answer
earlier.
https://leetcode.com/submissions/detail/335672453/
beats 91.96% JS Submissions.
In this better approach we're doing level order traversal using a queue.
At each level we're if we've found x and y so far. And after processing and
pushing to queue based on current queue elem, we also check if at this moment
both x and y are found. If only one is found that means we did not get answer.

!!!! NICE TRICK
Instead of using sentinel. THere is a unique technique used to process each
level of queue in this problem. i.e. by having a for loop of current queue size
inside the while loop. So each time inner loop is complete, the level is
processed.


 * 
 * 
 * 
 */

let Tree = require("../Utilities/Tree");
let TreeNode = require("../Utilities/TreeNode");

// @lc code=start
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 * @runtime O(n) where n is the number of nodes in the tree
 * @space O(1)
 * 
 */
var isCousins = function (root, x, y) {
    let xObj = new Map();
    let yObj = new Map();
    const depthHelper = (root, parent, depth) => {
        if (!root)
            return 0;
        if (root.val == x) {
            xObj.set('depth', depth);
            xObj.set('parent', parent);
        }
        if (root.val == y) {
            yObj.set('depth', depth);
            yObj.set('parent', parent);
        }
        if (!root.left && !root.right)
            return depth;
        return Math.max(depthHelper(root.left, root.val, depth + 1), depthHelper(root.right, root.val, depth + 1));
    };
    depthHelper(root, 0, 0);

    return (xObj.get('depth') == yObj.get('depth')) && xObj.get('parent') !== yObj.get('parent') ? true : false;
};
// @lc code=end

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 * @runtime O(n)
 * @space O(1)
 */
var isCousins = function(root, x, y) {
    let queue = [];
    queue.push(root);

  while (queue.length !== 0) {
    let size = queue.length;
    let xExist = false;
    let yExist = false;
    // same level
    for (let i = 0; i < size; i += 1) {
      let node = queue.shift();

      if (node.val === x) xExist = true;
      if (node.val === y) yExist = true;

      if (node.left !== null && node.right !== null) {
        if (node.left.val === x && node.right.val === y) return false;
        if (node.left.val === y && node.right.val === x) return false;
      }

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    // same level
    if (xExist && yExist) return true;
    else if (xExist || yExist) return false;
  }
  return false;
};

let main = () => {
    let t1 = Tree.prototype.buildBinaryTree([1, 2, 3, 4]);
    Tree.prototype.printBinaryTree(t1);
    console.log(isCousins(t1, 4, 3));

    t1 = Tree.prototype.buildBinaryTree([1, 2, 3, null, 4, null, 5]);
    Tree.prototype.printBinaryTree(t1);
    console.log(isCousins(t1, 5, 4));

    t1 = Tree.prototype.buildBinaryTree([1, 2, 3, null, 4]);
    Tree.prototype.printBinaryTree(t1);
    console.log(isCousins(t1, 2, 3));
};

main();