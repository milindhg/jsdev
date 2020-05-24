/* Given a binary tree where each path going from the root to any leaf form a
valid sequence, check if a given string is a valid sequence in such binary tree.


We get the given string from the concatenation of an array of integers arr and
the concatenation of all values of the nodes along a path results in a sequence
in the given binary tree.

 TYPE:  TREE, TREE TRAVERSAL

Example 1:
Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
Output: true
Explanation: 
The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
Other valid sequences are: 
0 -> 1 -> 1 -> 0 
0 -> 0 -> 0

Example 2:
Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
Output: false 
Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.

Example 3:
Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
Output: false
Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.
 

Constraints:

1 <= arr.length <= 5000
0 <= arr[i] <= 9
Each node's value is between [0 - 9].
   Hide Hint #1  
Depth-first search (DFS) with the parameters: current node in the binary tree and current position in the array of integers.
   Hide Hint #2  
When reaching at final position check if it is a leaf node.

 */

let Tree = require("../Utilities/Tree");
let TreeNode = require("../Utilities/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
    if (!root)
        return false;

    let currNode = root;
    return helper(currNode, arr);
};

let helper = function (root, arr) {
    if (!root || arr.length == 0 || root.val != arr[0])
        return false;
    if (root.left == null && root.right == null && root.val == arr[0] && arr.length == 1)
        return true;
    else {
        return helper(root.left, arr.slice(1)) || helper(root.right, arr.slice(1));
    }
};

let main = () => {
    let t1 = Tree.prototype.buildBinaryTree([0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]);
    Tree.prototype.printBinaryTree(t1);
    console.log(isValidSequence(t1, [0, 1, 0, 1]));
    console.log(isValidSequence(t1, [0, 1, 1, 0]));
    console.log(isValidSequence(t1, [0, 1, 1]));
    console.log(isValidSequence(t1, [0, 0, 1]));

    t1 = Tree.prototype.buildBinaryTree([2,9,3,null,1,null,2,null,8]);
    Tree.prototype.printBinaryTree(t1);
    console.log(isValidSequence(t1,[2,9,1,8,0]));
    console.log(isValidSequence(t1,[2,3 ,2]));
};

main();