const s = "([]{})"// 输出：true
console.log(isValid(s))

// 解法二： Map
function isValid(s) {
  if (s.length % 2) return false;

  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);
  let stack = [];

  for(let i of s){
      if (map.get(i)) { // i是右括号，那么栈顶，一定是他对应的左括号，并把它pop
          if (stack[stack.length - 1] !== map.get(i)) return false;
          else                                        stack.pop();
      } else {          // i是左括号，通通入栈
          stack.push(i);
      }
      console.log(stack)
  }
  return !stack.length;
};




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