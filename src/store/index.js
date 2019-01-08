/* eslint-disable */

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_TOKEN: localStorage.getItem('apiToken') || null,
    USERNAME: localStorage.getItem('username') || null
  },
  mutations: {
    setApiToken(state, apiToken) {
      state.API_TOKEN = apiToken;
      localStorage.setItem('apiToken', apiToken);
    },
    setUser(state, user) {
      state.USERNAME = user;
      localStorage.setItem('username', user.fullname);
    }
  },
  actions: {
    setApiToken(context, apiToken) {
      context.commit('setApiToken', apiToken);
    },
    setUser(context, user) {
      context.commit('setUser', user);
    }
  }
});
