import { createStore } from "vuex";

import userModule from "./users";

const store = createStore({
  // state: {
  // },

  // },
  modules: { userModule },
});

export default store;
