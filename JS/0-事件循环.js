
function test1() {
  console.log("start"); // 1

  setTimeout(() => { // 宏1
    console.log("children2");
    Promise.resolve().then(() => {
      console.log("children2-1");
    });
  }, 0);
  
  setTimeout(() => { // 宏2
    console.log("children3");
    Promise.resolve().then(() => {
      console.log("children3-1");
    });
  }, 0);
  
  Promise.resolve().then(() => { // 微 1
    console.log("children1");
  });
  
  console.log("end"); //2
}

function test2() {
  setTimeout(()=>{ // 宏1
    new Promise(resolve =>{
      resolve();
    }).then(()=>{
      console.log('test');
    });
    console.log(4);
  });
  
  new Promise(resolve => {
    resolve();
    console.log(1) // 同1
  }).then( () => { // 微1
    console.log(3);
    Promise.resolve().then(() => {
      console.log('before timeout');
    }).then(() => {
      Promise.resolve().then(() => {
        console.log('also before timeout')
      })
    })
  })
  console.log(2); // 同2
}


function test3() {
  setTimeout(() => {  // h1
    console.log("4"); // -t1
    setTimeout(() => {
      console.log("8"); // -h1
    }, 0);
    new Promise((r) => {
      console.log("5"); // -t2
      r();
    }).then(() => {
      console.log("7"); // -w1
    });
    console.log("6") //-t3
  }, 0);
  
  new Promise((r) => {
    console.log("1"); // t1
    r();
  }).then(() => {
    console.log("3") // w1
  });
  console.log("2"); //t2
}




function test5() {
  console.log('1')// 
      
  setTimeout(() => {       
    setTimeout(()=>{
      console.log('[[1]]')// 
    },0) 
    console.log('[1]')// 
    var p2 = new Promise((n1, n2) => {
      n1(1000)
    }).then(()=>{
      console.log('[2]') // 
    })
  }, 0)
  

  setTimeout(() => {

    setTimeout(() => {
      console.log('[[2]]')// 
    }, 200)
    var p3 = new Promise((n1, n2) => {
      n1(1000)
    })
    p3.then(()=>{
      console.log('[4]') // 
    })
    console.log('[3]')// 
  }, 0)

  var p1 = new Promise((n1, n2) => {
    n1(1000)
  }).then(() => {
    console.log('3')// 
  })

  console.log('2')// 
}


function test6() {
  setTimeout(() => { // 1宏
		console.log(0) 
	});
	new Promise(resolve => {
		console.log(1); // 1同
		setTimeout(() => { // 1宏
			resolve(); // 2微  这个promise的执行在settimeout中
			var p1=new Promise((n1,n2)=>{
        n1(20)
      })
			p1.then(() => console.log(2)) // 2 微
			console.log(3); // 2 同
			setTimeout(()=>{
        console.log(9) // 2 宏
      },0)
		});
		new Promise((n1,n2)=>{
      n1(20)
    }).then(() => console.log(4)) // 1微
	}).then(() => { // 等待他的resolve 执行，但被困在settimeout中
		console.log(5); // 2 同
		var p2=new Promise((n1,n2)=>{
      n1(20)
    }).then(() => console.log(8)) // 2微
		setTimeout(() => console.log(6)) // 2宏
	});
	console.log(7) // 1同

}


function test7() {
  new Promise((resolve, reject) => { 
    console.log(1) 
    resolve(true); 
    console.log(2); 
    throw new Error('err');
  }).catch(ex => console.log(ex)) 
    .then(res => console.log(res)) 

}


// 答案是 1 2 true
// 如果在 Promise 中先调用 resolve 方法，
// 然后再调用 reject 方法，那么 reject 方法将会被忽略，
// 因为 Promise 的状态一旦变为已解决（fulfilled），就无法再改变为被拒绝（rejected）。

  

test7()