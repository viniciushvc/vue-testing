import { MutationTree } from 'vuex'
import { MutationsType, StateType } from './types'

const mutations: MutationTree<StateType> = {
  [MutationsType.SET_TODO](state: StateType, payload: Todo) {
    state.todos.push(payload)
  },
}

export default mutations
