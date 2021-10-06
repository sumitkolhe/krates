import { MutationTree, GetterTree } from 'vuex'
import { RootState } from '~/store'
import GeistUI from '@geist-ui/vue'

export type ThemeState = ReturnType<typeof state>

export const state = () => ({
  isDark: false,
})

export const mutations: MutationTree<ThemeState> = {
  setTheme: (state) => {
    if (state.isDark) {
      state.isDark = !state.isDark
      GeistUI.theme.enableLight()
    } else {
      state.isDark = !state.isDark
      GeistUI.theme.enableDark()
    }

    localStorage.setItem('isDark', JSON.stringify(state.isDark))
  },

  initTheme: (state) => {
    state.isDark = JSON.parse(localStorage.getItem('isDark')!) || false
    if (state.isDark) GeistUI.theme.enableDark()
    else {
      GeistUI.theme.enableLight()
    }
  },
}

export const getters: GetterTree<ThemeState, RootState> = {
  getTheme: (state) => {
    return state.isDark
  },
}
