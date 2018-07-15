/* https://leetcode.com/problems/unique-morse-code-words/description/

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
 

Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.

Solution:   https://leetcode.com/submissions/detail/163948488/ beats 89.05% JS submissions.

 */

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    var morseMap = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--.."
    };

    var uniqueTransformations = {};
    for (var i in words) {
        //console.log(words[i]);
        var transformation = "";
        for (var j=0; j<words[i].length; j++) {            
            transformation += morseMap[words[i].charAt(j)];
        }
        //console.log(transformation);
        if (uniqueTransformations[transformation]) {
            uniqueTransformations[transformation] = uniqueTransformations[transformation] + 1;
        } else {
            uniqueTransformations[transformation] = 1;
        }
    }
    console.log(uniqueTransformations);
    return Object.keys(uniqueTransformations).length;
};

var main = function(){
    //console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
    console.log(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"]));
};

main();