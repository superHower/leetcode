// const s = "abc", t = "ahbgdc" // true
const s = "axc", t = "ahbgdc" // false
console.log(isSubsequence(s, t))

function isSubsequence(s, t) {
  let slow = 0

  for (let fast = 0 ; fast < t.length; fast++) { // 快的一直走
    if (slow < s.length && s[slow] == t[fast]) slow++; //慢的，满足条件才走
  }
  return slow == s.length;
};

