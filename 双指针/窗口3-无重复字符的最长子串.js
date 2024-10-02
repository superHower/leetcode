// const s = "abcabcbb"   //  3 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
const s = "bbbbb"   //  1 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// const s = "pwwkew"   // 3解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。  请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
console.log(lengthOfLongestSubstring(s))

function lengthOfLongestSubstring(s) {
     let max = 0, len = s.length, right = 0;
     const set = new Set(); // 用集合，防止重复
     
     for (let left = 0; left < len; left++) {
         while(right < len && !set.has(s[right]))  set.add(s[right++]); // set没有，就放进去

         max = Math.max(max, right - left);
         set.delete(s[left]);
     }
     return max;
}
