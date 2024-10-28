const nums = [1,2,3,4] 
console.log(productExceptSelf(nums)) // [24,12,8,6]

function productExceptSelf (nums) {
  const res = [];
  res[0] = 1;
  //记录 当前位置前一位的乘积
  for (let i = 1; i < nums.length; i++) {
      res[i] = res[i - 1] * nums[i - 1];
  }
  console.log(res) // 此时res =  [ 1, 1, 2, 6 ] 就是前一位的乘积
  let right = 1;
  //从左到当前位置前一位的乘积 乘上 右边
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= right;  // 更新res
    right *= nums[j]; // 更新右边
  }

  return res


}



