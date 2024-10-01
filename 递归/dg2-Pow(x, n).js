/*
50. Pow(x, n)
实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。
*/
var myPow = function(x, n) {
  console.log(x, n)
  if(n ==0 || n ==1) {
      return n ==0 ? 1: x
  }else if(n < 0){
      return myPow(1/x, Math.abs(n))
  }else{
      if(n % 2 == 0) 
        return myPow(x * x , n/2)
      else 
        return myPow(x * x ,Math.floor(n/2))* x
  }
};

const x = 2.00000, n = 10
//输出：1024.00000


// const x = 2.10000, n = 3
//输出：9.26100

// const x = 2.00000, n = -2
//输出：0.25000
console.log(myPow(x, n))