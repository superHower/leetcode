const s = "abcabcbb"   //  3 解释: 子串是 "abc"，长度为 3。
// const s = "bbbbb"   //  1 解释: 子串是 "b"，长度为 1。
// const s = "pwwkew"   // 3 解释: 子串是 "wke"，长度为 3。注意，"pwke" 是子序列，不是子串。
console.log(lengthOfLongestSubstring(s))

function lengthOfLongestSubstring(s) {
    let set = new Set(); // 去重
    let max = 0, left = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {// 异常：重复了：则缩短左边界，同时从set集合出元素
            set.delete(s[left++]);
        }

        set.add(s[right]);         // 正常情况
        // console.log(set)
        max = Math.max(max, right - left + 1);
    }
    return max;
}
