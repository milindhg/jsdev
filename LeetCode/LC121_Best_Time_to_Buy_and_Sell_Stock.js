/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.

*/

/*
Solution:   https://leetcode.com/submissions/detail/224787019/ - beats 62.51% of JS submissions.
            The crux of the solution is to understand that this problem is not finding difference between min and max in the given array.
            In fact its finding the maximum profit that can be done by checking selling price on each day, considering we've taken the stock at the minimum price so far.
            So maintain min so far and keep checking with it, what is the profit that can be done today by difference with the min so far.
            If we're asked to get the days when to buy and sell then we need to maintain the day at which we got min price so far and the date on which we got the max profit.
            Return x and y.
            This looks like a kadane's algorithm problem.

            Runtime: O(n)
            Space: O(1)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var maxProfit = 0;
    var minPriceSoFar = Number.MAX_VALUE;
    for ( var i in prices) {
        minPriceSoFar = Math.min(minPriceSoFar, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPriceSoFar);
    }
    return maxProfit;
};

var main = function () {
    var prices = [ 7, 1, 5, 3, 6, 4 ];
    console.log(maxProfit(prices));
};

main();