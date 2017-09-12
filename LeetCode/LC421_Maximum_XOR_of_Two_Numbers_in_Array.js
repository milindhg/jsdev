/*

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 <= ai < 231.

Find the maximum result of ai XOR aj, where 0 <= i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.

*/

/*
 * Solution:
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXORNew = function (nums) {
    var max = 0, mask = 0;
    var hm = {};
    for (var i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        for ( var numIndex in nums) {
            var calc = (nums[numIndex] & mask);
            hm[calc] = true;
            numIndex++;
        }
        // console.log('contents of hm when i=' + i + ' are: '
        // + JSON.stringify(hm));
        var tmp = (1 << i) | max;
        for ( var prefix in hm) {
            // console.log('prefix is: ' + prefix);
            var XORCalc = tmp ^ prefix;
            // console.log('XORCalc is: ' + XORCalc);
            if (hm[XORCalc] === true) {
                max = tmp;
                // console.log('max is: ' + max);
                break;
            }
        }
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    var maxNum = findMaxNumInArray(nums);
    var i = 0;
    var max = Number.MIN_VALUE;
    while (i < nums.length) {
        // console.log(maxNum.toString() + " ^ " + nums[i].toString() + " = "
        // + (maxNum ^ nums[i]).toString());
        if ((maxNum ^ nums[i]) > max) {
            max = maxNum ^ nums[i];
        }
        i += 1;
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR_NSquare = function (nums) {
    var max = Number.MIN_VALUE;
    nums.sort(function (a, b) {
        return a - b;
    });
    // console.log(nums);
    for ( var indexI in nums) {
        for ( var indexJ in nums) {
            // console.log(nums[indexI].toString() + " ^ "
            // + nums[indexJ].toString() + " = "
            // + (nums[indexI] ^ nums[indexJ]).toString());
            if ((nums[indexI] ^ nums[indexJ]) > max) {
                max = nums[indexI] ^ nums[indexJ];
            }
        }
    }
    return max;
};

var findMaxNumInArray = function (nums) {
    var max = Number.MIN_VALUE;
    var i = 0;
    while (i < nums.length) {
        if (nums[i] > max) {
            max = nums[i];
        }
        i += 1;
    }
    return max;
}

var main = function () {
    nums = [ 10, 23, 20, 18, 28 ];
    nums = [ 3, 10, 5, 25, 2, 8 ];
    // nums = [ 8, 10, 2 ];
    // answer 30
    console.log(findMaximumXOR(nums));
    console.log(findMaximumXOR_NSquare(nums));
    console.log(findMaximumXORNew(nums));
}

main();