/* https://leetcode.com/problems/find-common-characters/description/

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter


Solution:   https://leetcode.com/submissions/detail/215551678/  beats 46.52% JS Submissions.
            //Loop over words 
            //Loop over characters in each word and keep count of how many times each character appears in each word. 
            //At the end the hashmap is a map with key being each possible letter within the words and value being array of size = number of given words. In this array, there is count of number of times the letter occurs.
            //So when we loop through all the possible characters, we just incorporate values whose array contains no zeroes. i.e. the character never appears zero times in any word.
            //Also since we want the minimum number of duplicate times the same character occurs in multiple words, we incorporate the character found minimum number of times to count that character minimum number of times - i.e. 1 or more.


 */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var map = {};
    for(var i in A){      //Loop over words
        var word = A[i];
        for(var j in word){     //Loop over characters in each word and keep count of how many times each character appears globally.
            if(!map[word[j]]){
                //create new key in hashmap and initialize the array in value of that key
                map[word[j]] = new Array(A.length).fill(0);
                map[word[j]][i] = 1;
            }else{
                map[word[j]][i]++;
            }
        }


    }
    
    // console.log(map);
    var ans = [];
    for(var key in map){        //THen loop through all the characters in map i.e. all characters 
        var currKeyMaxVal = Math.min(...map[key]);
        if(currKeyMaxVal>0){
            var k = 0;
            while(k<currKeyMaxVal){
                ans.push(key);
                k++;
            }
        }
            
    }
    
    return ans;
};

var main = function(){
    var ans = commonChars(["bella","label","roller"]);
    console.log(ans + ' ' + (ans==["e","l","l"].join() ? 'Correct' : 'Incorrect'));
    ans = commonChars(["cool","lock","cook"]);
    console.log(ans + ' ' + (ans==["c","o"].join() ? 'Correct' : 'Incorrect'));
};

main();