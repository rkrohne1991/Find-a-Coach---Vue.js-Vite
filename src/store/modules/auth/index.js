import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const authModule = {
  state() {
    return { userId: "c3" };
  },
  mutations,
  actions,
  getters,
};

export default authModule;
