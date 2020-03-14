/* 
https://leetcode.com/problems/deepest-leaves-sum/description/

Given a binary tree, return the sum of values of its deepest leaves.
 

Example 1:



Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
 

TYPE: TREE, LEVEL ORDER, TREE TRAVERSAL, TRICKY, RECURSION

Constraints:

The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.

Solution:   https://leetcode.com/submissions/detail/312255076/  beats 63.77% JS Submissions.    this is BFS Approach
            This approach is basically level order traversal.
            The most tricky part in the level order traversal is finding/recognizing the last level nodes. We can use sentinel, however still when to stop?
            In that case there is a way to not remove items from the queue and keep adding items in the queue. Whenever sentinel is found you can increment level.
            To know whether the tree traversal is finished or all levels are done, there will be 2 sentinels at the end of the tree.
            In that case, simply pop out the last 2 sentinels from right. And then keep adding the nodes from right to left until you find next higher level i.e. next sentinel.

            https://leetcode.com/submissions/detail/312258106/ beats 98.53% JS Submissions.     this is DFS Approach
            Another better approach can be to first find depth of tree by recursion.
            And then in another recursion pass, try to keep adding sum by comparing the depth at each leaf node with the max depth found in previous recursion pass.


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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    var q = [];
    q.push(root);
    q.push('$');
    var i = 0;
    while(i<q.length){
        var item = q[i++];
        if(item=='$') q.push('$');
        if(q[q.length-1]=='$' && q[q.length-2]=='$'){
            break;
        }
        else{
            if(item.left) q.push(item.left);
            if(item.right) q.push(item.right);
        }
    }
    
    
    q.pop();
    q.pop();
    i = q.length-1;
    var ans = 0;
    while(q[i]!='$'){
        ans+=q[i--].val;
    }
    return ans;
};


var deepestLeavesSumBetter = (root) => {
    var maxDepth = findDepth(root);
    return helper(root, 1, maxDepth);
}

var helper = (root, currDepth, maxDepth) => {
    if(!root) return 0;
    if(currDepth==maxDepth) return root.val;
    return helper(root.left, currDepth+1, maxDepth) + helper(root.right, currDepth+1, maxDepth);
};

var findDepth = (root) => {
    if(!root) return 0;
    var leftDepth = findDepth(root.left);
    var rightDepth = findDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

var main = () =>{
    var t1 = Tree.prototype.buildBinaryTree([1,2,3,4,5,null,6,7,null,null,null,null,8]);
    Tree.prototype.printBinaryTree(t1);
    console.log(deepestLeavesSum(t1));
    console.log(findDepth(t1));
    console.log(deepestLeavesSumBetter(t1));
};

main();