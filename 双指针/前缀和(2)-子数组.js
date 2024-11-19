/**
 * 前缀和
 * ----------------------------------------------------------------------------------------------------------
 * 1. 最大子数组和  const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   //  6   解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 2. 和为k的子数组 const nums2 = [1,2,0,0,3,-1,4,6], target = 3    // 7  解释：有7种子数组 
 *----------------------------------------------------------------------------------------------------------*/


// 【最大子数组和】
const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   //  6   解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
/**
 * pre可以+=nums[i] 也可以放弃 直接=nums[i]
 * 不断更新前缀和，以及最大值
 */
function maxSubArray(nums) {
  let pre = 0, maxAns = nums[0];

  for (let x of nums) {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns
};



/**
 * （n）前缀和
 * 区间[a,b]的和为sum ：表示 map[a] - map[b] = sum
 * map[i] = map[i-1] + nums[i]
 * 区间[j, i] 的和为target ：表示 map[i] - map[j] = target
 */

// 【和为k的子数组】
const nums2 = [1,2,0,0,3,-1,4,6], target = 3   // 7  解释：有7种子数组
/**
 * map中记录某前缀和的次数
 * 
 */
console.log("输出", subarraySum(nums2, target) )
function subarraySum(nums, target) {
  const map = new Map(); // 存储{ 前缀和: 次数 }
  map.set(0, 1);
  let ans = 0, sumI = 0;

  for (let i = 0; i < nums.length; i++) {
      sumI += nums[i];     // 计算到i的前缀和
      sumJ = sumI - target // 计算到j的前缀和

      ans = map.has(sumJ) ? ans + map.get(sumJ) : ans //  这个位置j要是 已存在map中，就更新答案
      let cnt =  map.has(sumI) ? map.get(sumI) + 1 : 1 // 当前位置i要是 已存在map中，就更新他的次数
      map.set(sumI, cnt)
  }
  return ans;
}