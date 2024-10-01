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
  const map = new Map()
  for (let str of strs) {
    let array = Array.from(str) // 利用from 将字符串转成，字符串数组
    array.sort() // 排序
    let key = array.toString() // 将字符串数组，恢复成字符串

    // 确定要放进哪个list中，没有就新建一个
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(str)
    
    // 放进map中
    map.set(key, list);
  }
  console.log(map.values()) // 这个结果是个Iterator
  return Array.from(map.values())  // 要转成数组

};

