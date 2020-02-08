/* https://leetcode.com/problems/insert-into-a-binary-search-tree/description/

Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4




Solution:   https://leetcode.com/submissions/detail/301425743/ beats 92.31% JS Submissions.
            Basic idea is binary search to find an element's position in the BST.
            So keep searching for the element's position in the tree and when found, create a node at that position and attach it to the parent.
            In Recursion it is simple to map simply a null node, check value is less than or greater than root and then return new/old root.

*/

var TreeNode = require("../Utilities/TreeNode");
var Tree = require("../Utilities/Tree");
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root==null)
        return new TreeNode(val);
    if(val<root.val)
        root.left = insertIntoBST(root.left, val);
    if(val>=root.val)
        root.right = insertIntoBST(root.right, val);
    return root;
};

var main = () => {
    var t1 = Tree.prototype.buildBinaryTree([4,2,7,1,3]);
    Tree.prototype.printBinaryTree(t1);
    t1 = insertIntoBST(t1, 5);
    Tree.prototype.printBinaryTree(t1);
    
};

main();