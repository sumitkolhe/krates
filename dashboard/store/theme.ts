import { MutationTree, GetterTree } from 'vuex'
import { RootState } from '~/store'
import GeistUI from '@geist-ui/vue'

export type ThemeState = ReturnType<typeof state>

export const state = () => ({
  theme: 'Light Theme',
  renderKey: 0,
})

export const mutations: MutationTree<ThemeState> = {
  setTheme: (state) => {
    if (state.theme === 'Light Theme') {
      GeistUI.theme.enableDark()
      state.theme = 'Dark Theme'
    } else {
      GeistUI.theme.enableLight()
      state.theme === 'Light Theme'
    }

    localStorage.setItem('theme', JSON.stringify(state.theme))
  },

  initTheme: (state) => {
    state.theme = JSON.parse(localStorage.getItem('theme')!) || 'Light Theme'
    if (state.theme === 'Light Theme') GeistUI.theme.enableLight()
    else {
      GeistUI.theme.enableDark()
    }
  },
}

export const getters: GetterTree<ThemeState, RootState> = {
  getTheme: (state) => {
    return state.theme
  },
}
