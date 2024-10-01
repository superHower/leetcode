const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputArr = []; //存放输入的数据
rl.on("line", function (line) {
  //line是输入的每一行，为字符串格式
  inputArr.push(line); //将输入流保存到inputArr中（注意为字符串数组）
}).on("close", function () {
    
    let inputArr1 = inputArr[0].toLowerCase().split("");
  let a = inputArr[1].toLowerCase();
  let con = 0;
  inputArr1.forEach((e) => {
    if (a == e) {
      con++;
    }
  });
  console.log(con); //调用函数并输出
});
 
//解决函数
// function fun(arr) {
//   arr = arr[0].toLowerCase().split("");
//   let a = arr[1].toLowerCase();
//   let con = 0;
//   arr.forEach((e) => {
//     if (a == e) {
//       con++;
//     }
//   });
//   return con;
// }