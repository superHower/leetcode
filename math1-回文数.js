/*
9. 回文数
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数
是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
*/


var isPalindrome = function(x) {
  const arr = x.toString()
  const len = arr.length
  let temp = []
  for(let i = len-1; i >= 0; i--)
  {
    temp.push(parseInt(arr[i]))
  }
  return parseInt(temp.join('')) == x
};

const x = 10
// 输出：true
console.log(isPalindrome(x))