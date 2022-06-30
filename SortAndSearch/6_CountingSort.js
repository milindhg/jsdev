
/* 

Counting sort: Counting sort takes advantage of situations when we know the range of the elements that must be sorted and we know that the elements are all integers. The algorithm counts the number of unique objectsn and uses some math to determine their sorted order.
Time complexity: O(n+k) where n is the number of elements and k is the range of items in the array. Works best if k<n
Space complexity: out-of-place
Stability: stable
internal/external: internal
Recursive/non-recursive: non-recursive
Comparison sort: non-comparison

 */

var countingSort = function (input, minimumValue, maximumValue) {
    let i;
    let z = 0;
    let count = [];

    //initialize count array with 0.
    for (i = minimumValue; i <= maximumValue; i++) {
        count[i] = 0;
    }

    //Build up the index count array
    for (i = 0; i < input.length; i++) {
        count[input[i]]++;
    }

    //modify the array and move elements into their sorted location
    for (i = minimumValue; i <= maximumValue; i++) {
        while (count[i]-- > 0) {
            input[z++] = i;
        }
    }

    return input;

};

var main = function () {
    let input = [5, 4, 3, 2, 1, 5];
    console.log(input);
    console.log(countingSort(input, 1, 5));
};

main();