/*
1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
*/
var twoSum = function(nums, target) {
  let numMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    let complement = target - nums[index]; // 计算补数
    if (numMap.has(complement)) { // 找到了补数，立刻返回
      // 如果补数在哈希表中，返回索引
      console.log(numMap.get(complement))
      return [numMap.get(complement), index];
    } else {
      numMap.set(nums[index], index); // 将当前元素及其索引存入哈希表
    }

    // console.log(numMap)
  }
  return [];
};
// const nums = [2,7,11,15], target = 9
const nums = [3, 2, 4], target = 6
console.log(twoSum(nums, target)) // [0, 1] or [1, 0]


/**
 * 0702-第一次用双指针做， 发现排序后下标就不对了
 */
var twoSum_1 = function(nums, target) {
  nums.sort((a,b)=> {return a-b})
  let n = nums.length
  let i = 0, j = n-1
  const arr = new Array()
  while(i<j){
    if(nums[i] + nums[j] === target){
      arr.push(i, j)
      i++
      j--
    }else if(nums[i] + nums[j] < target) {
      i++
    }else {
      j--
    }
  }
  return arr

};


