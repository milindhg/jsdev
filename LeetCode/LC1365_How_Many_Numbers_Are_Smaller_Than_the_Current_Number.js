/* 
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

TYPE:   ARRAY, TRICKY, CONSTRAINTS BOUND, RANGE ARRAY of Constant time, LINEAR ARRAY PROBLEM

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 

Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100


Solution:   https://leetcode.com/submissions/detail/318263042/ beats 99.89% JS Submissions.

            The main crux of this problem is to get the count of the numbers in sorted order. But in the answer we have to maintain the order of the original numbers.
            So one way would be to have a map of numbers and their indices in the input. Meanwhile count the occurrences of each number and keep that count.
            Then use the original indices to go over the numbers and update the answer array.

            However this will need O(nlogn) time since we have to sort the orig input array.
            
            Now in the constraints we are given that the numbers in the input array can be only in the range 0 to 100 inclusive. 
            Now this gives us an opportunity to do this problem in O(n) time. 
            In such cases we can maintain an input array of the range of numbers. And use that as the sorted order of input rather than actually sorting the input arr.

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var range = new Array(101);
    range.fill(0);
    var ans = new Array(nums.length);
    ans.fill(0);
    var map = {};
    nums.forEach((num,i)=>{
        if(!map[num]){
            map[num] = [];
        }
        map[num].push(i);
        range[num] += 1;
    });
    
    console.log(range.join(','));
    console.log(map);
    
    var smallerNumThanCurrCount = 0;
    range.forEach((cnt, num)=>{
        if(cnt>0){
            map[num].forEach((index)=>{
                ans[index] = smallerNumThanCurrCount;
            });
            smallerNumThanCurrCount += cnt;
        }
    });
    return ans;
};

var main = () => {
    console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
};

main();