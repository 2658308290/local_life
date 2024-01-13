const app = getApp()
Component({
  properties: {
  },
  data: {
          height:''
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.navBarHeight
    })
    console.log(app.globalData);
  },
  ready: function () {
    // 定义导航栏的高度   方便对齐
   
  },
  methods: {
   
  }
})
