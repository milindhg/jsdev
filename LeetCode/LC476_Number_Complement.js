/**
 * https://leetcode.com/problems/number-complement/
 * 
 * Given a positive integer, output its complement number. The complement strategy is to flip the
 * bits of its binary representation.
 * 
 * Note: The given integer is guaranteed to fit within the range of a 32-bit signed integer. You
 * could assume no leading zero bit in the integer’s binary representation. Example 1: Input: 5
 * Output: 2 Explanation: The binary representation of 5 is 101 (no leading zero bits), and its
 * complement is 010. So you need to output 2. Example 2: Input: 1 Output: 0 Explanation: The binary
 * representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output
 * 0.
 * 
 * 
 */
/*
Solution:   https://leetcode.com/submissions/detail/91941371/
            Get each bit from right and left shift it number of times from which position the bit is obtained.
            This is slightly slow algorithm since for every bit you have to left shift increasing from 1 to n times where n is the most significant 1 bit position.


            https://leetcode.com/submissions/detail/91943883/
            This is smart algorithm. Get highest 1 bit position. Do this in linear time.
            Then subtract 1 from it to get a number with with those many 1 bits.
            This is your mask. Finally XOR the given number with the mask. You'll endup flipping 0 bits to 1 and 1s to 0 automatically. 
            
            Runtime: O(1) since all the numbers are less than 32 bit numbers.
*/

/**
 * @param {number} num
 * @return {number}
 * 
 * @runtime: O(n^2) where n is the bit position of the highest 1.
 */
var findComplement = function (num) {
    var ans = 0;
    var rightShiftCnt = 0;
    while (num > 1) {
        var lsb = num & 1;
        if (ans === 0) {

        }
        // console.log('lsb is: ' + lsb);
        var lsbComplement = 0;
        switch (lsb) {
            case 1:
                lsbComplement = 0;
                break;
            case 0:
                lsbComplement = 1;
                break;
        }
        // console.log('lsb complement is: ' + lsbComplement);
        ans = (lsbComplement << rightShiftCnt++) + ans;
        // console.log('ans now is: ' + ans);
        num = num >> 1;
    }
    return ans;
};

/**
 * @param {number} num
 * @return {number}
 * 
 * @runtime: O(n) where n is the bit position of the highest 1. Very smart algorithm making use of
 *           mask and XOR
 */
var findComplementSmart = function (num) {
    var highestBitNumber = getHighest1Bit(num);
    var mask = highestBitNumber - 1;
    return num ^ mask;
}

var getHighest1Bit = function (num) {
    var HighestBitNumber = 1;
    while (num > 0) {
        num = num >> 1;
        HighestBitNumber = HighestBitNumber << 1;
    }
    return HighestBitNumber;
}

var main = function () {
    var num = 3;
    console.log('number Complement of ' + num + '=' + findComplementSmart(num));
    var num = 2;
    console.log('number Complement of ' + num + '=' + findComplementSmart(num));
    var num = 1;
    console.log('number Complement of ' + num + '=' + findComplementSmart(num));
    var num = 16;
    console.log('number Complement of ' + num + '=' + findComplementSmart(num));
    var num = 87;
    console.log('number Complement of ' + num + '=' + findComplementSmart(num));
    var num = 5;
    console.log('number Complement of ' + num + '=' + findComplementSmart(num));
    console.log(2);
    console.log(~2);
    console.log(2 ^ (~2));
    console.log((getHighest1Bit(9) - 1) ^ 9);

};

main();
