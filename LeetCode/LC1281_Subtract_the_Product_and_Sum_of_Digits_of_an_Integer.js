/* 
https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
 

Constraints:

1 <= n <= 10^5


Solution:   https://leetcode.com/submissions/detail/306614815/  beats 94.41% JS Submissions.
            Very easy peasy problem.
            Just get all the units place numbers one by one and keep incrementally adding up to the product and sum variables.
            Finally return subtraction of product - sum.


 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var prod = 1;
    var sum = 0;
    while(n>0){
        var currNum = n%10;
        n = Math.floor(n/10);
        prod = prod * currNum;
        sum = sum + currNum;
    }
    return prod - sum;
};

var main = () => {
    console.log(subtractProductAndSum(100));
    console.log(subtractProductAndSum(123));
    console.log(subtractProductAndSum(1));
    console.log(subtractProductAndSum(234));
    console.log(subtractProductAndSum(4421));
};

main();