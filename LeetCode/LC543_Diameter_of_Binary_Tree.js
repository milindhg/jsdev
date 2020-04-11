/* 
https://leetcode.com/problems/diameter-of-binary-tree/description/

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.


TYPE:   TRICKY, DEFINITELY ASK, PAPER FUTLA, BEST BINARY TREE, DIAMETER, TREE, BINARY TREE, BEST, FAVE, FAVORITE, EASY BUT NICE

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

Solution:   https://leetcode.com/submissions/detail/323009202/  beats 85.65% JS Submissions.
            The very important main trick of the problem is to find height of the left and right subtrees 
            and at the same TIME - at each node keep a calculation of the diameter of the subtree.

            This can be done either by using 2 functions calling each other recursively
            OR
            By using a global/pass by reference variable on the way to easily do the calculation and keep track of diameter globally for each subtree root.

 */

var Tree = require("../Utilities/Tree");
var TreeNode = require("../Utilities/TreeNode");

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
var diameterOfBinaryTree = function(root) {
    var diameter = [0];
    var height = heightHelper(root, diameter);
    return diameter[0];
};

var heightHelper = function(root, diameter) {
    if(root){
        var leftPath = heightHelper(root.left, diameter);
        var rightPath = heightHelper(root.right, diameter);
        diameter[0] = Math.max(diameter[0], leftPath + rightPath);
        return Math.max(leftPath, rightPath) + 1;
    }else
        return 0;

}

var main = () => {
    var t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5]);
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([1]);
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([]);
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([1,2,3]);
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,6,7]);
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([1,2]);
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,null,null,7,8,null,9,null,null,10,null,11,12,null,13,null,null,14,null]);    //Special case, diameter via different node than root.
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));

    t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,null,6,null,null,7,8,null,9,null,null,null,null,10,11,12]);  //Diameter via root big tree.
    Tree.prototype.printBinaryTree(t1);
    console.log(diameterOfBinaryTree(t1));
}


main();
/* 
Test Case Trees
[1,2,3,4,5]
[1]
[]
[1,2,3]
[1,2,3,4,5,6,7]
[1,2]
[1,2,3,4,5,null,null,7,8,null,9,null,null,10,null,11,12,null,13,null,null,14,null]
[1,2,3,4,5,null,6,null,null,7,8,null,9,null,null,null,null,10,11,12]

 */