/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

*/

/*
Solution:   https://leetcode.com/submissions/detail/96118977/ - beats 41% of js submissions
            We use queue to push the elements
            We use sentinel to keep track of levels. Whenever a sentinel is found we know that it is a new level.
            We use '$' for sentinel.
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
            answer.push(currlevel);
            currlevel = [];
        } else {
            currlevel.push(elem.val);
            if (elem.left != null)
                queue.push(elem.left);
            if (elem.right != null)
                queue.push(elem.right);
        }
    }
    if (currlevel.length > 0) {
        answer.push(currlevel);
    }
    return answer;
};

var main = function () {
    var an = [ 1, 2, 3 ];
    console.log(an.shift());
};

main();