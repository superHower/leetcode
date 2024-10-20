const x = 9 // 输出：3
console.log(mySqrt(x))

function mySqrt(x) {
  if(x==0 || x== 1) return x
  return find(0, 1, x)

  function find(deep, left, right) {
    if(right-left <= 1) return left

    let mid = Math.floor((left+right)/2)
    if(mid*mid > x) right = mid
    else left = mid
    
    return find(deep+1, left, right)
  }
}



/**
 * 
 * 找中间值 --> 再开方 --> 确定边界 --> 递归
 */
function mySqrt2(x) {
  if(x ==0 || x==1) return x

  return find(0,1, x)

  function find (deep, left, right) {
    if(right-left <=1) return left

    mid = Math.floor((left+right)/2)

    if(mid*mid > x) right = mid
    else            left = mid

    return find(deep+1, left, right);
  }
}


function mySqrt1(x) {
  if (x == 0 || x == 1) {
    return x;
  }
  // 分治思想
  let find = function (layer, left, right) {
    console.log('层数：'+layer, left, right)
      if (right - left <= 1) // 搜索区间不够时，找到了答案
          return left;

      mid = Math.floor((left + right) / 2); // floor下取整， ceil上取整， round四舍五入

      if (mid * mid > x) right = mid;
      else left = mid 
      
      return find(layer + 1, left, right);
  }
  return find(0, 1, x);
}
