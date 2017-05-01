/*
https://leetcode.com/problems/path-sum-ii/#/description
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]

*/

/*
Solution:   https://leetcode.com/submissions/detail/99361487/ beats 57.53% solutions.
            Similar to the problem where we return true or false whether a path with given sum exists from root to leaf in a given tree.
            Only in this case we traverse all paths and accumulate the positive answers.
            So the tricky part here is that the return type of the function is changing from boolean to an array of array.
            Also array is pass by reference, so the variable we use for building our answer is pathTillNow. 
            To maintain backtracking we also pop the root value when we're done processing it.
            if we keep appending the found positive answer path by adding the reference then at last our answer will be blank, 
            because at last  we pop the element after processing and when we reach back to the root in unwinding the recursion, our pathTillNow is blank.
            So the answer also points to it and we get the count of number of positive paths right, but all those arrays are blank in the answer.
            To avoid this problem, whenever we find a positive root to leaf path, we should push a copy of pathTillNow instead of directly pushing the reference of the array.
*/

/**
 * Definition for a binary tree node. function TreeNode(val) { this.val = val; this.left =
 * this.right = null; }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    return pathSumHelper(root, sum, 0, [], []);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @param {number} sumTillNow
 * @param {number[]} pathTillNow
 * @param {number[][]} pathSumPaths
 * @return {number[][]}
 */
var pathSumHelper = function (root, sum, sumTillNow, pathTillNow, pathSumPaths) {
    if (root == null) {
        return pathSumPaths;
    } else if (root.left == null && root.right == null) {
        if (sum == sumTillNow + root.val) {
            pathTillNow.push(root.val);
            var pathToPush = pathTillNow.concat();
            pathSumPaths.push(pathToPush);
            pathTillNow.pop();
            return pathSumPaths;
        }
    } else {
        pathTillNow.push(root.val);
        pathSumPaths = pathSumHelper(root.left, sum, sumTillNow + root.val,
                pathTillNow, pathSumPaths);
        pathSumPaths = pathSumHelper(root.right, sum, sumTillNow + root.val,
                pathTillNow, pathSumPaths);
        pathTillNow.pop();
    }
    return pathSumPaths;
};