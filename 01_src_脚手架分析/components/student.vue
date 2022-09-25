<template>  
<div>
      <h2>{{studentName}}</h2>
      <h2>{{age}}</h2>
    </div>
 
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
    // el:'#root',//组件定义时，一定不要写el配置项，因为最终所有组件都要被一个vm管理，由vm决定服务于那个容器
    data() {
      return {
        studentName: '朱朝阳',
        age: 19
      }
    }

}
</script>

<style lang="" scoped>
  
</style>