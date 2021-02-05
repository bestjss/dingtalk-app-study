App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  onError(options){
    console.info('Error info')
  },
  globalData:{
    description:"全局的小程序描述"
  }
});
