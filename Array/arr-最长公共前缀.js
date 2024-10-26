// 测试代码
const testStrs = ["flower", "flow", "flight"]; // 输出: "fl"
console.log(longestCommonPrefix(testStrs)); 

/**
 * 遍历  str数组
 * 找 他 公共前缀 的最长的位置
 * 
 */

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    strs.sort((a, b) => a.length - b.length); // 排序，从最短的开始
    let firstStr = strs[0];
    let minIndex = firstStr.length
  
    for (let s of strs) {

      let i=0 // 使用i来寻找目标位置
      for(; i<firstStr.length && i<s.length; i++) { 
        if (firstStr[i] !== s[i]) minIndex = Math.min(minIndex, i)
      }
    }
  
    return firstStr.substring(0, minIndex);
  }
