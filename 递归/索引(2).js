/**
 * 1. 全排列
 * 2. 子集
 * 3. 电话号码的字母组合
 */

// 【电话号码的字母组合】
const digits = "23" // 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(digits))

function letterCombinations(digits) {
  const arr = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  let res = [], path = []
  
  backTrack(0) // 0，表示的是digits这个字符串的下标
  return res

  function backTrack(index) { // 正在处理的digits的索引  也就是 数字
    if(path.length == digits.length) {
      res.push(path.join("")) // 把数组 粘在一块变成 字符串
      return 
    }
    for(let s of arr[digits[index]]) { // 到谁了就遍历递归谁
      path.push(s)
      backTrack(index+1)
      path.pop()
    }

  }

}



// 【子集】

const nums = [1,2,3] // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets(nums))

function subsets(nums) {
  let res = [], path = []
  backTrack(0)
  return res

  function backTrack(index) {
    if(index == nums.length) {
      res.push([...path])
      return 
    }

    path.push(nums[index])
    backTrack(index+1)
    path.pop()
    backTrack(index+1)
  }
  
};





