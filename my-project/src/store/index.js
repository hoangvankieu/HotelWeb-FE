import { createStore } from 'vuex';

export default createStore({
  state: {user: null},
  mutations: {
    setUser(state, user) {
        state.user = user;
      },
      clearUser(state) {
        state.user = null;
      },
  },
  actions: {
    login({ commit }, user) {
        commit('setUser', user);
      },
      logout({ commit }) {
        commit('clearUser');
      },
  },
  getters: {
    isLoggedIn(state) {
      // Kiểm tra xem người dùng đã đăng nhập hay chưa
      return state.user !== null;
    },
    currentUser(state) {
      // Trả về thông tin người dùng hiện tại
      return state.user;
    },
  },
});



