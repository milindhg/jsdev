/* https://leetcode.com/problems/expressive-words/description/

Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.

Given a list of query words, return the number of words that are stretchy. 

TYPE:   MEDIUM, Strings, Array, Index Manipulations, Linear Array Problems, Tricky,  

Example:
Input: 
S = "heeellooo"
words = ["hello", "hi", "helo"]
Output: 1
Explanation: 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
 

Notes:

0 <= len(S) <= 100.
0 <= len(words) <= 100.
0 <= len(words[i]) <= 100.
S and all words in words consist only of lowercase letters


Solution:   https://leetcode.com/submissions/detail/300392363/  beats 95.91% JS Submissions
            The main intuition here is to try to process the words S and current word in words array parallelly.
            so simple way to avoid increasing space complexity by persisting any kind of array data or character counts for later processing is get the character counts on fly,
            i.e. compare and update flags. Later check the flags and update the answer.
            The main tricky part is getting the condition to set the flag correctly. 
                Main reason being understand that if potentialWord flag is reset anytime even once, 
                then the word needs to be dumped, 
                even though no matter how many times potentialWord flag is set multiple times in the same word by different other characters.

 */

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    var ans = 0;
    for(var index in words){
        var word = words[index];
        var i=0, j=0;
        var potentialWord = false;
        var cnt1 = 0, cnt2 = 0;

        //DO basic check for blank S and blank word scenarios
        if(S.length==0 && word.length==0){
            ans++;
            continue;
        }else if(S.length==0 || word.length==0)
            continue;
        
        //Assuming both S and word contain some nonblank string continue processing each group.
        while(i<S.length && j<word.length){            
            if(S[i]==word[j]){
                cnt1 = 0, cnt2 = 0;
                var currChar = S[i];
                while(S[i]==currChar){
                    i++;
                    cnt1++;
                }
                while(word[j]==currChar){
                    j++;
                    cnt2++;
                }
                if(cnt1<cnt2 || (cnt1>cnt2 && cnt1<3)){
                    potentialWord = false;
                    break;
                }else if(cnt1>2)
                    potentialWord = true;
            }else break;
        }
        if(i==S.length && j==word.length && potentialWord)
            ans++;

    }
    
    return ans;
};

var main = () => {
    console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
    console.log(expressiveWords("heeellooo", ["", "hi", "helo"]));
    console.log(expressiveWords("", ["", "hi", "helo"]));
    console.log(expressiveWords("eeeewssssqqqqqnnnnnn",["eewssqqnn","eewwsqqn","eewwssqnn","ewwssqqnn","ewwssqqn","eewssqnn","ewsqqnn","eewwssqn"]));
};

main();