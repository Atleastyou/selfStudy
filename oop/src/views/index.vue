<template>
  <input type="text" placeholder="输入ID,NAME搜索" @input="search($event.target.value)">
  <div>
    <p>{{searchedData.name}}</p>
  </div>
  <ul>
    <customer :data="data" @set-age="setAge"></customer>
  </ul>
</template>

<script setup>
import { getMaterialCategory } from '@/assets/api/index'
import { customerData } from "../utils/data"
import { toRefs, onMounted } from 'vue'
import { Customer, Customers } from '../components/Customer/index'

const customers = new Customers({
  searchedData: {},
  data: customerData
})

const { data, searchedData } = toRefs(customers.state)
const { setAge, search } = customers


// const state = reactive({
//   searchedData: {},
//   data: customerData
// })
// const setAge = (id, age) => {
//   let item = getCustomer(id, state.data, 'id')
//   item.age = age
// }

// const getCustomer = (value, data, field) => {
//   let result = null
//   for (let i = 0; i < data.length; i ++) {
//     let item = data[i]
//     let condition = field === 'name'
//                   ? item.name.toLowerCase().includes(value.toLowerCase())
//                   : item.id === value
//     if (condition) {
//       result = item
//       if (result) return result
//     }
//     if (item.children && item.children.length) {
//       result = getCustomer(value, item.children, field)
//       if (result) return result
//     }
//   }
// }

// const searchData = (value) => {
//   if (!isNaN(Number(value))) {
//     state.searchedData = getCustomer(Number(value), state.data, 'id') || {}
//     return
//   }
//   state.searchedData = getCustomer(value, state.data, 'name') || {}
// }
</script>

<style lang="scss" scoped>

</style>