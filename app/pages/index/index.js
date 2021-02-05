import network from '/util/network';
Page({
  data: {
    department: [],
    errMsg: "",
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '来测试一下',
      desc: '测试用小程序',
      path: 'pages/index/index',
    };
  },
  getDepartment() {
    console.log("获取部门按钮")
    network.getDepartment().then(r => {
      console.log(r.data)
      this.setData({
        department: r.data.department
      })
    }).catch(err => {
      console.log(err)
      content: JSON.stringify(err)
    })
  }
});
