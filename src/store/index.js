const DEFAULT_NAV_WIDTH = 240;
export const state = () => ({
  navWidth: DEFAULT_NAV_WIDTH,
});

export const mutations = {
  setNavWidth(state, { navWidth }) {
    state.navWidth = navWidth;
  },
};

export const actions = {
  updateNavWidth({ commit }, navWidth) {
    commit('setNavWidth', { navWidth });
  },
  resetNavWidth({ commit }) {
    commit('setNavWidth', { navWidth: DEFAULT_NAV_WIDTH });
  },
};
