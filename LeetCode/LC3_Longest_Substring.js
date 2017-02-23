/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*
Solution:   https://leetcode.com/submissions/detail/74045807/
            1 approach is to store the first letter in the queue. 
            Then uptil that letter is found again, keep storing the characters in hashmap. If any character is found again, 

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var queue = new Array(0);
    var hm = {};
    var maxlen = 0;
    console.log('At the start: ' + 'HashMap: ' + JSON.stringify(hm),
            'Queue Length: ' + queue.length, 'Queue Content: ' + queue);

    for ( var index in s) {
        if (hm[s[index]]) {
            // console.log('present in hm');
            var item = queue[0];
            queue.shift();
            delete hm[item];
            while (item != s[index] && queue.length > 0) {
                item = queue[0];
                queue.shift();
                delete hm[item];
            }
        }
        queue.push(s[index]);
        hm[s[index]] = index;
        console.log('HashMap: ' + JSON.stringify(hm), 'Queue Length: '
                + queue.length, 'Queue Content: ' + queue);
        if (queue.length > maxlen) {
            maxlen = queue.length;
        }
    }
    return maxlen;
};

console.log(lengthOfLongestSubstring('tmmzuxtu'));
