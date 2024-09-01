// 测试代码
const testStrs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(testStrs)); // 输出: "fl"

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  
  // 初始化 dp 数组
  let dp = Array.from({ length: strs.length }, () => Array(strs[0].length).fill(0));
  
  // 填充 dp 数组
  for (let i = 0; i < strs.length; i++) {
      for (let j = 0; j < Math.min(strs[i].length, strs[0].length); j++) {
          if (strs[i][j] === strs[0][j]) {
              dp[i][j] = j + 1;
          } else {
              break;
          }
      }
  }
  
  // 找到最长公共前缀的长度
  let maxLength = 0;
  for (let i = 0; i < dp.length; i++) {
      maxLength = Math.max(maxLength, dp[i][dp[i].length - 1]);
  }
  
  // 构造最长公共前缀
  return strs[0].substring(0, maxLength);
}

