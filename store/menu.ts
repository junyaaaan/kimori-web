interface State {
  isOpen: boolean
}

export const state = () => ({
  isOpen: false
})

export const mutations = {
  toggleOpen(state: State) {
    state.isOpen = !state.isOpen
  }
}
