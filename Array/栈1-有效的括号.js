const s = "([]{})"// 输出：true
console.log(isValid(s))

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


// 解法二： Map
function isValid2(s) {
    if (s.length % 2) return false;

    let map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    let stack = [];

    for (let i of s) {
        if (map.get(i)) { // i是右括号，那么栈顶，一定是他对应的左括号，并把它pop
            if (stack[stack.length - 1] !== map.get(i)) return false;
            else stack.pop();
        } else {          // i是左括号，通通入栈
            stack.push(i);
        }
        console.log(stack)
    }
    return !stack.length;
};

