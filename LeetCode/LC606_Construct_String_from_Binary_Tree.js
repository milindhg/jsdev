/* 

https://leetcode.com/problems/construct-string-from-binary-tree/

606. Construct String from Binary Tree
Easy

2304

2815

Add to List

Share
Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

 

Example 1:


Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"
Example 2:


Input: root = [1,2,3,null,4]
Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-1000 <= Node.val <= 1000
Accepted
199,097
Submissions
313,908

Solution:   https://leetcode.com/submissions/detail/795954860/  beats 84.80% JS Submissions
            Appears very simple because it is preorder traversal i.e. root,left,right sequence of traversal recursively.
            However tricky thing is to have empty node display for a halfleaf which has left node null and right node contains something. 
            While the pure leaf node should not have any left/right null nodes shown in empty braces.
            Hence there should be check if the child is leaf, then don't go into recursion. 


 */

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
 * @return {string}
 */
var tree2str = function (root) {
    let ans = [];
    helper(root, ans);
    return ans.join('');
};

let helper = (root, charArr) => {
    if (root && isLeaf(root)) {
        charArr.push(root.val);
    }
    else if (root) {
        charArr.push(root.val);
        charArr.push('(');
        if (root.left && isLeaf(root.left)) {
            charArr.push(root.left.val);
        } else if (root.left && isLeafOrHalfLeaf(root.left)) {
            helper(root.left, charArr);
        } else {
            helper(root.left, charArr);
        }
        charArr.push(')');

        if (root.right) {
            charArr.push('(');
            if (root.right && isLeaf(root.right)) {
                charArr.push(root.right.val);
            } else {
                helper(root.right, charArr);
            }
            charArr.push(')');
        }
    }
}

let isLeafOrHalfLeaf = (root) => {
    return (root.left == null && root.right == null) || (root.left == null && root.right != null);
}

let isLeaf = (root) => {
    return (root.left == null && root.right == null);
}


let main = () => {
    let Tree = require("../Utilities/Tree");
    let t1 = new Tree();
    let root1 = t1.buildBinaryTree([1, 2, 3, null, 4]);
    t1.printBinaryTree(root1);
    console.log(tree2str(root1));
    let root2 = t1.buildBinaryTree([1, 2, 3, 4]);
    t1.printBinaryTree(root2);
    console.log(tree2str(root2));
    let root3 = t1.buildBinaryTree([1]);
    t1.printBinaryTree(root3);
    console.log(tree2str(root3));
    let root4 = t1.buildBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    t1.printBinaryTree(root4);
    console.log(tree2str(root4));
    let root5 = t1.buildBinaryTree([1, 2, 3, 4, 5, 6, 7, null, null, null, null, null, null, null, 8]);
    t1.printBinaryTree(root5);
    console.log(tree2str(root5));
};

main();
