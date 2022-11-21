<template>
  <div>
    <input
      type="checkbox"
      :checked="item.status === FINISHED"
      @change="setTodoStatus"
    />
    <span>{{ item.content }}</span>
    <button @click="removeItem">删除</button>
  </div>
</template>

<script setup lang="ts">
import { IUseTodo, useTodo } from '@/hooks';
import { ITodo, TODO_STATUS } from '@/typings';

const props = defineProps<{
  item: ITodo
}>()
const { FINISHED } = TODO_STATUS
const { removeTodo, setStatus }: IUseTodo = useTodo()

const setTodoStatus = () => {
  setStatus(props.item.id)
}

const removeItem = () => {
  removeTodo(props.item.id)
}
</script>

<style scoped>

</style>