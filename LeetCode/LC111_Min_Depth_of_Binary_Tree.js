/*

https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
    
    Given a binary tree, find its minimum depth.

    The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
    return its minimum depth = 2.


*/


/*
 * Solution:    https://leetcode.com/submissions/detail/151670264/ beats 96.76% of submissions in JS
 *              Start level order traversal of the tree and keep noting the depths in an array whenever you encounter a leaf node in level order traversal.
 *              Then find the min of the depths array and return after adding 1 to it. 
 * 
 */


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
var minDepth = function(root) {
    if(root==null)
        return 0;
    var depth = 0;
    var depthArr = [];
    var queue = [];
    queue.push(root);
    queue.push('$');
    while(queue.length>1){
        var elem = queue.shift();
        if(elem=='$'){
            depth+=1;
            queue.push(elem);
        }else{
            if(elem.left==null && elem.right==null)
                depthArr.push(depth);
            if(elem.left!=null)
                queue.push(elem.left);
            if(elem.right!=null)
                queue.push(elem.right);
        }
    }
    return Math.min(...depthArr)+1;
};


