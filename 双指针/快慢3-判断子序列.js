// const s = "abc", t = "ahbgdc" // true
const s = "axc", t = "ahbgdc" // false
console.log(isSubsequence(s, t))

function isSubsequence(s, t) {
  let n = s.length, m = t.length;
  let slow = 0, fast = 0;
  while (slow < n && fast < m) {
      if (s[slow] == t[fast])  slow++;
      fast++;
  }
  return slow == n;
};

