import { reactive } from "vue";
import { getCustomer } from './utils'

export default class Customers {
  constructor ({data, searchedData}) {
    this.state = reactive({
      data,
      searchedData
    })
  }

  get searchedData () {
    return this.state.searchedData
  }

  set searchedData (newValue) {
    this.state.searchedData = newValue
  }

  get data () {
    return this.state.data
  }

  setAge = (id, age) => {
    let item = getCustomer(id, this.data, 'id')
    item.age = age
  }
  search = (value) => {
    if (!isNaN(Number(value))) {
      this.searchedData = getCustomer(Number(value), this.data, 'id') || {}
      return
    }
    this.searchedData = getCustomer(value, this.data, 'name') || {}
  }
}