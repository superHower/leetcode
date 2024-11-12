
// 应用情景，例如自动补全和拼写检查。
/**
 输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]

输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
 */

var Trie = function() {
  this.children = {};
};

Trie.prototype.insert = function(word) {
  let node = this.children;
  for (const ch of word) {
      if (!node[ch]) {
          node[ch] = {};
      }
      node = node[ch];
  }
  node.isEnd = true;
};

Trie.prototype.searchPrefix = function(prefix) {
  let node = this.children;
  for (const ch of prefix) {
      if (!node[ch]) {
          return false;
      }
      node = node[ch];
  }
  return node;
}

Trie.prototype.search = function(word) {
  const node = this.searchPrefix(word);
  return node !== undefined && node.isEnd !== undefined;
};

Trie.prototype.startsWith = function(prefix) {
  return this.searchPrefix(prefix);
};
