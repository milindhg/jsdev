/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    } else if (nums.length === 1) {
        return nums[0];
    } else {
        memo = [];
        var index = 0;
        var length = nums.length;
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
    if (start === end) {
        memo[start] = nums[start];
        return memo[start];
    } else if (start === end - 1) {
        memo[start] = Math.max(nums[start], nums[end]);
        return memo[start];
    } else if (start === end - 2) {
        memo[start] = Math.max(nums[start] + nums[start + 2], nums[start + 1]);
        return memo[start];
    } else {
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

var main = function () {
    var nums = [ 2, 7, 9, 3, 1 ];
    console.log(rob(nums));
};

main();