/* https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/

Given a binary tree, determine if it is a complete binary tree.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

TYPE:   TREE, TRICKY, Null Nodes, Level Order, Tree Traversal

Example 1:



Input: [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
Example 2:



Input: [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.
 
Note:

The tree will have between 1 and 100 nodes.

Solution:   https://leetcode.com/submissions/detail/300398997/  beats 93.50% JS Submissions.
            Main intuition is level order tree traversal.
            Important caveat is to first do simple level order traversal only, no need to distinguish the levels or store sentinels.
            Second caveat is to push null nodes also. Reason being once you get a null node, set a flag and if later a non-null node is found return false.

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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    //Do level order traversal
    //Important caveat is to first do simple level order traversal only, no need to distinguish the levels or store sentinels.
    //Second caveat is to push null nodes also. Reason being once you get a null node, set a flag and if later a non-null node is found return false.
    
    var queue = [];
    //tree will have between 1 and 100 nodes. So no need to do null root check.
    queue.push(root);
    var foundNullNode = false;
    while(queue.length>0){
        var node = queue.shift();
        if(node==null)
            foundNullNode = true;
        else if(foundNullNode)
            return false;
        else{
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return true;
};

var main = ()=>{
    var tree1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,6]);
    Tree.prototype.printBinaryTree(tree1);
    console.log(isCompleteTree(tree1));
    tree1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,null,6]);
    Tree.prototype.printBinaryTree(tree1);
    console.log(isCompleteTree(tree1));
};

main();