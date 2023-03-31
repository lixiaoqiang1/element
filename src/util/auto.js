/**
* 将防抖函数封装到公共js代码里
* 这里涉及到闭包的相关内容，闭包内容自行百度
*/
 // 防抖
export function debouce(func, delay = 100) {
    let timer = null;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.call(this, ...args);
      }, delay);
    }
  }

// 仔细想想，上面的防抖方式还是有一定的缺点。如果页面很长，我们一直在滚动页面，那_log方法就一直不会被执行。所以我们可以升级一下上述的防抖方法。
export function throttle(fn,wait,time){
    var previous = null; //记录上一次运行的时间
    var timer = null;

    return function(){
        var now = +new Date();

        if(!previous) previous = now;
        //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
        if(now - previous > time){
            clearTimeout(timer);
            fn();
            previous = now;// 执行函数后，马上记录当前时间
        }else{
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn();
            },wait);
        }
    }
}
// function _log(){
//     console.log(1)
// }
// window.onscroll = _debounce(_log,500,2000)
