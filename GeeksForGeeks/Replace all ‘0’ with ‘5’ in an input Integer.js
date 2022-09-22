/* 

https://www.geeksforgeeks.org/replace-0-5-input-integer/

Replace all ‘0’ with ‘5’ in an input Integer
Difficulty Level : Easy
Last Updated : 14 Jul, 2022
Read
Discuss

Given an integer as input and replace all the ‘0’ with ‘5’ in the integer. 

Examples: 

Input: 102 
Output: 152
Explanation: All the digits which are '0' is replaced by '5' 

Input: 1020 
Output: 1525
Explanation: All the digits which are '0' is replaced by '5'
Use of array to store all digits is not allowed.


Simple approach:
        1. Start taking one digit at a time and form the complete number again by multiplying by power of 10.
        2. For units place remainder, multiply by 10^0 i.e. 1 and add current answer
        3. For tens place remainder, multiply by 10^1 i.e. 10 and add current answer
        4. For hundreds place remainder, multiply by 10^2 i.e. 100 and add current answer and so on.
        5. At each step in the loop, if digit is zero then replace it to 5.


 */

let convertFive = (n) => {
    let temp = n;
    let ans = 0;
    let i = 0;
    while (temp > 0) {
        let remainder = temp % 10;
        if (remainder == 0) remainder = 5;
        ans = remainder * Math.pow(10, i++) + ans;
        temp = Math.floor(temp / 10);
    }
    return ans;
};

let main = () => {
    let Util = require("../Utilities/GeneralUtils");
    let u = new Util();
    u.answerValidator(convertFive(102), 152);
    u.answerValidator(convertFive(2), 2);
    u.answerValidator(convertFive(9384), 9384);
    u.answerValidator(convertFive(887), 887);
    u.answerValidator(convertFive(121), 121);
    u.answerValidator(convertFive(1004), 1554);
};

main();
