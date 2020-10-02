import { ActionTree } from 'vuex'
import { ActionsType, MutationsType, StateType } from './types'

const actions: ActionTree<StateType, StateType> = {
  [ActionsType.ADD_TODO]: ({ commit }: any, payload: Todo) => {
    commit(MutationsType.SET_TODO, payload)
  },
}

export default actions
