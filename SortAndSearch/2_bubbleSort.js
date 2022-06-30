
/* 

Selection sort: Walks through a collection and compares two elements at a time. If the elements are out of order, it swaps them. It continues to swap out-of-order elements until the entire collection is sorted.  
Time complexity: O(n^2)
Space complexity: in-place O(1)
Stability: stable
internal/external: internal
Recursive/non-recursive: non-recursive
Comparison sort: comparison

 */

var bubbleSort = function(input) {
    for(let i = 0; i<input.length; i++){
        for (let j = 0; j<input.length - i; j++){
            if(input[j] > input[j+1]){
                let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    return input;
}

var main = function () {
    let input = [5, 4, 3, 2, 1];
    console.log(input);
    console.log(bubbleSort(input));
};

main();