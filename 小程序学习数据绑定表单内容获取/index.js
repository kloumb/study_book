//index.js
//获取应用实例
const app = getApp()
const initData = '这是一个测试';
const extraLine = [];

Page({
  data : {
    temp: '4',
    low: '-1C',
    high:'10C',
    type:'晴',
    city:'北京',
    week:'星期二',
    weather:'无持续风行 微风级',
    count:10,
    text:initData,
    imgUrls: [
      '../../images/11.jpg',
      '../../images/12.jpg',
      '../../images/13.jpg',
      '../../images/14.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true
  },
  add(e){
    extraLine.push('加入数据');
    console.log(e.detail);
    console.log(e);
    this.setData({
      text : initData+'\n'+extraLine.join('\n')
    });
  },
  remove(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },
  formSubmit(e) {
    console.log(e);
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
})
