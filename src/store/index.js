import { createStore } from "vuex";

import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

import coachesModule from "./modules/coaches";
import requestsModule from "./modules/requests";
import authModule from "./modules/auth";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
  mutations,
  actions,
  getters,
});

export default store;
