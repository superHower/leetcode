/*
49. 字母异位词分组
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

*/

var groupAnagrams = function(strs) {
  const map = new Map()
  for (let str of strs) {
    // 根据排序后的字符串作为key
    let array = Array.from(str)
    array.sort()
    let key = array.toString()

    // 确定要放进哪个list中，没有就新建一个
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(str)
    
    // 放进map中
    map.set(key, list);
  }
  return Array.from(map.values())

};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// const  strs = [""]
// const  strs = ["a"]
console.log(groupAnagrams(strs))