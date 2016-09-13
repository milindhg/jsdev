/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function ( s ) {
	var queue = new Array( 0 );
	var hm = {};
	var maxlen = 0;
	for ( var index in s ) {
		if ( hm[ s[ index ] ] ) {
			//console.log('present in hm');
			var item = queue[ 0 ];
			queue.shift();
			delete hm[ item ];
			while ( item != s[ index ] && queue.length > 0 ) {
				item = queue[ 0 ];
				queue.shift();
				delete hm[ item ];
			}
		}
		queue.push( s[ index ] );
		hm[ s[ index ] ] = index;
        console.log( queue.length, hm, queue );
		if ( queue.length > maxlen ) {
			maxlen = queue.length;
		}
	}
	return maxlen;
};

console.log( lengthOfLongestSubstring( 'tmmzuxt' ) );
