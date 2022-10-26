import request from '@/utils/axios'
const directory = '/api'
/**
 * @description: 获取所有下拉值
 */ 
const getMaterialCategory = (params) => request.post(`${directory}/IndexHomeProcess/getMaterialCategory`, params)

export {
  getMaterialCategory
}