import { IState, ITodo, TODO_STATUS } from '@/typings';
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS } from './actionTypes';
export default {
  [SET_TODO](state: IState, todo: ITodo): void {
    state.list.unshift(todo);
  },
  [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
    state.list = todoList
  },
  [REMOVE_TODO](state: IState, id: number): void {
    state.list = state.list.filter(item => item.id !== id)
  },
  [SET_STATUS](state: IState, id: number): void {
    state.list = state.list.map(item => {
      if (item.id === id) {
        item.status = TODO_STATUS.FINISHED
      }
      return item
    })
  }
}