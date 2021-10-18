import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name: 'André Felipe',
      email: 'andre.savedra@senaisp.edu.br'
    }
  },
  mutations: {

    registerUser(state, payload){
      state.user.name = payload;
      console.log("Nome alterado!");
    }
  },
  actions: {
  },
  modules: {
  }
})
