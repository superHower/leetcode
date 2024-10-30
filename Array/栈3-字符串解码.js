const s = "3[a2[s[i]]]" // 输出："accaccacc"
// const s = "3[a]2[bc]" // 输出："aaabcbc"
console.log(decodeString(s))

function decodeString(s) {
  let numStack = [];
  let strStack = [];
  let ans = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      
      if (s[i] === '[') { // 入栈， 清空
          strStack.push(ans);   ans = "";
          numStack.push(count); count = 0;
      } else if (s[i] === ']') { // 出栈， 计算
          ans = strStack.pop() + ans.repeat(numStack.pop());
      } else if(!isNaN(s[i])) { // 是数字, 就让数字连起来
        count = count * 10 + parseInt(s[i]);
      } else {                  // 是字符，就让字符连起来
          ans += s[i];
      }

  }
  return ans;
};