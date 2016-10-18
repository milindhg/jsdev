/*

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
    arr = (1,2,3,4,5,6,7);
    var tree = constructTreeFromArray(arr);
    printTree(tree);
}

main();