/*
Determine whether an integer is a palindrome. Do this without extra space.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.

Solution: Now we can solve this problem simply and efficiently by converting the number into string and then having 2 pointers at front and end.
However since the problem says no extra space, we also cannot convert to string or do recursion since recursion will also create extra stack space.
Best way then is to do / and % operations to compare first and last digit every time until the number is not equal to zero.

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(typeof(x)!=typeof(1)){
	return false;
    }
    if (x < 0) {
	return false;
    }
    if (x < 10) {
	return true;
    }
    var divider = 1;
    while (Math.floor(x / divider) >= 10) {
	divider *= 10;
    }

    var front, end;
    while (x > 0) {
	front = Math.floor(x / divider);
	end = x % 10;
	if (front != end) {
	    return false;
	}
	x = Math.floor((x % divider) / 10);
	divider = Math.floor(divider / 100);
    }
    
    return true;
};

var main = function() {
    var inputnumber = 121;
    console.log(isPalindrome(inputnumber));
}

main();