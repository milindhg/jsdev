/* https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

Solution:   https://leetcode.com/submissions/detail/171613035/  beats 52% JS Submissions.
            Start with the root node and do a pre-order traversal.
            While you do the traversal prepare a queue with the nodes and
            later remove elements from queue to construct the linked list.

            An efficient version could be to not use queue and prepare the linkedlist as you go pre-order
            A trick here is to use post order to prepare your output.
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root != null) {
        var outerStk = prepareStack(root);
        root = outerStk.shift();
        //console.log(root);
        var curr = root;
        while (outerStk.length > 0) {
            //console.log(curr.val);
            curr.right = outerStk.shift();
            curr.left = null;
            curr = curr.right;
        }
    }
};

var prepareStack = function (root) {
    var curr = root;
    var myStk = [];
    var outerStack = [];
    myStk.push(root);
    while (myStk.length > 0) {
        curr = myStk.pop();
        outerStack.push(curr);
        //console.log(curr.val);
        if (curr.right != null) {
            myStk.push(curr.right);
        }
        if (curr.left != null) {
            myStk.push(curr.left);
        }
    }

    //console.log(outerStack);
    return outerStack;

};

/*
    https://leetcode.com/submissions/detail/463183506/ beats 99.17% JS Submissions. Better approach using recursion and post order traversal.
*/
var flattenBetter = function (root) {
    flattenBetterHelper(root, null);
};

var flattenBetterHelper = function (root, prev) {
    if (!root || root === null)
        return prev;
    prev = flattenBetterHelper(root.right, prev);
    prev = flattenBetterHelper(root.left, prev);
    root.right = prev;
    root.left = null;
    prev = root;
    return prev;
}

const main = () => {
    let t1 = Tree.prototype.buildBinaryTree([1, 2, 5, 3, 4, null, 6]);
    Tree.prototype.printBinaryTree(t1);
    flatten(t1);
    Tree.prototype.printBinaryTree(t1);

    t1 = Tree.prototype.buildBinaryTree([1, 2, 5, 3, 4, null, 6]);
    Tree.prototype.printBinaryTree(t1);
    flattenBetter(t1);
    Tree.prototype.printBinaryTree(t1);

    t1 = Tree.prototype.buildBinaryTree([]);
    flatten(t1);
    Tree.prototype.printBinaryTree(t1);

    t1 = Tree.prototype.buildBinaryTree([0]);
    flatten(t1);
    Tree.prototype.printBinaryTree(t1);
};

main();