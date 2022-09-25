<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <select v-model.number="n">
      <!-- 这种控制数据类型的写法很新奇 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <button @click="plusOdd">奇数相加</button>
    <button @click="plusWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Count",
  data(){
    return{
      n:1,
      sum:0
    }
  },
  methods:{
    plus(){
     this.sum+=this.n
    },
    minus(){
      this.sum-=this.n
    },
    plusOdd(){
      if(this.sum%2!=0){
        this.sum+=this.n
      }
    },
    plusWait(){
      setTimeout(() => {
        this.sum+=this.n
      }, 500);
    }
  },
  mounted(){

  }
}
</script>

<style>

</style>