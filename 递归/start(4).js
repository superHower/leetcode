/**
 * 1. 组合-----------const n = 4, k = 2 // 输出：[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
 * 2. 组合总和-------const candidates = [2,3,6,7], target = 7 // 输出：[[2,2,3],[7]]
 * 3. 单词拆分-------const s = "leetcode", wordDict = ["leet", "code"] // true 解释： "leetcode" 可以由 "leet" 和 "code" 拼接成。
 * 4. 分割回文串-----const s = "aab" // [["a","a","b"],["aa","b"]]
 */


const n = 4, k = 2 // 输出：[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(combine(n,k))


function combine(n, k) { // n表示在[1, n]范围的数字进行组合；k表示组合的长度
  let res = []
  let path = []
  backtrack(1) // 从 数字1 开始
  return res

  function backtrack(start) {
    if(path.length == k) {
      res.push([...path]) // 把浅拷贝副本push进去
      return 
    }

    for (let i = start; i <= n; i++) { // start 控制起点， 避免重复：如[1, 3] [2, 3]
      path.push(i);
      backtrack(i + 1); // backtrack(i+1)表示不包含[1, 1] ; 而backtrack(i)就会有重复的 
      path.pop();
    }
  }
  
}


// 【组合总和】
const candidates = [2,3,6,7], target = 7 // 输出：[[2,2,3],[7]]
console.log(combinationSum(candidates, target))

function combinationSum(candidates, target) {
  let res = [], path = [], sum = 0
  candidates.sort((a, b) => a-b)

  backTrack(0, sum)
  return res

  function backTrack(start, sum) {
    if(sum == target) {
      res.push([...path])
      return res
    }

    if(sum < target) {
      for(let i = start; i < candidates.length; i++) {
        path.push(candidates[i])
        backTrack(i, sum + candidates[i]) // backTrack(i)说明可以有重复的如：[2,2] 
        path.pop()
      }
    }
  }

}

// 【单词拆分】
// const s = "leetcode", wordDict = ["leet", "code"] // true 解释： "leetcode" 可以由 "leet" 和 "code" 拼接成。
console.log(wordBreak(s, wordDict)) 

function wordBreak(s, wordDict) {
  let set = new Set(wordDict)
  const memo = new Array(s.length); // 使用memo,备忘录， 进一步优化
  return backTrack(0)

  function backTrack(start) {
    if(start == s.length) return true;
    if (memo[start] !== undefined) return memo[start]; // 备忘录中有了，直接使用备忘录中的

    for(let i = start; i <= s.length; i++) {
      if(set.has(s.substring(start, i+1))) {
        if( backTrack(i+1))  {
            memo[start] = true; // 更新备忘录
            return true
        }
      }
    }
      memo[start] = false; // 更新备忘录
    return false
  }
}

function wordBreak2(s, wordDict) {
  let set = new Set(wordDict)
  return backTrack(0)

  function backTrack(start) {
    if(start == s.length) return true // 整个字符都遍历完了， 还没有，就是真的没有了
  
    for (let i = start; i < s.length; i++) {
      if(set.has(s.substring(start, i+1))) { // 在保证 子字符串在set中的情况下， 才递归
        if(backTrack(i+1))  return true // 这里是start遍历 并且backTrack(i+1) ：说明是不允许重复的递归
      }
    }
    return false
  }

}



// 【分割回文串】
const s = "aab" // [["a","a","b"],["aa","b"]]

console.log(partition(s))
function partition(s) {
  let res = [], path = []
  backTrack(0)
  return res
  
  function isHui(s) {
    let left = 0; right = s.length - 1
    while (left < right) {
      if (s[left] !== s[right])
        return false
      left++
      right--
    }

    return true
  }


  function backTrack(start) {
    if (start == s.length) {
      res.push([...path])
      return
    }

    for (let i = start; i < s.length; i++) {
      let word = s.substring(start, i + 1)
      if (isHui(word)) {
        path.push(word)
        backTrack(i+1)
        path.pop()
      }

    }

  }

};

