
// const settingsRepository = RepositoryFactory.get('settings');

const initialState = () => ({
  userId: ""
});

const state = initialState;

const getters = {
  // settings: store => store.settings,
};

//5/ 6. mutations allow to mutate our state
const mutations = {
  SET_USER_ID(store, userId) {
    store.userId = userId;
  }
};

//15/ 7. actions keep our business logic and can perform API calls
const actions = {
  setUserId(context, id) {
    context.commit("SET_USER_ID", id);
  }
//   async getSettings(context) {
//     const res = await settingsRepository.get();
//
//     context.commit('SET_SETTINGS', res);
//
//     return res;
//   },
//   async updateSettings(context, payload) {
//     const res = await settingsRepository.update(payload);
//
//     context.commit('SET_SETTINGS', res);
//
//     return res;
//   },
};

//7/ 8. At the end we export everything as our namespaced module
export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
};