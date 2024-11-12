const nums = [1,5,11,5] // true  解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// const nums = [1,2,3,5] // false  解释：数组不能分割成两个元素和相等的子集。
console.log(canPartition(nums))

/**
 * 找max 和 sum
 * 
 * (sum是奇数 或 half < max) 一定不能分割
 * 
 * 
 */

function canPartition(nums) {
  let sum = 0, max = -Infinity
  for (let num of nums) {
      max = Math.max(max, num)
      sum += num
  }
  const half = sum / 2
  if (sum % 2 == 1 || half < max) return false

  const dp = new Array(half + 1).fill(false)
  dp[0] = true

  for (let num of nums) {
      for (let j = half; j >= num; j--) {
          dp[j] = dp[j] || dp[j - num]
      }
  }

  return dp[half]
}
