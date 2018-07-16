https://leetcode.com/problems/to-lower-case/description/

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Solution:   https://leetcode.com/submissions/detail/164058366/ beats 100% of JS submissions.
            Traverse through the string and keep concatenating each character with a condition.
            Condition is convert to lower case i.e. (+97 - 65) only if the character is in range A-Z.
            Since there can be other characters or numbers or even already lower case characters or special characters in the input.
            Those should be ignored. Only [A-Z] should be converted to lower case.


/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var answer = "";
    for(var i in str){
        if(str.charCodeAt(i)>64 && str.charCodeAt(i)<(64+26))
            answer += String.fromCharCode(str.charCodeAt(i)+97-65);
        else
            answer += str.charAt(i);
    }
    return answer;
};
