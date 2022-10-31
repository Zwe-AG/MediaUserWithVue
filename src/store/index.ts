import { createStore } from 'vuex'

export default createStore({
  state: {
    users : {},
    token : ""
  },
  getters : {
    getToken : state => state.token,
    getUser : state => state.users
  },
  mutations: {
  },
  actions: {
    setToken : ({state},value) => state.token =  value,
    setUserData : ({state},value) => state.users = value
  },
  modules: {
  }
})
