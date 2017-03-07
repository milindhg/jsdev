/*

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

*/
/*
Solution:   https://leetcode.com/submissions/detail/95797516/ - beats around 20% js submissions. Can check for better algo.
            The solution intuition is similar to adding the bit by bit positions and maintaining carry to find the final answer.
            However instead of looping 32 times for a 32 bit number addition, we can do this smartly by this solution
            1. Calculate all the bits where you will be getting a carry bit. 
            2. Get the absolute values of the additions of corresponding bits.
            3. Since you add the carry bit to the next significant bit positions, 
                you should left shift the carry number by 1 so that the carry bits are shifter to the next significant 
                bit positions for addition.
            4. You do this while b!=0 because if there are more carry bits or say because of the
                addition of the carry bit, the addition results in a new carry bit for next significant
                position, then you need to keep an account of the newly created carry bits. So you left
                shift and check whether now the number to be added is 0 i.e. nothing more to add.

*/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    var carry = 0;
    while (b !== 0) {
        // You do this while b!=0 because if there are more carry bits or say because of the
        // addition of the carry bit, the addition results in a new carry bit for next significant
        // position, then you need to keep an account of the newly created carry bits. So you left
        // shift and check whether now the number to be added is 0 i.e. nothing more to add.

        carry = a & b; // Calculate all the bits where you will be getting a carry bit.
        a = a ^ b; // Get the absolute values of the additions of corresponding bits.
        b = carry << 1; // Since you add the carry bit to the next significant bit positions, you
        // should left shift the carry number by 1 so that the carry bits are
        // shifter to the next significant bit positions for addition.
    }
    return a;
};

var main = function () {
    var a = 3;
    var b = 2;
    console.log(getSum(a, b));
};

main();