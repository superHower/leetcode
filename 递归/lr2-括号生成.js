const n = 3  // 输出：["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(n))

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


// 失败案例
function generateParenthesis2(n) {
  let res = [], path = ''
  backTrack(0,0)
  return res

  function backTrack(left, right) { // 这里path没有参与递归， 因此，path的长度不会减小，只会走一遍
    if(path.length == 2*n) {
      res.push(path)
      return
    }
    if(left < n){
      path += '('
      backTrack(left+1, right)
    }

    if(right < left) {
      path += ')'
      backTrack(left, right+1)
    }
  }
}


function generateParenthesis1(n) {
  let res = []
  generate(0, 0, '')
  return res

  function generate(left, right, path) { // left目的生成n个‘（’ ,
    if(path.length == 2*n) {
      res.push(path)
      return 
    }
  
    if(left < n) generate(left+1, right, path+"(")
    if(right < left) generate(left, right+1, path+")")
  }
}
