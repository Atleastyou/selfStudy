<template>
  <li
    v-for="item of data"
    :key="item.id"
  >
    <p>ID: {{item.id}}</p>
    <p>NAME: {{item.name}}</p>
    <p>
      <span>{{item.age}}</span>
      <span>
        <input type="number" :value="item.age" @input="setAge(item.id, $event.target.value)" />
      </span>
    </p>
    <ul v-if="item.children">
      <customer :data="item.children" @set-age="setAge"></customer>
    </ul>
  </li>
</template>
/**
通过ID,NAME搜索
改变age

*/
<script setup>
  const props = defineProps({
    data: Array
  })
  const emit = defineEmits([
    'setAge'
  ])
  const setAge = (id, age) => {
    emit('setAge', id, age)
  }
</script>