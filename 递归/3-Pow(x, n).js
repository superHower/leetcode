// const x = 2.00000, n = 10 //输出：1024.00000
// const x = 2.10000, n = 3 //输出：9.26100
const x = 2.00000, n = -2 //输出：0.25000
console.log(myPow(x, n)) 

/**
 * n是0或1：结束
 * 
 * n<0： x取倒数，n取正数
 * n>0： n为偶，x平方，n取半
 *       n为奇，x平方，n取半floor  并*x
 */


var myPow = function(x, n) {
  if(n ==0 || n ==1) return n ==0 ? 1 : x

  if(n < 0) 
    return myPow(1/x, -1*n)
  else {
    if(n%2 == 0) return myPow(x*x, n/2)
    else         return myPow(x*x, Math.floor(n/2)) * x
  }
};
