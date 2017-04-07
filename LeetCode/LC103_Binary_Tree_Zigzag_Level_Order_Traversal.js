/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

*/

/*
Solution:   https://leetcode.com/submissions/detail/96117009/ - beats 100% of the js submissions.
            We can use 2 stacks. 
            Every time element is popped, print its value and push its children.
            Elements popped from stack 1 will push their children to stack 2 and vice-versa.
            Stack 1 will be used to push the root and then to push the elements in first right child and then left child order.
            Stack 2 will be used to push the elements in first left child then right child order.
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
var zigzagLevelOrder = function (root) {
    var answer = [];
    if (root === null)
        return answer;
    var stk1 = [];
    var stk2 = [];
    stk1.push(root);

    while (!isEmpty(stk1)) {
        var currlevel = [];
        while (!isEmpty(stk1)) {
            var elem = stk1.pop();
            if (elem.left != null)
                stk2.push(elem.left);
            if (elem.right != null)
                stk2.push(elem.right);
            currlevel.push(elem.val);
        }
        if (currlevel.length > 0)
            answer.push(currlevel);
        currlevel = [];

        while (!isEmpty(stk2)) {
            var elem = stk2.pop();
            if (elem.right != null)
                stk1.push(elem.right);
            if (elem.left != null)
                stk1.push(elem.left);
            currlevel.push(elem.val);
        }
        if (currlevel.length > 0)
            answer.push(currlevel);
    }
    return answer;
};

var isEmpty = function (stk) {
    return (stk.length === 0 ? true : false);
};