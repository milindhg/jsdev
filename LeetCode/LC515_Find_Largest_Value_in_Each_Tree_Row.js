/* 
https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/

You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]


TYPE: TREE, LEVEL ORDER TRAVERSAL, TREE TRAVERSAL, QUEUE, BFS


Solution:   https://leetcode.com/submissions/detail/312261370/  beats 69.54% JS Submissions.
            Well this is another level order traversal problem with some twist. THis is rather simpler since only addition at each level needs to be stored.
            There is no need to identify specific level like the last level or 4th level etc. Just add all the levels nodes values as you traverse every level and keep building the level order traversal queue.

            !!!!!! Be sure to add the last answer since whenever level order order traversal is completed, the last level sum is not added to the answer since there are no children for the last level.


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
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    var q = [];
    if(!root) return q;
    q.push(root);
    q.push('$');
    var ans = [];
    var currLevelMax = root.val;
    
    while(q.length>1){
        var item = q.shift();
        if(item=='$'){  //Level completed so push the currLevelMax to the ans and reset currLevelMax
            q.push('$');
            ans.push(currLevelMax);
            currLevelMax = -Number.MAX_VALUE;
        }
        else{
            if(item.left) q.push(item.left);
            if(item.right) q.push(item.right);
            currLevelMax = Math.max(currLevelMax, item.val);
        }
    }
    return ans.concat(currLevelMax);
};

var main = () => {
    var t1 = Tree.prototype.buildBinaryTree([1,3,2,5,3,null,9]);
    Tree.prototype.printBinaryTree(t1);
    console.log(largestValues(t1));

    t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,null,6,7,null,null,null,null,8]);
    Tree.prototype.printBinaryTree(t1);
    console.log(largestValues(t1));

    t1 = Tree.prototype.buildBinaryTree([0,-1]);
    Tree.prototype.printBinaryTree(t1);
    console.log(largestValues(t1));

    t1 = Tree.prototype.buildBinaryTree([-1,0]);
    Tree.prototype.printBinaryTree(t1);
    console.log(largestValues(t1));
    
};

main();