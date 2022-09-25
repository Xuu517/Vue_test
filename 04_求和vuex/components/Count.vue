<template>
  <div>
    <h1>当前求和为{{$store.state.sum}}</h1>
    <h2>放大十倍后的数:{{$store.getters.bigSum}}</h2>
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
    }
  },
  methods:{
    plus(){
    this.$store.commit("JIA",this.n)

    },
    minus(){
     this.$store.commit("JIAN",this.n)
    },
    plusOdd(){
   this.$store.dispatch("jiaOdd",this.n)
    },
    plusWait(){
    this.$store.commit("jiaWait",this.n)
  },
  mounted(){

  }
  }
}
</script>

<style>
</style>