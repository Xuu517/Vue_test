<template>
<div class="demo"> 
     <h2>{{schoolName}}</h2>
    <h2>{{address}}</h2>
    </div>
</template>
<script>
// 组件交互相关代码
  export default ({
   // eslint-disable-next-line vue/multi-word-component-names
   name:'School',
    // el:'#root',//组件定义时，一定不要写el配置项，因为最终所有组件都要被一个vm管理，由vm决定服务于那个容器
    data() {
      return {
        schoolName: '希望小学',
        address: '北京朝阳',
      }
    },
    methods:{
      showX(){
        console.log(this.x)
      }
    }
  })
</script>
<style>
/* 组件样式 */
.demo{
  background-color: orange;
}
</style>