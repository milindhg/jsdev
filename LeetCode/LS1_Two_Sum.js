/*
https://leetcode.com/problems/two-sum/
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function Entry( key, index ) {
	this.key = key;
	this.index = index;
}



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity: O(logn)
 */
var twoSum = function ( nums, target ) {
	var index1 = 0;
	var index2 = nums.length - 1;
	var entries = new Array( 0 );
	// attach index tags to each number
	for ( var i in nums ) {
		var entry = new Entry( nums[ i ], parseInt( i ) );
		entries.push( entry );
	}
	// console.log( entries );
	entries.sort( function ( a, b ) {
		return a.key - b.key;
	} );
	nums.sort( function ( a, b ) {
		return a - b;
	} );
	// console.log( entries );
	while ( index2 > index1 ) {
		var sum = nums[ index1 ] + nums[ index2 ];
		if ( sum < target ) {
			index1++;
		} else if ( sum > target ) {
			index2--;
		} else if ( sum == target ) {
			return [ entries[ index1 ].index, entries[ index2 ].index ];
		}
	}
	return [ -1, -1 ];
};

// console.log( twoSum( [ 2, 7, 11, 15 ], 9 ) );
// console.log( twoSum( [ 3, 2, 4 ], 6 ) );
// console.log( twoSum( [ 0,3, 2, 4,0 ], 0 ) );

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity: O(n)
 */
var twoSumEfficient = function ( nums, target ) {
	var index1 = 0;
	var index2 = nums.length - 1;
	var entries = {};
	// attach index tags to each number
	for ( var i in nums ) {
		var complement = target - nums[ i ];
        // console.log(complement);
        // console.log(entries[complement]);
		if ( entries[complement]>-1 ) {
			return [ entries[ complement ], parseInt( i ) ];
		}
		entries[ nums[ i ] ] = parseInt( i );
        // console.log(entries);
	}
    return [-1,-1];
};


console.log( twoSumEfficient( [ 0, 3, 2, 4, 0 ], 0 ) );
