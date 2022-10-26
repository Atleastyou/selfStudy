<template>
  <div>

  </div>
</template>

<script setup>
import { getMaterialCategory } from '@/assets/api'
import { onMounted } from 'vue'
const getList = () => {
  getMaterialCategory()
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>

</style>