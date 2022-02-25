export const mutations = {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
};
