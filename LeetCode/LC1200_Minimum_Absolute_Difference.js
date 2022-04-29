/* 
https://leetcode.com/problems/minimum-absolute-difference/description/

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 

Constraints:

2 <= arr.length <= 10^5
-10^6 <= arr[i] <= 10^6

Solution:   https://leetcode.com/submissions/detail/279221001/  beats 97.78% JS Submissions.
            Very simple approach. Since mainly we've been given the constraint that the array is of min size 2.
            So basically what we do is get the difference of first and second number in the array.
            Then unless we don't finish the array, keep 2 indices and keep checking the min diff of the numbers at consecutive indices.
            Whenever we encounter new minDiff, reset the answer and start accummulating the answer again.
            
            If we encounter same ongoing minDiff, then accummulate that current consecutive numbers in the answer.
            This way even if we encounter larger differences between numbers sometime in the middle and then again encounter same minDiff between consecutive numbers, we can still accummulate the consecutive numbers when we find the minDiff and finally return the answer.

 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort(function(a,b){
        return a-b;
    });
    // console.log(arr);
    var i = 0, j = 1;
    var minDiff = arr[j] - arr[i];
    var ans = [];
    ans.push([arr[i++],arr[j++]]);
    while(j<arr.length){
        var diff = arr[j]-arr[i];
        if(minDiff>diff){
            ans = [];
            minDiff = diff;
            ans.push([arr[i++],arr[j++]]);
        }else if(minDiff==diff){
            ans.push([arr[i++],arr[j++]]);
        }else{
            i++; j++;
        }
    }
    return ans;
};

var main = () => {
    var arr = [4,2,1,3];
    console.log(minimumAbsDifference(arr));

    arr = [1,3,6,10,15];
    console.log(minimumAbsDifference(arr));

    arr = [3,8,-10,23,19,-4,-14,27]
    console.log(minimumAbsDifference(arr));
};

main();