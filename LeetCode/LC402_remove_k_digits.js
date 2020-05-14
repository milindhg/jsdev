/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 *
 * https://leetcode.com/problems/remove-k-digits/description/
 *
 * algorithms
 * Medium (27.59%)
 * Likes:    1903
 * Dislikes: 95
 * Total Accepted:    121.8K
 * Total Submissions: 435.1K
 * Testcase Example:  '"1432219"\n3'
 *
 * Given a non-negative integer num represented as a string, remove k digits
 * from the number so that the new number is the smallest possible.
 * 
 * 
 * Note:
 * 
 * The length of num is less than 10002 and will be ≥ k.
 * The given num does not contain any leading zero.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: num = "1432219", k = 3
 * Output: "1219"
 * Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219
 * which is the smallest.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: num = "10200", k = 1
 * Output: "200"
 * Explanation: Remove the leading 1 and the number is 200. Note that the
 * output must not contain leading zeroes.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: num = "10", k = 2
 * Output: "0"
 * Explanation: Remove all the digits from the number and it is left with
 * nothing which is 0.
 * 
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/339111760/
 *              beats 85.82% JS Submissions.
 * 

This is a really good problem for implementation as well as thinking.
So intuition is very easy i.e. keep traversing from left ot right and keep
checking whether the current digit is greater than the next digit.

But a very important corner cases are to have the number set to 0 if all digits
are removed.
Also always keep checking if the current number is greater than the next number.
Meaning until that condition is not satisfied, don't increment array, in-fact
decrement array in case of JS since we're using splice function.

If not using splice function then the numbers can be copied or over-written.
 * 
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * @time O(n)
 * @space O(1)
 */
var removeKdigits = function(num, k) {
    let arr = num.split('');
    let index = 0;
    while(k>0 && index<arr.length){
        if(arr[index+1] < arr[index]){
            arr.splice(index, 1);
            index--;
            k --;
        }else
            index++;
    }

    //If no dip is found at all, then keep removing k digits from the end.
    while(k-->0)
        arr.pop();

    //Remove all leading zeroes if any on the number.
    while(arr[0] == '0' && arr.length>1)
        arr.splice(0, 1);

    //Finally return 0 if no digits are left of return the number.
    return arr.length == 0 ? "0" : arr.join('');
};
// @lc code=end

let main = () => {
    console.log(removeKdigits('1432219',3));
    console.log(removeKdigits('10200',1));
    console.log(removeKdigits('10',2));
    console.log(removeKdigits('10',1));
    console.log(removeKdigits('10432219',3));
    console.log(removeKdigits('10423129',3));
    console.log(removeKdigits('14222',3));
    console.log(removeKdigits('1',1));
    console.log(removeKdigits('12',1));
    console.log(removeKdigits('21',1));
    console.log(removeKdigits('12',2));
    console.log(removeKdigits('21',2));
    console.log(removeKdigits('1234567',2));
    console.log(removeKdigits('1234567',4));
    console.log(removeKdigits('1234567',6));
    console.log(removeKdigits('1234567',7));
    console.log(removeKdigits('112',1));
    console.log(removeKdigits('1234567890',9));
    console.log(removeKdigits('2234567891',9));
    console.log(removeKdigits('2234567891',10));
};

main();