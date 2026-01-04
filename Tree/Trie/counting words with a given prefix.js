
// ! count the number of words that start with the given prefix.
var prefixCount = function(words, pref) {
    let count=0;
    for(let i=0; i<words.length; i++){
        if(words[i].startsWith(pref)){
            count++
        }
    }
    return count
};


// approach 2 using trie

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.count = 0; // To keep track of the number of words passing through this node
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
        curr.children[word[i]].count = 1; // First time this character is added
      }
    else{
        curr.children[word[i]].count += 1; // Increment count for existing character
    }
      curr = curr.children[word[i]];
    }
    curr.isEndOfWord = true;
    return this.root;
  }

  search(word) {
    let curr = this.root;
    let prefixCount = 0;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!curr.children[char]) {
        return 0;
      }

      curr = curr.children[char];
        prefixCount = curr.count;
    }
    return prefixCount;
  }
}

var prefixCount = function(words, pref) {
   let trie=new Trie()

//    ds build--
for(let i=0; i<words.length; i++){
    trie.insert(words[i])
}
return trie.search(pref)
};