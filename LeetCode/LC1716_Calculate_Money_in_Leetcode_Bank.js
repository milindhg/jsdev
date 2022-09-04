/* 

https://leetcode.com/problems/calculate-money-in-leetcode-bank/

1716. Calculate Money in Leetcode Bank
Easy

479

15

Add to List

Share
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

 

Example 1:

Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
Example 2:

Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
Example 3:

Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
 

Constraints:

1 <= n <= 1000
Accepted
32,901
Submissions
50,655

Solution:   https://leetcode.com/submissions/detail/791111251/ beats 59.32% JS Submissions

            Best approach is to write down the pattern and notice there is a summation formula getting formed as below.
            Week 1: i.e. n = 7 => 1 + 2 + 3 + 4 + 5 + 6 + 7 i.e. Summation (1...7) + (7 * 0)
            Week 2: i.e. n = 14 => 1 + 2 + 3 + 4 + 5 + 6 + 7 + 2 + 3 + 4 + 5 + 6 + 7 + 8 == 2 * (1 + 2 + 3 + 4 + 5 + 6 + 7) + 7*(0+1)
            Week 3: i.e. n = 21 => 3 * (1 + 2 + 3 + 4 + 5 + 6 + 7) + 7*(0+1+2)
            Week 4: i.e. n = 28 => 4 * (1 + 2 + 3 + 4 + 5 + 6 + 7) + 7*(0+1+2+3)
            Week 5: i.e. n = 35 => 5 * (1 + 2 + 3 + 4 + 5 + 6 + 7) + 7*summation(0...4)
            Week 6: i.e. n = 35 => 6 * (1 + 2 + 3 + 4 + 5 + 6 + 7) + 7*summation(0...5)
            Hence for full week n formula is => n * Summation(1..7) + 7*summation(0...n-1)
            Hence given n then do n%7 to get how many weeks are full and how many weeks are full and calculate for prior weeks based on above formula. For the remainder number of days, calculate by starting with week number while adding 1 each time.
    


 */

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let remainder = n % 7;
    let numFullWeeks = Math.floor(n / 7);
    let fullWeeksCount = numFullWeeks * (28) + (7 * (numFullWeeks - 1) * (numFullWeeks) / 2);

    let remainderCount = 0;
    for (let i = 1; i <= remainder; i++) {
        remainderCount += numFullWeeks + i;
    }
    //Remainder can be calculated with below formula of summation of consecutive numbers.
    // if there are x numbers then summation is => x/2 * (firstNumber + lastNumber)
    // let remainderCount = remainder / 2 * (numFullWeeks+1 + numFullWeeks)

    return fullWeeksCount + remainderCount;
};

let main = () => {
    console.log(totalMoney(4));
    console.log(totalMoney(10));
    console.log(totalMoney(20));
    console.log(totalMoney(82));
};

main();