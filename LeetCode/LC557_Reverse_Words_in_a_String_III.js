/* 
https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.


Solution:   https://leetcode.com/submissions/detail/311952183/ beats 86.94% JS Submissions.
            This method is basically more object oriented. In a way that first split the string into array of words, reverse all words and then join again. Easy peasy.
            

            https://leetcode.com/submissions/detail/311958161/ beats 99.76% JS Submissions.
            This method is better performance wise since in this case, we simply work in O(n) and single pass. This is cool because we just go on from left to right OR right to left and then construct the answer.
            Runtime: O(n)
            Space: O(1)

 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var ans = "";
    var currentWord = "";
    for (var i=s.length-1; i>=0; i--){
        if(s.charAt(i) == " "){
            //copy the current word in the answer.
            ans = " " + currentWord + ans;
            currentWord = "";
        }else{
            //keep building the current word in reverse manner
            currentWord += s.charAt(i);
        }
    }
    return currentWord + ans;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWordsOther = function(s) {
    var sArr = s.split(' ');
    sArr.forEach((word,i)=>{
        sArr[i] = reverse(word);
    });
    return sArr.join(' ');
};

var reverse = (word) => {
    var wordArr = word.split('');
    var i = 0;
    var j = wordArr.length-1;
    while(i<j){
        var temp = wordArr[i];
        wordArr[i] = wordArr[j];
        wordArr[j] = temp;
        i++;
        j--;
    }
    return wordArr.join('');
};

var main = () => {
    console.log(reverseWords("Let's take LeetCode contest"));
};

main();

