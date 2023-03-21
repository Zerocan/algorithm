class TrieNode {
  constructor(data) {
    this.data = data;
    this.child = new Array(26);
    this.isEndingChar = false;
  }
}

class TrieTree {
  constructor(data) {
    this.root = new TrieNode('/');
  }

  // 往Trie树中插入一个字符串
  insert(text) {
    let node = this.root;
    for (let char of text) {
      let index = char.charCodeAt() - 'a'.charCodeAt();
      if (!node.child[index]) {
        node.child[index] = new TrieNode(char);
      }

      node = node.child[index];
    }

    node.isEndingChar = true;
  }

  // 在Trie树中查找一个字符串
  find (text) {
    let node = this.root;

    for (let char of text) {
      let index = char.charCodeAt() - 'a'.charCodeAt();
      if (node.child[index]) {
        node = node.child[index];
      } else {
        return false;
      }
    }

    return node.isEndingChar;
  }
}

const tree = new TrieTree();
const strs = ["how", "hi", "her", "hello", "so", "see"];
for (let str of strs) {
  tree.insert(str);
}

for (let str of strs) {
  console.log(tree.find(str));
}

console.log(tree.find('world'));