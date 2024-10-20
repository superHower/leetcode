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