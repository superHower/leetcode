// 【x的平方根】
const x = 9 // 输出：3
console.log(mySqrt(x))

/**
 * 
 * 找中间值 --> 再开方 --> 确定边界 --> 递归
 */
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

// 【括号生成】
const n = 3  // 输出：["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(n))
/**
 * 
 * 注意： path一定要参与递归
 */
function generateParenthesis(n) {
  let res = []
  backTrack(0,0, '')
  return res

  function backTrack(left, right, path) {
    if(path.length == 2*n) {
      res.push(path)
      return
    }
    if(left < n) backTrack(left+1, right,path + '(')
    if(right < left) backTrack(left, right+1, path + ')') // 如果写成： if(right < n) 那么就会出现：')('的情况
    
  }
}