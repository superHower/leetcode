// const path = "/home/"   // 输出："/home" 解释：注意，最后一个目录名后面没有斜杠。 
const path = "/../home/.././" // 输出："/"   解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。
console.log(simplifyPath(path))


function simplifyPath(path) {
  const ans = []
  let arr = path.split("/")

  for(const s of arr) {
    if(s != "" && s != "." && s != "..")
      ans.push(s)
    else if(s == ".." && ans.length > 0)
      ans.pop()
  }
  return "/" + ans.join("/")
};