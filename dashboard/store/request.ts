import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { axiosBase } from '~/utils/axios'

export type RequestState = ReturnType<typeof state>

export const state = () => ({
  health: true,
  responsePayload: undefined,
  requestPayload: Object() || Array(),
  krateStats: Object(),
})

export const mutations: MutationTree<RequestState> = {
  setResponsePayload: (state, response) => {
    state.responsePayload = response
  },

  setKrateStats: (state, response) => {
    state.krateStats = response
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

  putKrateData: async ({ commit }, { requestUrl, payload }) => {
    await axiosBase.put(requestUrl, payload).then((response) => {
      commit('setResponsePayload', response.data)
    })
  },

  deleteKrateData: async ({ commit }, { requestUrl }) => {
    await axiosBase.delete(requestUrl).then((response) => {
      commit('setResponsePayload', response.data)

      if (requestUrl.length === 20 && !requestUrl.includes('query'))
        commit('krates/deleteKrate', requestUrl, { root: true })
    })
  },

  getKrateStats: async ({ commit }, krateId) => {
    await axiosBase.get('meta/' + krateId).then((response) => {
      commit('setKrateStats', response.data)
    })
  },

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

  getKrateStats: (state) => {
    return state.krateStats
  },
}
