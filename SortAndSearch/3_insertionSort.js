
/* 

Insertion sort: Maintains a sublist of the collection that it is initially given as the "sorted sublist". It iterates through a collection and one by one inserts elements into their correct spots in the sorted sublist. Works on one key at a time.
Time complexity: O(n^2)
Space complexity: in-place O(1)
Stability: stable
internal/external: internal
Recursive/non-recursive: non-recursive
Comparison sort: comparison

 */

var insertionSort = function (input) {
    for (let i = 0; i < input.length; i++) {
        let key = input[i];
        for (var j = i; j > 0 && input[j - 1] > key; j--) {
            input[j] = input[j - 1];
        }
        input[j] = key;
    }
    return input;
}

var main = function () {
    let input = [5, 4, 3, 2, 1];
    console.log(input);
    console.log(insertionSort(input));
};

main();