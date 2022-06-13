/*

https://leetcode.com/problems/bulls-and-cows/
Explaination of the bulls and cows game - https://en.wikipedia.org/wiki/Bulls_and_Cows 

Company List: UBER | 

You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

 

Example 1:

Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
Example 2:

Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
 

Constraints:

1 <= secret.length, guess.length <= 1000
secret.length == guess.length
secret and guess consist of digits only.

*/

/*
Solution:   https://leetcode.com/submissions/detail/96421254/ - beats 79.16% js submissions.

Good problem especially for accountability
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHin1t = function (secret, guess) {
    var secretMap = {}; //Structure of map is key: index positions array
    for (var i = 0; i < secret.length; i++) {
        var currChar = secret[i];
        if (secretMap[currChar]) {
            secretMap[currChar].push(i);
        } else {
            secretMap[currChar] = [i];
        }
    }

    var guessMap = {}; //Structure of map is key: index positions array
    for (var i = 0; i < guess.length; i++) {
        var currChar = guess[i];
        if (guessMap[currChar]) {
            guessMap[currChar].push(i);
        } else {
            guessMap[currChar] = [i];
        }
    }

    var A = 0;
    var B = 0;
    var charCountMap = {};
    for (var item in secretMap) {
        var intersection = [];
        if (guessMap[item])
            intersection = [...secretMap[item]].filter(x => guessMap[item] && guessMap[item].includes(x));
        if (secretMap[item])
            secretMap[item] = [...secretMap[item]].filter(x => !intersection.includes(x));
        if (guessMap[item])
            guessMap[item] = [...guessMap[item]].filter(x => !intersection.includes(x));
        A += intersection.length;
        B += Math.min(secretMap[item] ? secretMap[item].length : 0, guessMap[item] ? guessMap[item].length : 0);
    }

    return A + "A" + B + "B";
};

var getHint = function(secret, guess) {
    let bulls = 0, cows = 0
    let map = new Map()
    for (let num of guess) (map.has(num)) ?  map.get(num).val++ : map.set(num, {val: 1})
    
    for (let i=0; i<guess.length; i++) {
        if (guess[i] == secret[i]) {
            bulls++
            map.get(guess[i]).val--;
            if (map.get(guess[i]).val == 0) map.delete(guess[i])
            secret = secret.substring(0, i) + 'x' + secret.substring(i + 1);
            guess = guess.substring(0, i) + 'y' + guess.substring(i + 1);
        }
    }
    for (let i=0; i<secret.length; i++) {
        if (map.has(secret[i])) {
            cows++
            map.get(secret[i]).val--
            if (map.get(secret[i]).val == 0) map.delete(secret[i])
        }
    }
    return `${bulls}A${cows}B`
};

var main = function () {
    console.log(getHint("1807", "7810"));
    console.log(getHint("1123", "0111"));
    console.log(getHint("11", "01"));
    console.log(getHint("1122", "1222"));
};

main();