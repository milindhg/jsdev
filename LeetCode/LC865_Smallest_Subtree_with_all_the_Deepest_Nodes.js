/* https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/

Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

A node is deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is that node, plus the set of all descendants of that node.

Return the node with the largest depth such that it contains all the deepest nodes in its subtree.

 

Example 1:

Input: [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation:



We return the node with value 2, colored in yellow in the diagram.
The nodes colored in blue are the deepest nodes of the tree.
The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
Both the input and output have TreeNode type.
 

Note:

The number of nodes in the tree will be between 1 and 500.
The values of each node are unique.


Solution:   https://leetcode.com/submissions/detail/301202147/ beats 100% JS Submissions.
            Very Tricky really. You definitely get an intuition of finding the Height of the tree or deepest node of the tree.
            Try finding the max height of left and right subtrees every time you enter recursion.
            Base case is return ongoing height/level. And since there is a basecase on root==null, no need to have another base case for Leaf Nodes.
            Then just try to see at which node you see that the maxLeftSubtreeHeight=maxRightSubtreeHeight
            And whenever you find such a node update that node in the answer and update the height/level also as answer.
            As a safety to have something returned always, return max of the left height and right height at each node level.


            Another solution could be to find the path of the deepest nodes. and then compare the paths till the paths are same.
            Whenever you see deviation in path, we can find the common subtree root there. 
            Then retraverse the tree to get the node whose value is equal to the value of the common subtree root value. And return the node.

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
 * @return {TreeNode}
 */
var subtreeWithAllDeepestSlow = function(root) {
    var maxPathLength = [0];
     deepestNodes(root, "",maxPathLength);
    console.log(maxPathLength[0]);
};

var deepestNodes = function(root, currentPath, maxPathLength, deepNodePaths){
    if(root==null) return maxPathLength;
    if(root.left==null && root.right==null){
        if(currentPath.length+1>=maxPathLength){
            maxPathLength = currentPath.length+1;
            deepNodePaths.push(currentPath+root.val);
        }
    }
    if(root.left) maxPathLength = deepestNodes(root.left, currentPath+root.val, maxPathLength,deepNodePaths);
    if(root.right) maxPathLength = deepestNodes(root.right, currentPath+root.val, maxPathLength,deepNodePaths);
    return maxPathLength;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    var workingObj = {};
    workingObj.maxPathLen = 0;
    workingObj.subTreeNode = null;
    deepestNode(root, 0, workingObj);
    // console.log(workingObj.maxPathLen);
    return workingObj.subTreeNode;
};

var deepestNode = function(root, level, workingObj){
    if(root==null) return level;
    var leftSubTreeHeight = deepestNode(root.left, level+1, workingObj);
    var rightSubTreeHeight = deepestNode(root.right, level+1, workingObj);
    if(leftSubTreeHeight == rightSubTreeHeight && leftSubTreeHeight>=workingObj.maxPathLen){
        workingObj.maxPathLen = leftSubTreeHeight;
        workingObj.subTreeNode = root;
    }
    return Math.max(leftSubTreeHeight,rightSubTreeHeight);
};

var main = ()=>{
    var t1 = Tree.prototype.buildBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
    Tree.prototype.printBinaryTree(t1);
    var ansNode = subtreeWithAllDeepest(t1);
    Tree.prototype.printPreorder(ansNode);
    t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,6,null]);
    Tree.prototype.printBinaryTree(t1);
    var ansNode = subtreeWithAllDeepest(t1);
    Tree.prototype.printPreorder(ansNode);
    
};

main();