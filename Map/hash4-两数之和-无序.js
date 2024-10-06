// const nums = [2,7,11,15], target = 9 // [0,1]
const nums = [3, 2, 4], target = 6 // [1,2]
console.log(twoSum(nums, target)) 


function twoSum(nums, target) {
  let map = new Map(); // {值：索引}
  
  for (let index = 0; index < nums.length; index++) {
    if (map.has(target - nums[index])) // 能找到补数
      return [map.get(target - nums[index]), index]
    else 
      map.set(nums[index], index);
    
  }
  return [];
}