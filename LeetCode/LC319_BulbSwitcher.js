/**
https://leetcode.com/problems/bulb-switcher/description/
    
There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

Example:

Given n = 3. 

At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.
*/
/*
Solution: All the bulbs which are perfect squares will remain open. SInce they haveodd number of factors. Example 4 has 3 factors 1,2,4. So it will remain on.
*/

/**
 * @param {number} n
 * @return {number}
 * 84% https://leetcode.com/submissions/detail/128970859/
 * 
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};

var main = function(){
    var n = 5;
    console.log("Number of bulbs ON after "+n+" rounds = "+bulbSwitch(n));
};

main();