
/* 

Merge sort: Divide and Conquer algorithm. Recursion for divide. and mainly merge method for conquer or combine.
Time complexity: O(nlogn)
Space complexity: out-of-place
Stability: stable
internal/external: external
Recursive/non-recursive: recursive
Comparison sort: comparison

 */

var mergeSort = function (input) {
    if (input.length == 1)
        return input;     //Base case

    let midpoint = Math.floor(input.length / 2)
    let leftHalfInput = mergeSort(input.slice(0, midpoint));
    let rightHalfInput = mergeSort(input.slice(midpoint));

    let result = merge(leftHalfInput, rightHalfInput);

    return result;
}

var merge = function (leftHalfInput, rightHalfInput) {
    let result = [];
    let i = 0;
    while (leftHalfInput.length > 0 && rightHalfInput.length > 0) {
        if (leftHalfInput[0] < rightHalfInput[0]) {
            result.push(leftHalfInput.shift());     //shift function is like pop from beginning of array.
        } else {
            result.push(rightHalfInput.shift());
        }
    }

    while (leftHalfInput.length > 0)
        result.push(leftHalfInput.shift());

    while (rightHalfInput.length > 0)
        result.push(rightHalfInput.shift());

    return result;
}

var main = function () {
    let input = [5, 4, 3, 2, 1];
    console.log(input);
    console.log(mergeSort(input));
};

main();