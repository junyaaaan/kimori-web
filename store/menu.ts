import { MutationTree } from 'vuex'

export const state = () => ({
  isOpen: false
})

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  toggleOpen: (state) => {
    state.isOpen = !state.isOpen
  }
}
