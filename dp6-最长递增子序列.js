/*
300. 最长递增子序列

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的
子序列
。

*/

var lengthOfLIS = function(nums) {
  const n = nums.length
  const dp = new Array(n).fill(1) // 表示前i个元素中最长递增子序列的长度
  for (let i = 0; i < n; i++) { // 当前元素
    for (let j = 0; j < i; j++) { // 前一个元素
      if (nums[i] - nums[j] > 0) { // 递增
        console.log('当前元素', nums[i] + ', 前一个元素', nums[j] + ', 前一个元素的最长递增子序列长度', dp[j])
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)


};


const nums = [10,9,2,5,3,7,101,18]
// const nums = [0,1,0,3,2,3]
// const nums = [7,7,7,7,7,7,7]
console.log(lengthOfLIS(nums)) // 4


/*
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1

*/