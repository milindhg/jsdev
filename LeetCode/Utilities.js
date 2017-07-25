/*
 * Utilities script to include utility code for all the scripts.
 * especially for writing your own test code or 
 * basic data structure constructors as given and commented in the question given in LeetCode problems
 * 
 *   
 */

function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
};

var isLeafNode = function (treeNode) {
    if (treeNode.left === null && treeNode.right === null) {
        return true;
    }
    return false;
};
