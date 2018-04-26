/*
https://leetcode.com/problems/symmetric-tree/description/

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
*/


//Solution: Traverse the tree in level order and check each level, if anytime level is not a palindrome, return false.
//          https://leetcode.com/submissions/detail/151652903/  beats 93.70% submissions in JS
    
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
var isSymmetric = function(root) {
    var arr = [];
    var answer = levelorderPalindromeCheck(root, arr);
    return answer;
};

var levelorderPalindromeCheck = function(root, levelArr) {
    var arr = []
    arr.push(root);
    arr.push('$');
    var tempArr = [];
    while (arr.length > 1) {
        var elem = arr.shift();
        if (elem == '$') {
            arr.push(elem);
            levelArr.push(tempArr);
            if (!checkPalindrome(tempArr))
                return false;
            tempArr = [];
        } else if (elem == null)
            tempArr.push(null);else {
            tempArr.push(elem.val);
            arr.push(elem.left);
            arr.push(elem.right);
        }
    }
    return true;
};



var checkPalindrome = function(arr) {
    var j = arr.length - 1;
    var i = 0;
    if (j == -1 || j == 0)
        return true;else {
        while (i < j) {
            if (arr[i] == arr[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
};