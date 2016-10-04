/*

Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Solution: Not so easy to decide whether to increment j or decrement k.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var returnans = 0;
    var currdiff = Number.MAX_VALUE;
    if (nums.length < 3) {
        return returnans;
    }
    sortfn(nums);
    //console.log(nums);

    i = 0;
    var j = 1;
    var k = (nums.length - 1);
    while (i < (nums.length - 2)) {
        while (j < k) {
            //console.log("i=" + i + " j=" + j + " k=" + k);
            var currsum = nums[i] + nums[j] + nums[k];
            if(Math.abs(currsum-target) === 0){
                return currsum;
            }
            if (Math.abs(currsum-target) < currdiff) {
                returnans=currsum;
                currdiff = Math.abs(currsum-target);
            }
            if (currsum-target > 0 ) {
                k--;
            } else {
                j++;
            }
        }
        i++;
        j = i + 1;
        k = nums.length - 1;
    }
    return returnans;

};

var sortfn = function (arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
};

var main = function () {
    //var nums = new Array(0,2,1,-3);
    var nums = new Array(-1,2,1,-4);
    //console.log(nums);
    console.log(threeSumClosest(nums,1));
};

main();
