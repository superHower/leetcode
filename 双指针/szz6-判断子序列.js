/*
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

*/
const s = "abc", t = "ahbgdc"
// const s = "axc", t = "ahbgdc"
isSubsequence(s, t)
var isSubsequence = function(s, t) {
  let n = s.length, m = t.length;
  let i = 0, j = 0;
  while (i < n && j < m) {
      if (s[i] == t[j]) {
          i++;
      }
      j++;
  }
  return i == n;
};


