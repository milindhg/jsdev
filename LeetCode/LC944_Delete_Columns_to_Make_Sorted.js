/* 
https://leetcode.com/problems/delete-columns-to-make-sorted/description/

We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"], and the remaining columns of A are ["b","v"], ["e","y"], and ["f","z"].  (Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]].)

Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.

Return the minimum possible value of D.length.

 

Example 1:

Input: ["cba","daf","ghi"]
Output: 1
Explanation: 
After choosing D = {1}, each column ["c","d","g"] and ["a","f","i"] are in non-decreasing sorted order.
If we chose D = {}, then a column ["b","a","h"] would not be in non-decreasing sorted order.
Example 2:

Input: ["a","b"]
Output: 0
Explanation: D = {}
Example 3:

Input: ["zyx","wvu","tsr"]
Output: 3
Explanation: D = {0, 1, 2}
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 1000


Solution:   https://leetcode.com/submissions/detail/258895764/  84.62%
            Idea is simple - Think of the given input array of strings as a matrix.
            So rows in matrix are the given strings. and since the strings are of equal length - columns are corresponding characters in the strings.
            So compare corresponding characters in the strings from top to bottom to check if they are in ascending order. If not, then count it as an un-sorted column.
            Finally return the count of un-sorted columns. i.e. to be deleted to make the strings sorted column-wise.
*/



/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    var ans = 0;
    if(A.length<2) return ans;
    for(i=0; i<A[0].length; i++){
        var j=0;
        while(j<A.length-1 && A[j][i] <= A[j+1][i]){
            j++;
        }
        if(j!=A.length-1) ans++;
    }
    return ans;
};

var main = function(){
    console.log(minDeletionSize(["rrjk","furt","guzm"]));
};
main();