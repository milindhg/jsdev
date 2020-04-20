/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 *
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (60.30%)
 * Likes:    1104
 * Dislikes: 147
 * Total Accepted:    112.4K
 * Total Submissions: 181.6K
 * Testcase Example:  '[3,9,20,15,7]'
 *
 * Given a non-empty binary tree, return the average value of the nodes on each
 * level in the form of an array.
 * 
 * TYPE:    TREE, BFS, LEVEL ORDER TRAVERSAL, AVERAGE, MATH, SIMPLE, BINARY TREE
 * 
 * Example 1:
 * 
 * Input:
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on
 * level 2 is 11. Hence return [3, 14.5, 11].
 * 
 * 
 * 
 * Note:
 * 
 * The range of node's value is in the range of 32-bit signed integer.
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/327755396/
 *              Beats 99.76% JS Submissions.
 * 
Simple level order tree traversal or BFS and get the average of levels on the way.
 * 
 * 
 */

let Tree = require("../Utilities/Tree");
let TreeNode = require("../Utilities/TreeNode");

// @lc code=start
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
var averageOfLevels = function(root) {
    let queue = new Array();
    if(!root)
        return queue;

    queue.push(root);
    queue.push('$');
    let ans = new Array();
    let levelSum = 0;
    let levelCount = 0;
    while(queue.length>1){
        let item = queue.shift();
        if(item == '$'){
            ans.push(levelSum / levelCount);
            queue.push('$');
            levelSum = 0;
            levelCount = 0;
        }else{
            levelSum += item.val;
            levelCount++;
            if(item.left)
                queue.push(item.left);
            if(item.right)
                queue.push(item.right);
        }
    }
    ans.push(levelSum / levelCount);
    return ans;
};
// @lc code=end


//Another way people are writing level order function or BFS function as below.
const traverseTreeSmallerWay = (node, level, levelData) => {
    if (!node) {
        return
    }
    
    !!levelData[level] ? levelData[level].push(node.val) : levelData[level] = [node.val]
    
    traverseTree(node.left, level + 1, levelData)
    traverseTree(node.right, level + 1, levelData)
}

var averageOfLevels = function(root) {
    let levelData = {};
    traverseTree(root, 0, levelData);
    
    return Object.values(levelData).map(level => {
        let len = level.length;
        return level.reduce((a,b) => a+b,0) / len 
    })
};


let main = () => {
    let t1 = Tree.prototype.buildBinaryTree([3,9,20,null,null,15,7]);
    Tree.prototype.printBinaryTree(t1);
    console.log(averageOfLevels(t1));
    t1 = Tree.prototype.buildBinaryTree([3,9,20]);
    Tree.prototype.printBinaryTree(t1);
    console.log(averageOfLevels(t1));
};

main();