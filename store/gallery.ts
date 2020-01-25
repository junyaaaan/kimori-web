import { GetterTree, MutationTree } from 'vuex'
import { gallerys } from '~/assets/data/gallerys.json'

interface Gallery {
  id: number
  title: string
  tag: string[]
  date: string
  text: string
}

interface State {
  gallerys: Gallery[]
  currentGenre: string
  pageNum: number
  limit: 20
}

export const state = (): State => ({
  gallerys,
  currentGenre: 'ALL',
  pageNum: 1,
  limit: 20,
})

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  // 作品のタグのリストを生成
  tagList(state) {
    let result: string[] = []

    state.gallerys.forEach((val) => {
      result = [...result, ...val.tag]
    })

    result = Array.from(new Set(result))

    return result
  },

  // 全ジャンルの作品リスト
  all(state) {
    return state.gallerys
  },

  // 選択されているジャンルの作品リスト
  refineGenre(state, getters) {
    if (state.currentGenre === 'ALL')
      return state.gallerys.slice(getters.startItem, getters.endItem)

    return state.gallerys.filter((val) => {
      return val.tag.includes(state.currentGenre)
    })
      .slice(getters.startItem, getters.endItem)
  },

  // ページ数に対応した作品の開始インデックス
  startItem(state) {
    return state.limit * (state.pageNum - 1)
  },

  // ページ数に対応した作品の終了インデックス
  endItem(state, getters) {
    return getters.startItem + state.limit
  },

  // 選択したジャンルの最大ページ数
  totalPageNum(state) {
    const currentGallerys = state.gallerys.filter(val => {
      if (state.currentGenre === 'ALL')
        return true

      return val.tag.includes(state.currentGenre)
    })

    return Math.ceil(currentGallerys.length / state.limit)
  }
}

export const mutations: MutationTree<State> = {
  // ジャンル変更
  changeCurrentGenre(state, genre: string) {
    state.currentGenre = genre
  },

  // ページ数変更
  changePageNum(state, num: number) {
    state.pageNum = num
  },
}