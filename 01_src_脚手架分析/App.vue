<template>
<div>
<school></school>
<student></student>
 </div> 
</template>

<script>
// 引入组件
import school from './components/school.vue'
import student from "./components/student.vue"
export default {
 name:'App',
 components:{
   school,
   student
 }
}
</script>

<style>

</style>