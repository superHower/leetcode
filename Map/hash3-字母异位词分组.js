/*
49. 字母异位词分组
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

*/

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"] // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagrams(strs))

/**
 * map{特定字符传:对应的[]}
 * 遍历 
 *    当前字符串转数组 -> sort -> 恢复成字符串
 *    map 有 此字符串，放进list[]
 *    map 无 此字符串，新建list[]
 *    更新map{此字符串：list[]}
 */

function groupAnagrams(strs) {
  let map = new Map()

  for(str of strs) {
      let arr =Array.from(str)
      arr.sort()
      let key = arr.join("")

      let list = map.get(key) ? map.get(key) : []
      list.push(str)
      map.set(key, list)
  }

  return Array.from(map.values())

};

