// const s = "catsandog" 
// const wordDict = ["cats", "dog", "sand", "and", "cat"] // false
const s = "leetcode"
const  wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict)) // true: "leetcode" 可以由 "leet" 和 "code" 拼接成。

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
    if(start == s.length){
      return true // 整个字符都遍历完了， 还没有，就是真的没有了
    } 

    for (let i = start; i < s.length; i++) {

      if(set.has(s.substring(start, i+1))) { // 在保证 子字符串在set中的情况下， 才递归
        if(backTrack(i+1))  return true // 这里是start遍历 并且backTrack(i+1) ：说明是不允许重复的递归
      }
        
    }
    console.log('wordDict中一个也没有')
    return false
  }

}




function wordBreak1(s, wordDict) {
  const wordSet = new Set(wordDict);
  return backtrack(0);

  function backtrack(start) { // 从 start开始遍历，防止重复
    if (start === s.length) // "leetcode" 已经指到了最后
      return true;
    
    for (let i = start; i < s.length; i++) { // ["leetcode"]
      if (wordSet.has(s.substring(start, i + 1)) && backtrack(i + 1)) 
        return true;
    }
    return false;
  }

}