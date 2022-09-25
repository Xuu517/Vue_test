<template>
  <div class="todo-footer">
        <label>
          <input type="checkbox" 
          v-model="todoEql"
          />
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clear" >清除已完成任务</button>
      </div>
</template>

<script>
export default {
  props:["todos"],
  name:"MyFooter",
  
  computed:{
   doneTotal()
   {
     return this.todos.filter((todo)=>
    {
      return todo.done===true
    }).length
   
  },
  total(){
    return this.todos.length
  },

  todoEql:{
    get(){
    return this.doneTotal===this.total &&this.total>0
    },
    set(value){
     this.$emit("freeTodo",value)
    }
  }
  },
  // methods:{
  //   checkAll(e){
  //   //  this.todos.forEach(todo => {
  //   //   todo.done=true
  //   //  });
  //   //  if(this.doneTotal===this.total){
  //   //   return false
  //   //  }
  //   // 不能修改props的值,所以需要在APP里面改
  
  //   this.freeTodo(e.target.checked)
  //   }
  // }
  methods:{
   clear(){
     this.$emit("clearTodo")
   }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>