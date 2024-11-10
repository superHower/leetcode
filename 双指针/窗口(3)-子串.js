/**
 * 1. 无重复的最长子串
 * 2. 找字符串的 所有 字母异位词
 * 3. 最小覆盖 子串
 * --------------------------------------------------
 *    for (let right = 0; right < s.length; right++) {
 *      while ( s[right]怎么怎么样 )) {
 *          s[left++]
 *      }
 *    }
 */

// 【无重复的最长 子串】
const s = "wspwwkew"   // 3 解释: 子串是 "wke"，长度为 3。注意，"pwke" 是子序列，不是子串。
/**
 * 
 * 去重 -》 
 */
function lengthOfLongestSubstring(s) {
    let set = new Set(); // 去重
    let max = 0, left = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {// 异常：重复了 ->  最左边删除；左移
            set.delete(s[left++]);
        }
        set.add(s[right]);         // 正常情况 -> 从右边放入

        max = Math.max(max, right - left + 1); // 更新答案
    }
    return max;
}

// 【找字符串的 所有 字母异位词】
const s1 = "cbaebabacd", p = "abc"  // [0,6]  解释: "abc" 的异位词： 0处 的"cba" |  6处 的"bac"
// const s = "abab", p = "ab"   // [0,1,2]      解释: "ab" 的异位词： 0 的"ab" | 1 的"ba" | 2 的 "ab" 
function findAnagrams(s, p) {
  let ans=[], left=0
  let arr=new Array(26).fill(0)

  for(let s of p) arr[ cIndex(s) ]++ // arr是 p = 'abc'的 ASCLL个数隐射

  for(let right=0; right < s.length; right++){   //  s = "cbaebabacd", p = "abc"
      arr[ cIndex(s[right]) ]--
      console.log(arr)
      while(arr[ cIndex(s[right]) ] < 0) {
        arr[ cIndex(s[left++]) ]++ 
      }

      if(right-left+1 >= p.length)  ans.push(left) // 找到符合的子串
  }
  return ans

  function cIndex(s) {
    return s.charCodeAt()-'a'.charCodeAt()
  }
};

// 【最小覆盖 子串】

const s2 = "ADOBECODEBANC", t = "ABC" // "BANC" 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// const s = "a", t = "aa"              // "" 解释: t 中两个字符 'a' 均应包含在 s 的子串中, 无最小覆盖字串
function isCovered(cntS, cntT) {
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      if (cntS[i] < cntT[i]) {
          return false;
      }
  }
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
      if (cntS[i] < cntT[i]) {
          return false;
      }
  }
  return true;
}

function minWindow(s, t) {
  const m = s.length;
  let ansLeft = -1, ansRight = m;
  const cntS = Array(128).fill(0); // s 子串字母的出现次数
  const cntT = Array(128).fill(0); // t 中字母的出现次数
  for (const c of t) {
      cntT[c.codePointAt(0)]++;
  }

  let left = 0;
  for (let right = 0; right < m; right++) { // 移动子串右端点
      cntS[s[right].codePointAt(0)]++; // 右端点字母移入子串
      while (isCovered(cntS, cntT)) { // 涵盖
          if (right - left < ansRight - ansLeft) { // 找到更短的子串
              ansLeft = left; // 记录此时的左右端点
              ansRight = right;
          }
          cntS[s[left].codePointAt(0)]--; // 左端点字母移出子串
          left++;
      }
  }
  return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};
