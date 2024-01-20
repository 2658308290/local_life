// components/todo/todo.js
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
    list:[{index:2,checked:true,content:'读十页书'},{index:3,checked:true,content:'看两个视频'},{index:4,checked:false,content:'画一幅画'}]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change_content(){
      console.log('唤醒编辑框');
    }
  }
})