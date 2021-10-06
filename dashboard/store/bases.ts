import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { generateBaseId } from '~/utils/generateBaseId'

export type BaseState = ReturnType<typeof state>

export const state = () => ({
  allBases: Array(),
})

export const mutations: MutationTree<BaseState> = {
  setBase: (state, newBase) => {
    state.allBases.push(newBase)
  },
}

export const actions: ActionTree<BaseState, RootState> = {
  createNewBase: ({ commit }) => {
    const baseId = generateBaseId()
    const createdAt = new Date().toISOString().slice(0, 10)

    const base = { baseId, createdAt }

    commit('setBase', base)
  },
}

export const getters: GetterTree<BaseState, RootState> = {
  getAllBases: (state) => {
    return state.allBases
  },
}
