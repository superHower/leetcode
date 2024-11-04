const s = "ADOBECODEBANC", t = "ABC" // "BANC" 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// const s = "a", t = "aa" // "" 解释: t 中两个字符 'a' 均应包含在 s 的子串中, 无最小覆盖字串

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
