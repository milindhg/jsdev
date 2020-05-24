/*
You are given a string s containing lowercase English letters, and a matrix
shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). amount is the amount
by which string s is to be shifted. A left shift by 1 means remove the first
character of s and append it to the end. Similarly, a right shift by 1 means
remove the last character of s and add it to the beginning. Return the final
string after all operations.

 

Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"


Example 2:
Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 

Constraints:

1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100


Simple Approach:    Fist count total left and right shift operations.
Thn simply do the effective number of operations necessary.

Then pass the difference of the left and right shift operations as argument to
the shiftoperation generic function which has below function
1. Simple logic of Negative amount means Right Shift, and positive means left shift. 
2. And Left shift means, take out amount number of characters from start and put it at the end.

 */


/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    if(s.length == 1)
        return s;
    
    const [totalLeft, totalRight] = countShiftOperations(shift);
    console.log([totalLeft, totalRight]);
    return shiftOperation(totalLeft - totalRight, s);
};

var shiftOperation = (amount, str) =>{
    // Simple logic of Negative amount means Right Shift, and positive means left shift. 
    // And Left shift means, take out amount number of characters from start and put it at the end.
    amount = amount % str.length;
    if(amount == 0)
        return str;
    return str.slice(amount, str.length).concat(str.slice(0, amount));
};

var countShiftOperations = (shift) => {
    let totalLeft = 0;
    let totalRight = 0;
    shift.forEach((tuple, i)=>{
        if(tuple[0] == 0)
            totalLeft += tuple[1];
        else
            totalRight += tuple[1];
    });
    return [totalLeft, totalRight];
};

var main = ()=>{
    console.log(stringShift("wpdhhcj",[[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]]));
};

main();