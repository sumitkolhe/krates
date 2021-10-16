import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'

export type KrateState = ReturnType<typeof state>

export const state = () => ({
  allKrates: Array(),
  selectedKrate: String,
})

export const mutations: MutationTree<KrateState> = {
  setKrate: (state, newKrate) => {
    state.allKrates.unshift(newKrate)
  },
  setSelectedKrate: (state, krate) => {
    state.selectedKrate = krate
  },
}

export const actions: ActionTree<KrateState, RootState> = {
  createNewKrate: ({ commit }, krateId) => {
    const createdAt = Date.now()
    const krate = { krateId, createdAt }
    commit('setKrate', krate)
  },
}

export const getters: GetterTree<KrateState, RootState> = {
  getAllKrates: (state) => {
    return state.allKrates
  },
  getSelectedKrate: (state) => {
    return state.selectedKrate
  },
}
