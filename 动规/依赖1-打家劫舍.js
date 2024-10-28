const nums = [2,7,9,3,1, 2] // 13
console.log(rob(nums))
/*
      屋子累计最大金额 = { 不偷当前屋子   or     偷当前屋子             }
                            [前屋子]         [前前屋子] + 这个屋子金额
*/
function rob(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let dp = new Array(n).fill(0);  // 到第 i 间房屋，能偷的最大金额
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1],  dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};



/*
示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
     

示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

*/