const s = "cbaebabacd", p = "abc"  // [0,6]  
/*解释: 
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
*/
// const s = "abab", p = "ab"   // [0,1,2] 
/*解释: 
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
*/

console.log(findAnagrams(s, p))

function findAnagrams(s, p) {
  let ans=[], left=0
  let arr=new Array(26).fill(0)

  for(let s of p) arr[ cIndex(s) ]++ // 26个英文字母的 数组索引位置， 指定位置+1

  for(let right=0;right<s.length;right++){   //  s = "cbaebabacd", p = "abc"
      arr[ cIndex(s[right]) ]--
      while(arr[ cIndex(s[right]) ] < 0)       arr[ cIndex(s[left++]) ]++ 

      if(right-left+1>=p.length) ans.push(left)
  }
  return ans

  function cIndex(s) {
    return s.charCodeAt()-'a'.charCodeAt()
  }
};