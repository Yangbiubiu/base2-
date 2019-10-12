// pages/event/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 初始一个页面中的数据
    msg: '我是小程序中初始的数据'
  },
// 2. 定义事件回调函数(小程序中事件的回调无需methods而是直接定义！！)
  // 给回调函数传参可以获得事件对象event/e/ev/自定名
  clicked: function (ev) {
    console.log('点击了...');

/*
console.log(ev);// 事件对象e/ev

console.log(ev.target.dataset.role);通过ev.target可以获得wxml中的自定义属性
否则js 无法与 wxml 通信！！！
*/
   
// this.msg = '改变后的数据！！！';// 语法错误 undefind
console.log(this.data.msg);// 获取初始数据
this.data.msg = '改变后的数据！！！'; //无法更改初始数据
  
/*
要改变小程序中的初始数据，只能通过 setData 这个方法
setData 是实现数据绑定的重要方法, 
setData 是小程序提供方法，接受一个对象做为参数
*/
this.setData({
  msg: '改变后的数据！！！'
})
    
 
  },
  in:function () {
    console.log('获得了焦点...');
  },
  out: function () {
    console.log('失去了焦点...');
  },
  parent: function () {
    console.log('父盒子点击了...')
  },

  child: function () {
    console.log('子盒子点击了...')
  },
  // 3. onLoad是小程序的生命周期 类似vue中的created
  // 当页面加载完毕时触发执行的回调函数 自动执行

  onLoad: function () {
    console.log('页面加载了...');

    // 页面一刷新会自动在 页面(自动)加载时触发 渲染页面
    this.setData({
      msg:'页面加载时，改变了数据...'
    })
  }
})