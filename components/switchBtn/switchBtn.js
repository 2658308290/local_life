// components/switchBtn/switchBtn.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

        today:'today'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    change_today(item){
      console.log(item.currentTarget.dataset.today);
      this.setData({
        today:item.currentTarget.dataset.today
      })
    }
  }
})