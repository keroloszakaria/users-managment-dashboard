import { createStore } from "vuex";

import userModule from "./users";

const store = createStore({
  state: {
    isAuth: JSON.parse(localStorage.getItem("isAuth")),
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value;
    },
  },

  modules: { userModule },
});

export default store;
