Page({
  data: {
    title: "计算加法",
    value: '?',
    first: '?',
    second: '?'
  },
  onLoad() {
    this.data.first = this.random(1, 100),
      this.data.second = this.random(1, 100)
  },
  changeRange() {
    this.setData({
      value: this.data.first + this.data.second
    })
  },
  changeText() {

    this.setData({
      first: this.random(1, 100),
      second: this.random(1, 100),
      value: '?'
    })
  },
  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
