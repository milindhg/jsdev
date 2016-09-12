// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string, find the length of the longest substring without repeating characters.

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
