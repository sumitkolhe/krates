import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { generateBaseId } from '~/utils/generateBaseId'

export type BaseState = ReturnType<typeof state>

export const state = () => ({
  allBases: Array(),
})

export const mutations: MutationTree<BaseState> = {
  setBase: (state, newBase) => {
    state.allBases.unshift(newBase)
  },
}

export const actions: ActionTree<BaseState, RootState> = {
  createNewBase: ({ commit }) => {
    const baseId = generateBaseId()
    const createdAt = Date.now()

    const base = { baseId, createdAt }

    commit('setBase', base)
  },
}

export const getters: GetterTree<BaseState, RootState> = {
  getAllBases: (state) => {
    return state.allBases
  },
}
