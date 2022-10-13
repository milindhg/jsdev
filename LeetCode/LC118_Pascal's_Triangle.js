/* 

https://leetcode.com/problems/pascals-triangle/

118. Pascal's Triangle
Easy

8132

269

Add to List

Share
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
Accepted
1,022,309
Submissions
1,485,321


Solution:   https://leetcode.com/submissions/detail/821852416/  beats 29.96% JS Submissions.
Simple physical problem meaning, just keep building new array for every row and keep pushing into the answer array.

Runtime: O(n*m) where n is numRows and m is number of rows in each of the n rows. this can be also called O(n^2)
Space: O(n^2)

 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let ans = [[]];
    let i = 0;
    while (i < numRows) {
        ans.push(doAdditionInArray(ans[i++]));
    }
    return ans;
};


let doAdditionInArray = (arr) => {
    if (arr.length == 0) {
        return [1];
    } else if (arr.length == 1) {
        return [1, 1];
    } else {
        let ansArr = Array(arr.length + 1).fill(-1);
        let left = 0;
        let right = arr.length - 1;
        ansArr[left] = 1;
        ansArr[right + 1] = 1;
        while (left < right) {
            if (ansArr[left + 1] == -1)
                ansArr[left + 1] = arr[left] + arr[left + 1];
            if (ansArr[right] == -1)
                ansArr[right] = arr[right] + arr[right - 1];
            left++;
            right--;
        }
        return ansArr;
    }
}

let main = () => {
    generate(5);
};

main();