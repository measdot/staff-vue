const state = {count: 25}
const mutations = { increment (state) { state.count++ } }
const actions = { counter: state => state.count }

export default {
  state,
  mutations,
  actions
}
