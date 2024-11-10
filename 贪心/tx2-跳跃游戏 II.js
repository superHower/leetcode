// 【跳跃游戏二】
const nums = [2,3,1,1,4];
/**
 * 想象：你在搭桥，nums[i]是木头；最少放几根木头能到对岸
 * 
 * for(nums[i])   
 *    更新 放木头后的位置 ->  if(到达 当前木头的位置) 就更新当前位置 并放木头
 * 
 */
console.log(jump(nums)); // 2
function jump(nums) {
    let step = 0;
    let cur = 0   // 当前木头的位置
    let after = 0 // 放木头后的位置
    for (let i = 0; i < nums.length - 1; i++) {
        after = Math.max(after, i + nums[i]);// 在此 放木头后 的位置

        if (i === cur) { // 到达 当前木头的位置
            cur = after; // 放木头，搭桥
            step++;
        }
    }
    return step;
};