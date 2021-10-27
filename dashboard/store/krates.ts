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

  deleteKrate: (state, krateId) => {
    state.allKrates = state.allKrates.filter((item) => {
      return item.krateId !== krateId
    })
  },
}

export const actions: ActionTree<KrateState, RootState> = {
  createNewKrate: ({ commit }, { krateId, krateName }) => {
    const createdAt = Date.now()
    const krate = { krateId, krateName, createdAt }
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
