const numCourses = 2, prerequisites = [[1, 0]] // 输出：true 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
// const numCourses = 2, prerequisites = [[1,0],[0,1]] // 输出：false 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
console.log(canFinish(numCourses, prerequisites))

function canFinish(numCourses, prerequisites) {

  const inDegree = new Array(numCourses).fill(0); // 入度数组
  const map = {}; // 邻接表

  for (let item of prerequisites) {
    inDegree[item[0]]++; // 求课的初始入度值
    if (!map[item[1]]) map[item[1]] = []; // 如果当前课不存在于邻接表，则初始化为空数组
    map[item[1]].push(item[0]); // 添加依赖它的后续课
  }

  const queue = [];
  for (let i = 0; i < inDegree.length; i++) { // 所有入度为0的课入列
    if (inDegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while (queue.length) {
    const selected = queue.shift(); // 当前选的课，出列
    count++; // 选课数+1
    const toEnQueue = map[selected]; // 获取这门课对应的后续课
    if (toEnQueue) { // 确实有后续课
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--; // 依赖它的后续课的入度-1
        if (inDegree[toEnQueue[i]] === 0) { // 如果因此减为0，入列
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count === numCourses; // 选了的课等于总课数，true，否则false
}


