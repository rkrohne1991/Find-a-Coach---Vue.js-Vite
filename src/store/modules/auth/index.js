import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const authModule = {
  state() {
    return { token: null, userId: null, tokenExpiration: null };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
