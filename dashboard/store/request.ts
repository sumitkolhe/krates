import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import axios from 'axios'
import { isDev } from '~/utils/isDev'
import { axiosBase } from '~/utils/axios'

export type BaseState = ReturnType<typeof state>

export const state = () => ({
  responsePayload: undefined,
})

export const mutations: MutationTree<BaseState> = {
  setResponsePayload: (state, response) => {
    state.responsePayload = response
  },
}

export const actions: ActionTree<BaseState, RootState> = {
  getBaseData: async ({ commit }, { url, query }) => {
    const response = await axiosBase.get(`${url}`)
    commit('setResponsePayload', response.data)
  },
  setBaseData: async ({ commit }, { baseId, payload }) => {
    const response = await axiosBase.post(baseId, payload)
    commit('setResponsePayload', response.data)
  },
  putBaseData: async ({ commit }, baseId) => {
    const response = await axiosBase.get(`http://localhost:4000/${baseId}`)
    commit('setResponsePayload', response)
  },
  patchBaseData: async ({ commit }, baseId) => {
    const response = await axiosBase.get(`http://localhost:4000/${baseId}`)
    commit('setResponsePayload', response)
  },
  deleteBaseData: async ({ commit }, baseId) => {
    const response = await axiosBase.get(`http://localhost:4000/${baseId}`)
    commit('setResponsePayload', response)
  },
  getHealth: async () => {
    const response = await axiosBase.get('/health')
    return response
  },
}

export const getters: GetterTree<BaseState, RootState> = {
  getResponsePayload: (state) => {
    return state.responsePayload
  },
}
