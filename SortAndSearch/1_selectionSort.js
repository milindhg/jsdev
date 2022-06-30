
/* 

Selection sort: Finds the smallest element in the list or collection and puts it at the beginning of the new "sorted" list. It continues to find the smallest possible element, then adds it to the new "sorted" list of elements.
Time complexity: O(n^2)
Space complexity: in-place O(1)
Stability: unstable
internal/external: internal
Recursive/non-recursive: non-recursive
Comparison sort: comparison

 */
var selectionSort = function (input) {
    for (let i = 0; i < input.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[i]) {
                minIndex = j;
            }

            //swap
            if (minIndex != i) {
                var temp = input[i];
                input[i] = input[minIndex];
                input[minIndex] = temp;
            }
        }
    }
    return input;
}


var main = function () {
    let input = [5, 4, 3, 2, 1];
    console.log(input);
    console.log(selectionSort(input));
};

main();