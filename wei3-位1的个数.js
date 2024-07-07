/*
191. 位1的个数

编写一个函数，获取一个正整数的二进制形式
并返回其二进制表达式中 设置位 的个数（也被称为汉明重量）。

 */

/**
 * 直接看大佬的代码： 彻底服了，呜呜呜
 * 算了理解不了， 呜呜呜， 抽象啊
 */
var hammingWeight = function(n) {
  let index = 0;
  while(n){
    ++index
    n =  n & (n-1)
    // console.log(n) 
  }
  return index
};


/**
 * 0705-23:55 这个只能数字比较小的使用，如果是2147483645 直接溢出
 */
var hammingWeight_1 = function(n) {
  let num = tenToBinary(n).toString()
  let sum = 0
  for(let i = 0; i <num.length; i++) {
    // console.log(num[i])
    if(num[i] == 1) {
      sum++
    }
  }
  return sum
};

var tenToBinary = (n) => {
  if(n===0) return 0
  const arr = new Array()
  while(n != 0) {
    arr.unshift(n%2) // 要把它从前面放进去 -- unshift
    n = parseInt(n/2) // 不能用 Math.ceil()
  }
  // 此时 arr            [1,0,0]
  //      arr.toString() 1,0,0
  return parseInt(arr.join('')) 
}

const n = 11 // 3
console.log(hammingWeight(n))