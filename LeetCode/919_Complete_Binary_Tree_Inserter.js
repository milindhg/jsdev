/* 
https://leetcode.com/problems/complete-binary-tree-inserter/description/

A complete binary tree is a binary tree in which every level, except possibly
the last, is completely filled, and all nodes are as far left as possible.

Write a data structure CBTInserter that is initialized with a complete binary
tree and supports the following operations:

CBTInserter(TreeNode root) initializes the data structure on a given tree with
head node root;
CBTInserter.insert(int v) will insert a TreeNode into the tree with value
node.val = v so that the tree remains complete, and returns the value of the
parent of the inserted TreeNode;
CBTInserter.get_root() will return the head node of the tree.
 

Example 1:

Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
Output: [null,1,[1,2]]
Example 2:

Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs =
[[[1,2,3,4,5,6]],[7],[8],[]]
Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 

Note:

The initial given tree is complete and contains between 1 and 1000 nodes.
CBTInserter.insert is called at most 10000 times per test case.
Every value of a given or inserted node is between 0 and 5000.
 
Solution:   https://leetcode.com/submissions/detail/308724649/  
            beats 100% JS Submissions.

Simple Approach - First prepare a queue starting from root like we do in level
order traversal.
Then for every insert use the array principle of Binary Tree i.e. if there is a
node at any index in the array, then that node's child elements are at 2i+1 and
2i+2 indices in the array.
So we basically use this property to get the parent of the last node in the
queue. and then put 

@Time:  
@Space: 

 */


let Tree = require("../Utilities/Tree");
let TreeNode = require("../Utilities/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    this.root = root;
    this.constructQ = (root) => {
        var Q = [];
        Q.push(root);
        var i = 0;
        while(i<Q.length){
            var item = Q[i];
            if(item.left!=null)
                Q.push(item.left);
            if(item.right!=null)
                Q.push(item.right);
            i++;
        }
        return Q;
    };
    this.Q = this.constructQ(root);
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    var newNode = new TreeNode(v);
    var parentNode = this.Q[Math.floor((this.Q.length-1)/2)];
    if(parentNode.left==null) 
        parentNode.left = newNode;
    else 
        parentNode.right = newNode;
    this.Q.push(newNode);
    return parentNode.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

/** 
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */

let main = () => {
    let t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,6]);
    Tree.prototype.printBinaryTree(t1);
    
    let obj = new CBTInserter(t1);
    obj.insert(7);
    obj.insert(8);
    Tree.prototype.printBinaryTree(t1);
    console.log(obj.get_root());
};

main();