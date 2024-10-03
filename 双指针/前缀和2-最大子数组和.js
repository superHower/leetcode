const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   //  6   解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// const nums = [5,4,-1,7,8]  // 23
// const nums = [1]    // 1



function maxSubArray(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

function maxSubArray(nums) {
  let ans = nums[0];
  let sum = 0;
  for (const n of nums) {
    if (sum > 0) sum += n;// 满足：  前缀和
    else         sum = n; // 不满足，直接回到那个位置
    ans = Math.max(ans, sum);
  }
  return ans;
};

