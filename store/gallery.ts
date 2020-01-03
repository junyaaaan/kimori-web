import { GetterTree, MutationTree } from 'vuex'
import { gallerys } from '~/assets/data/gallerys.json'

interface State {
  gallerys: {
    id: number
    title: string
    tag: string[]
    date: string
    text: string
  }[]
  currentGenre:string
}

export const state = ():State => ({
  gallerys,
  currentGenre: 'ALL'
})

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  tagList(state) {
    let result: string[] = []

    state.gallerys.forEach((val) => {
      result = [...result, ...val.tag]
    })

    result = Array.from(new Set(result))

    return result
  },

  all(state) {
    return state.gallerys
  },

  refineGenre(state) {
    if(state.currentGenre === 'ALL')
      return state.gallerys

    return state.gallerys.filter((val) => {
      return val.tag.includes(state.currentGenre)
    })
  }
}

export const mutations: MutationTree<State> = {
  changeCurrentGenre(state, genre: string) {
    state.currentGenre = genre
  }
}
