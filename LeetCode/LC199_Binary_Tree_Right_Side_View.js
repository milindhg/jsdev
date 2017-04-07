/*

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

Credits:
Special thanks to @amrsaqr for adding this problem and creating all test cases.

*/

/*
Solution:   https://leetcode.com/submissions/detail/96137349/ - beats 28.85% js submissions
            The solution is same as level order traversal only we put a condition that we push the element in answer array only if it is the right most element of that level.
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    var answer = [];
    if (root === null)
        return answer;
    var queue = [];
    queue.push(root);
    queue.push('$');
    var currlevel = [];
    while (queue.length > 1) {
        var elem = queue.shift();
        if (elem == '$') {
            queue.push(elem);
        } else {
            // push the element to answer array only if current element is
            // the right most element of the current level.
            if (queue[0] == '$')
                answer.push(elem.val);
            if (elem.left != null)
                queue.push(elem.left);
            if (elem.right != null)
                queue.push(elem.right);
        }
    }
    return answer;
};