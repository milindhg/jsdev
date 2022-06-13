/*
https://leetcode.com/problems/house-robber/?tab=Description
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

*/

/*
Solution:   https://leetcode.com/submissions/detail/79734151/
            This is a very special problem of building the solution in recursion.
            Start with base case.
            Case 1: 1 house - Rob it
            Case 2: rob max of 1,3 or 2
            Case 3: rob max of 1,3 or 2,4 or 1,4
            Case 4: lets say 5 houses - get max of (5 + getMax(3) + getMax(2)) or getMax(4)
            Case 5: Similarly build for 6, 7, houses and so on.


            Easier and efficient approach - https://leetcode.com/submissions/detail/305827074/  beats 92.78% JS Submissions.
            It is based on dynamic programming with memoization.
            just have 3 cases - 
            Case 1: empty nums. - return 0
            Case 2: only 1 house - return that house value.
            Case 3: more than 1 house. Then start preparing the memoization array.
            For 2 houses its simple. Pick the max value of the 2.
            But as houses increase, find what is more - current last house + value of all the remaining houses except the previous house. OR
            Don't rob current house and rob maximum till the previous house.

            Automatically the memoization array is built and return the last element number from the memoization array.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var robRecursive = function (nums) {
    if (nums.length === 0) {
        return 0;
    } else if (nums.length === 1) {
        return nums[0];
    } else {
        memo = [];
        var index = 0;
        var length = nums.length;
        //prepare the empty memo array of length = nums array.
        while (index < length) {
            memo.push(-1);
            index++;
        }
        index = 0;
        memo[index] = getMaxProfit(nums, index, length - 1, memo);
        memo[index + 1] = getMaxProfit(nums.slice(1, length), index,
                length - 2, memo.slice(1, length));
        return Math.max(memo[index], memo[index + 1]);
    }
};

var getMaxProfit = function (nums, start, end, memo) {
    if (start === end) { // Case for only 1 house. start=end.
        memo[start] = nums[start];
        return memo[start];
    } else if (start === end - 1) { // Case for 2 houses. Adjacent to each other. Store money for
        // the one with max profit.
        memo[start] = Math.max(nums[start], nums[end]);
        return memo[start];
    } else if (start === end - 2) { // Case for 3 houses. Get max of 1,2 to 3.
        memo[start] = Math.max(nums[start] + nums[start + 2], nums[start + 1]);
        return memo[start];
    } else {    //Case for 4 houses. Get max of houses 1,3 or 2,4 or 1,4.
        if (memo[start + 2] === -1) {
            memo[start + 2] = getMaxProfit(nums, start + 2, end, memo);
        }
        if (memo[start + 3] === -1) {
            memo[start + 3] = getMaxProfit(nums, start + 3, end, memo);
        }
        memo[start] = nums[start] + Math.max(memo[start + 2], memo[start + 3]);
        // console.log(nums);
        // console.log(start);
        // console.log(end);
        // console.log(memo);
        // console.log("Answer is: " + memo[start]);
        return memo[start];
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var robNewDPMem = function(nums) {
    if(nums.length==0) return 0;
    if(nums.length==1) return nums[0];
    var mem = [];
    mem.push(nums[0]);
    mem.push(Math.max(nums[0],nums[1]));
    for(var i=2; i<nums.length; i++){
        mem.push(Math.max(mem[i-1], mem[i-2] + nums[i]));
    }
    return mem[nums.length-1];
};

var main = function () {
    var nums = [ 2, 7, 9, 3, 1 ];
    console.log(robNew(nums));
};

main();