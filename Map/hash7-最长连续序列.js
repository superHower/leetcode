// const nums = [100,4,200,1,3,2] //4
const nums = [0,3,7,2,5,8,4,6,0,1]//9
console.log(longestConsecutive(nums))

// 排序
function longestConsecutive(nums) {
  if (nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let max = 1 // 结果
  let count = 1 // 目前最大值
  for (let i = 0; i < nums.length - 1; i++) {
    if(nums[i] == nums[i+1]) continue
    if (nums[i + 1] - nums[i] == 1) count++;   // 连续 ， 
    else                            count = 1; // 不连续，就重置

    max = Math.max(max, count)
  }
  return max


}

// 哈希

function longestConsecutive(nums) {

  let map = new Map()
  let max = 0
  for (const num of nums) { // 遍历nums数组
    if (!map.has(num)) { // 重复的数字不考察，跳过
      let preLen = map.get(num - 1) || 0  // 获取左邻居所在序列的长度 
      let nextLen = map.get(num + 1) || 0 // 获取右邻居所在序列的长度 
      let curLen = preLen + 1 + nextLen   // 新序列的长度
      map.set(num, curLen) // 将自己存入 map
      max = Math.max(max, curLen) // 和 max 比较，试图刷新max
      map.set(num - preLen, curLen)  // 更新新序列的左端数字的value
      map.set(num + nextLen, curLen) // 更新新序列的右端数字的value
    }
  }
  return max

};