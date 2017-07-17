/*
https://leetcode.com/problems/keyboard-row/#/description
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/*
Solution:   https://leetcode.com/submissions/detail/109963181/ beats 73.85% of other JS submissions.

            First Prepare a hashmap of all the characters, uppercase and lowercase. Assign number to it.
            Then for each work in the input, loop through the letters and keep a variable to track the row number. 
            If row number changes anytime in the middle, break the loop and move to next work.
            At the end of loop for every word, check whether the flipper is same as at the Start.
            If yes: add the word to the output.
            
            Just using while loop instead of for loop, increased the performance from 73.85% to 90.81%
            https://leetcode.com/submissions/detail/109963729/
            
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    var charMap = initCharMap();
    var output = [];
    for ( var i in words) {
        var currWord = words[i]
        var j = 0;
        var flipperStart = charMap[currWord[j]];
        // console.log('Flipper Start = ' + flipperStart);
        var flipper = charMap[currWord[j]];
        while (j < currWord.length) {
            flipper = charMap[currWord[j++]];
            // console.log('Flipper = ' + flipper);
            if (flipper != flipperStart) {
                break;
            }
        }
        // console.log('Flipper at end = ' + flipper);
        if (flipperStart === flipper)
            output.push(currWord);
    }
    return output;
};

var initCharMap = function () {
    var characterMap = {
        'Q' : '1',
        'W' : '1',
        'E' : '1',
        'R' : '1',
        'T' : '1',
        'Y' : '1',
        'U' : '1',
        'I' : '1',
        'O' : '1',
        'P' : '1',
        'q' : '1',
        'w' : '1',
        'e' : '1',
        'r' : '1',
        't' : '1',
        'y' : '1',
        'u' : '1',
        'i' : '1',
        'o' : '1',
        'p' : '1',
        'A' : '2',
        'S' : '2',
        'D' : '2',
        'F' : '2',
        'G' : '2',
        'H' : '2',
        'J' : '2',
        'K' : '2',
        'L' : '2',
        'a' : '2',
        's' : '2',
        'd' : '2',
        'f' : '2',
        'g' : '2',
        'h' : '2',
        'j' : '2',
        'k' : '2',
        'l' : '2',
        'Z' : '3',
        'X' : '3',
        'C' : '3',
        'V' : '3',
        'B' : '3',
        'N' : '3',
        'M' : '3',
        'z' : '3',
        'x' : '3',
        'c' : '3',
        'v' : '3',
        'b' : '3',
        'n' : '3',
        'm' : '3'
    };
    return characterMap;
};

var main = function () {
    var charMap = initCharMap();
    console.log(charMap['A']);
    var words = [ "Hello", "Alaska", "Dad", "Peace" ];
    console.log(findWords(words));
};

main();