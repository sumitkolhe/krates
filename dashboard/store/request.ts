import { MutationTree, GetterTree, ActionTree } from 'vuex'
import { RootState } from '~/store'
import { axiosBase } from '~/utils/axios'

export type KrateState = ReturnType<typeof state>

export const state = () => ({
  responsePayload: undefined,
  requestPayload: Object() || Array(),
  requestUrl: '',
  requestParams: {
    collectionId: '',
    filter: '',
    limit: '',
    skip: '',
  },
})

export const mutations: MutationTree<KrateState> = {
  setResponsePayload: (state, response) => {
    state.responsePayload = response
  },

  setRequestParams: (state, { collectionId, filter, limit, skip }) => {
    console.log(collectionId, limit, skip, filter)
    state.requestParams = {
      collectionId: collectionId ? collectionId : '',
      filter: filter ? filter : '',
      limit: limit ? limit : '',
      skip: skip ? skip : '',
    }
  },
  setRequestUrl: (state, requestUrl) => {
    state.requestUrl =
      state.requestParams.collectionId +
      state.requestParams.filter +
      state.requestParams.limit +
      state.requestParams.skip
  },
}

export const actions: ActionTree<KrateState, RootState> = {
  getKrateData: async ({ commit, state }) => {
    console.log(state.requestUrl)
    const response = await axiosBase.get(state.requestUrl)
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
  getRequestParams: (state) => {
    return state.requestParams
  },
}
