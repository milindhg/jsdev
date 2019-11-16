/*
https://leetcode.com/problems/same-tree/
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Solution:   Use recursion, 
            compare each node and check if the contents of the nodes are same. 
            Also at any point if the nodes are not null at the same time, 
            or not leaf nodes at the same time 
            or not containing the same values then answer is false.
    
            https://leetcode.com/submissions/detail/91061436/

*/

var Tree = require('../Utilities/Tree');
var TreeNode = require('../Utilities/TreeNode');



/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null || q===null){
        if(p===null && q===null){
            return true;
        }
        return false;
    }
    if(isLeafNode(p) && isLeafNode(q) && p.val===q.val){
        return true;
    }
    if(p.val===q.val){
        return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    }
    return false;
};


var isLeafNode = function (node) {
    if(node.left===null && node.right===null){
        return true;
    }
    return false;
};

// Definition for a binary tree node.
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}

var constructTreeFromArray = function (arr) {
    if (arr === null) {
        return null;
    }
    var i = 0;
    var limitI = Math.floor(Math.log(arr.length));
    var treeRoot = null;
    var currRoot = null;
    while (i < limitI) {
        var treenode = new TreeNode(arr[i]);
        if(currRoot===null){
            currRoot = treenode;
        }
        if (treeRoot === null) {
            
        }
        if (2 * i + 1 < arr.length) {
            treenode.left = new TreeNode(arr[2 * i + 1]);
        }
        if (2 * i + 2 < arr.length) {
            treenode.right = new TreeNode(arr[2 * i + 1]);
        }
        i += 1;
    }

    return treeRoot;
};

var treeString = "";
var printTree = function (treenode) {
    if (treenode === null) {
        return;
    } else {
        treenode = treenode.left;
        treeString += str(treenode.val) + " ";
        treenode = treenode.right;
    }
    console.log("Tree: " + treeNode);
};

var main = function () {
    var arr1 = [1,2,3];
    var arr2 = [1,2,3];
    var root1 =  Tree.prototype.buildBinaryTree(arr1);
    Tree.prototype.printBinaryTree(root1);
    var root2 =  Tree.prototype.buildBinaryTree(arr2);
    Tree.prototype.printBinaryTree(root2);
    console.log(isSameTree(root1,root2));

    arr1 = [1,2];
    arr2 = [1,null,2];
    root1 =  Tree.prototype.buildBinaryTree(arr1);
    Tree.prototype.printBinaryTree(root1);
    root2 =  Tree.prototype.buildBinaryTree(arr2);
    Tree.prototype.printBinaryTree(root2);
    console.log(isSameTree(root1,root2));

    arr1 = [1,2,1];
    arr2 = [1,1,2];
    root1 =  Tree.prototype.buildBinaryTree(arr1);
    Tree.prototype.printBinaryTree(root1);
    root2 =  Tree.prototype.buildBinaryTree(arr2);
    Tree.prototype.printBinaryTree(root2);
    console.log(isSameTree(root1,root2));
}

main();
