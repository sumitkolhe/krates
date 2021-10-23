import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { state as krateState } from '~/store/krates'
import { axiosBase } from '~/utils/axios'

export type RequestState = ReturnType<typeof state>

export const state = () => ({
  responsePayload: undefined,
  requestPayload: Object() || Array(),
})

export const mutations: MutationTree<RequestState> = {
  setResponsePayload: (state, response) => {
    state.responsePayload = response
  },
}

export const actions: ActionTree<RequestState, RootState> = {
  getKrateData: async ({ commit }, requestUrl) => {
    await axiosBase.get(requestUrl).then((response) => {
      commit('setResponsePayload', response.data)
    })
  },
  setKrateData: async ({ commit }, { requestUrl, payload }) => {
    const response = await axiosBase
      .post(requestUrl, payload)
      .then((response) => {
        commit('setResponsePayload', response.data)
      })
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

export const getters: GetterTree<RequestState, RootState> = {
  getResponsePayload: (state) => {
    return state.responsePayload
  },
}
