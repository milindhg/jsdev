/*
https://leetcode.com/problems/maximum-product-subarray/?tab=Description
Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

*/
/*
Solution:   1 solution can be do this in n^2 time.
            Keep finding product of all numbers with every number in array as the start of product array.
            But this solution was submitted on the leetcode assessment engine since there is a timeout error.
            
            https://leetcode.com/submissions/detail/93834806/
            Better solution using the KADANE's algorithm
            Keep 5 variables - minHere, maxHere, minHerePre, maxHerePre and maxProdTillNow. Keep updating these everytime.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime: O(n^2)
 */
var maxProduct = function (nums) {
    if (nums.length === 0)
        return 0;
    var minHere = nums[0];
    var maxHere = nums[0];
    var minHerePrev = nums[0];
    var maxHerePrev = nums[0];
    var maxProdTillNow = nums[0];
    for (var i = 1; i < nums.length; i++) {
        minHere = Math.min(minHerePrev * nums[i], maxHerePrev * nums[i],
                nums[i]);
        maxHere = Math.max(minHerePrev * nums[i], maxHerePrev * nums[i],
                nums[i]);
        maxProdTillNow = Math.max(maxHere, maxProdTillNow);
        maxHerePrev = maxHere;
        minHerePrev = minHere;
    }

    return maxProdTillNow;
};

/**
 * @param {number[]} nums
 * @return {number}
 * @runtime: O(n^2)
 */
var maxProduct_N2 = function (nums) {
    var maxTillNow = nums[0];
    var runningProduct = 1;
    for (var i = 0; i < nums.length; i++) {
        runningProduct = nums[i];
        maxTillNow = Math.max(maxTillNow, nums[i]);
        for (var j = i + 1; j < nums.length; j++) {
            runningProduct *= nums[j];
            maxTillNow = Math.max(runningProduct, maxTillNow);
        }
    }
    return maxTillNow;
};

var main = function () {
    nums = [ 2, 3, -2, 4 ];
    console.log(maxProduct(nums));
};

main();