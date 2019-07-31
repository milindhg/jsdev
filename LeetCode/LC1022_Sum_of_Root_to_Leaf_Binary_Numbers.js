/* https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description/

Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

 

Example 1:



Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 

Note:

The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
The answer will not exceed 2^31 - 1.


Solution:       https://leetcode.com/submissions/detail/223453985/ beats 66.67% JS Submissions. 
                Trivial problem of simply doing the traversal on the tree. This traversal could be treated as DFS traversal.
                On traversing you basically add the decimal value of root-to-leaf path whenever you detect a leaf and then add it to the total answer.
                Finally return the answer.
 */

var Tree = require('../Utilities/Tree');
var TreeNode = require('../Utilities/TreeNode');


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
var sumRootToLeaf = function(root) {
    var sum = 0;
    var sumRootToLeafHelper = function(root,num){
        if(root.left==null && root.right==null){
            ans += num;
        }else{
            num += num*2 + root.val;
            sumRootToLeafHelper(root.left,num);
            sumRootToLeafHelper(root.left,num);    
        }
    };
    sumRootToLeafHelper(root,0);
    console.log(0);
    
};


var binToDec = function(numberStr){
    var arr = numberStr.split('');
    var ans = 0;
    var power = 0;
    while(arr.length>0){
        var num1 = Math.pow(2,power++);
        var num2 = Number.parseInt(arr.pop());
        ans += (num2 * num1);
    }
    console.log(ans);
    return ans;
};

var main = function(){
    binToDec("110");
    var t1 = Tree.prototype.buildBinaryTree([1,0,1,0,1,0,1]);
    Tree.prototype.printBinaryTree(t1);
};

main();