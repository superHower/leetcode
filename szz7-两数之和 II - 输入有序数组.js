/*
167. 两数之和 II - 输入有序数组
给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，
请你从数组中找出满足相加之和等于目标数 target 的两个数。
如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。
你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

*/

var twoSum = function(numbers, target) {
  let n = numbers.length
  let i = 0, j = n-1
  while(i < j)
    if( numbers[i] + numbers[j] === target) {
      return [i+1, j+1]
    }else if( numbers[i] + numbers[j] < target) {
       i++
    }else {
      j--
    }
  return []
};


const numbers = [2,7,11,15], target = 9
// const numbers = [2,3,4], target = 6
// const numbers = [-1,0], target = -1
console.log(twoSum(numbers, target))