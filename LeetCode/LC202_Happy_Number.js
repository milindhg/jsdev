/* 
 * 
 Write an algorithm to determine if a number is "happy".
 
 A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 
 Example: 19 is a happy number
 
 12 + 92 = 82
 82 + 22 = 68
 62 + 82 = 100
 12 + 02 + 02 = 1

Solution: Keep a hashmap of numbers which are coming again and again in the calculation.
This helps in avoiding the infinite loop. Because infinite loop basically happens because there are numbers coming again and again in the answer.
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var mymap = {};

var isHappy = function(n) {
    mymap = {};
    return determineIsHappy(n);
};

var determineIsHappy = function (n) {
    newnum=0;
    while(n>0){
        newnum+=Math.pow((n%10),2);
        n=Math.floor(n/10);
    }
    if(newnum===1){
        return true;
    }
    if(mymap[newnum]){
        return false;
    }
    mymap[newnum]=true;
    return determineIsHappy(newnum);
};

var main = function () {
    var n=19;
    console.log(isHappy(n));
};

main();