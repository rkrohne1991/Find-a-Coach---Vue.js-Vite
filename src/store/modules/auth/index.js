import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const authModule = {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
