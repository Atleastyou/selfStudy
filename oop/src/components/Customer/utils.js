const getCustomer = (value, data, field) => {
  let result = null
  for (let i = 0; i < data.length; i ++) {
    let item = data[i]
    let condition = field === 'name'
                  ? item.name.toLowerCase().includes(value.toLowerCase())
                  : item.id === value
    if (condition) {
      result = item
      if (result) return result
    }
    if (item.children && item.children.length) {
      result = getCustomer(value, item.children, field)
      if (result) return result
    }
  }
}

export {
  getCustomer
}