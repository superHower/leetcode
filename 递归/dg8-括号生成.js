const n = 3  // 输出：["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(n))

function generateParenthesis(n) {
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
