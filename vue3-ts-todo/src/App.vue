<template>
  <div class="warpper">
    <todo-input />
    <todo-list :todoList="todoList" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { Store, useStore } from 'vuex';
import TodoInput from './components/TodoInput/index.vue'
import TodoList from './components/TodoList/index.vue'
import { IUseTodo, useTodo } from './hooks';
const { setTodoList }: IUseTodo = useTodo();
const store: Store<any> = useStore();
const todoList = computed(() => store.state.list)
onMounted(() => {
  setTodoList()
})
</script>

<style scoped>

</style>