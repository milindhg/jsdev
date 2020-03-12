/* 
https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

 TYPE:  TREE, Good One, Parallel Trees traversal

Example 1:


Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.
Example 2:


Input: tree = [7], target =  7
Output: 7
Example 3:


Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4
Example 4:


Input: tree = [1,2,3,4,5,6,7,8,9,10], target = 5
Output: 5
Example 5:


Input: tree = [1,2,null,3], target = 2
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [1, 10^4].
The values of the nodes of the tree are unique.
target node is a node from the original tree and is not null.


Solution:   Not enough submissions of this problem on leetcode to get the distributions.
            The problem is like traversing the trees in parallel and keep checking if we found the node.
            This is the best approach since this way we are not actually searching for a node based on value but searching for it based on Reference.
            ALSO this allows for the code to work perfectly even if there are duplicate values in the nodes.
            So effectively it could be a binary tree with all 1s or 2s only. And still the function would work.

            Another approach could be to first get the LR path for the target in original tree. And then walk through the same path in the cloned tree and return the found node.


 */

var Tree = require("../Utilities/Tree");
var TreeNode = require("../Utilities/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    var ans = [];
    helper(original, cloned, target, ans);
    return ans[0];
};

var helper = (root, cloneRoot, target, ans) => {
    if(root){
        if(root.left) helper(root.left, cloneRoot.left, target, ans);
        if(root==target) ans.push(cloneRoot);
        if(root.right) helper(root.right, cloneRoot.right, target, ans);        
    }
};


var main = () => {
    var t1 = Tree.prototype.buildBinaryTree([7,4,3,null,null,6,19]);
    Tree.prototype.printBinaryTree(t1);
    var t2 = Tree.prototype.buildBinaryTree([7,4,3,null,null,6,19]);
    Tree.prototype.printBinaryTree(t2);
    //TODO Write a method to search a node in tree in the Tree utility class.
};

main();