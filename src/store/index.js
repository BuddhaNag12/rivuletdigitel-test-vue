import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from '../router/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    AllPosts: [],
    localPosts: [{ title: "random", body: "randombody", userId: "12" }],
    isAdded: null,
    loading: false,
    error: "",
  },
  mutations: {
    userLogin: (state, payload) => {
      state.user = payload;
    },
    setPosts: (state, payload) => {
      state.AllPosts = payload;
    },
    setLocalPost: (state, payload) => {
      state.localPosts.push(payload)
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setIsAdded: (state, payload) => {
      state.isAdded = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    deletePost: (state, index) => {
      state.localPosts.splice(index, 1);
    },
  },
  actions: {
    userLoginAction: ({ commit }, payload) => {
      commit("userLogin", payload);
    },
    userLogout: ({ commit }) => {
      commit("userLogin", null);
    },
    createPost: ({ commit }, payload) => {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLocalPost", payload);
        commit("setLoading", false);
      }, 3000);
    },
    deletePost: ({ commit }, index) => {
      commit("setLoading", true);
      setTimeout(() => {
        commit("deletePost", index);
        commit("setLoading", false);
      }, 200);
    },

    logOut: ({ commit },context) => {
      commit("userLogin", null);
      router.replace('/auth')
    },

    getAllPosts: ({ commit }) => {
      commit("setLoading", true);
      axios("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          commit("setPosts", res.data);
          commit("setLoading", false);
        })
        .catch((e) => {
          commit("setLoading", false);
          commit("setError", true);
        });
    },
  },

  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.user != null,
    getAllPosts: (state) => state.AllPosts,
    added: (state) => state.isAdded,
    isLoading: (state) => state.loading,
    getLocalPosts: (state) => state.localPosts,
  },
  // modules: {},
});
