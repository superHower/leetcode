let tasks = []
for(let i = 0; i < 100; i++) { tasks.push(() => Promise.resolve("Task " + i))}

// 1. 异步加载图片
async function loadAsync(imgs) {
  const promises = imgs.map(url => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        document.body.appendChild(image);
        resolve(image); // 可以resolve图片对象，如果需要后续操作
      };
      image.onerror = () => reject(new Error(`Image loading error for ${url}`));
      image.src = url;
    });
  });

  // 使用Promise.all并行加载所有图片
  try {
    const images = await Promise.all(promises);
    console.log('所有图片加载完成:', images);
  } catch (error) {
    console.error('图片加载失败:', error);
  }
}

// 使用loadAsync函数
const imgs = [
  'url_to_image1.jpg',
  'url_to_image2.jpg',
];

// loadAsync(imgs);



// 2. 同时并行启动所有异步任务，并输出异步任务结果
/*
任务描述：请编写一个名为 executeTasks 的函数。
这个函数需要接受一个异步任务数组作为参数。每个任务是一个会返回 Promise 的函数。
你的目标是同时启动这些异步任务，并且在每个任务完成时，立即按照它们在数组中的原始顺序显示它们的结果。
*/


function executeTasks(tasks) {
  // 创建一个数组来存储每个任务的Promise
  const promises = tasks.map((task, index) => {
    return task().then(result => {
      // 立即输出每个任务的结果
      console.log(`Task ${index + 1} completed with result: ${result}`);
      return result; // 返回结果，以便后续处理
    }).catch(error => {
      console.error(`Task ${index + 1} failed with error: ${error}`);
      return error; // 返回错误信息，以便后续处理
    });
  });

}
executeTasks(tasks) // 同时并行启动所有异步任务，并顺序输出异步任务结果



// 3. 控制并发数量，如果有100000个请求

async function concurrencyMaxTask(tasks, max = 3) {
  let resList = []; // 存储结果的数组
  let doneCount = 0; // 已完成的任务数量
  let index = 0; // 当前任务的索引

  // run方法： 一次只会执行一个任务
  const run = async (curIndex) => {
    if (curIndex >= tasks.length) return;
    console.log(`开始执行任务: ${curIndex}, 当前并发数: ${doneCount + 1}`); 
    try {
      const data = await tasks[curIndex](); // 执行任务
      resList[curIndex] = { status: "succ", data };
    } catch (err) {
      resList[curIndex] = { status: "fail", data: err };
    } finally {
      doneCount++; // 已完成数量++
      if (doneCount < tasks.length) run(index++); // 继续执行下一个任务
    }
  };

  // 初始化任务执行
  for (let i = 0; i < max && i < tasks.length; i++) {
    resList[i] = {}; // 初始化结果数组
    run(index++);
  }
}
concurrencyMaxTask(tasks, 4); // 并发控制， 限制并发数量为4





// 4. 异步封装delay
function delay(ms) {
  return new Promise( (resolve, reject) => {
    if(ms <= 0)    reject(`延迟时间必须大于0，传入的值为：${ms}`);

    else {
      setTimeout(() => {
        resolve(ms + '123');
      }, ms);
    }

  });
}

// promise使用promise
function promiseDelay(ms) {
  delay(ms)
    .then((ms) => { console.log('延迟了'+ms +'毫秒'); })
    .catch((error) => { console.error('延迟过程中发生错误:', error); });
}
promiseDelay(2000)
promiseDelay(-2000)

// await使用promise
async function awaitDelay(ms) {
  try {
    const res = await delay(ms); 
    console.log(res);
  } catch (error) {
    console.error('awaitDelay中发生错误:', error);
  }
}

awaitDelay(1000)
awaitDelay(-1000)

// 5. 异步实现加法 
function asyncAdd(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = a + b;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, 1000); // 假设加法操作需要1秒时间来完成
  });
}

// 使用asyncAdd函数
asyncAdd(5, 3).then(result => {
  console.log('加法结果:', result); // 输出: 加法结果: 8
}).catch(error => {
  console.error('发生错误:', error);
});