// const s = "catsandog" 
// const wordDict = ["cats", "dog", "sand", "and", "cat"] // false
const s = "leetcode"
const  wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict)) // true: "leetcode" 可以由 "leet" 和 "code" 拼接成。



function wordBreak(s, wordDict) {
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