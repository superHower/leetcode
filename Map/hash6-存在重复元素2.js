/*
219. 存在重复元素 II
给你一个整数数组 nums 和一个整数 k ，
判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
如果存在，返回 true ；否则，返回 false 。
*/



/**
 * 0702-19:33 看答案明白了,还是用hash记录下标
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
      const num = nums[i];
      if (map.has(num) && i - map.get(num) <= k) {
          return true;
      }
      map.set(num, i);
  }
  return false;

}
const nums = [1,2,3,1], k = 3 // true
// const nums = [1,0,1,1], k = 1 // true
// const nums = [1,2,3,1,2,3], k = 2 // false
console.log(containsNearbyDuplicate(nums, k))


/**
 * 0702-19:30 用双指针发现并不是递增的
 */
var containsNearbyDuplicate_1 = function(nums, k) {
  let n = nums.length
  let L = 0, R = n-1
  while(L < R) {
    if(nums[i] == nums[j] && j-i <= k) {
      return true
    }else if(nums[i] !== nums[j] && j-i >k) {

    }
  
  }

};


