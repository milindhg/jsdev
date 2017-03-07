/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

*/

/*
Solution:   https://leetcode.com/submissions/detail/95744728/       - beats 44% js submissions
            https://leetcode.com/submissions/detail/95745151/ - beats 100 % of js submissions
            These above approaches are basic recursion approaches with base case as root = null;
            
            This problem can also be solved by iterative approach. Use queue to solve by iterative approach.
            Start by adding root to queue. And keep removing elements from the queue and swapping its children. 
            Meanwhile as you're done swapping, also add the children to queue to continue iterating on children/subtrees.
            Remember no need to push the children or node if node is null. We only push internal node or leaf nodes to queue for further processing.
            
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
 * @return {TreeNode}
 * @runtime: beats 100% js submissions O(h) or O(logn) where n are number of nodes. or h is height
 *           of the tree.
 */
var invertTreeMuchBetter = function (root) {
    if (root === null)
        return null;
    var left = invertTree(root.left);
    var right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeBasic = function (root) {
    if (root === null || isLeafNode(root))
        return root;
    swapChildren(root);
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

var swapChildren = function (root) {
    var tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
};

var isLeafNode = function (root) {
    if (root.left === null && root.right === null)
        return true;
    return false;
};
