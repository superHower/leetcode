// 测试代码
const testStrs = ["flower", "flow", "flight"]; // 输出: "fl"
console.log(longestCommonPrefix(testStrs)); 

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  
  // 初始化 dp 二维数组
  let dp = Array.from({ length: strs.length }, () => Array(strs[0].length).fill(0));
  
  // 填充 dp 数组
  for (let i = 0; i < strs.length; i++) { // ["flower", "flow", "flight"]
      for (let j = 0; j < Math.min(strs[i].length, strs[0].length); j++) { // "flower"
          if (strs[i][j] === strs[0][j]) { // 每个字符串都和第一个字符串比较
              dp[i][j] = j + 1;
          } else {
              break;
          }
      }
  }
  console.log(dp)
  // 找到最长公共前缀的长度
  let maxLength = 0;
  for (let i = 0; i < dp.length; i++) {
      maxLength = Math.max(maxLength, dp[i][dp[i].length - 1]);
  }
  
  // 构造最长公共前缀
  return strs[0].substring(0, maxLength);
}
/*
[ 
  [ 1, 2, 3, 4, 5, 6 ], 
  [ 1, 2, 3, 4, 0, 0 ], 
  [ 1, 2, 0, 0, 0, 0 ] 
]
*/