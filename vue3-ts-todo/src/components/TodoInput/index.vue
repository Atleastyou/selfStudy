<template>
  <div>
    <input
      type="text"
      v-model="todoValue"
      @keyup="setTodoValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IUseTodo, useTodo } from '@/hooks' 
const todoValue = ref<string>('')
const { setTodo }: IUseTodo = useTodo()
const setTodoValue = (e: KeyboardEvent) => {
  if (e.keyCode === 13 && todoValue.value.trim().length) {
    setTodo(todoValue.value)
    todoValue.value = ''
  }
}
</script>

<style scoped>

</style>