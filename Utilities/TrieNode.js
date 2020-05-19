class TrieNode {
    constructor() {
        this.links = new Array(26);
        this.links.fill(null);
    }

    containsKey(ch) {
        return this.links[ch.charCodeAt(0) - this.aCharCode()] != null;
    }

    get(ch) {
        return this.links[ch.charCodeAt(0) - this.aCharCode()];
    }

    put(ch, trieNode) {
        return this.links[ch.charCodeAt(0) - this.aCharCode()] = trieNode;
    }

    setEnd() {
        this.end = true;
    }

    isEnd() {
        return this.end == true;
    }

    aCharCode() {
        return 97;
    }

};

module.exports = TrieNode;