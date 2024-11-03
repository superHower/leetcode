const s = "3[a2[s[i]]]" // 输出："accaccacc"
// const s = "3[a]2[bc]" // 输出："aaabcbc"
console.log(decodeString(s))

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