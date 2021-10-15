import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'

export type BaseState = ReturnType<typeof state>

export const state = () => ({
  allBases: Array(),
  selectedBase: String,
})

export const mutations: MutationTree<BaseState> = {
  setBase: (state, newBase) => {
    state.allBases.unshift(newBase)
  },
  setSelectedBase: (state, base) => {
    state.selectedBase = base
  },
}

export const actions: ActionTree<BaseState, RootState> = {
  createNewBase: ({ commit }, baseId) => {
    //  const baseId = generateBaseId()
    const createdAt = Date.now()
    const base = { baseId, createdAt }
    commit('setBase', base)
  },
}

export const getters: GetterTree<BaseState, RootState> = {
  getAllBases: (state) => {
    return state.allBases
  },
  getSelectedBase: (state) => {
    return state.selectedBase
  },
}
