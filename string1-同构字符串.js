/*
205. 同构字符串
给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。
不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
*/

 
 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  
  let mapST = {};
  let mapTS = {};
  
  for (let i = 0; i < s.length; i++) {
      let charS = s[i];
      let charT = t[i];
      
      if (!mapST[charS])  mapST[charS] = charT;
      
      if (!mapTS[charT])  mapTS[charT] = charS;
      
      if (mapST[charS] !== charT || mapTS[charT] !== charS) {
          return false;
      }
  }
  
  return true;
};


const s = "egg", t = "add";
const s1 = "foo", t1 = "bar";
const s2 = "paper", t2 = "title";

console.log(isIsomorphic(s1, t1)); // true


 /*
示例 1:

输入：s = "egg", t = "add"
输出：true
示例 2：

输入：s = "foo", t = "bar"
输出：false
示例 3：

输入：s = "paper", t = "title"
输出：true

 */