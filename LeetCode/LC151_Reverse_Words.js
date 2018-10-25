/* https://leetcode.com/problems/reverse-words-in-a-string/description/
Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
Follow up: For C programmers, try to solve it in-place in O(1) space.

Solution:   There can be 2 approaches to solving this.
            Approach 1 (reverseWords): reverse each word in the string inplace and then reverse the complete string.
            !!!Important thing to note here is that the string is immutable so swapping won't work on string. You will have to first create a char array and do the task and then join back the response array to string.
            Cases where approach 1 can fail or become more complex is trimming of mutliple adjacent spaces in the input string. Since leetcode expects to get the well formed output string without any extra adjacent spaces.
            This approach although feels will perform better actually degrades performance in javascript - as per leet code runners.

            BETTER Approach 2 (reverseWordsSimple): Like stack. First split the string based on spaces and then traverse. 
            During the traversal of the array of strings, do a trim operation so as to prepare well formed words and skip the words which have length 0. Basically skip the words which have only spaces.

Tricky case inputs: 
"   a   b "
" "
""


 */

// https://leetcode.com/submissions/detail/160888821/ - beats 100% JS solution submissions.
var reverseWordsSimple = function(str){
    if (str.length == 0) return "";
    var strWords = str.split(" ");
    var result = [];
    for(var i in strWords){
        var currWord = strWords[i].trim();
        if(currWord.length != 0){
            result.unshift(currWord);
        }
    }
    return result.join(' ');
}


/**  
 * https://leetcode.com/submissions/detail/185168429/  beats 18.28% JS Submissions. 
 * This approach although feels will perform better actually degrades performance in javascript - as per leet code runners.
 * @param {string} str      
 * @returns {string}
 */
var reverseWords = function (str) {
    if (str.length == 0) return "";
    var strArr = str.split('');

    var i = 0;
    var j = 0;
    // console.log(strArr);
    //Pass 2: reverse each word in the string. Words are identified as string separated by space.
    while (j <= strArr.length) {
        if (j == strArr.length || strArr[j] == " ") {
            reverseWord(strArr, i, j - 1);
            j++;
            i = j;
        }
        j++;
    }
    // console.log(strArr.join(''));
    //Pass 1 reverse the complete string.
    reverseWord(strArr, 0, strArr.length - 1);

    //Pass 3 clean the string of spaces.
    var result = strArr;
    var i = 0,
        j = 0;
    var spaceFlag = false;
    var gotFirstValidLetter = false;
    while (j < result.length) {
        if (!gotFirstValidLetter && result[j]== ' '){
            j++;
        }else if (!spaceFlag && result[j] == ' ') {
            result[i] = result[j];
            spaceFlag = true;
            i++;
            j++;
        } else if (spaceFlag && result[j] == ' ') {
            j++;
        } else {
            result[i] = result[j];
            i++;
            j++;
            gotFirstValidLetter = true;
            spaceFlag = false;
        }
    }
    while (i < j) {
        result[i] = '';
        i++;
    }
    return result.join('').trim();
};

var reverseWord = function (str, startIndex, endIndex) {
    // console.log(str, startIndex, endIndex);
    while (startIndex < endIndex) {
        swapLetters(str, startIndex, endIndex);
        startIndex++;
        endIndex--;
    }
    // console.log(str, startIndex, endIndex);
};

var swapLetters = function (str, x, y) {
    var temp = str[x];
    str[x] = str[y];
    str[y] = temp;
};

var main = function () {
    var str = "the sky is blue";
    str = "   a   b ";
    console.log(str.length);
    console.log(reverseWords(str));
    console.log(reverseWordsSimple(str));

};

main();


/*     //Clean string
    var tempArr = str.split(' ');
    var strArr = [];
    for(var wordIndex in tempArr){
        var currWord = tempArr[workIndex].trim();
        if(currWord!=''){
            strArr.push(currWord);
        }
    }
 */