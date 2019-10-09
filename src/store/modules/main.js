import api from '@/api'
import { errorLogger } from '@/util.js';

const state = {
    infoList: {
    },
    videoList: {
    }

};

// getters
const getters = {

};

const actions = {
    async getInfo({ commit }, params) {

        await api
          .getInfo(params)
          .then(data => {
            console.log(data);
            if (data) {
              commit("getInfo", data);
            }
          })
          .catch(err => {
            errorLogger(err, "actions: getInfo");
          });
    },
    async getVideoList({ commit }, params) {

        await api.getVideoList(params).then(data => {

            if (data) {
                commit('getVideoList', data);
            }
        }).catch(err => {
            errorLogger(err, 'actions: getVideoList');
        });
    },
};

const mutations = {
    getInfo(state, payload) {
        state.infoList = payload;
    },
    getVideoList(state, payload) {
        state.videoList = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}