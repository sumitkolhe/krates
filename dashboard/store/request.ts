import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { axiosBase } from '~/utils/axios'

type ToastOption = {
  text: string
  action: string
  type: 'success' | 'warning' | 'warning'
  duration: number
  handler: Function
}

export type RequestState = ReturnType<typeof state>

export const state = () => ({
  health: true,
  responsePayload: undefined,
  requestPayload: Object() || Array(),
})

export const mutations: MutationTree<RequestState> = {
  setResponsePayload: (state, response) => {
    state.responsePayload = response
  },

  setHealth: (state, health) => {
    state.health = health
  },
}

export const actions: ActionTree<RequestState, RootState> = {
  getKrateData: async ({ commit }, requestUrl) => {
    await axiosBase.get(requestUrl).then((response) => {
      commit('setResponsePayload', response.data)
    })
  },
  setKrateData: async ({ commit }, { requestUrl, payload }) => {
    await axiosBase.post(requestUrl, payload).then((response) => {
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

  getKrateStats: async () => {},

  getHealthStatus: async ({ commit }) => {
    await axiosBase
      .get('/health')
      .then((response) => {
        commit('setHealth', true)
      })
      .catch((error) => {
        commit('setHealth', false)
      })
  },
}

export const getters: GetterTree<RequestState, RootState> = {
  getResponsePayload: (state) => {
    return state.responsePayload
  },
  getHealthStatus: (state) => {
    return state.health
  },
}
