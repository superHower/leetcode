const digits = "234" // 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(digits))


function letterCombinations(digits) {
  const len = digits.length;
  const arr = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];

  if(len == 1) return digits.split("")
  if(!len) return []

  let res = [], path = []

  backtract(0) 
  return res

  function backtract(a) { // a表示 digits的索引
    if(path.length == len){
      res.push(path.join(""))
      return
    }

    for(let item of arr[digits[a]]){ // ["abc","def", "ghi"]
      path.push(item)
      backtract(a+1)
      path.pop()
    }
  }
}
















// function letterCombinations(digits) {
//   const len = digits.length;
//   const arr = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];

//   if(!len) return [];
//   if(len === 1) return arr[digits].split("");

//   const res = [], path = [];
//   backtracking(0);
//   return res;

//   function backtracking(a) { // 正在处理的digits的索引  也就是 数字
//       if(path.length === len) {
//           res.push(path.join("")); // 把数组 粘在一块变成 字符串
//           return;
//       }
//       for(const d of arr[digits[a]]) { // 遍历这个
//           path.push(d);
//           backtracking(a + 1);
//           path.pop();
//       }
//   }
// };

