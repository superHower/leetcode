// const x = 2.00000, n = 10 //输出：1024.00000
// const x = 2.10000, n = 3 //输出：9.26100
const x = 2.00000, n = -2 //输出：0.25000
console.log(myPow(x, n)) 


function myPow(x, n) {
  let record = x

  if (n==0) return 1
  else if (n > 0) return backTrack(x, 1)
  else if(n < 0)return 1/backTrack(x, 1)
  
  function backTrack(x, deep) {
    if(deep == Math.abs(n)) return x
    return backTrack(x*record, deep+1)
  }
}




function myPow1(x, n) {
  console.log(x, n)
  if(n ==0 || n ==1) return n ==0 ? 1: x
  else if(n < 0)     return myPow(1/x, Math.abs(n))
  else{
      if(n % 2 == 0) return myPow(x * x , n/2)
      else           return myPow(x * x ,Math.floor(n/2))* x
  }
};