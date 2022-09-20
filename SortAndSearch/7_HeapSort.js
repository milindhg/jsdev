
/* 

Heap sort: A heap sort algorithm is a sorting technique that leans on binary heap data structures. Because we know that heaps must always follow a specific order, we can leverage that property and use that to find the largest, maximum value element, and sequentially sort elements by selecting the root node of a heap, and adding it to the end of the array.
Time complexity: O(nlogn)
Space complexity: in-place
Stability: unstable
internal/external: internal
Recursive/non-recursive: non-recursive
Comparison sort: comparison

 */


function heapSort(array) {
    // Build our max heap.
    buildMaxHeap(array);

    // Find last element.
    lastElement = array.length - 1;

    // Continue heap sorting until we have
    // just one element left in the array.
    while (lastElement > 0) {
        swap(array, 0, lastElement);

        heapify(array, 0, lastElement);

        lastElement -= 1
    }
};

function buildMaxHeap(array) {
    var i;
    i = array.length / 2 - 1;
    i = Math.floor(i);

    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
        heapify(array, i, array.length);
        i -= 1;
    }
};

function heapify(heap, i, max) {
    var index, leftChild, rightChild;

    while (i < max) {
        index = i;

        leftChild = 2 * i + 1;
        rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        if (index == i) {
            return;
        }

        swap(heap, i, index);

        i = index;
    }
};

function swap(array, firstItemIndex, lastItemInde) {
    var tmp = array[firstItemIndex];

    // Swap first and last items in the array.
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
};

var main = function () {
    let input = [5, 4, 3, 2, 1, 5];
    console.log(input);
    heapSort(input)
    console.log(input);
};

main();