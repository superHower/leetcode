/*
290. 单词规律
给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 */

// const pattern = "abba", s = "dog cat cat dog";
// const pattern = "abba", s = "dog cat cat fish";
// const pattern = "aaaa", s = "dog cat cat dog";
const pattern = "abca", s = "dog cat cat dog"
console.log(wordPattern(pattern, s)); 


/**
 * 遍历pattern
 *   map中有pattern : 判断 是否匹配
 *   map中无pattern : 判断 是否有重 : 不重 : 放进map
 */
function wordPattern(pattern, s) {
  let map = new Map();
  let words = s.split(' ');
  if (pattern.length !== words.length) {
      return false;
  }
  for (let i = 0; i < pattern.length; i++) {
      if (map.has(pattern[i])) {
          // 判断 是否匹配
          if (map.get(pattern[i]) !== words[i]) return false;
      } else {
        console.log(map)
          // 判断map是否有重复的value
          if (Array.from(map.values()).includes(words[i])) return false;
          map.set(pattern[i], words[i]);
      }
    //   console.log(map)
  }
  return true;

};






/*
示例1:

输入: pattern = "abba", s = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", s = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", s = "dog cat cat dog"
输出: false
 
*/