/*
20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
*/

// 解法一: 栈
let isValid_1 = function(s) {
  let stack = [], length = s.length
  if(length % 2) return false;
  for(let item of s){
      switch(item){
          case "{":
          case "[":
          case "(":
              stack.push(item);
              break;
          case "}":
              if(stack.pop() !== "{") return false;
              break;
          case "]":
              if(stack.pop() !== "[") return false;
              break;
          case ")":
              if(stack.pop() !== "(") return false;
              break;
      }
      console.log(stack)
  }
  return !stack.length;
};

// 解法二： Map
var isValid = function(s) {
  if (s.length % 2) return false;
  let map = new Map([[')', '('], [']', '['], ['}', '{']]);
  let stack = [];
  for(let i of s){
      if (map.get(i)) {
          if (stack[stack.length - 1] !== map.get(i)) return false;
          else stack.pop();
      } else {
          stack.push(i);
      }
      console.log(stack)
  }
  return !stack.length;
};




const s = "()[]{}"
// 输出：true
console.log(isValid(s))