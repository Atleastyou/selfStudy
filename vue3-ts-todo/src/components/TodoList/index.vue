<template>
  <div>
    <todo-item
      v-for="item in todoList"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { ITodo } from '@/typings';
import TodoItem from './item.vue'
const props = defineProps<{
  todoList: ITodo[]
}>()
</script>

<style scoped>

</style>