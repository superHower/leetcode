/**
 * 1. 有效的括号
 * 2. 字符串解码
 * 3. 逆波兰表达式
 * 
 */

// 【有效的括号】
const s1 = "([]{})"// 输出：true
/**
 * '左' ? 入栈
 * '右' ? 栈顶是对应'左' ? 出栈 : 返回false 
 */
function isValid(str) {
    let stack = []
    for (let s of str) {
        if (s == '[' || s == '(' || s == '{') stack.push(s)
        else if (s == ']') {
            if (stack[stack.length - 1] == '[') stack.pop()
            else return false
        } else if (s == '}') {
            if (stack[stack.length - 1] == '{') stack.pop()
            else return false
        } else if (s == ')') {
            if (stack[stack.length - 1] == '(') stack.pop()
            else return false
        }
    }

    return stack.length == 0 ? true : false
}

// 【字符串解码】
const s = "3[a2[s[i]]]" // 输出："accaccacc"
// const s = "3[a]2[bc]" // 输出："aaabcbc"
/**
 * 
 * '[' ? str和num 入栈，并清空
 * ']' ? str = strStack栈顶 + 重复的str
 * '数字' ? 数字连起来
 * '字符' ? 字符连起来
 */
function decodeString(strings) {
    let numStack = [], num = 0;
    let strStack = [], str = "";

    for (let s of strings) {

        if (s === '[') { // 入栈， 清空
            strStack.push(str); str = "";
            numStack.push(num); num = 0;
        } else if (s === ']') { // 出栈， 计算
            str = strStack.pop() + str.repeat(numStack.pop());
        } else if (!isNaN(s)) { // 是数字, 就让数字连起来
            num = num * 10 + parseInt(s);
        } else {                  // 是字符，就让字符连起来
            str += s;
        }


    }
    return str;
};

// 【逆波兰表达式】
const tokens = ["2","1","+","3","*"]  // 9 解释：((2 + 1) * 3) = 9
// const tokens = ["4","13","5","/","+"] // 6 解释：(4 + (13 / 5)) = 6

/**
 * 数字？入栈
 * 负号？栈顶两个弹出，并把运算入栈
 */

function evalRPN(tokens) {
  const stack = [];

  for (let t of tokens) {
    if(/[0-9]/.tets(t)) {
        stack.push(t)
    }else {
        const num2 = stack.pop();
        const num1 = stack.pop();
        if (t === '+')       stack.push(num1 + num2);
        else if (t === '-')  stack.push(num1 - num2);
        else if (t === '*')  stack.push(num1 * num2);
        else if (t === '/')  stack.push(num1 * num2 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
    }
    
  }
  return stack.pop();
};



