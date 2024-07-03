/*
242. 有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  // 用mapS存储s中每个字符出现的次数
  let mapS = new Map();
  for (let i = 0; i < s.length; i++) {
      if (mapS.has(s[i])) {
          mapS.set(s[i], mapS.get(s[i]) + 1);
      } else {
          mapS.set(s[i], 1);
      }
  }
  // 遍历t，判断mapS中是否有对应字符，有则将对应字符的次数减1
  for (let i = 0; i < t.length; i++) {
      if (mapS.has(t[i]) && mapS.get(t[i]) > 0) {
          mapS.set(t[i], mapS.get(t[i]) - 1);
      } else {
          return false;
      }
  }
  return true;

};



// const s = "anagram", t = "nagaram";
const s = "rat", t = "car";
console.log(isAnagram(s, t)); // true



/*
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 
*/