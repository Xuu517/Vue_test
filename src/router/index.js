// 改文件专门用于创建整个应用的路由器
import VueRouter from "vue-router"

// 引入组件
import MyAbout from "../Pages/MyAbout"
import MyHome from "../Pages/MyHome"


// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:MyAbout
    },
    {
      path:'/home',
      component:MyHome
    }
  ]
})