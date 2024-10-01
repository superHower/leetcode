var moveZeroes = function(nums) {
  let j = 0; // j 用来记录非零元素的索引位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]; // 将非零元素放到前面
      j++; // 移动到下一个非零元素的位置
    }
  }
  // 从 j 开始填充零
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
};


/**
 * 题目已经规定，不准改变原有数组
 */
var moveZeroes_01 = function(nums) {
  let map = new Map()
  let arr = []
  let arr0 = []

  for (let i = 0 ; i < nums.length; i++) {
      if(nums[i] !== 0) {
          arr.push(nums[i])
      } else {
          arr0.push(nums[i])
      }

  }
  return arr.concat(arr0)

};
const nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
console.log(moveZeroes(nums))






