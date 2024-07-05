/*
67. 二进制求和

给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
*/

/**
 * 放个正确答案
 */
var addBinary = function(a, b) {
  let ans = "";
  let ca = 0;
  for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
      let sum = ca;
      sum += i >= 0 ? parseInt(a[i]) : 0;
      sum += j >= 0 ? parseInt(b[j]) : 0;
      ans += sum % 2;
      ca = Math.floor(sum / 2);
  }
  ans += ca == 1 ? ca : "";
  return ans.split('').reverse().join('');
};





/**
 * 0705-23:43  自己纯手写，真的写不出来 
 */
var addBinary_1 = function(a, b) {
  const res = tenToBinary(binaryToTen(a) + binaryToTen(b))
  return res || "0"
};

var binaryToTen = (n) => {
  let sum = 0
  for(let i=n.length - 1; i >= 0 ; i--){
    // 这里要转换成十进制整数  -- parseInt(n[i], 10)
    sum += parseInt(n[i], 10) * Math.pow(2, n.length - i - 1) 
  }
  return sum
}

var tenToBinary = (n) => {
  if(n===0) return "0"
  const arr = new Array()
  while(n != 0) {
    arr.unshift(n%2) // 要把它从前面放进去 -- unshift
    n = parseInt(n/2) // 不能用 Math.ceil()
  }
  // 此时 arr       [1,0,0]
  // arr.toString() 1,0,0
  return arr.join('') 


}
const a = "11", b = "1" // 100
console.log(addBinary(a, b))

// 2  10
// 8  100

// 8/2 4 -- 0
// 4/2 2 -- 0
// 2/2 1 -- 0
// 1/2 0 -- 1



// 7
// 7/2 3 -- 1
// 3/2 1 -- 1
// 1/2 0 -- 1

