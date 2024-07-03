/*
15. 三数之和
给你一个整数数组 nums ，
判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
你返回所有和为 0 且不重复的三元组。
*/


var threeSum = function(nums) {
  let n = nums.length, ans = []
  if(nums == null || n < 3) return ans;
  nums.sort((a, b) => a - b);


  for(let i = 0; i < n-2; i++) { // 依次遍历
    let L = i+1, R = n-1
    if(nums[i] > 0) break; // 特例
    if(i>0 && nums[i] === nums[i-1]) continue// 去重
    while(L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if(sum == 0) {
        ans.push([nums[i], nums[L], nums[R]])
        L++; // 移动L指针到下一个不同的元素
        while (L < R && nums[L] === nums[L - 1]) L++; // 去重
        R--; // 移动R指针
        while (L < R && nums[R] === nums[R + 1]) R--; // 去重
      }
      else if(sum>0) R--
      else if(sum<0) L++
    }
  }
  return ans

};
const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))
