/* https://leetcode.com/problems/univalued-binary-tree/description/

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].


solution:   https://leetcode.com/submissions/detail/199239492/ beats 100% js submissions
            Basic approach is to traverse the tree recursively and keep comparing the value of the root with the first fetched value of the root.


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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(root==null) return null;
    var onGoingVal = root.val;
    return isUnivalTreeHelper(root, onGoingVal);
};

var isUnivalTreeHelper = function(root, onGoingVal){
    if(root==null) return true;
    return isUnivalTreeHelper(root.left, onGoingVal) && root.val == onGoingVal && isUnivalTreeHelper(root.right, onGoingVal);
}