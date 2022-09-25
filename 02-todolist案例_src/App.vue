<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <my-header @addOne="addTodo" />
        <my-list :todos="todos" />
        <my-footer :todos="todos" @freeTodo="freeTodo" @clearTodo="clearTodo" />
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加
    addTodo(e) {
      this.todos.unshift(e);
    },

    // 勾选
    changeCheck(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除
    delTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id != id;
      });
    },

    // 全选或者取消全选
    freeTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 此刻所有的功能已经实现但是需要简化代码
    // 清除按钮
    clearTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // 勾选
    this.$bus.$on("changeCheck", this.changeCheck),
      // 删除
    this.$bus.$on("delTodo", this.delTodo);
  },
  
  beforeDestroy() {
    this.$bus.$off("changeCheck"),
   this.$bus.$off("delTodo");
  },
};
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>