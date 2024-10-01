/**
383. 赎金信
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    // 遍历magazine，将每个字符出现的次数存入map
    for (let i = 0; i < magazine.length; i++) {
        if (map.has(magazine[i])) {
            map.set(magazine[i], map.get(magazine[i]) + 1);
        } else {
            map.set(magazine[i], 1);
        }
    }
    // 遍历ransomNote，判断map中是否有对应字符，有则将对应字符的次数减1
    for (let i = 0; i < ransomNote.length; i++) {
        if (map.has(ransomNote[i]) && map.get(ransomNote[i]) > 0) {
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
        } else {
            return false;
        }
    }
    return true;

};



const ransomNote = "aa", magazine = "aab";
console.log(canConstruct(ransomNote, magazine)); // true


 /*

示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true
 */