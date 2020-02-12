/* https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/description/

Given two integers tomatoSlices and cheeseSlices. The ingredients of different burgers are as follows:

Jumbo Burger: 4 tomato slices and 1 cheese slice.
Small Burger: 2 Tomato slices and 1 cheese slice.
Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and the number of remaining cheeseSlices equal to 0. If it is not possible to make the remaining tomatoSlices and cheeseSlices equal to 0 return [].

 

Example 1:

Input: tomatoSlices = 16, cheeseSlices = 7
Output: [1,6]
Explantion: To make one jumbo burger and 6 small burgers we need 4*1 + 2*6 = 16 tomato and 1 + 6 = 7 cheese. There will be no remaining ingredients.
Example 2:

Input: tomatoSlices = 17, cheeseSlices = 4
Output: []
Explantion: There will be no way to use all ingredients to make small and jumbo burgers.
Example 3:

Input: tomatoSlices = 4, cheeseSlices = 17
Output: []
Explantion: Making 1 jumbo burger there will be 16 cheese remaining and making 2 small burgers there will be 15 cheese remaining.
Example 4:

Input: tomatoSlices = 0, cheeseSlices = 0
Output: [0,0]
Example 5:

Input: tomatoSlices = 2, cheeseSlices = 1
Output: [0,1]
 

Constraints:

0 <= tomatoSlices <= 10^7
0 <= cheeseSlices <= 10^7


Solution:   https://leetcode.com/submissions/detail/302587319/  beats 94.83% JS Submissions.
            The solution is very simple mathematically. Basically it is 2 linear equations given in input with 2 variables.
            2 variables are x = number of Jumbo Burgers and y = number of Small Burgers.
            Since every Jumbo Burger needs 4 tomatoSlices and 1 cheeseSlices AND Small burger needs 2 tomatoSlices and 1 cheeseSlices,
            We can form the equations as 
            4x+2y = tomatoSlices total and x+y = cheeseSlices total.
            Solve for x and y or substitute value of x or y into the other equation and you get basic way to get back x and y.
            Tricky part is that since the solving of equation needs division by 2, the result can contain decimal values i.e both x and y or x can be floating number.
            So exit condition to return no result could be x<0 or y<0 or x has some floating component.

 */

/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    var x, y;
    x = (tomatoSlices - 2*cheeseSlices)/2;
    y = cheeseSlices - x;
    return (x<0 || y<0 || x-Math.floor(x)>0) ? [] : [x,y];
};

var main = () => {
    var inputArr = [[16, 7],
    [17, 4],
    [4, 17],
    [0, 0],
    [2, 1],
    [1, 2],
    [2537427, 860448]];
    inputArr.forEach((input)=> {
        console.log("Input is: " + input + " AND Output is: [" + numOfBurgers(input[0], input[1])+ "]");
        console.log();
    });  
};

main();