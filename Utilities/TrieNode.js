class TrieNode {
    constructor(ch) {
        this.links = new Map();
        this.val = ch || null;
    }

    containsKey(ch) {
        return this.links.has(ch);
    }

    get(ch) {
        return this.links.get(ch);
    }

    put(ch, trieNode) {
        trieNode.setVal(ch);
        return this.links.set(ch, trieNode);
    }

    setEnd() {
        this.end = true;
    }

    isEnd() {
        return this.end == true;
    }

    setVal(ch) {
        this.val = ch;
    }

    getVal() {
        return this.val;
    }
};

module.exports = TrieNode;