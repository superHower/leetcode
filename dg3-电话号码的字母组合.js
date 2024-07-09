/*
17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*/
/**
 * 作者：代码随想录
 */
var letterCombinations = function(digits) {
  const k = digits.length;
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  if(!k) return [];
  if(k === 1) return map[digits].split("");

  const res = [], path = [];
  backtracking(digits, k, 0);
  return res;

  function backtracking(n, k, a) {
      if(path.length === k) {
          res.push(path.join(""));
          return;
      }
      for(const v of map[n[a]]) {
          path.push(v);
          backtracking(n, k, a + 1);
          path.pop();
      }
  }
};



var letterCombinations_1 = function(digits) {
  let map = new Map()
  map.set('2', "abc");
  map.set('3', "def");
  map.set('4', "ghi");
  map.set('5', "jkl");
  map.set('6', "mno");
  map.set('7', "pqrs");
  map.set('8', "tuv");
  map.set('9', "wxyz");

  let arr = new Array()

  let len = digits.length
  for(let i = 0; i< len; i++) {
    arr.push(map.get(digits[i]))
  }
  console.log(arr) // [ 'abc', 'def' ]

  /**
   * 
   * // index 当前下标，   arr[inedx] 第一个字符串
   * // current 当前字符， result 目标字符
   * @returns 
   */
  function generateCombinations(index, current) {
    console.log(index, current)
    if (index === len) { // 满足2位数，也就是 'ad', 'ae', 'af', 就放进去
      result.push(current);
      return;
    }

    for (let letter of arr[index]) { // 遍历arr[0]: 'abc' 和arr[1]: 'def'
      index = index + 1            // 更新arr的位置
      current = current + letter   // 更新current  : 
      generateCombinations(index, current);
    }
  }

  let result = [];
  generateCombinations(0, "");

  return result;
};

const digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations(digits))