/*
150. 逆波兰表达式求值
给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

注意：

有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。
*/
var evalRPN = function(tokens) {
  const stack = [];
  const n = tokens.length;
  for (let i = 0; i < n; i++) {
      const token = tokens[i];
      if (isNumber(token)) {
          stack.push(parseInt(token));
      } else {
          const num2 = stack.pop();
          const num1 = stack.pop();
          if (token === '+') {
              stack.push(num1 + num2);
          } else if (token === '-') {
              stack.push(num1 - num2);
          } else if (token === '*') {
              stack.push(num1 * num2);
          } else if (token === '/') {
              stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
          }
      }
  }
  return stack.pop();
};

const isNumber = (token) => {
  return !('+' === token || '-' === token || '*' === token || '/' === token );
}


// const tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// const tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// 输出：22
// 解释：该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22
console.log(evalRPN(tokens))
