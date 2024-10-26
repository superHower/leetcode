// const nums = [10,9,2,5,3,7,101,18] // 4 解释：[x,x,2,5,x,7,x,18]
// const nums = [7,7,7,7,7,7,7]       // 1
const nums = [0,1,0,3,2,3]            // 4 解释： 【0,1,x,x,23】
console.log(lengthOfLIS(nums)) 

/**
 * 是递增？当前位置 最长子序列长度 = 当前位置  or  之前位置
                                  dp[i]          dp[j] + 1
*/                  
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1) // 到 i 的位置， 递增子序列的最大长度

  for (let i = 0; i < nums.length; i++) { 
    for (let j = 0; j < i; j++) {         // j 在 i 前面，以寻找递增
      if (nums[i] > nums[j] ) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
 
  return Math.max(...dp)
};


function lengthOfLIS(nums) {
  // 初始化备忘录数组
  const memo = new Array(nums.length).fill(null);
  let maxLength = 0;
  
  for (let i = 0; i < nums.length; i++) 
    maxLength = Math.max(maxLength, dfs(i));
  
  return maxLength;

  function dfs(i) {
    if (i === 0) return 1; // 只有一个元素的子序列
    if (memo[i])  return memo[i]; // 已经计算过，直接返回
    
    let maxLength = 1;
    for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i])  maxLength = Math.max(maxLength, dfs(j) + 1);
    }
    memo[i] = maxLength;
    return maxLength;
  }


}