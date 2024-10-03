// const nums = [1,-1,0], k = 0   // 输出：3
const nums = [1,2,0,0,3, -1, 4, 6], k = 3   // 输出：2
console.log(subarraySum(nums, k))


// （n）哈希 + 前缀和
function subarraySum(nums, k) {
  const map = new Map(); // 存储每个前缀和出现的次数
  map.set(0, 1);
  let cnt = 0, pre = 0;


  for (let i = 0, len = nums.length; i < len; i++) {
      pre += nums[i];
      if (map.has(pre - k))  cnt += map.get(pre - k);
      
      if (map.has(pre))   map.set(pre, map.get(pre) + 1);
      else                map.set(pre, 1);
  }
  return cnt;
}


// （n2）暴力寻找子串法
function  subarraySum_1(nums, k){
  let left = 0, right = 0, res = 0

  for(; right < nums.length; right++) {
      let sum = 0
      for(left = right; left>=0; left--) {
          sum += nums[left]
          console.log(sum, left, right)
          if(sum == k) {
            res++
            // break
          }
      }
  }
  return res

};