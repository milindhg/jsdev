/* 
https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/


Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Example 1:

Input: 
    2
   / \
  2   5
     / \
    5   7

Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.
 

Example 2:

Input: 
    2
   / \
  2   2

Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
 
Solution:   https://leetcode.com/submissions/detail/278920705/ beats 100% JS Submissions.
            This problem is similar to finding maximum or minimum element in an array or binary tree.
            Basically traverse through the tree and find the minimum element and keep updating if you get an element which is lesser than the minimum element so far.
            However in this case you need to keep 2 variables and compare the incoming number to be considered with both the variable values and then update the variables as necessary.
            Then give the second variables value as the answer.
            This will be O(n) solution. where n is the size of the input.

            There is another way to solve this problem i.e. to first sort the array and then give the second or kth index value as the answer to the second or kth min/max value to be given in the answer.

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
var findSecondMinimumValue = function(root) {
    var minNums = [Number.MAX_VALUE, Number.MAX_VALUE];
    helper(root, minNums);
    return minNums[1] == Number.MAX_VALUE ? -1 : minNums[1];
};

var helper = function(root, minNums){
    if(root){
        checkAndUpdateMinNums(root, minNums);
        helper(root.left, minNums);
        helper(root.right, minNums);
    }
    // console.log(minNums);
}

var checkAndUpdateMinNums = function(root, nums){
    // console.log(nums);
    // console.log(root.val);
    if(root.val < nums[0]){
        nums[1] = nums[0];
        nums[0] = root.val
    }else if(nums[0] < root.val && root.val < nums[1]){
        nums[1] = root.val;
    }
}