// const s = "abc", t = "ahbgdc" // true
const s = "axc", t = "ahbgdc" // false
console.log(isSubsequence(s, t))

function isSubsequence(s, t) {
  let n = s.length, m = t.length;
  let slow = 0

  for (let fast = 0 ;  fast < m; fast++) {
    if (slow < n && s[slow] == t[fast]) slow++;
  }
  return slow == n;
};

