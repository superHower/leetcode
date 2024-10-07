// const nums = [10,9,2,5,3,7,101,18] // 4 解释：[x,x,2,5,x,7,x,18]
// const nums = [7,7,7,7,7,7,7]       // 1
const nums = [0,1,0,3,2,3]            // 4 解释： 【0,1,x,x,23】
console.log(lengthOfLIS(nums)) 

function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1) // 前i个中，递增子序列，最大长度

  for (let i = 0; i < nums.length; i++) { // i遍历
    for (let j = 0; j < i; j++) {         // j保证在i前遍历
      if (nums[i] - nums[j] > 0) {        // 递增
        console.log(dp, nums[i], nums[j], dp[i], (dp[j]+1))
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
 
  return Math.max(...dp)
};
/*
[ 0, 1, 0, 3, 2, 3 ] 表示前i个元素中最长递增子序列的长度

[ 1, 1, 1, 1, 1, 1 ] dp[i] = Math.max(dp[i], dp[j] + 1)

[ 1, 1, 1, 1, 1, 1 ] 1 0 1 2

[ 1, 2, 1, 1, 1, 1 ] 3 0 1 2
[ 1, 2, 1, 2, 1, 1 ] 3 1 2 3
[ 1, 2, 1, 3, 1, 1 ] 3 0 3 2

[ 1, 2, 1, 3, 1, 1 ] 2 0 1 2
[ 1, 2, 1, 3, 2, 1 ] 2 1 2 3
[ 1, 2, 1, 3, 3, 1 ] 2 0 3 2

[ 1, 2, 1, 3, 3, 1 ] 3 0 1 2
[ 1, 2, 1, 3, 3, 2 ] 3 1 2 3
[ 1, 2, 1, 3, 3, 3 ] 3 0 3 2
[ 1, 2, 1, 3, 3, 3 ] 3 2 3 4
 */

