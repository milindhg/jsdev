/* 
https://leetcode.com/problems/count-sorted-vowel-strings/

1641. Count Sorted Vowel Strings
Medium

3042

66

Add to List

Share
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
Example 3:

Input: n = 33
Output: 66045
 

Constraints:

1 <= n <= 50 
Accepted
140,532
Submissions
181,385



Solution:   https://leetcode.com/submissions/detail/780446680/    beats 82.28% JS Submissions.
            The idea is very simple. Create a matrix of size NX5 i.e. n rows with 5 columns each.
            For each vovel we basically prepare the number output of number of possible ways string can be prepared with the given condition. - (number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted)
            Step 1: //Prepare first row of matrix. i.e. for (n=1)
            Step 2: //Prepare subsequent rows of matrix. i.e. for (n=2 or more)
            Step 3: //Finally add the numbers in the last row to get the answer.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let mem = [];
    //Prepare first row of matrix. i.e. for (n=1)
    let arr = [];
    arr.unshift(1);
    arr.unshift(1);
    arr.unshift(1);
    arr.unshift(1);
    arr.unshift(1);
    mem.push(arr);

    //Prepare subsequent rows of matrix. i.e. for (n=2 or more)
    for (let i = 1; i < n; i++) {
        let adder = 0;
        arr = [];
        for (let j = 5; j > 0; j--) {
            adder += mem[i - 1][j - 1];
            arr.unshift(adder);
        }
        mem.push(arr);
    }

    //Finally add the numbers in the last row to get the answer.
    i = n - 1;
    let ans = 0;
    mem[i].forEach(x => {
        ans+=x;
    });
    return ans;
};

var main = () => {
    console.log(countVowelStrings(1));
    console.log(countVowelStrings(2));
    console.log(countVowelStrings(3));
    console.log(countVowelStrings(33));
};

main();