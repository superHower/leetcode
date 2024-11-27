/**----------------------------------------------------------------------------------------------------------------------------------
 * 这种题型：一般要求找到某个数组中，所有的子串
 *   dfs(start) {
 *     for (let i = start; i < nums.length; i++) {
 *        dfs(start+1)
 *     }
 *   }
 * ----------------------------------------------------------------------------------------------------------------------------------
 * 1. 组合(start)--------const n = 4, k = 2                                 // 输出：[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
 * 
 * 2. 组合总和(start)----const candidates = [2,3,6,7], target = 7           // 输出：[[2,2,3],[7]]
 *        if(sum<target) for(i=start) dfs(i, sum+val)
 * 
 * 3. 单词拆分(start)-----const s = "leetcode", wordDict = ["leet", "code"] // true 解释： "leetcode" 可以由 "leet" 和 "code" 拼接成。
 *        确保没缓存 if(set中有字串) if(dfs(i+1)) memo[start] = true return true
 * 
 * 4. 分割回文串(start)---const s = "aab"                                  // [["a","a","b"],["aa","b"]]
 *        是回文串，就dfs(i+1)
 *----------------------------------------------------------------------------------------------------------------------------------
 * dfs(i+1) 表示不希望重复
 * dfs(i)   表示可以  重复
 *----------------------------------------------------------------------------------------------------------------------------------*/


 
// 【组合】
const n = 4, k = 2 // 输出：[ [1,2], [1,3], [1,4], [2,3], [2,4], [3,4] ]
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

// 单词拆分
function wordBreak(s, wordDict) {
  let set = new Set(wordDict)
  let memo = new Array(s.length)
  return backTrack(0)

  function backTrack(start) {
    if(start == s.length) return true // 整个字符都遍历完了， 还没有，就是真的没有了
    if(memo[start]) return memo[start]

    for (let i = start; i < s.length; i++) {
      if(set.has(s.substring(start, i+1))) { // 在保证 子字符串在set中的情况下， 才递归
        if(backTrack(i+1)) {
          memo[start] = true
          return true // 这里是start遍历 并且backTrack(i+1) ：说明是不允许重复的递归
        }  
      }
    }

    memo[start] = false
    return false
  }

}



// 【分割回文串】
const str = "aab" // [["a","a","b"],["aa","b"]]

function partition(s) {
  let res = [], path = []
  backTrack(0)
  return res

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

  function isHui(s) {
    let left = 0; right = s.length - 1
    while (left < right) {
      if (s[left] !== s[right])  return false
      left++
      right--
    }

    return true
  }
};

