
/* 

Merge sort: The quicksort algorithm is a sorting algorithm that sorts a collection by choosing a pivot point, and partitioning the collection around the pivot, so that elements smaller than the pivot are before it, and elements larger than the pivot are after it. It continues to choose a pivot point and break down the collection into single-element lists, before combing them back together to form one sorted list.
Time complexity: O(nlogn)
Space complexity: in-place
Stability: unstable
internal/external: internal
Recursive/non-recursive: recursive
Comparison sort: comparison

 */

var quickSort = function (input, leftIndex, rightIndex) {
    let pivotIndex;
    if (input.length > 1) {
        pivotIndex = partition(input, leftIndex, rightIndex);

        if (leftIndex < pivotIndex - 1)
            quickSort(input, leftIndex, pivotIndex - 1);

        if (pivotIndex < rightIndex)
            quickSort(input, pivotIndex, rightIndex);
    }
    return input;
}

var partition = function (items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let l = left;
    let r = right;

    while (l <= r) {
        while (items[l] < pivot)
            l++;

        while (items[r] > pivot)
            r--;

        if (l <= r) {
            //swap items at l and r
            var temp = items[l];
            items[l] = items[r];
            items[r] = temp;

            l++;
            r--;
        }
    }

    return l;
}

var main = function () {
    let input = [5, 4, 3, 2, 1];
    console.log(input);
    console.log(quickSort(input, 0, input.length - 1));
};

main();