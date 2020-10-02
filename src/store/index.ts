import { createStore } from 'vuex'

import { todos } from './modules'

export default createStore({
  modules: { todos },
})
