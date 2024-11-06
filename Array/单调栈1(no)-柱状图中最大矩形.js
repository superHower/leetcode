const heights = [2,1,5,6,2,3] //输出：10
// 解释：最大的矩形为图中红色区域，面积为 10

function largestRectangleArea(heights) {
  const len = heights.length;
  const left = Array(len).fill(-1);
  const stack = [];
  for (let i = 0; i < len; i++) {
      const x = heights[i];
      while (stack.length && x <= heights[stack[stack.length - 1]]) {
          stack.pop();
      }
      if (stack.length) {
          left[i] = stack[stack.length - 1];
      }
      stack.push(i);
  }

  const right = Array(len).fill(len);
  stack.length = 0;
  for (let i = len - 1; i >= 0; i--) {
      const x = heights[i];
      while (stack.length && x <= heights[stack[stack.length - 1]]) {
          stack.pop();
      }
      if (stack.length) {
          right[i] = stack[stack.length - 1];
      }
      stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < len; i++) {
      ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));
  }
  return ans;
};
