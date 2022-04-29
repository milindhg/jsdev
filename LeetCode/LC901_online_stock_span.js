/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 *
 * https://leetcode.com/problems/online-stock-span/description/
 *
 * algorithms
 * Medium (53.61%)
 * Likes:    661
 * Dislikes: 117
 * Total Accepted:    54.4K
 * Total Submissions: 92.5K
 * Testcase Example:  '["StockSpanner","next","next","next","next","next","next","next"]\n[[],[100],[80],[60],[70],[60],[75],[85]]'
 *
 * Write a class StockSpanner which collects daily price quotes for some stock,
 * and returns the span of that stock's price for the current day.
 * 
 * The span of the stock's price today is defined as the maximum number of
 * consecutive days (starting from today and going backwards) for which the
 * price of the stock was less than or equal to today's price.
 * 
 * For example, if the price of a stock over the next 7 days were [100, 80, 60,
 * 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["StockSpanner","next","next","next","next","next","next","next"],
 * [[],[100],[80],[60],[70],[60],[75],[85]]
 * Output: [null,1,1,1,2,1,4,6]
 * Explanation: 
 * First, S = StockSpanner() is initialized.  Then:
 * S.next(100) is called and returns 1,
 * S.next(80) is called and returns 1,
 * S.next(60) is called and returns 1,
 * S.next(70) is called and returns 2,
 * S.next(60) is called and returns 1,
 * S.next(75) is called and returns 4,
 * S.next(85) is called and returns 6.
 * 
 * Note that (for example) S.next(75) returned 4, because the last 4 prices
 * (including today's price of 75) were less than or equal to today's
 * price.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
 * There will be at most 10000 calls to StockSpanner.next per test case.
 * There will be at most 150000 calls to StockSpanner.next across all test
 * cases.
 * The total time limit for this problem has been reduced by 75% for C++, and
 * 50% for all other languages.
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/342048394/
 *              Beats 80% JS Submissions.
 * 

This is a good stack problem. Think about the problem to give a Data Structure
to output minimum element in stack anytime. - 155
https://leetcode.com/problems/min-stack/description/

A slight modification is to always have the maximum element in our stack. So our
stack is a window of all the lements which are greater than current element in
the stream. If there are smaller or equal elements we pop them out update the
count and push current element to stack.

EASY PEASY. 

also check other stack related problems from here -
https://leetcode.com/problems/online-stock-span/discuss/168311/C++JavaPython-O(1)


 * 
 * 
 */

// @lc code=start


var StockSpanner = function() {
    this.stk = new Array();
};

/** 
 * @param {number} price
 * @return {number}
 * @time O(1) ammortized. only for the next method. Running it for array of size
 * n, the total time will be O(n)
 * @space O(n) for n elements in the stream.
 * 
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while(this.stk.length > 0 && this.stk[this.stk.length-1].price <= price){
        span += this.stk[this.stk.length-1].span;
        this.stk.pop();
    }
    this.stk.push({"price":price, "span": span});
    console.log(this.stk);
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
let main = () => {
    let obj = new StockSpanner();
    [100, 80, 60, 70, 60, 75, 85].forEach( price => {
        console.log(obj.next(price));
    });
};

main();