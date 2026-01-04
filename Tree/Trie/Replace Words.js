// ! Replace Words

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!curr.children[word[i]]) {
        curr.children[word[i]] = new TrieNode();
      }
      curr = curr.children[word[i]];
    }
    curr.isEndOfWord = true;
    return this.root;
  }

  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!curr.children[char]) {
        return word;
      }

      curr = curr.children[char];

      if (curr.isEndOfWord) {
        return word.slice(0, i + 1);
      }
    }
    return word;
  }
}

var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();
  for (const word of dictionary) {
    trie.insert(word);
  }
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = trie.search(words[i]);
  }
  return words.join(" ");
};
