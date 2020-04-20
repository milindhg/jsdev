/*
@lc app=leetcode id=1008 lang=javascript

[1008] Construct Binary Search Tree from Preorder Traversal

https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/description/

algorithms Medium (74.13%) Likes:    634 Dislikes: 21 Total Accepted:    42.6K
Total Submissions: 56.4K Testcase Example:  '[8,5,1,7,10,12]'

Return the root node of a binary search tree that matches the given preorder
traversal.

(Recall that a binary search tree is a binary tree where for every node, any
descendant of node.left has a value < node.val, and any descendant of node.right
has a value > node.val.  Also recall that a preorder traversal displays the
value of the node first, then traverses node.left, then traverses node.right.)


TYPE:   TRICKY, SUBPROBLEM, RECURSION, BACKTRACKING, TREE, BST, BINARY SEARCH TREE

 * 
 * Example 1:
 * 
 * 
 * Input: [8,5,1,7,10,12]
 * Output: [8,5,10,1,7,null,12]
 * 
 * 
 * 
 * 
 * 
 * Note: 
 * 
 * 
 * 1 <= preorder.length <= 100
 * The values of preorder are distinct.
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/327588158/ 
 *              beats 91.91% JS Submissions.
 * 
 * 
Very intuitive approach.
Always keep in mind, the BST follows the below conditions
Root is root. All elems in left subtree are less than root
And All elems to the right of root are greater than root.

Also its given in the constrainsts that the elems in preorder are distinct.
So Now since it is a pre-order - The first element is root.
Then split the remaining array into 2 parts.
All elems less than root into left array and all others in right array.

Keep calling this main subproblem for each subtree.

Finally you get a root.

The base condition of the recursion algorithm should be that the
length of the passed sub-array is at least 1. If 1, prepare root and return.
Since we found a root node.

If the length of array is not even 1 then don't even call the helper.


 * 
 * 
 */

// @lc code=start

let Tree = require("../Utilities/Tree");
let TreeNode = require("../Utilities/TreeNode");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = bstFromPreorderHelper(preorder, 0, preorder.length-1);
    return root;
};
// @lc code=end


let bstFromPreorderHelper = (preorder, start, end) => {
    let root = new TreeNode(preorder[start]);
    if(start == end)
        return root;
    start++;

    let lStart = start;
    let lEnd = start;
    while(preorder[lEnd]<root.val) lEnd++;
    if(lStart<lEnd)
        root.left = bstFromPreorderHelper(preorder, lStart, lEnd-1);

        let rStart = lEnd;
    let rEnd = end;
    if(rStart<=rEnd)
        root.right = bstFromPreorderHelper(preorder, rStart, rEnd);

    return root;
}


let main = ()=>{
    let l1 = Tree.prototype.buildBinaryTree([8,5,10,1,7,null,12]);
    Tree.prototype.printBinaryTree(l1);
    Tree.prototype.printPreorder(l1);

    let arr = [ 8, 5, 1, 7, 10, 12 ];
    Tree.prototype.printBinaryTree(bstFromPreorder(arr));
    arr = [ 8, 5, 1, 7, 10, 9, 12 ];
    Tree.prototype.printBinaryTree(bstFromPreorder(arr));
    arr = [ 8, 5, 1, 7, 10, 8 ];
    Tree.prototype.printBinaryTree(bstFromPreorder(arr));
    arr = [ 8, 5, 1, 7, 10];
    Tree.prototype.printBinaryTree(bstFromPreorder(arr));
    arr = [ 1, 13];
    Tree.prototype.printBinaryTree(bstFromPreorder(arr));
    arr = [ 12, 1];
    Tree.prototype.printBinaryTree(bstFromPreorder(arr));

    let l2 = Tree.prototype.buildBinaryTree([8,5,12,1,7,null,null,null,null,null,10,8]);
    Tree.prototype.printBinaryTree(l2);
};

main();
