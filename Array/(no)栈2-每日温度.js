const temperatures = [73,74,75,71,69,72,76,73] // 输出: [1,1,4,2,1,1,0,0] 解释： 下一个更高温度出现在几天后
console.log(dailyTemperatures(temperatures))

/**
 * 
 * 维护单调栈
 * 
 */

function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const stack = []; // 用来跟踪尚未找到更高温度的天数。

  for (let i = 0; i < n; i++) {
    // 只要找到更高温度的天： 今天，比之前天的温度高
      while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        console.log(stack)
          const pop = stack.pop(); // 出栈
          ans[pop] = i - pop; // 得到下一个更高温天
      }
      stack.push(i) // 放入今天
  }
  return ans;
};