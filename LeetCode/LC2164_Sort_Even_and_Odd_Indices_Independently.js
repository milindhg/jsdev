/* 

https://leetcode.com/problems/sort-even-and-odd-indices-independently/

2164. Sort Even and Odd Indices Independently
Easy

381

22

Add to List

Share
You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

Sort the values at odd indices of nums in non-increasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
Sort the values at even indices of nums in non-decreasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
Return the array formed after rearranging the values of nums.

 

Example 1:

Input: nums = [4,1,2,3]
Output: [2,3,4,1]
Explanation: 
First, we sort the values present at odd indices (1 and 3) in non-increasing order.
So, nums changes from [4,1,2,3] to [4,3,2,1].
Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
So, nums changes from [4,1,2,3] to [2,3,4,1].
Thus, the array formed after rearranging the values is [2,3,4,1].
Example 2:

Input: nums = [2,1]
Output: [2,1]
Explanation: 
Since there is exactly one odd index and one even index, no rearrangement of values takes place.
The resultant array formed is [2,1], which is the same as the initial array. 
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
Accepted
33,071
Submissions
49,564


Solution:   https://leetcode.com/submissions/detail/789450923/  beats 93.55% JS Submissions.
            Very simple straightforward approach. Global solution is 
                to split the array into 2 odd and even indices, sort them and combine them as needed. 
                Start even from beginnning and odd from end and traverse the other way alternately filling the answer array and 
                return the answer array.

 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let oddNums = [];
    let evenNums = [];
    for (let i = 0; i < nums.length; i++) {
        i % 2 == 0 ? evenNums.push(nums[i]) : oddNums.push(nums[i]);
    }
    oddNums.sort((a, b) => a - b);
    evenNums.sort((a, b) => a - b);

    let i = 0;
    let j = oddNums.length - 1;
    let ans = [];
    while (ans.length < nums.length) {
        if (ans.length < nums.length)
            ans.push(evenNums[i++]);
        if (ans.length < nums.length)
            ans.push(oddNums[j--]);
    }
    return ans;
};


let main = () => {
    console.log(sortEvenOdd([4, 1, 2, 3]));
    console.log(sortEvenOdd([36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44, 34]));
    console.log(sortEvenOdd([5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21]));
}


main();