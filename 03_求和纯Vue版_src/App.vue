<template>
  <div id="root">
    <Count/>
  </div>
</template>

<script>
import Count from "./components/Count"
// 这种错误直接去掉后缀名,不能再忘记了
export default {
  name:"App",
  components:{
    Count
  }
}
</script>

<style>

</style>