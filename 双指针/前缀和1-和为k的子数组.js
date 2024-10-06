// const nums = [1,-1,0], target = 0   // 输出：3
const nums = [1,2,0,0,3, -1, 4, 6], target = 3   // 输出：2
console.log(subarraySum(nums, target))


// （n）前缀和
// 区间[a,b]的和为sum ：表示 map[a] - map[b] = sum
// map[i] = map[i-1] + nums[i]
// map[i+1] = map[i] + nums[i+1]
// curSum   =        + target
// 区间[j, i] 的和为k ：表示 map[i] - map[j] = k

function subarraySum(nums, target) {
  const map = new Map(); // 存储{ 前缀和: 次数 }
  map.set(0, 1);
  let cnt = 0, curSum = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
      curSum += nums[i]; // 到i的前缀和
      if (map.has(curSum - target))  // map中存在 某位置 到i的 区间和为target
        cnt += map.get(curSum - target)
      
      map.set(curSum, map.has(curSum) ? map.get(curSum) + 1 : 1)
  }
  return cnt;
}


// （n2）暴力寻找子串法
function  subarraySum_1(nums, target){
  let left = 0, right = 0, res = 0

  for(; right < nums.length; right++) {
      let sum = 0
      for(left = right; left>=0; left--) {
          sum += nums[left]
          console.log(sum, left, right)
          if(sum == target) {
            res++
            // break
          }
      }
  }
  return res

};