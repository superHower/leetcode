/*
66. 加一
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。
*/

var plusOne = function(digits) {
  const len = digits.length
  for(let i = len - 1; i >= 0; i--) {
      digits[i]++;
      digits[i] %= 10; // 这里可以看到取余的结果
      console.log(digits[i])
      if(digits[i]!=0)
          return digits;
  }
  digits = [...Array(len + 1)].map(_=>0);;
  digits[0] = 1;
  return digits;
};

const digits = [1,9,9]
// 输出：[1,2,4]
console.log(plusOne(digits))