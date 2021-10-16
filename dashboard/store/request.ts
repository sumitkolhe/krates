import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { axiosBase } from '~/utils/axios'

export type KrateState = ReturnType<typeof state>

export const state = () => ({
  responsePayload: undefined,
})

export const mutations: MutationTree<KrateState> = {
  setResponsePayload: (state, response) => {
    state.responsePayload = response
  },
}

export const actions: ActionTree<KrateState, RootState> = {
  getKrateData: async ({ commit }, { url, query }) => {
    const response = await axiosBase.get(`${url}`)
    commit('setResponsePayload', response.data)
  },
  setKrateData: async ({ commit }, { krateId, payload }) => {
    const response = await axiosBase.post(krateId, payload)
    commit('setResponsePayload', response.data)
  },
  putKrateData: async ({ commit }, krateId) => {
    const response = await axiosBase.get(`http://localhost:4000/${krateId}`)
    commit('setResponsePayload', response)
  },
  patchKrateData: async ({ commit }, krateId) => {
    const response = await axiosBase.get(`http://localhost:4000/${krateId}`)
    commit('setResponsePayload', response)
  },
  deleteKrateData: async ({ commit }, krateId) => {
    const response = await axiosBase.get(`http://localhost:4000/${krateId}`)
    commit('setResponsePayload', response)
  },
  getHealth: async () => {
    const response = await axiosBase.get('/health')
    return response
  },
}

export const getters: GetterTree<KrateState, RootState> = {
  getResponsePayload: (state) => {
    return state.responsePayload
  },
}
