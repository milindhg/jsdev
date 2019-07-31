/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.


*/

/*
Solution:   https://leetcode.com/submissions/detail/224795263/ - beats 97.00% of JS submissions.
            The crux of the solution is to understand that this problem is not finding difference between min and max in the given array.
            In fact its finding the maximum profit that can be done by checking selling price on each day, considering we've taken the stock at the minimum price so far.
            So maintain min so far and keep checking with it, what is the profit that can be done today by difference with the min so far.
            If we're asked to get the days when to buy and sell then we need to maintain the day at which we got min price so far and the date on which we got the max profit.
            Return x and y.
            This looks like a kadane's algorithm problem.

            [7,1,5,3,6,4]
            715364
            711334
            043
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var lowestLocalPrice = prices[0];
    var highestLocalPrice = prices[0];
    var profitSoFar = 0;
    var i = 0;
    while(i<prices.length){
        if(prices[i]<highestLocalPrice){
            profitSoFar += highestLocalPrice - lowestLocalPrice;
            highestLocalPrice = prices[i];
            lowestLocalPrice = prices[i];    
        }else{
            highestLocalPrice = prices[i];
        }
        i++;
    }
    profitSoFar += highestLocalPrice - lowestLocalPrice;
    return profitSoFar;
};


var main = function () {
    var prices = [ 7, 1, 5, 3, 6, 4 ];
    console.log(maxProfit(prices));
    prices = [1,2,3,4,5];
    console.log(maxProfit(prices));
    prices = [7,6,4,3,1]
    console.log(maxProfit(prices));
};

main();