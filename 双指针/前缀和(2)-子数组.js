/**
 * 1. 最大子数组和
 * 2. 和为K的子数组
 */

// 【最大子数组和】
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   //  6   解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// const nums = [5,4,-1,7,8]  // 23
function maxSubArray(nums) {
  let pre = 0, maxAns = nums[0];

  for (let x of nums) {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns
};

// 【和为k的子数组】
const nums = [1,2,0,0,3,-1,4,6], target = 3   // 7  解释：有7种子数组

/**
 * （n）前缀和
 * 区间[a,b]的和为sum ：表示 map[a] - map[b] = sum
 * map[i] = map[i-1] + nums[i]
 * map[i+1] = map[i] + nums[i+1]
 * curSum   =        + target
 * 区间[j, i] 的和为k ：表示 map[i] - map[j] = k
 */


function subarraySum(nums, target) {
  const map = new Map(); // 存储{ 前缀和: 次数 }
  map.set(0, 1);
  let cnt = 0, curSum = 0;

  for (let i = 0; i < nums.length; i++) {
      curSum += nums[i]; // 到i的前缀和
      if (map.has(curSum - target))  // map中存在 某位置 到i的 区间和为target
        cnt += map.get(curSum - target)
      
      map.set(curSum, map.has(curSum) ? map.get(curSum) + 1 : 1)
  }
  return cnt;
}


