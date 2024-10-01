/*
268. 丢失的数字

给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
*/


function missingNumber(nums) {
  let missing = 0;
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
      missing ^= i; // 对预期的数字进行异或
      console.log(missing)
  }
  for (let num of nums) {
      missing ^= num; // 对数组中的数字进行异或
  }
  return missing;
}

const nums = [9,6,4,2,3,5,7,0,1]; // n = 9
console.log(missingNumber(nums)); // 应该输出 8
