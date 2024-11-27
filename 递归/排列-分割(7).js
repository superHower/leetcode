/**---------------------------------------------------------------------------------------------------------------------------------
 * 1. 全排列-------------const nums = [1,2,3]     // 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *        if(used[i])跳过，dfs(used) 
 * 2. 电话号码的字母组合--const digits = "23"   for(“abc”、“def”)            // 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *        本质上没有遍历，for的是abc , 以便push: a,b,c 
 * 
 * 3. 子集---------------const nums = [1,2,3] （本质不遍历,追加递归)         // 输出：[ [1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], [] ]
 * 
 *----------------------------------------------------------------------------------------------------------------------------------
 * dfs(i+1) 表示不希望重复
 * dfs(i)   表示可以  重复
 *----------------------------------------------------------------------------------------------------------------------------------*/


// 【全排列】
const nums1 = [1,2,3] // 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
/**
 * used的作用就是：保证重复的不放进去。
 * 注意：对于used[n] 一定要continue, 不然排列出来的就有很多重复的
 */

function permute(nums) {
  let path = [], res = []
  backtrack([])
  return res

  function backtrack(used) {
    if(path.length == nums.length) {
      res.push([...path])
      return 
    }


    for(let n of nums) {
      if(used[n]) continue // 这里忘记了， 出现过的要跳过

      path.push(n)
      used[n] = true // used放的是值， 不是索引

      backtrack(used)

      path.pop()
      used[n] = false
    }


  }
}



// 【电话号码的字母组合】
const digits = "23" // 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
/**
 * “23” 实际上就是组合“abc”、“def”
 * 
 */
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
    let str = arr[digits[index]]
    for(let s of str) { // 到谁了就遍历递归谁
      path.push(s)
      backTrack(index+1)
      path.pop()
    }

  }

}



// 【子集】

const nums = [1,2,3] // [ [1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], [] ]

console.log("输出",subsets(nums) )
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





