/**
 * 窗口
 * ----------------------------------------------------------------------------------------------------------
 * 1. 无重复的最长子串             const s = "wspwwkew"   // 3 解释: 子串是 "wke"，长度为 3。注意，"pwke" 是子序列，不是子串。
 * 2. 找字符串的 所有 字母异位词   const s1 = "cbaebabacd", p = "abc"  // [0,6]  解释: "abc" 的异位词： 0处 的"cba" |  6处 的"bac"
 * 3. 最小覆盖 子串 [HARD]         const s2 = "ADOBECODEBANC", t = "ABC" // "BANC" 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 *-----------------------------------------------------------------------------------------------------------
 *    for (let right = 0; right < s.length; right++) {
 *      while ( s[right]怎么怎么样 )) {
 *          s[left++]
 *      }
 *    }
 *----------------------------------------------------------------------------------------------------------- */


// 【无重复的最长 子串】
const s = "wspwwkew"   // 3 解释: 子串是 "wke"，长度为 3。注意，"pwke" 是子序列，不是子串。
/**
 * 容器：set
 * s[right] 一旦和set重复，就让set删到不重复为止
 */
console.log(lengthOfLongestSubstring(s))
function lengthOfLongestSubstring(s) {
    let set = new Set(); // 去重
    let max = 0, left = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {// 一旦和set重复，就让set删到不重复为止
            set.delete(s[left++]);
        }
        set.add(s[right]);

        max = Math.max(max, right - left + 1); // 更新答案
        console.log(set)
    }
    return max;
}

// 【找字符串的 所有 字母异位词】
const s1 = "cbaebabacd", p = "abc"  // [0,6]  解释: "abc" 的异位词： 0处 的"cba" |  6处 的"bac"
/**
 * 不定长 滑动窗口
 * 0. cIndex('a') 表示 a的ASCLL值，也就是代表 a
 * 1. 统计 p 的每种字母的出现次数
 * 
 */
console.log("输出", findAnagrams(s1, p))

function findAnagrams(s, p) {
    const ans = [];
    const cnt = new Array(6).fill(0); 
    for (const c of p) cnt[ cIndex(c) ]++; // 统计 p 的每种字母的出现次数
    
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let r = cIndex(s[right])
        cnt[r]--; // 右端点字母 进入窗口
        while (cnt[r] < 0) { // 第二次碰见字母r 或者 r不是p中的字母
            cnt[cIndex(s[left++])]++; // 左端点字母l 离开窗口 --> 移动到右端点后面
        }
        if (right - left + 1 === p.length) { // s' 和 p 的每种字母的出现次数都相同
            ans.push(left); // s' 左端点下标加入答案
        }
        console.log("输出", cnt, right, left)
    }
    return ans;

    function cIndex(s) {
      return s.charCodeAt()-'a'.charCodeAt()
    }
};

// 【最小覆盖 子串】（hard）

const s2 = "ADOBECODEBANC", t = "ABC" // "BANC" 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// const s = "a", t = "aa"              // "" 解释: t 中两个字符 'a' 均应包含在 s 的子串中, 无最小覆盖字串

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
};


//

/*
c b a e b a b a c d
#                   11000 
L R                 10000
L   R               00000   找到了异位词
L     R             0000-1  遇到 非p中字母 --> L移到R后
      R L           11100
        #           10100
        L R         00100 
        L   R       0-1000  p中字母重复了 --》 L后移一位
          L R       00100  
          L   R     -10000  p中字母重复了 --》 L后移一位
           L  R     00100
           L    R   00000  找到了异位词
           L      R 000-10 遇到 非p中字母 --> L移到R后
                  R L
                
*/