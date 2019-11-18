/* 
https://leetcode.com/problems/n-ary-tree-level-order-traversal/description/

Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example, given a 3-ary tree:

 



 

We should return its level order traversal:

[
     [1],
     [3,2,4],
     [5,6]
]
 

Note:

The depth of the tree is at most 1000.
The total number of nodes is at most 5000.

Solution:   https://leetcode.com/submissions/detail/279917287/ beats 69.71% JS Submissions.

            Solution is very simple same as level order traversal for the binary tree or BST.
            Basically use a queue and a sentinel to distinguish between levels.

 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var queue = [];
    var output = [];
    if(root){
        queue.push(root);
        queue.push('$');
        var level = [];
        while(queue.length>1){
            // console.log('queue is ' + queue);
            // console.log('level is ' + level);
            var node = queue.shift();
            if(node==='$'){
                output.push(level);
                level = [];
                queue.push('$');
            }else{
                level.push(node.val);
                node.children.forEach(child=>{
                    queue.push(child);
                });
            }
        }
        // console.log('level after is ' + level);
        output.push(level);
    }
    return output;
};

