/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

*/

/*
Solution:   https://leetcode.com/submissions/detail/96136603/ - beats 21.51% of js submissions
            We use queue to push the elements
            We use sentinel to keep track of levels. Whenever a sentinel is found we know that it is a new level.
            We use '$' for sentinel.
            Only thing here is we put the answers in the array in reverse order. Or we can use a stack to put prepare the answer and then pop and print the stack.
*/

const Tree = require("../Utilities/Tree");

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
var levelOrderBottom = function (root) {
    var answer = [];
    if (!root || root === null)
        return answer;
    var queue = [];
    queue.push(root);
    queue.push('$');
    var currlevel = [];
    while (queue.length > 1) {
        var elem = queue.shift();
        if (elem == '$') {
            queue.push(elem);
            answer.unshift(currlevel);
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
        answer.unshift(currlevel);
    }
    return answer;
};

const main = () => {
    let t1 = Tree.prototype.buildBinaryTree([3,9,20,null,null,15,7]);
    Tree.prototype.printBinaryTree(t1);
    console.log(levelOrderBottom(t1));

    t1 = Tree.prototype.buildBinaryTree([3]);
    Tree.prototype.printBinaryTree(t1);
    console.log(levelOrderBottom(t1));

    t1 = Tree.prototype.buildBinaryTree([]);
    Tree.prototype.printBinaryTree(t1);
    console.log(levelOrderBottom(t1));
};

main();