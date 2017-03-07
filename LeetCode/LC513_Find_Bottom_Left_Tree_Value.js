/*

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.

*/

/*
Solution:   https://leetcode.com/submissions/detail/95798813/ - beats 85% js submissions.
            Simple trick is to use queue for level order traversal of the tree. 
            If you push right first and then left, then the last element pushed to the queue will be your answer.
            
            However, if the question is right most tree elem, then push left first and then right.
*/

/**
 * Definition for a binary tree node. function TreeNode(val) { this.val = val; this.left =
 * this.right = null; }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    if (root === null) {
        return null;
    }
    var queue = [];
    var elem = null;
    queue.push('$');
    queue.push(root);
    while (queue.length > 1) {
        elem = queue.shift(); // like dequeue
        if (elem == '$') {
            queue.push('$');
        } else {
            if (elem.right != null)
                queue.push(elem.right);
            if (elem.left != null)
                queue.push(elem.left);
        }
    }
    return elem.val;
};
