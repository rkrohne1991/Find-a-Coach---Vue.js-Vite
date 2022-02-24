import { createStore } from "vuex";

import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

import coachesModule from "./modules/coaches";
import requestsModule from "./modules/requests";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {};
  },
  mutations,
  actions,
  getters,
});

export default store;
