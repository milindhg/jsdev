/* class QElement {
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority){
        var qElement = new QElement(element, priority);
        var contain = false;

    }
}

 */


class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
        this.top = 0;
    }
    
    parent = i => ((i + 1) >>> 1) - 1;
    left = i => (i << 1) + 1;
    right = i => (i + 1) << 1;
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[this.top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > this.top) {
            this._swap(this.top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[this.top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > this.top && this._greater(node, this.parent(node))) {
            this._swap(node, this.parent(node));
            node = this.parent(node);
        }
    }
    _siftDown() {
        let node = this.top;
        while (
            (this.left(node) < this.size() && this._greater(this.left(node), node)) ||
            (this.right(node) < this.size() && this._greater(this.right(node), node))
        ) {
            let maxChild = (this.right(node) < this.size() && this._greater(this.right(node), this.left(node))) ? this.right(node) : this.left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}


let main = () => {
    // Default comparison semantics
    const queue = new PriorityQueue();
    queue.push(10, 20, 30, 40, 50);
    console.log('Top:', queue.peek()); //=> 50
    console.log('Size:', queue.size()); //=> 5
    console.log('Contents:');
    while (!queue.isEmpty()) {
        console.log(queue.pop()); //=> 40, 30, 20, 10
    }

    // Pairwise comparison semantics
    var pairwiseQueue = new PriorityQueue((a, b) => a[1] > b[1]);
    pairwiseQueue.push(['low', 0], ['medium', 5], ['high', 10]);
    console.log('\nContents:');
    while (!pairwiseQueue.isEmpty()) {
        console.log(pairwiseQueue.pop()[0]); //=> 'high', 'medium', 'low'
    }

    // Pairwise comparison semantics
    pairwiseQueue = new PriorityQueue((a, b) => a[1] < b[1]);
    pairwiseQueue.push(['low', 0]);
    pairwiseQueue.push(['medium', 5]);
    pairwiseQueue.push(['high', 10]);
    console.log('\nContents:');
    while (!pairwiseQueue.isEmpty()) {
        console.log(pairwiseQueue.pop()[0]); //=> 'high', 'medium', 'low'
    }
};


module.exports = PriorityQueue;
// main();