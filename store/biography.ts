import { GetterTree } from 'vuex'
import { biographys } from '~/assets/data/biography.json'

export const state = () => ({
  biographys
})

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  all: (state) => state.biographys,
  two: (state) => state.biographys.slice(0, 2)
}
