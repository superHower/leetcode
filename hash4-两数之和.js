/*
1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
*/


// const nums = [2,7,11,15], target = 9
const nums = [3, 2, 4], target = 6
console.log(twoSum(nums, target)) // [0, 1] or [1, 0]


/**
 * 遍历
 *   map有补数 -> 立刻返回[这个map的键，这个的索引]
 *   map无补数 -> 放入map
*/


function twoSum(nums, target) {
  let numMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    let complement = target - nums[index]; // 计算补数
    if (numMap.has(complement)) { // 找到了补数，立刻返回
      // 如果补数在哈希表中，返回索引
      console.log(numMap.get(complement))
      return [numMap.get(complement), index]
    } else {
      numMap.set(nums[index], index); // 将当前元素及其索引存入哈希表
    }

    // console.log(numMap)
  }
  return [];
}