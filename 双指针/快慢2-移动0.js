var moveZeroes = function(nums) {
  let slow = 0; // j 用来记录非零元素的索引位置
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast]; // 将非零元素放到前面
    }
  }
  // 从 slow 开始填充零
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
  return nums
};

const nums = [0,1,0,3,12] // 输出: [1,3,12,0,0]
console.log(moveZeroes(nums))






